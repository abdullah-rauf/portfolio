#!/bin/bash

# Email Configuration Setup Script
# This script helps you set up the contact form email configuration

echo "=========================================="
echo "   Contact Form Email Configuration"
echo "=========================================="
echo ""

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists!"
    read -p "Do you want to overwrite it? (y/n): " overwrite
    if [ "$overwrite" != "y" ]; then
        echo "❌ Setup cancelled."
        exit 0
    fi
fi

echo "📧 Setting up email configuration for: abdullahrauf009@gmail.com"
echo ""
echo "⚠️  IMPORTANT: You need a Gmail App Password (NOT your regular password)"
echo ""
echo "📝 To generate an App Password:"
echo "   1. Go to: https://myaccount.google.com/security"
echo "   2. Enable 2-Step Verification (if not already enabled)"
echo "   3. Go to: https://myaccount.google.com/apppasswords"
echo "   4. Select 'Mail' and 'Other (Custom name)'"
echo "   5. Generate and copy the 16-character password"
echo ""
read -p "Do you have your App Password ready? (y/n): " ready

if [ "$ready" != "y" ]; then
    echo ""
    echo "⏸️  Please generate your App Password first, then run this script again."
    echo "   Run: bash setup-email.sh"
    exit 0
fi

echo ""
read -p "Enter your Gmail App Password: " app_password

if [ -z "$app_password" ]; then
    echo "❌ App Password cannot be empty!"
    exit 1
fi

# Create .env.local file
cat > .env.local << EOL
# Email Configuration for Contact Form
EMAIL_USER=abdullahrauf009@gmail.com
EMAIL_APP_PASSWORD=$app_password
EOL

echo ""
echo "✅ Email configuration saved successfully!"
echo ""
echo "📁 Created: .env.local"
echo ""
echo "🔒 Security Notes:"
echo "   • Never commit .env.local to Git"
echo "   • Never share your App Password"
echo "   • This file is already in .gitignore"
echo ""
echo "🚀 Next Steps:"
echo "   1. Restart your development server:"
echo "      $ pnpm dev"
echo ""
echo "   2. Test the contact form at:"
echo "      http://localhost:3002/contact"
echo ""
echo "   3. Check your email for test messages!"
echo ""
echo "=========================================="
echo "   Setup Complete! 🎉"
echo "=========================================="

