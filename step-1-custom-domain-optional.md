# **Setting Up a Custom Domain on Vercel**

## **1\. Introduction**

Setting up a custom domain for your Vercel-deployed project allows you to use a personalized URL (e.g., `www.mycustomdomain.com`) instead of the default Vercel-generated domain (e.g., `my-vercel-app.vercel.app`). This guide will walk you through the process of adding and configuring a custom domain for your Vercel project.

## **2\. Prerequisites**

Before setting up a custom domain, ensure you have the following:

*   A deployed project on Vercel.
*   A domain name registered with a domain registrar (e.g., GoDaddy, Namecheap, Google Domains, etc.).

## **3\. Adding a Custom Domain in Vercel**

### **Step 1: Access Your Project Dashboard**

1.  Log in to your Vercel account.
2.  Navigate to the project you want to set up the custom domain for by clicking on the project’s name in the Vercel dashboard.

### **Step 2: Add Your Custom Domain**

1.  In the project dashboard, go to the **"Domains"** section on the left-hand menu.
2.  Click on the **"Add"** button to add a new domain.
3.  Enter your custom domain name (e.g., `www.mycustomdomain.com` or `mycustomdomain.com`) in the input field.
4.  Click **"Add"** to add the domain to your project.

### **Step 3: Verify Domain Ownership**

To use your custom domain, you need to verify that you own it. Vercel provides two methods to verify ownership:

#### **Method 1: Automatic DNS Configuration (Recommended for Common Registrars)**

1.  Vercel will detect the domain registrar you used (if supported) and provide an option to automatically configure the DNS settings.
2.  Click on the **"Setup Domain"** button to allow Vercel to configure your DNS settings automatically.
3.  If successful, your domain will be verified, and your site will be accessible via your custom domain.

#### **Method 2: Manual DNS Configuration**

1.  If Vercel doesn’t support automatic configuration for your registrar or you prefer to do it manually, you’ll need to set up DNS records yourself.
2.  Log in to your domain registrar’s control panel.
3.  Navigate to the DNS settings or DNS management section for your domain.
4.  Add the following DNS records:

      **For** `www.mycustomdomain.com` **(Subdomain)**
      
      *   Type: **CNAME**
      *   Name/Host: **www**
      *   Value/Points to: **cname.vercel-dns.com**
      
      **For** `mycustomdomain.com` **(Root Domain)**
      
      *   Type: **A**
      *   Name/Host: **@** (or leave it blank)
      *   Value/Points to: **76.76.21.21**

5.  Save the DNS records.
6.  Return to the Vercel dashboard and click on **"Verify"** to confirm the changes.

**Note**: DNS changes may take some time (up to 24-48 hours) to propagate fully across the internet.

## **4\. Setting Up Domain Redirection (Optional)**

If you want to redirect traffic from `mycustomdomain.com` to `www.mycustomdomain.com` (or vice versa), you can set up a redirect within Vercel.

### **Step 1: Create a Redirect**

1.  In the Vercel project dashboard, go to the **"Domains"** section.
2.  Next to your custom domain, click on the **"Configure"** button.
3.  Under **"Redirects"**, click on **"Add Redirect"**.
4.  Set the source as the domain you want to redirect (e.g., `mycustomdomain.com`).
5.  Set the destination as the target domain (e.g., `www.mycustomdomain.com`).
6.  Choose whether the redirect should be permanent (301) or temporary (302).
7.  Click on **"Save"** to apply the redirect.

## **5\. Securing Your Custom Domain with HTTPS**

Vercel automatically provides HTTPS encryption for your custom domain using SSL certificates. Once your domain is verified and DNS settings are configured, Vercel will automatically issue an SSL certificate.

### **Step 1: Check SSL Status**

1.  In the Vercel project dashboard, go to the **"Domains"** section.
2.  Look for the SSL status next to your custom domain. It should indicate that HTTPS is enabled.

### **Step 2: Force HTTPS (Optional but Recommended)**

1.  If you want to ensure all traffic to your site is served over HTTPS, go to the **"Settings"** tab in your project dashboard.
2.  Under **"Domains"**, enable the **"Force HTTPS"** option.
3.  This will automatically redirect all HTTP requests to HTTPS, ensuring your site is secure.

## **6\. Testing Your Custom Domain**

Once everything is set up, it’s time to test your custom domain:

1.  Open your web browser and enter your custom domain (e.g., `www.mycustomdomain.com`).
2.  Verify that your site loads correctly.
3.  If you set up redirects, test those as well (e.g., enter `mycustomdomain.com` and check if it redirects to `www.mycustomdomain.com`).

## **7\. Troubleshooting Common Issues**

### **Issue 1: DNS Propagation Delay**

*   **Solution**: DNS changes can take up to 48 hours to propagate fully. If your domain isn’t working immediately, wait a few hours and try again.

### **Issue 2: SSL Certificate Not Issued**

*   **Solution**: Ensure your DNS settings are correct and that the domain is verified in Vercel. If SSL isn’t issued after a few hours, try removing and re-adding the domain in the Vercel dashboard.

### **Issue 3: Redirects Not Working**

*   **Solution**: Double-check your redirect settings in Vercel and ensure that the source and destination domains are correctly configured.

## **8\. Conclusion**

Congratulations! You’ve successfully set up a custom domain for your Vercel project. With your custom domain and HTTPS encryption, your site is now more professional and secure. You can now share your personalized URL with others and enjoy the benefits of having a custom web address.

If you encounter any issues, Vercel's documentation and support team are great resources to help you troubleshoot and optimize your setup.

Happy deploying!
