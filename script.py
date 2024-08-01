import csv
import requests
from xml.etree import ElementTree as ET
import time
from rapidfuzz import fuzz

# Function to fetch IDs from PubMed API
def fetch_ids(title):
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={title}&sort=relevance"
    response = requests.get(url)
    xml_root = ET.fromstring(response.content)
    ids = [id_elem.text for id_elem in xml_root.findall(".//Id")]
    return ids[:3]  # Return top 3 IDs if available

# Function to fetch DOI and title from PubMed API using IDs
def fetch_doi_and_title(ids):
    if not ids:
        return []
    id_str = ','.join(ids)
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={id_str}"
    response = requests.get(url)
    xml_root = ET.fromstring(response.content)
    results = []
    for docsum in xml_root.findall(".//DocSum"):
        pmid = docsum.find(".//Id").text
        title = docsum.find(".//Item[@Name='Title']").text
        doi = docsum.find(".//Item[@Name='DOI']").text if docsum.find(".//Item[@Name='DOI']") is not None else None
        results.append((pmid, title, doi))
    return results

# Function to find the most similar title
def find_most_similar_title(input_title, results):
    best_match = None
    highest_score = 0
    for result in results:
        pmid, title, doi = result
        score = fuzz.ratio(input_title, title)
        if score > highest_score:
            highest_score = score
            best_match = result
    return best_match

# Read titles from CSV file
input_csv = 'Layer-3.csv'
output_csv = 'output_3.csv'

with open(input_csv, 'r') as csvfile:
    reader = csv.reader(csvfile)
    titles = [row[0] for row in reader if row and row[0] != 'Title']  # Skip empty rows and header

# Open output CSV file for writing
with open(output_csv, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['PMID', 'Title', 'DOI_URL'])

    for title in titles:
        # Remove quotes from the title if present
        title = title.strip('"')
        
        # Fetch IDs for the title
        ids = fetch_ids(title)
        
        # Fetch DOI and title for the top 3 IDs (or fewer if less than 3 available)
        doi_and_title_list = fetch_doi_and_title(ids)
        
        # Find the most similar title
        best_match = find_most_similar_title(title, doi_and_title_list)
        
        if best_match:
            pmid, matched_title, doi = best_match
            doi_url = f"https://doi.org/{doi}" if doi else None
            writer.writerow([pmid, matched_title, doi_url])
        else:
            writer.writerow([None, title, None])
            
        time.sleep(1)  # Add delay to avoid hitting the server too frequently

print("Processing complete. Results saved to output.csv.")
