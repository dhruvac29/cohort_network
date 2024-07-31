const layerOneData = [
  {
    edgeId: 1,
    publication:
      "Lifestyle change and high-density lipoprotein change: the us department of veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1002/clc.21978",
  },
  {
    edgeId: 2,
    publication:
      "Association between blood pressure and DNA methylation of retrotransposons and pro-inflammatory genes",
    DOI: "https://doi.org/10.1093/ije/dys220",
  },
  {
    edgeId: 3,
    publication:
      "DNA methylation of oxidative stress genes and cancer risk in the Normative Aging Study",
    DOI: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4859680/",
  },
  {
    edgeId: 3,
    publication: "Mirna-processing gene methylation and cancer risk",
    DOI: "https://doi.org/10.1158/1055-9965.epi-17-0849",
  },
  {
    edgeId: 3,
    publication:
      "Repetitive element hypomethylation in blood leukocyte DNA and cancer incidence, prevalence, and mortality in elderly individuals: the Normative Aging Study",
    DOI: "https://doi.org/10.1007/s10552-010-9715-2",
  },
  {
    edgeId: 3,
    publication:
      "Promoter methylation of pgc1a and pgc1b predicts cancer incidence in a veteran cohort",
    DOI: "https://doi.org/10.2217/epi-2017-0141",
  },
  {
    edgeId: 3,
    publication: "DNA methylation of telomere-related genes and cancer risk",
    DOI: "https://doi.org/10.1158%2F1940-6207.CAPR-17-0413",
  },
  {
    edgeId: 3,
    publication:
      "Longitudinal study of DNA methylation of inflammatory genes and cancer risk",
    DOI: "https://doi.org/10.1158/1055-9965.epi-15-0198",
  },
  {
    edgeId: 4,
    publication:
      "Promoter methylation of pgc1a and pgc1b predicts cancer incidence in a veteran cohort",
    DOI: "https://doi.org/10.2217/epi-2017-0141",
  },
  {
    edgeId: 5,
    publication:
      "Alu and line-1 methylation and lung function in the normative ageing study",
    DOI: "https://doi.org/10.1136/bmjopen-2012-001231",
  },
  {
    edgeId: 5,
    publication:
      "Biomarkers of aging and lung function in the Normative Aging Study",
    DOI: "https://doi.org/10.18632/aging.103363",
  },
  {
    edgeId: 5,
    publication:
      "Metastable DNA methylation sites associated with longitudinal lung function decline and aging in humans: an epigenome-wide study in the nas and kora cohorts",
    DOI: "https://doi.org/10.1080/15592294.2018.1529849",
  },
  {
    edgeId: 5,
    publication:
      "Gene promoter methylation is associated with lung function in the elderly: the Normative Aging Study",
    DOI: "https://doi.org/10.4161/epi.7.3.19216",
  },
  {
    edgeId: 6,
    publication:
      "Promoter methylation of pgc1a and pgc1b predicts cancer incidence in a veteran cohort",
    DOI: "https://doi.org/10.2217/epi-2017-0141",
  },
  {
    edgeId: 7,
    publication:
      "Repetitive element hypomethylation in blood leukocyte DNA and cancer incidence, prevalence, and mortality in elderly individuals: the Normative Aging Study",
    DOI: "https://doi.org/10.1007/s10552-010-9715-2",
  },
  {
    edgeId: 8,
    publication:
      "Short- and intermediate-term exposure to ambient fine particulate elements and leukocyte epigenome-wide DNA methylation in older men: the Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.envint.2021.106955",
  },
  {
    edgeId: 8,
    publication:
      "Differential DNA methylation and PM 2.5 species in a 450k epigenome-wide association study",
    DOI: "https://doi.org/10.1080/15592294.2016.1271853",
  },
  {
    edgeId: 8,
    publication:
      "Exposure to airborne particulate matter is associated with methylation pattern in the asthma pathway",
    DOI: "https://doi.org/10.2217/epi.13.16",
  },
  {
    edgeId: 8,
    publication:
      "Associations of annual ambient PM2.5 components with DNAm phenoage acceleration in elderly men: the Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.envpol.2019.113690",
  },
  {
    edgeId: 8,
    publication:
      "Air pollution and gene-specific methylation in the Normative Aging Study: association, effect modification, and mediation analysis",
    DOI: "https://doi.org/10.4161/epi.27584",
  },
  {
    edgeId: 8,
    publication:
      "Prolonged exposure to particulate pollution, genes associated with glutathione pathways, and DNA methylation in a cohort of older men",
    DOI: "https://doi.org/10.1289/ehp.1002773",
  },
  {
    edgeId: 8,
    publication:
      "Genome-wide analysis of DNA methylation and fine particulate matter air pollution in three study populations: kora f3, kora f4, and the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1509966",
  },
  {
    edgeId: 8,
    publication:
      "Associations between long-term exposure to PM 2.5 component species and blood DNA methylation age in the elderly: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.envint.2016.12.024",
  },
  {
    edgeId: 8,
    publication:
      "Beyond the mean: quantile regression to explore the association of air pollution with gene-specific methylation in the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1307824",
  },
  {
    edgeId: 8,
    publication:
      "Long-term ambient particle exposures and blood DNA methylation age: findings from the VA Normative Aging Study",
    DOI: "https://doi.org/10.1093/eep/dvw006",
  },
  {
    edgeId: 9,
    publication:
      "Associations between short-term changes in air pollution and correlates of arterial stiffness: the veterans affairs Normative Aging Study, 2007-2011",
    DOI: "https://doi.org/10.1093/aje/kwt271",
  },
  {
    edgeId: 10,
    publication:
      "Quantile regression analysis of the distributional effects of air pollution on blood pressure, heart rate variability, blood lipids, and biomarkers of inflammation in elderly american men: the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1510044",
  },
  {
    edgeId: 10,
    publication:
      "Association between long-term exposure to traffic particles and blood pressure in the veterans administration Normative Aging Study",
    DOI: "https://doi.org/10.1136/oemed-2011-100268",
  },
  {
    edgeId: 10,
    publication:
      "Use of the adaptive lasso method to identify PM2.5 components associated with blood pressure in elderly men: the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1409021",
  },
  {
    edgeId: 11,
    publication:
      "Short-term exposure to PM 2.5 components and renal health: findings from the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.jhazmat.2021.126557",
  },
  {
    edgeId: 12,
    publication:
      "Long-term exposure to black carbon, cognition and single nucleotide polymorphisms in microrna processing genes in older men",
    DOI: "https://doi.org/10.1016/j.envint.2015.12.014",
  },
  {
    edgeId: 12,
    publication:
      "Short-term air pollution, cognitive performance, and nonsteroidal anti-inflammatory drug use in the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1038/s43587-021-00060-4",
  },
  {
    edgeId: 12,
    publication:
      "Traffic-related air pollution and cognitive function in a cohort of older men",
    DOI: "https://doi.org/10.1289/ehp.1002767",
  },
  {
    edgeId: 13,
    publication:
      "Associations between acute and long-term exposure to PM2.5 components and temperature with qt interval length in the VA Normative Aging Study",
    DOI: "https://doi.org/10.1093/eurjpc/zwaa161",
  },
  {
    edgeId: 13,
    publication:
      "Structural equation modeling of parasympathetic and sympathetic response to traffic air pollution in a repeated measures study",
    DOI: "https://doi.org/10.1186/1476-069x-12-81",
  },
  {
    edgeId: 13,
    publication:
      "Associations between PM 2.5 metal components and qt interval length in the Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.envres.2021.110827",
  },
  {
    edgeId: 13,
    publication:
      "Exposure to sub-chronic and long-term particulate air pollution and heart rate variability in an elderly cohort: the Normative Aging Study",
    DOI: "https://doi.org/10.1186/s12940-015-0074-z",
  },
  {
    edgeId: 13,
    publication:
      "Quantile regression analysis of the distributional effects of air pollution on blood pressure, heart rate variability, blood lipids, and biomarkers of inflammation in elderly american men: the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1510044",
  },
  {
    edgeId: 14,
    publication:
      "Particulate air pollution and fasting blood glucose in nondiabetic individuals: associations and epigenetic mediation in the Normative Aging Study, 2000-2011",
    DOI: "https://doi.org/10.1289/ehp183",
  },
  {
    edgeId: 15,
    publication:
      "Long-term exposure to ambient fine particulate matter and renal function in older men: the veterans administration Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1510269",
  },
  {
    edgeId: 15,
    publication:
      "Short-term exposure to PM 2.5 components and renal health: findings from the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.jhazmat.2021.126557",
  },
  {
    edgeId: 15,
    publication:
      "Short-term ambient particle radioactivity level and renal function in older men: insight from the Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.envint.2019.105018",
  },
  {
    edgeId: 16,
    publication:
      "Association between ambient beta particle radioactivity and lower hemoglobin concentrations in a cohort of elderly men",
    DOI: "https://doi.org/10.1016/j.envint.2020.105735",
  },
  {
    edgeId: 17,
    publication:
      "Associations between arrhythmia episodes and temporally and spatially resolved black carbon and particulate matter in elderly patients",
    DOI: "https://doi.org/10.1136/oemed-2013-101526",
  },
  {
    edgeId: 18,
    publication:
      "Short-term exposure to PM 2.5 components and renal health: findings from the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.jhazmat.2021.126557",
  },
  {
    edgeId: 18,
    publication:
      "Short-term ambient particle radioactivity level and renal function in older men: insight from the Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.envint.2019.105018",
  },
  {
    edgeId: 19,
    publication:
      "Ambient fine particulate matter, outdoor temperature, and risk of metabolic syndrome",
    DOI: "https://doi.org/10.1093/aje/kww157",
  },
  {
    edgeId: 20,
    publication:
      "Ambient pollutants, polymorphisms associated with microrna processing and adhesion molecules: the Normative Aging Study",
    DOI: "https://doi.org/10.1186/1476-069x-10-45",
  },
  {
    edgeId: 20,
    publication:
      "Residential black carbon exposure and circulating markers of systemic inflammation in elderly males: the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1103982",
  },
  {
    edgeId: 20,
    publication:
      "Medium-term exposure to traffic-related air pollution and markers of inflammation and endothelial function",
    DOI: "https://doi.org/10.1289/ehp.1002560",
  },
  {
    edgeId: 20,
    publication:
      "Structural equation modeling of the inflammatory response to traffic air pollution",
    DOI: "https://doi.org/10.1038/jes.2012.106",
  },
  {
    edgeId: 20,
    publication:
      "Quantile regression analysis of the distributional effects of air pollution on blood pressure, heart rate variability, blood lipids, and biomarkers of inflammation in elderly american men: the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1510044",
  },
  {
    edgeId: 21,
    publication:
      "Long-term exposure to black carbon and carotid intima-media thickness: the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1104845",
  },
  {
    edgeId: 22,
    publication:
      "Association of long-term ambient black carbon exposure and oxidative stress allelic variants with intraocular pressure in older men",
    DOI: "https://doi.org/10.1001/jamaophthalmol.2018.5313",
  },
  {
    edgeId: 23,
    publication:
      "Impacts of air pollution, temperature, and relative humidity on leukocyte distribution: an epigenetic perspective",
    DOI: "https://doi.org/10.1016/j.envint.2019.02.053",
  },
  {
    edgeId: 24,
    publication:
      "Quantile regression analysis of the distributional effects of air pollution on blood pressure, heart rate variability, blood lipids, and biomarkers of inflammation in elderly american men: the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1510044",
  },
  {
    edgeId: 25,
    publication:
      "Long-term effects of traffic particles on lung function decline in the elderly",
    DOI: "https://doi.org/10.1164/rccm.201402-0350oc",
  },
  {
    edgeId: 26,
    publication:
      "Ambient fine particulate matter, outdoor temperature, and risk of metabolic syndrome",
    DOI: "https://doi.org/10.1093/aje/kww157",
  },
  {
    edgeId: 27,
    publication:
      "Metabolomic signatures of the long-term exposure to air pollution and temperature",
    DOI: "https://doi.org/10.1186/s12940-020-00683-x",
  },
  {
    edgeId: 27,
    publication:
      "Ambient PM2.5 species and ultrafine particle exposure and their differential metabolomic signatures",
    DOI: "https://doi.org/10.1016/j.envint.2021.106447",
  },
  {
    edgeId: 27,
    publication:
      "Metabolomic signatures of the short-term exposure to air pollution and temperature",
    DOI: "https://doi.org/10.1016/j.envres.2021.111553",
  },
  {
    edgeId: 28,
    publication:
      "Ambient particulate air pollution and micrornas in elderly men",
    DOI: "https://doi.org/10.1097/ede.0000000000000026",
  },
  {
    edgeId: 28,
    publication:
      "Ambient particulate matter and micrornas in extracellular vesicles: a pilot study of older individuals",
    DOI: "https://doi.org/10.1186/s12989-016-0121-0",
  },
  {
    edgeId: 29,
    publication:
      "Associations of annual ambient fine particulate matter mass and components with mitochondrial DNA abundance",
    DOI: "https://doi.org/10.1097/ede.0000000000000717",
  },
  {
    edgeId: 30,
    publication:
      "Urinary 8-hydroxy-2'-deoxyguanosine as a biomarker of oxidative DNA damage induced by ambient pollution in the Normative Aging Study",
    DOI: "https://doi.org/10.1136/oem.2010.056358",
  },
  {
    edgeId: 31,
    publication:
      "Associations between air pollution and perceived stress: the veterans administration Normative Aging Study",
    DOI: "https://doi.org/10.1186/1476-069x-14-10",
  },
  {
    edgeId: 32,
    publication:
      "Short-term exposure to PM 2.5 components and renal health: findings from the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.jhazmat.2021.126557",
  },
  {
    edgeId: 33,
    publication:
      "Lifestyle change and high-density lipoprotein change: the us department of veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1002/clc.21978",
  },
  {
    edgeId: 34,
    publication:
      "Allergen sensitization is associated with increased DNA methylation in older men",
    DOI: "https://doi.org/10.1159/000343004",
  },
  {
    edgeId: 35,
    publication:
      "Psychological factors and DNA methylation of genes related to immune/inflammatory system markers: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1136/bmjopen-2015-009790",
  },
  {
    edgeId: 36,
    publication:
      "Allergen sensitization is associated with increased DNA methylation in older men",
    DOI: "https://doi.org/10.1159/000343004",
  },
  {
    edgeId: 37,
    publication:
      "Aging and epigenetics: longitudinal changes in gene-specific DNA methylation",
    DOI: "https://doi.org/10.4161/epi.7.1.18749",
  },
  {
    edgeId: 38,
    publication:
      "Blood pressure and cognition:factors that may account for their inconsistent association",
    DOI: "https://doi.org/10.1097/ede.0b013e3182a7121c",
  },
  {
    edgeId: 39,
    publication:
      "Prospective cohort study of lead exposure and electrocardiographic conduction disturbances in the department of veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1003279",
  },
  {
    edgeId: 40,
    publication:
      "Prospective cohort study of lead exposure and electrocardiographic conduction disturbances in the department of veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1003279",
  },
  {
    edgeId: 41,
    publication:
      "Lead concentrations in relation to multiple biomarkers of cardiovascular disease: the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1103467",
  },
  {
    edgeId: 42,
    publication:
      "Lead concentrations in relation to multiple biomarkers of cardiovascular disease: the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1103467",
  },
  {
    edgeId: 43,
    publication:
      "Metabolomic signatures of lead exposure in the VA Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.envres.2020.110022",
  },
  {
    edgeId: 44,
    publication:
      "Lead exposure, b vitamins, and plasma homocysteine in men 55 years of age and older: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1306931",
  },
  {
    edgeId: 45,
    publication:
      "Low-level cumulative lead and resistant hypertension: a prospective study of men participating in the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1161/jaha.118.010014",
  },
  {
    edgeId: 46,
    publication:
      "Lead exposure and tremor among older men: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1408535",
  },
  {
    edgeId: 47,
    publication:
      "Effect of dietary sodium and potassium intake on the mobilization of bone lead among middle-aged and older men: the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.3390/nu11112750",
  },
  {
    edgeId: 48,
    publication:
      "Blood DNA methylation biomarkers of cumulative lead exposure in adults",
    DOI: "https://doi.org/10.1038/s41370-019-0183-9",
  },
  {
    edgeId: 49,
    publication:
      "Dietary patterns, bone lead and incident coronary heart disease among middle-aged to elderly men",
    DOI: "https://doi.org/10.1016/j.envres.2018.09.035",
  },
  {
    edgeId: 50,
    publication:
      "Associations of cumulative pb exposure and longitudinal changes in mini-psychological factors status exam scores, global cognition and domains of cognition: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.envres.2016.10.007",
  },
  {
    edgeId: 51,
    publication:
      "Prospective cohort study of lead exposure and electrocardiographic conduction disturbances in the department of veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1003279",
  },
  {
    edgeId: 52,
    publication:
      "Cumulative lead exposure in community-dwelling adults and fine motor function: comparing standard and novel tasks in the VA Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.neuro.2013.01.005",
  },
  {
    edgeId: 53,
    publication:
      "Bone lead levels and risk of incident primary open-angle glaucoma: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp3442",
  },
  {
    edgeId: 54,
    publication:
      "Prospective cohort study of lead exposure and electrocardiographic conduction disturbances in the department of veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1003279",
  },
  {
    edgeId: 55,
    publication:
      "Lead concentrations in relation to multiple biomarkers of cardiovascular disease: the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1103467",
  },
  {
    edgeId: 56,
    publication:
      "Lead concentrations in relation to multiple biomarkers of cardiovascular disease: the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1103467",
  },
  {
    edgeId: 57,
    publication:
      "Lead exposure and fear-potentiated startle in the VA Normative Aging Study: a pilot study of a novel physiological approach to investigating neurotoxicant effects",
    DOI: "https://doi.org/10.1016/j.ntt.2013.04.003",
  },
  {
    edgeId: 58,
    publication:
      "Cumulative lead exposure is associated with reduced olfactory recognition performance in elderly men: the Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.neuro.2015.06.006",
  },
  {
    edgeId: 59,
    publication:
      "Lead exposure, b vitamins, and plasma homocysteine in men 55 years of age and older: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1306931",
  },
  {
    edgeId: 60,
    publication:
      "Low-level cumulative lead and resistant hypertension: a prospective study of men participating in the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1161/jaha.118.010014",
  },
  {
    edgeId: 61,
    publication:
      "Lead exposure and tremor among older men: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1408535",
  },
  {
    edgeId: 62,
    publication:
      "Effect of dietary sodium and potassium intake on the mobilization of bone lead among middle-aged and older men: the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.3390/nu11112750",
  },
  {
    edgeId: 63,
    publication: "Cholesterol and depressive symptoms in older men across time",
    DOI: "https://doi.org/10.1177/2055102915592089",
  },
  {
    edgeId: 64,
    publication:
      "Relation between high-density lipoprotein cholesterol and survival to age 85 years in men (from the VA Normative Aging Study)",
    DOI: "https://doi.org/10.1016/j.amjcard.2010.12.015",
  },
  {
    edgeId: 65,
    publication:
      "The effects of daily co-occurrence of affect on older adults' reactivity to health stressors",
    DOI: "https://doi.org/10.1080/08870446.2015.1111368",
  },
  {
    edgeId: 66,
    publication:
      "Psychological factors and DNA methylation of genes related to immune/inflammatory system markers: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1136/bmjopen-2015-009790",
  },
  {
    edgeId: 67,
    publication:
      "Jump, hop, or skip: modeling practice effects in studies of determinants of cognitive change in older adults",
    DOI: "https://doi.org/10.1093/aje/kwv212",
  },
  {
    edgeId: 68,
    publication:
      "Jump, hop, or skip: modeling practice effects in studies of determinants of cognitive change in older adults",
    DOI: "https://doi.org/10.1093/aje/kwv212",
  },
  {
    edgeId: 69,
    publication:
      "The inflammatory potential of dietary manganese in a cohort of elderly men",
    DOI: "https://doi.org/10.1007/s12011-017-1127-7",
  },
  {
    edgeId: 70,
    publication:
      "A western diet pattern is associated with higher concentrations of blood and bone lead among middle-aged and elderly men",
    DOI: "https://doi.org/10.3945/jn.117.249060",
  },
  {
    edgeId: 71,
    publication:
      "A western diet pattern is associated with higher concentrations of blood and bone lead among middle-aged and elderly men",
    DOI: "https://doi.org/10.3945/jn.117.249060",
  },
  {
    edgeId: 72,
    publication:
      "The inflammatory potential of dietary manganese in a cohort of elderly men",
    DOI: "https://doi.org/10.1007/s12011-017-1127-7",
  },
  {
    edgeId: 73,
    publication:
      "Serum tocopherol levels and vitamin e intake are associated with lung function in the Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.clnu.2015.01.020",
  },
  {
    edgeId: 73,
    publication:
      "Dietary anthocyanin intake and age-related decline in lung function: longitudinal findings from the VA Normative Aging Study",
    DOI: "https://doi.org/10.3945/ajcn.115.121467",
  },
  {
    edgeId: 74,
    publication:
      "High-fiber foods reduce periodontal disease progression in men aged 65 and older: the veterans affairs Normative Aging Study/dental longitudinal study",
    DOI: "https://doi.org/10.1111/j.1532-5415.2011.03866.x",
  },
  {
    edgeId: 75,
    publication:
      "Accelerated DNA methylation age and the use of antihypertensive medication among older adults",
    DOI: "https://doi.org/10.18632/aging.101626",
  },
  {
    edgeId: 76,
    publication:
      "Emotional reactivity and mortality: longitudinal findings from the VA Normative Aging Study",
    DOI: "https://doi.org/10.1093/geronb/gbt107",
  },
  {
    edgeId: 77,
    publication:
      "The long arm of childhood experiences on longevity: testing midlife vulnerability and resilience pathways",
    DOI: "https://doi.org/10.1037/pag0000394",
  },
  {
    edgeId: 78,
    publication:
      "Do cherished children age successfully? longitudinal findings from the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1037/pag0000050",
  },
  {
    edgeId: 79,
    publication:
      "Folate network genetic variation predicts cardiovascular disease risk in non-hispanic white males",
    DOI: "https://doi.org/10.3945/jn.111.157180",
  },
  {
    edgeId: 80,
    publication:
      "Influence of multiple APOE genetic variants on cognitive function in a cohort of older men - results from the Normative Aging Study",
    DOI: "https://doi.org/10.1186/s12888-014-0223-x",
  },
  {
    edgeId: 80,
    publication:
      "Long-term exposure to black carbon, cognition and single nucleotide polymorphisms in microrna processing genes in older men",
    DOI: "https://doi.org/10.1016/j.envint.2015.12.014",
  },
  {
    edgeId: 81,
    publication:
      "Iron-processing genotypes, nutrient intakes, and cadmium levels in the Normative Aging Study: evidence of sensitive subpopulations in cadmium risk assessment",
    DOI: "https://doi.org/10.1016/j.envint.2018.06.040",
  },
  {
    edgeId: 82,
    publication:
      "Psychological factors and DNA methylation of genes related to immune/inflammatory system markers: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1136/bmjopen-2015-009790",
  },
  {
    edgeId: 83,
    publication:
      "Do hassles and uplifts trajectories predict mortality? longitudinal findings from the VA Normative Aging Study",
    DOI: "https://doi.org/10.1007/s10865-015-9703-9",
  },
  {
    edgeId: 84,
    publication:
      "Circulating irisin levels and coronary heart disease: association with future acute coronary syndrome and major adverse cardiovascular events",
    DOI: "https://doi.org/10.1038/ijo.2014.101",
  },
  {
    edgeId: 84,
    publication:
      "Chemerin levels as predictor of acute coronary events: a case-control study nested within the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.metabol.2014.02.013",
  },
  {
    edgeId: 85,
    publication:
      "Irisin and leptin concentrations in relation to obesity, and developing type 2 diabetes: a cross sectional and a prospective case-control study nested in the Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.metabol.2017.10.011",
  },
  {
    edgeId: 86,
    publication:
      "Psychological factors and DNA methylation of genes related to immune/inflammatory system markers: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1136/bmjopen-2015-009790",
  },
  {
    edgeId: 87,
    publication:
      "Blood pressure and cognition:factors that may account for their inconsistent association",
    DOI: "https://doi.org/10.1097/ede.0b013e3182a7121c",
  },
  {
    edgeId: 88,
    publication:
      "Blood telomere length attrition and cancer development in the Normative Aging Study cohort",
    DOI: "https://doi.org/10.1016/j.ebiom.2015.04.008",
  },
  {
    edgeId: 89,
    publication:
      "Biomarkers of aging and lung function in the Normative Aging Study",
    DOI: "https://doi.org/10.18632/aging.103363",
  },
  {
    edgeId: 90,
    publication:
      "Psychological factors and DNA methylation of genes related to immune/inflammatory system markers: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1136/bmjopen-2015-009790",
  },
  {
    edgeId: 91,
    publication:
      "Metabolic syndrome and periodontal disease progression in men",
    DOI: "https://doi.org/10.1177/0022034516641053",
  },
  {
    edgeId: 92,
    publication:
      "Metabolic syndrome and periodontal disease progression in men",
    DOI: "https://doi.org/10.1177/0022034516641053",
  },
  {
    edgeId: 93,
    publication:
      "Associations of plasma folate and vitamin b6 with blood DNA methylation age: an analysis of one-carbon metabolites in the VA Normative Aging Study",
    DOI: "https://doi.org/10.1093/gerona/glaa257",
  },
  {
    edgeId: 94,
    publication:
      "Mitochondria and aging in older individuals: an analysis of DNA methylation age metrics, leukocyte telomere length, and mitochondrial DNA copy number in the VA Normative Aging Study",
    DOI: "https://doi.org/10.18632/aging.102722",
  },
  {
    edgeId: 95,
    publication:
      "Mitochondria and aging in older individuals: an analysis of DNA methylation age metrics, leukocyte telomere length, and mitochondrial DNA copy number in the VA Normative Aging Study",
    DOI: "https://doi.org/10.18632/aging.102722",
  },
  {
    edgeId: 96,
    publication:
      "Biomarkers of aging and lung function in the Normative Aging Study",
    DOI: "https://doi.org/10.18632/aging.103363",
  },
  {
    edgeId: 97,
    publication:
      "Occupational determinants of cumulative lead exposure: analysis of bone lead among men in the VA Normative Aging Study",
    DOI: "https://doi.org/10.1097/jom.0000000000000127",
  },
  {
    edgeId: 98,
    publication:
      "Openness to experience and mortality in men: analysis of trait and facets",
    DOI: "https://doi.org/10.1177/0898264311431303",
  },
  {
    edgeId: 99,
    publication:
      "Optimism is not associated with two indicators of DNA methylation aging",
    DOI: "https://doi.org/10.18632/aging.102090",
  },
  {
    edgeId: 100,
    publication:
      "Optimism in relation to inflammation and endothelial dysfunction in older men: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1097/psy.0b013e3182312497",
  },
  {
    edgeId: 101,
    publication:
      "Optimism in relation to inflammation and endothelial dysfunction in older men: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1097/psy.0b013e3182312497",
  },
  {
    edgeId: 102,
    publication:
      "Pessimistic orientation in relation to telomere length in older men: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.psyneuen.2014.01.001",
  },
  {
    edgeId: 103,
    publication:
      "Pessimistic orientation in relation to telomere length in older men: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.psyneuen.2014.01.001",
  },
  {
    edgeId: 104,
    publication:
      "Pessimistic orientation in relation to telomere length in older men: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.psyneuen.2014.01.001",
  },
  {
    edgeId: 105,
    publication:
      "Pessimistic orientation in relation to telomere length in older men: the VA Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.psyneuen.2014.01.001",
  },
  {
    edgeId: 106,
    publication:
      "The long arm of childhood experiences on longevity: testing midlife vulnerability and resilience pathways",
    DOI: "https://doi.org/10.1037/pag0000394",
  },
  {
    edgeId: 107,
    publication:
      "Effects of temperature and relative humidity on DNA methylation",
    DOI: "https://doi.org/10.1097/ede.0000000000000120",
  },
  {
    edgeId: 108,
    publication:
      "Lung function association with outdoor temperature and relative humidity and its interaction with air pollution in the elderly",
    DOI: "https://doi.org/10.1016/j.envres.2018.03.039",
  },
  {
    edgeId: 109,
    publication:
      "Road proximity influences indoor exposures to ambient fine particle mass and components",
    DOI: "https://doi.org/10.1016/j.envpol.2018.09.046",
  },
  {
    edgeId: 110,
    publication:
      "Healthy psychological functioning and incident coronary heart disease: the importance of self-regulation",
    DOI: "https://doi.org/10.1001/archgenpsychiatry.2011.23",
  },
  {
    edgeId: 111,
    publication:
      "Self-reported sleep and beta-amyloid deposition in community-dwelling older adults",
    DOI: "https://doi.org/10.1001/jamaneurol.2013.4258",
  },
  {
    edgeId: 112,
    publication:
      "Smoking-related DNA methylation is associated with DNA methylation phenotypic age acceleration: the veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.3390/ijerph16132356",
  },
  {
    edgeId: 113,
    publication:
      "Lifestyle change and high-density lipoprotein change: the us department of veterans affairs Normative Aging Study",
    DOI: "https://doi.org/10.1002/clc.21978",
  },
  {
    edgeId: 114,
    publication:
      "Solar activity is associated with diastolic and systolic blood pressure in elderly adults",
    DOI: "https://doi.org/10.1161/jaha.120.021006",
  },
  {
    edgeId: 115,
    publication:
      "Associations between solar and geomagnetic activity and peripheral white blood cells in the Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.envres.2021.112066",
  },
  {
    edgeId: 116,
    publication:
      "Do stress trajectories predict mortality in older men? longitudinal findings from the VA Normative Aging Study",
    DOI: "https://doi.org/10.4061/2011/896109",
  },
  {
    edgeId: 117,
    publication:
      "Distributional changes in gene-specific methylation associated with temperature",
    DOI: "https://doi.org/10.1016/j.envres.2016.05.034",
  },
  {
    edgeId: 117,
    publication:
      "Effects of temperature and relative humidity on DNA methylation",
    DOI: "https://doi.org/10.1097/ede.0000000000000120",
  },
  {
    edgeId: 118,
    publication:
      "Age and mitochondrial DNA copy number influence the association between outdoor temperature and cognitive function: insights from the VA Normative Aging Study",
    DOI: "https://doi.org/10.1097/ee9.0000000000000108",
  },
  {
    edgeId: 118,
    publication:
      "Cognitive function and short-term exposure to residential air temperature: a repeated measures study based on spatiotemporal estimates of temperature",
    DOI: "https://doi.org/10.1016/j.envres.2016.06.036",
  },
  {
    edgeId: 119,
    publication:
      "Associations between changes in city and address specific temperature and qt interval--the VA Normative Aging Study",
    DOI: "https://doi.org/10.1371/journal.pone.0106258",
  },
  {
    edgeId: 119,
    publication:
      "Associations between acute and long-term exposure to PM2.5 components and temperature with qt interval length in the VA Normative Aging Study",
    DOI: "https://doi.org/10.1093/eurjpc/zwaa161",
  },
  {
    edgeId: 120,
    publication:
      "Fine-scale spatial and temporal variation in temperature and arrhythmia episodes in the VA Normative Aging Study",
    DOI: "https://doi.org/10.1080/10962247.2016.1252808",
  },
  {
    edgeId: 121,
    publication:
      "Ambient fine particulate matter, outdoor temperature, and risk of metabolic syndrome",
    DOI: "https://doi.org/10.1093/aje/kww157",
  },
  {
    edgeId: 122,
    publication:
      "Lung function association with outdoor temperature and relative humidity and its interaction with air pollution in the elderly",
    DOI: "https://doi.org/10.1016/j.envres.2018.03.039",
  },
  {
    edgeId: 123,
    publication:
      "Ambient fine particulate matter, outdoor temperature, and risk of metabolic syndrome",
    DOI: "https://doi.org/10.1093/aje/kww157",
  },
  {
    edgeId: 124,
    publication:
      "Metabolomic signatures of the long-term exposure to air pollution and temperature",
    DOI: "https://doi.org/10.1186/s12940-020-00683-x",
  },
  {
    edgeId: 124,
    publication:
      "Metabolomic signatures of the short-term exposure to air pollution and temperature",
    DOI: "https://doi.org/10.1016/j.envres.2021.111553",
  },
  {
    edgeId: 125,
    publication:
      "Short-term effects of air temperature and mitochondrial DNA lesions within an older population",
    DOI: "https://doi.org/10.1016/j.envint.2017.03.017",
  },
  {
    edgeId: 126,
    publication:
      "Serum tocopherol levels and vitamin e intake are associated with lung function in the Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.clnu.2015.01.020",
  },
  {
    edgeId: 127,
    publication: "Arsenic exposure and DNA methylation among elderly men",
    DOI: "https://doi.org/10.1097/ede.0b013e31825afb0b",
  },
  {
    edgeId: 128,
    publication:
      "Associations of toenail arsenic, cadmium, mercury, manganese, and lead with blood pressure in the Normative Aging Study",
    DOI: "https://doi.org/10.1289/ehp.1002805",
  },
  {
    edgeId: 129,
    publication:
      "Metabolomic signatures of lead exposure in the VA Normative Aging Study",
    DOI: "https://doi.org/10.1016/j.envres.2020.110022",
  },
  {
    edgeId: 130,
    publication:
      "Individual species and cumulative mixture relationships of 24-hour urine metal concentrations with DNA methylation age variables in older men",
    DOI: "https://doi.org/10.1016/j.envres.2020.109573",
  },
];

export default layerOneData;
