# Instagram OSINT with Osintgram

## Overview

This guide provides a comprehensive introduction to Osintgram, a powerful Python-based Open Source Intelligence (OSINT) tool designed for gathering publicly available information from Instagram accounts. This tool enables security researchers, investigators, and OSINT practitioners to collect valuable intelligence from Instagram profiles through automated, ethical means.

### Important Legal and Ethical Notice

**Critical Warning**: This tool must only be used for:

- Authorized security assessments
- Legitimate investigations with proper authorization
- Personal account auditing (your own accounts)
- Educational purposes in controlled environments
- Ethical hacking with explicit permission

**Prohibited Uses**:

- Unauthorized access to accounts
- Harassment or stalking
- Privacy violations
- Any illegal activities
- Use without target consent (except in authorized investigations)

Misuse of this tool may violate:

- Instagram Terms of Service
- Computer Fraud and Abuse Act (CFAA)
- General Data Protection Regulation (GDPR)
- Local privacy and computer crime laws

**Always obtain proper authorization before conducting OSINT investigations.**

---

## What is Osintgram?

### Tool Capabilities

Osintgram is an Instagram-focused OSINT framework that leverages Instagram's API and public data to extract intelligence including:

**Profile Information**:

- Profile pictures (high resolution)
- Biographical information
- Account metadata
- Follower/following statistics
- Account creation details

**Content Analysis**:

- Posted photos and videos
- Instagram Stories (active ones)
- Comments and engagement data
- Hashtag usage patterns
- Tagged locations

**Network Intelligence**:

- Follower/following lists
- Email addresses (if publicly listed)
- Phone numbers (if publicly available)
- Tagged users and connections
- Interaction patterns

**Location Intelligence**:

- Geotagged post locations
- Frequent check-in patterns
- Address information from posts
- Location history mapping

### Use Cases

**Security Research**:

- Social engineering vulnerability assessment
- Information exposure evaluation
- Privacy audit and assessment
- Digital footprint analysis

**Corporate Security**:

- Employee security awareness testing
- Brand monitoring and protection
- Competitor intelligence (ethical)
- Threat actor profiling

**Law Enforcement** (with proper authorization):

- Missing persons investigations
- Criminal investigations
- Evidence collection
- Witness location

**Personal Use**:

- Audit your own digital footprint
- Privacy settings verification
- Data exposure assessment
- Account security review

---

## System Requirements

### Hardware Requirements

**Minimum**:

- 2GB RAM
- 1GB free disk space
- Stable internet connection

**Recommended**:

- 4GB+ RAM (for large data collection)
- 5GB+ free disk space (for media downloads)
- High-speed internet connection

### Software Requirements

**Operating System**:

- Linux (Ubuntu 20.04+, Debian 10+, Kali Linux)
- macOS (10.14+)
- Windows (via WSL2)

**Required Software**:

- Python 3.6 or higher
- pip3 (Python package manager)
- Git version control
- Text editor (nano, vim, or VS Code)

**Recommended Environment**:

- Kali Linux (pre-configured security distribution)
- Ubuntu-based Linux VM
- Google Cloud Platform free tier instance
- AWS EC2 free tier instance

### Dummy Instagram Account Requirements

**Critical**: Never use your personal Instagram account with Osintgram.

**Create a Dedicated Test Account**:

1. **New Email Address**: Create a fresh email (not linked to your identity)
2. **Unique Username**: Choose a non-identifying username
3. **Minimal Profile**: No personal information
4. **No Personal Connections**: Don't follow friends or family
5. **Burner Phone Number**: Use temporary SMS service if required

**Account Security**:

- Use strong, unique password
- Enable two-factor authentication
- Don't link to other social accounts
- Consider using VPN during creation

**Why This Matters**:

- Instagram may suspend accounts for automated activity
- Protects your personal identity
- Maintains operational security
- Prevents account linkage to investigations

---

## Installation Guide

### Step 1: Prepare Your Environment

**Update System Packages**:

