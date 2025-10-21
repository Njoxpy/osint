# Email Discovery Techniques

Email discovery is a crucial component of OSINT investigations. This guide covers tools and techniques for finding and verifying email addresses.

## Email Discovery Tools

### Primary Discovery Platforms

#### [Hunter.io](https://hunter.io/)
- **Type**: Professional email finder and verifier
- **Key Features**:
  - Domain-based email discovery
  - Department-specific email search functionality
  - Email verification and deliverability scoring
  - Bulk email discovery for organizations
  - Chrome extension for real-time searches
- **Pricing**: Freemium (limited searches), paid plans available
- **Best for**: Corporate email discovery and verification

#### [Phonebook.cz](https://phonebook.cz/)
- **Type**: Comprehensive contact information database
- **Key Features**:
  - Email, phone, and domain searches
  - Historical data tracking
  - API access available
  - Multiple data sources
- **Alternative**: [IntelX](https://intelx.io/) for broader search capabilities
- **Best for**: Historical email data and comprehensive searches

#### [VoilaNorbert](https://www.voilanorbert.com/)
- **Type**: Email finder with high accuracy rates
- **Key Features**:
  - Specializes in finding professional email addresses
  - Real-time email verification
  - Bulk processing capabilities
  - CRM integrations
- **Accuracy**: Claims 98% accuracy rate
- **Best for**: Sales and marketing email discovery

#### [Clearbit Connect](https://clearbit.com/connect)
- **Type**: Email discovery and enrichment platform
- **Key Features**:
  - Gmail integration
  - Additional contact information and company data
  - Social media profile linking
  - Automated email sequences
- **Best for**: Gmail users and comprehensive contact enrichment

#### [VerifyMail.io](https://verifymail.io/)
- **Type**: Email address verification service
- **Key Features**:
  - Real-time email validation
  - Bulk verification capabilities
  - API integration
  - Detailed verification reports
- **Best for**: Validating discovered email addresses

### Free Discovery Methods

#### Search Engine Techniques

##### Google-Based Discovery
```
"john smith" "@company.com"
site:company.com "email" OR "contact"
site:company.com filetype:pdf "john smith"
"john smith" "email:" OR "e-mail:"
```

##### Advanced Search Combinations
```
site:linkedin.com "john smith" "email"
site:company.com "contact us" email
"john smith" filetype:pdf site:company.com
```

##### Document Mining
```
site:company.com filetype:pdf "email" OR "contact"
site:company.com filetype:doc "directory"
"employee directory" site:company.com
```

#### Social Media Mining

##### LinkedIn Searches
```
site:linkedin.com "john smith" "company name"
site:linkedin.com "email" "john smith"
```

##### Twitter Discovery
```
site:twitter.com "john smith" "email"
site:twitter.com "@company" "contact"
```

#### Email Pattern Recognition

##### Common Corporate Patterns
- `firstname.lastname@company.com`
- `first.last@company.com`
- `f.lastname@company.com`
- `firstnamelastname@company.com`
- `firstname@company.com`

##### Testing Patterns
Once you identify one email format, test variations:
- If `john.smith@company.com` exists, try `jane.doe@company.com`
- Use employee directories to test patterns
- Verify through password recovery systems

## Email Verification Techniques

### Technical Verification

#### SMTP Verification
```bash
telnet mail.company.com 25
HELO your-domain.com
MAIL FROM: test@your-domain.com
RCPT TO: target@company.com
```

#### MX Record Lookup
```bash
nslookup -type=mx company.com
dig mx company.com
```

### Online Verification Tools

#### Free Verification Services
- [Email Checker](https://email-checker.net/)
- [Verify Email Address](https://verify-email.org/)
- [Hunter.io Email Verifier](https://hunter.io/email-verifier)

#### Verification Indicators
- **Valid**: Email exists and accepts mail
- **Invalid**: Email doesn't exist
- **Risky**: Catch-all or unknown status
- **Unknown**: Cannot determine status

## Password Recovery Method

### Technique Overview
Many websites reveal partial email addresses during password recovery processes.

### Step-by-Step Process

1. **Navigate to Target Website**
   - Find the login page
   - Locate "Forgot Password" or "Reset Password" link

2. **Attempt Recovery**
   - Enter suspected email variations
   - Note any partial reveals in error messages
   - Document patterns observed

3. **Pattern Analysis**
   - Use revealed information to confirm email patterns
   - Test additional variations based on discoveries
   - Cross-reference with known employee names

### Example Scenarios

#### Scenario 1: Partial Reveal
- Input: `j.smith@company.com`
- Response: "If j.s***@company.com exists, you'll receive a reset email"
- Confirmed: Email exists with `j.s` pattern

#### Scenario 2: Error Messages
- Input: `invalid@company.com`
- Response: "Email not found"
- Input: `john.smith@company.com`
- Response: "Reset link sent"
- Confirmed: Email exists

## Advanced Discovery Techniques

### GitHub Email Mining

#### Repository Searches
```
user:username email
author-email:target@company.com
committer-email:target@company.com
```

#### Commit History Analysis
```bash
git log --format='%ae' | sort | uniq
git shortlog -sne
```

### Domain Intelligence

#### WHOIS Lookups
```bash
whois company.com
whois -h whois.arin.net company.com
```

#### Certificate Transparency Logs
- [crt.sh](https://crt.sh/)
- [Certificate Search](https://censys.io/certificates)

### Breach Database Searches

#### Public Breach Databases
- [HaveIBeenPwned](https://haveibeenpwned.com/)
- [DeHashed](https://dehashed.com/)
- [Intelligence X](https://intelx.io/)

#### Search Techniques
- Domain-based searches
- Name-based correlations
- Historical breach analysis

## Email Intelligence Analysis

### Metadata Extraction

#### Email Header Analysis
- **Received**: Server path and timestamps
- **X-Originating-IP**: Sender's IP address
- **Message-ID**: Unique identifier patterns
- **User-Agent**: Email client information

#### Tools for Analysis
- [MXToolbox Email Header Analyzer](https://mxtoolbox.com/EmailHeaders.aspx)
- [Google Admin Toolbox](https://toolbox.googleapps.com/apps/messageheader/)

### Domain Correlation

#### Related Domain Discovery
```
site:*.company.com
related:company.com
"company.com" -site:company.com
```

#### Infrastructure Analysis
- Mail servers (MX records)
- SPF/DKIM records
- Subdomains and related properties

## Best Practices and Ethics

### Legal Considerations

#### Compliance Requirements
- Respect platform Terms of Service
- Follow data protection regulations (GDPR, CCPA)
- Ensure legitimate business purpose
- Maintain evidence documentation

#### Ethical Guidelines
- Use information responsibly
- Protect privacy of uninvolved individuals
- Avoid harassment or stalking
- Respect opt-out requests

### Data Protection

#### Secure Storage
- Encrypt sensitive email lists
- Implement access controls
- Regular security audits
- Secure disposal of outdated data

#### Documentation Standards
- Source attribution for all discoveries
- Timestamp all searches
- Method documentation
- Confidence level assessment

## Common Pitfalls and Solutions

### False Positives
- **Issue**: Invalid emails appearing valid
- **Solution**: Use multiple verification methods

### Rate Limiting
- **Issue**: Search tools blocking requests
- **Solution**: Use multiple tools, respect limits

### Outdated Information
- **Issue**: Emails no longer active
- **Solution**: Verify recency and cross-check sources

### Legal Complications
- **Issue**: Violating terms of service
- **Solution**: Review platform policies, use legitimate methods

## Integration with Other OSINT Techniques

### Social Media Correlation
- Link discovered emails to social profiles
- Verify through profile contact information
- Cross-reference across platforms

### Phone Number Correlation
- Use services that provide both email and phone
- Verify through contact forms
- Check business directories

### Domain Investigation
- Analyze company infrastructure
- Identify related domains and subdomains
- Map organizational structure

## Automation and Scripting

### Python Libraries
```python
import requests
from email_validator import validate_email
import dns.resolver
```

### Bash Scripts
```bash
#!/bin/bash
# Basic email pattern tester
domain="company.com"
names=("john.smith" "jane.doe" "mike.jones")
for name in "${names[@]}"; do
    echo "Testing: ${name}@${domain}"
done
```

### API Integration
- Hunter.io API
- Clearbit API
- Custom verification scripts

Remember: Always use these techniques responsibly and in compliance with applicable laws and regulations.
