# EmailJS Setup Instructions - FIX GMAIL AUTHENTICATION ERROR

## ⚠️ FIXING "Insufficient Authentication Scopes" Error

You're getting this error because Gmail service needs to be reconnected. Follow these steps:

### Step 1: Reconnect Gmail Service
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Click on "Email Services" in the left sidebar
3. Find your Gmail service (service_383inaf)
4. Click the **"Reconnect"** or **"Edit"** button
5. Click **"Connect Account"** again
6. **IMPORTANT:** When Google asks for permissions, make sure to:
   - Check ALL permission boxes
   - Allow EmailJS to "Send email on your behalf"
   - Click "Allow" or "Continue"
7. Save the service

### Step 2: Verify Template Variables
1. Go to "Email Templates" in the dashboard
2. Click on your template (template_t4gejb7)
3. Make sure it has these variables:

**Template Content:**
```
Subject: New Contact: {{subject}}

You received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. Click "Save"

### Step 3: Test Again
1. Go back to your website
2. Fill out the contact form
3. Submit
4. Check your email: shajidaislam34@gmail.com

## Alternative Solution: Use EmailJS Default Email Service

If Gmail keeps having issues, you can use EmailJS's default email service:

1. Go to "Email Services"
2. Click "Add New Service"
3. Select **"EmailJS"** (not Gmail)
4. This uses EmailJS's own email server (more reliable)
5. Update your .env file with the new Service ID

## Current Configuration
Your current setup:
- Service ID: service_383inaf
- Template ID: template_t4gejb7
- Public Key: 9mLYF8HRKkTS6u-VX

## Free Plan Limits
- 200 emails per month
- Perfect for a portfolio website

## Need Help?
If you still have issues, try:
1. Disconnect and reconnect Gmail completely
2. Use a different email service (EmailJS default)
3. Check EmailJS documentation: https://www.emailjs.com/docs/