```bash
# Update package repositories
sudo apt update

# Upgrade existing packages
sudo apt upgrade -y

# Install system dependencies
sudo apt install git curl build-essential -y
```

### Step 2: Install Python and Dependencies

**Install Python 3 and pip**:

```bash
# Install Python 3
sudo apt install python3 python3-pip -y

# Verify installation
python3 --version  # Should show Python 3.6+
pip3 --version     # Should show pip version

# Install Python development tools
sudo apt install python3-dev python3-venv -y
```

### Step 3: Clone Osintgram Repository

```bash
# Navigate to desired installation directory
cd ~

# Clone the Osintgram repository
git clone https://github.com/Datalux/Osintgram.git

# Navigate into the directory
cd Osintgram

# View directory contents
ls -la
```

**Expected Directory Structure**:

```
Osintgram/
├── main.py           # Main executable
├── requirements.txt  # Python dependencies
├── src/              # Source code modules
├── config/           # Configuration directory (to be created)
└── output/           # Output directory (auto-created)
```

### Step 4: Install Python Dependencies

```bash
# Install all required Python libraries
pip3 install -r requirements.txt

# Alternative: Install with user permissions (no sudo)
pip3 install --user -r requirements.txt

# Verify installations
pip3 list | grep -i instagram
```

**Key Dependencies Installed**:

- `instagram-private-api`: Instagram API wrapper
- `requests`: HTTP library
- `prettytable`: Formatted output display
- `geopy`: Location data processing
- `pillow`: Image processing

### Step 5: Configure Authentication

**Create Configuration Directory**:

```bash
# Create config directory
mkdir config

# Navigate to config directory
cd config
```

**Create Username Configuration**:

```bash
# Create username file (replace with your dummy account username)
echo "osint_test_account_2025" > username.conf

# Verify file creation
cat username.conf
```

**Create Password Configuration**:

```bash
# Create password file (replace with your dummy account password)
echo "YourStrongPassword123!" > pw.conf

# Verify file creation
cat pw.conf

# Secure the password file
chmod 600 pw.conf
```

**Create Settings File**:

```bash
# Create empty settings JSON
echo "[]" > settings.json

# Verify file creation
cat settings.json
```

**Security Best Practices**:

```bash
# Restrict permissions on config directory
chmod 700 ../config

# Restrict permissions on sensitive files
chmod 600 username.conf pw.conf

# Verify permissions
ls -la
```

**Expected Config Directory Structure**:

```
config/
├── username.conf  # Your dummy Instagram username
├── pw.conf        # Your dummy Instagram password
└── settings.json  # Instagram session settings
```

### Step 6: Verify Installation

```bash
# Navigate back to main directory
cd ..

# Test Osintgram help menu
python3 main.py --help

# Expected output: Usage information and options
```

---

## Using Osintgram

### Basic Command Structure

**Standard Syntax**:

```bash
python3 main.py [target_username]
```

**Example**:

```bash
# Investigate Instagram user "example_user"
python3 main.py example_user
```

### Initial Login and Session

**First Run**:

1. Osintgram reads credentials from `config/username.conf` and `config/pw.conf`
2. Authenticates with Instagram API
3. Establishes session
4. Saves session data to `config/settings.json`
5. Presents interactive command prompt

**Expected Output**:

```
[*] Logging in as: osint_test_account_2025
[+] Login successful!
[*] Target: example_user
[+] Profile loaded

>
```

### Available Commands

**List All Commands**:

```bash
# Display all available OSINT modules
list
```

**Command Categories**:

#### Profile Information Commands

| Command      | Description                 | Output                                            |
| ------------ | --------------------------- | ------------------------------------------------- |
| `info`       | Display account information | Username, full name, bio, followers, following    |
| `propic`     | Download profile picture    | Saves high-res profile image to `output/`         |
| `userinfo`   | Detailed user metadata      | Account ID, verification status, business account |
| `followers`  | Get follower list           | List of accounts following the target             |
| `followings` | Get following list          | List of accounts the target follows               |

#### Content Collection Commands

