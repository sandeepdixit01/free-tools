# EmailJS Setup Guide for DesiTechLabs Contact Form

## 📧 Overview
The contact form uses EmailJS to send emails without a backend server. Follow these steps to configure it.

---

## 🚀 Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free tier available)
3. Verify your email address

---

## 📨 Step 2: Add Email Service

1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other supported service
4. Follow the connection steps
5. **Copy the Service ID** (e.g., `service_abc123`)

---

## 📝 Step 3: Create Email Template

1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Content:
```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the DesiTechLabs contact form.
Reply to: {{from_email}}
```

### Template Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (developernewai@gmail.com)

4. Set **To Email** to: `developernewai@gmail.com`
5. **Copy the Template ID** (e.g., `template_xyz789`)

---

## 🔑 Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find **Public Key** section
3. **Copy the Public Key** (e.g., `user_abc123xyz`)

---

## ⚙️ Step 5: Update Environment Variables

1. Open `.env` file in project root
2. Replace placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

3. Save the file
4. **Restart the development server:**
   ```bash
   npm run dev
   ```

---

## ✅ Step 6: Test the Form

1. Go to http://localhost:3000/contact
2. Fill in all fields:
   - Name
   - Email
   - Subject
   - Message
3. Click "Send Message"
4. Check for:
   - "Sending..." state appears
   - Success message shows
   - Email arrives at developernewai@gmail.com

---

## 🔒 Security Notes

- ✅ `.env` is in `.gitignore` (credentials won't be committed)
- ✅ Only Public Key is used in frontend (safe to expose)
- ✅ Service ID and Template ID are also safe to expose
- ❌ Never commit `.env` file to Git
- ❌ Never use Private Key in frontend code

---

## 🐛 Troubleshooting

### Form shows error message:
1. Check console for error details
2. Verify all 3 environment variables are set correctly
3. Ensure EmailJS service is connected
4. Check template variables match code

### Email not received:
1. Check spam/junk folder
2. Verify "To Email" in template is correct
3. Check EmailJS dashboard for delivery status
4. Ensure email service is properly connected

### "Sending..." never completes:
1. Check browser console for errors
2. Verify Public Key is correct
3. Check network tab for failed requests
4. Ensure development server was restarted after .env changes

---

## 📊 EmailJS Free Tier Limits

- **200 emails/month** (free tier)
- Upgrade available for more emails
- Check dashboard for usage stats

---

## 🎯 Expected Behavior

### On Submit:
1. Button shows "Sending..."
2. Form fields are disabled
3. Request sent to EmailJS

### On Success:
1. Green success message appears
2. Form is reset
3. "Send Another Message" button shown

### On Error:
1. Red error message appears
2. "Try Again" button shown
3. Fallback email link available

---

## 📧 Email Format

Emails will arrive at **developernewai@gmail.com** with:
- Subject: "New Contact Form Submission - [User's Subject]"
- From: User's name and email
- Body: User's message
- Reply-to: User's email (for easy replies)

---

## ✨ Features Implemented

✅ Real email delivery via EmailJS
✅ Form validation (all fields required)
✅ Loading state during submission
✅ Success/error messages
✅ Form reset after success
✅ Disabled state during submission
✅ Fallback email link
✅ Bilingual support (English/Hindi)
✅ Mobile responsive
✅ No fake success messages

---

## 🔗 Useful Links

- EmailJS Dashboard: https://dashboard.emailjs.com/
- EmailJS Documentation: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/support/

---

**Setup complete! The contact form is now fully functional.**