| Command    | Description             | Output                                 |
| ---------- | ----------------------- | -------------------------------------- |
| `stories`  | Download active stories | Saves all current stories to `output/` |
| `photos`   | Get all posted photos   | Downloads or lists all posted images   |
| `videos`   | Get all posted videos   | Downloads or lists all posted videos   |
| `tagged`   | Get tagged photos       | Photos where target is tagged          |
| `comments` | Extract comments        | All comments made by the target        |
| `captions` | Extract captions        | All captions from target's posts       |

#### Location Intelligence Commands

| Command       | Description       | Output                          |
| ------------- | ----------------- | ------------------------------- |
| `addrs`       | Extract addresses | Geotagged locations from posts  |
| `places`      | Get tagged places | Named locations from posts      |
| `geolocation` | Map locations     | Geographic coordinates of posts |

#### Network Analysis Commands

| Command        | Description             | Output                                   |
| -------------- | ----------------------- | ---------------------------------------- |
| `fwersemail`   | Follower emails         | Public emails of followers               |
| `fwingsemail`  | Following emails        | Public emails of accounts target follows |
| `fwersnumber`  | Follower phone numbers  | Public phone numbers of followers        |
| `fwingsnumber` | Following phone numbers | Public phone numbers of following        |
| `hashtags`     | Hashtag usage           | Most used hashtags by target             |

#### Advanced Analysis Commands

| Command          | Description          | Output                         |
| ---------------- | -------------------- | ------------------------------ |
| `total_comments` | Count all comments   | Total comment count            |
| `total_likes`    | Count all likes      | Total likes on posts           |
| `media_type`     | Analyze content type | Breakdown of photos vs videos  |
| `timeline`       | Activity timeline    | Posting frequency and patterns |

### Practical Usage Examples

#### Example 1: Basic Profile Investigation

```bash
# Start Osintgram
python3 main.py target_username

# View available commands
> list

# Get basic account info
> info

# Download profile picture
> propic

# Get follower count and list
> followers

# Exit
> quit
```

#### Example 2: Location Intelligence Gathering

```bash
python3 main.py target_username

# Extract all geotagged addresses
> addrs

# Get tagged places/locations
> places

# Download geotagged photos
> photos

# Exit
> quit
```

**Expected Output**:

```
[*] Extracting addresses...
[+] Found 15 geotagged locations:

1. Starbucks - New York, NY
2. Central Park - New York, NY
3. Brooklyn Bridge - Brooklyn, NY
...

[*] Results saved to: output/target_username_addresses.txt
```

#### Example 3: Email and Contact Discovery

```bash
python3 main.py target_username

# Get emails of people target follows
> fwingsemail

# Get emails of followers
> fwersemail

# Get phone numbers (if available)
> fwingsnumber

# Exit
> quit
```

**Expected Output**:

```
[*] Extracting emails from following list...
[+] Found 8 email addresses:

contact@example.com (username: example_account)
info@business.com (username: business_account)
...

[*] Results saved to: output/target_username_following_emails.txt
```

#### Example 4: Content Analysis

```bash
python3 main.py target_username

# Download all active stories
> stories

# Get all captions
> captions

# Extract hashtags
> hashtags

# Get comment statistics
> total_comments

# Exit
> quit
```

### Output Management

**Output Directory Structure**:

```
Osintgram/
└── output/
    ├── target_username_profile.jpg
    ├── target_username_stories/
    │   ├── story_001.jpg
    │   └── story_002.mp4
    ├── target_username_addresses.txt
    ├── target_username_following_emails.txt
    └── target_username_analysis.json
```

**Organizing Results**:

```bash
# Create investigation-specific directory
mkdir ~/investigations/case_001_target_username

# Move output to investigation folder
mv output/target_username_* ~/investigations/case_001_target_username/

# Create documentation
cd ~/investigations/case_001_target_username/
nano investigation_notes.md
```

---

## Troubleshooting Common Issues

### Issue 1: API Rate Limiting

**Symptoms**:

```
[!] Error: Rate limit exceeded
[!] Too many requests in short period
```

**Causes**:

- Too many requests in short timeframe
- Instagram anti-automation measures
- Suspicious account activity detected

**Solutions**:

```bash
# Wait 15-30 minutes before retrying
sleep 1800 && python3 main.py target_username

# Use delays between commands
# In Osintgram prompt, wait 30-60 seconds between commands

# Reduce request frequency in future sessions
```

**Prevention**:

- Space out commands (30+ seconds between each)
- Avoid running multiple sessions simultaneously
- Use established dummy account (aged 1+ weeks)
- Limit daily usage (max 2-3 hours)

### Issue 2: Login Failures

**Symptoms**:

```
[!] Login failed
[!] Incorrect username or password
```

**Solutions**:

```bash
# Verify credentials
cat config/username.conf
cat config/pw.conf

# Check for extra spaces or newlines
# Recreate config files
cd config
echo "correct_username" > username.conf
echo "correct_password" > pw.conf

# Clear settings cache
rm settings.json
echo "[]" > settings.json

# Retry login
cd ..
python3 main.py target_username
```

### Issue 3: Two-Factor Authentication

**Symptoms**:

```
[!] Two-factor authentication required
[!] Please enter security code
```

**Solution**:

**Option 1: Disable 2FA on dummy account** (less secure):

1. Log into dummy Instagram account via web
2. Go to Settings → Security
3. Disable two-factor authentication
4. Retry Osintgram

**Option 2: Use backup codes**:

1. Generate backup codes from Instagram settings
2. Enter when prompted by Osintgram

### Issue 4: Challenge Required

**Symptoms**:

```
[!] Challenge required
[!] Instagram is requesting additional verification
```

**Causes**:

- New account detection
- Suspicious activity flagged
- Geographic location change
- Automated behavior detected

**Solutions**:

```bash
# Log into dummy account via web browser
# Complete any verification challenges
# Wait 24-48 hours
# Retry with Osintgram
```

**Prevention**:

- Age dummy account (use normally for 1-2 weeks before OSINT)
- Follow a few accounts organically
- Post occasional content
- Use consistent IP address

### Issue 5: Target Account Private

**Symptoms**:

```
[!] Account is private
[!] Limited information available
```

**Limitations**:

- Cannot access posts, stories, or followers
- Only public profile information available
- Must send follow request and be accepted

**Workaround**:

- Focus on public information only
- Use other OSINT techniques (Sherlock, etc.)
- Investigate connections and tagged content

### Issue 6: Dependencies Not Installed

**Symptoms**:

```
ModuleNotFoundError: No module named 'instagram_private_api'
```

**Solution**:

```bash
# Reinstall all dependencies
pip3 install -r requirements.txt --force-reinstall

# Or install specific missing module
pip3 install instagram_private_api

# Verify installation
pip3 list | grep instagram
```

---

## Best Practices and OpSec

### Operational Security

**Account Separation**:

- Never mix personal and OSINT accounts
- Use different email for each dummy account
- Don't follow people you know
- Avoid linking accounts

**Network Security**:

```bash
# Use VPN for investigations
sudo openvpn --config ~/vpn/config.ovpn

# Or use Tor (advanced)
sudo apt install tor
sudo systemctl start tor
# Configure Osintgram to use Tor SOCKS proxy
```

**Data Security**:

```bash
# Encrypt investigation data
# Install encryption tools
sudo apt install ecryptfs-utils

# Encrypt output directory
ecryptfs-mount-private ~/investigations

# Secure delete when done
shred -vfz -n 10 sensitive_data.txt
```

### Legal Compliance

**Documentation**:

- Maintain authorization records
- Document investigation scope
- Record timestamps and actions
- Keep chain of custody

**Limitations**:

- Only collect publicly available data
- Don't attempt to bypass authentication
- Respect Terms of Service
- Comply with local laws

### Ethical Guidelines

**Do**:

- Obtain proper authorization
- Use for legitimate purposes
- Respect privacy boundaries
- Document methodology
- Secure collected data

**Don't**:

- Harass or stalk individuals
- Share collected data inappropriately
- Use for malicious purposes
- Violate platform ToS
- Bypass security measures

---

## Advanced Techniques

### Automating Data Collection

**Create Investigation Script**:

```bash
#!/bin/bash
# instagram_osint.sh - Automated Osintgram collection

TARGET=$1

if [ -z "$TARGET" ]; then
    echo "Usage: ./instagram_osint.sh [target_username]"
    exit 1
fi

echo "=== Instagram OSINT Investigation ==="
echo "Target: $TARGET"
echo "Date: $(date)"
echo

# Create output directory
mkdir -p investigations/$TARGET

# Run Osintgram with command sequence
cat << EOF | python3 main.py $TARGET
info
propic
followers
followings
addrs
fwingsemail
stories
hashtags
quit
EOF

# Move results
mv output/${TARGET}_* investigations/$TARGET/

echo
echo "=== Investigation Complete ==="
echo "Results saved to: investigations/$TARGET/"
```

**Usage**:

```bash
chmod +x instagram_osint.sh
./instagram_osint.sh target_username
```

### Batch Processing Multiple Targets

```bash
#!/bin/bash
# batch_osint.sh - Process multiple targets

TARGETS_FILE=$1

while IFS= read -r target; do
    echo "[*] Processing: $target"
    ./instagram_osint.sh "$target"
    echo "[*] Waiting 5 minutes before next target..."
    sleep 300
done < "$TARGETS_FILE"
```

**Create targets file**:

```bash
echo "target1" > targets.txt
echo "target2" >> targets.txt
echo "target3" >> targets.txt

# Run batch processing
./batch_osint.sh targets.txt
```

### Integration with Other OSINT Tools

**Combine with Sherlock**:

```bash
# Find Instagram username via Sherlock
python3 sherlock potential_username --site Instagram

# If found, investigate with Osintgram
python3 ~/Osintgram/main.py potential_username
```

**Combine with Holehe**:

```bash
# Find Instagram account from email
holehe target@example.com | grep Instagram

# If Instagram registered, investigate
python3 ~/Osintgram/main.py username_from_email
```

**Export to Analysis Tools**:

```bash
# Export data to CSV for spreadsheet analysis
# Extract emails to CSV
grep @ output/target_following_emails.txt | awk '{print $0}' > analysis.csv

# Import into LibreOffice Calc or Excel for analysis
```

---

## Summary

### Key Takeaways

1. **Osintgram is Powerful**: Automates Instagram intelligence gathering
2. **Use Ethically**: Always obtain authorization and respect privacy
3. **Dummy Accounts Required**: Never use personal Instagram accounts
4. **Rate Limits Exist**: Instagram throttles automated activity
5. **Public Data Only**: Cannot bypass privacy settings
6. **Legal Compliance**: Follow all applicable laws and ToS

### Investigation Workflow

```
1. Obtain Authorization
2. Create/Configure Dummy Account
3. Install and Configure Osintgram
4. Run Targeted Commands
5. Collect and Organize Data
6. Analyze Findings
7. Document Results
8. Secure/Delete Sensitive Data
```

### Next Steps

**Expand Your OSINT Toolkit**:

- Master Sherlock for multi-platform username searches
- Learn Holehe for email-to-platform mapping
- Explore Maltego for relationship visualization
- Study social media forensics techniques

**Practice Responsibly**:

- Test on your own accounts first
- Understand legal boundaries
- Develop investigation methodology
- Build ethical framework

**Further Resources**:

- [Osintgram GitHub Repository](https://github.com/Datalux/Osintgram)
- OSINT Framework (osintframework.com)
- IntelTechniques Instagram OSINT Guide
- Bellingcat Social Media Investigation Guide

Remember: With great power comes great responsibility. Use Osintgram ethically, legally, and professionally.

## Links

- [Instagram osint](https://youtu.be/NWyqSbnsvGU?si=0_mqFffHwp33KbAG)
