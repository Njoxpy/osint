# Sherlock OSINT Learning Roadmap

## Overview

Sherlock is a powerful command-line tool for discovering social media accounts across hundreds of platforms using username enumeration. This comprehensive guide will take you from beginner to advanced usage, helping you master username investigation techniques.

## What is Sherlock?

Sherlock is an open-source intelligence (OSINT) tool that searches for usernames across multiple social networks and platforms. It automates the process of checking whether a specific username exists on various websites, saving investigators significant time and effort.

### Key Capabilities

- **Multi-Platform Search**: Query 300+ social media and online platforms simultaneously
- **Automated Detection**: Intelligent response analysis to confirm account existence
- **Privacy Protection**: Built-in Tor support for anonymous investigations
- **Flexible Output**: Export results in text, JSON, or CSV formats
- **Extensible Framework**: Add custom platforms to expand search capabilities

### Use Cases

- Digital footprint analysis
- Identity verification and correlation
- Impersonation detection
- Brand monitoring and protection
- Investigative journalism
- Cybersecurity research

---

## Beginner Level: Getting Started

### Learning Objectives

At this level, you will:

- Understand Sherlock's core functionality and purpose
- Install and configure the tool properly
- Execute basic username searches
- Save and interpret search results
- Comprehend HTTP response codes and their meanings

### Required Skills

#### Technical Prerequisites

- Basic command-line interface (CLI) knowledge
- Python 3.7 or higher installed
- Understanding of pip package management
- Familiarity with Git version control

#### OSINT Fundamentals

- HTTP status codes interpretation:
  - **200**: Account found and accessible
  - **404**: Account not found or does not exist
  - **403**: Access forbidden (may exist but restricted)
  - **429**: Rate limited (too many requests)

### Installation Process

#### Step 1: System Requirements

Ensure your system has the necessary dependencies:

```bash
# Check Python version (must be 3.7+)
python3 --version

# Check pip installation
pip3 --version

# Install Git if not already installed
# Ubuntu/Debian
sudo apt-get install git

# macOS
brew install git
```

#### Step 2: Clone Sherlock Repository

```bash
# Clone the official Sherlock repository
git clone https://github.com/sherlock-project/sherlock.git

# Navigate to the Sherlock directory
cd sherlock
```

#### Step 3: Install Dependencies

```bash
# Install required Python packages
pip3 install -r requirements.txt

# Alternative: Install in a virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip3 install -r requirements.txt
```

### Basic Usage

#### Single Username Search

```bash
# Search for a single username across all platforms
python3 sherlock username

# Example
python3 sherlock njoxlee
```

#### Understanding the Output

Sherlock displays:

- **Green text**: Account found on platform
- **Red text**: Account not found
- **Platform URL**: Direct link to discovered accounts
- **Response time**: Speed of platform response

#### Saving Results

**Save to Text File**

```bash
# Export results to a text file
python3 sherlock njoxlee --output results.txt

# Specify custom output path
python3 sherlock njoxlee --output ~/Documents/investigations/results.txt
```

**Save to JSON Format**

```bash
# Export structured data in JSON format
python3 sherlock njoxlee --json results.json
```

**Save to CSV Format**

```bash
# Export to CSV for spreadsheet analysis
python3 sherlock njoxlee --csv results.csv
```

### Practical Exercises

#### Exercise 1: First Investigation

1. Choose a public figure or fictional character username
2. Run a Sherlock search
3. Visit 5 discovered accounts manually
4. Document the following:
   - Profile information consistency
   - Account creation dates (if visible)
   - Activity patterns
   - Linked accounts or websites

#### Exercise 2: Output Analysis

1. Run a search and save to JSON format
2. Open the JSON file and examine the structure
3. Identify:
   - Total platforms checked
   - Successful account discoveries
   - Failed or inaccessible platforms

#### Exercise 3: Manual Verification

1. Search for a username with common results
2. Visit each discovered account
3. Look for verification indicators:
   - Profile completeness
   - Post history and timestamps
   - Follower/following patterns
   - Profile photo consistency

---

## Intermediate Level: Investigative Techniques

### Learning Objectives

At this level, you will:

- Conduct multi-username correlation analysis
- Implement privacy and anonymity measures
- Export data for structured analysis
- Manually verify account authenticity
- Integrate Sherlock with complementary OSINT tools
- Build comprehensive username profiles

### Advanced Skills

#### Multi-Username Searches

```bash
# Search multiple usernames simultaneously
python3 sherlock username1 username2 username3

# Example with output
python3 sherlock njoxlee njox_lee lee_njox --output multi_results.txt
```

#### Privacy Protection with Tor

**Installing Tor**

```bash
# Ubuntu/Debian
sudo apt-get install tor

# macOS
brew install tor

# Start Tor service
sudo service tor start  # Linux
brew services start tor  # macOS
```

**Using Sherlock with Tor**

```bash
# Route all requests through Tor network
python3 sherlock njoxlee --tor

# Combine Tor with output saving
python3 sherlock njoxlee --tor --output anonymous_results.json
```

**Why Use Tor?**

- Masks your IP address from target platforms
- Prevents tracking and logging
- Essential for sensitive investigations
- Protects investigator identity

#### Advanced Search Options

```bash
# Set custom timeout for slow platforms
python3 sherlock username --timeout 30

# Search specific platforms only
python3 sherlock username --site twitter --site instagram

# Verbose output for debugging
python3 sherlock username --verbose

# Print found URLs only
python3 sherlock username --print-found

# Use proxy server
python3 sherlock username --proxy http://proxy-server:port
```

### Account Correlation Methodology

#### Step 1: Data Collection

```bash
# Search with all variations of the username
python3 sherlock john_smith johnsmith john.smith \
  --output correlation_data.json --tor
```

#### Step 2: Manual Verification Checklist

**Visual Analysis**

- [ ] Profile pictures match or are similar
- [ ] Background/banner images show consistency
- [ ] Visual style and aesthetic are similar
- [ ] Logo or branding elements present

**Biographical Information**

- [ ] Real name or display name matches
- [ ] Location information consistent
- [ ] Biography/description similar themes
- [ ] Language and writing style consistent

**Content Analysis**

- [ ] Topics of interest align
- [ ] Posting times and frequency similar
- [ ] Content quality and format consistent
- [ ] Links to same websites or profiles

**Technical Indicators**

- [ ] Linked email addresses (partial matches)
- [ ] Linked phone numbers
- [ ] Connected social accounts
- [ ] Website URLs in profiles

**Temporal Analysis**

- [ ] Account creation dates proximity
- [ ] Activity timeline correlation
- [ ] Posting schedule patterns
- [ ] Life event mentions alignment

#### Step 3: Documentation

Create a correlation matrix:

| Platform  | Username | Profile Pic Match | Bio Similar | Links Present | Confidence |
| --------- | -------- | ----------------- | ----------- | ------------- | ---------- |
| Twitter   | njoxlee  | Yes               | Yes         | Website link  | High       |
| GitHub    | njoxlee  | Yes               | Similar     | Same website  | High       |
| Instagram | njox_lee | Similar           | No          | No            | Medium     |
| Reddit    | lee_njox | No                | No          | No            | Low        |

### Integration with Complementary Tools

#### Holehe - Email Discovery

```bash
# Install Holehe
pip3 install holehe

# Check email across platforms
holehe email@example.com

# Combine with Sherlock results
python3 sherlock username --output sherlock.json
holehe discovered_email@example.com --output holehe.json
```

#### WhatsMyName - Extended Platform Coverage

```bash
# Clone WhatsMyName
git clone https://github.com/WebBreacher/WhatsMyName.git
cd WhatsMyName

# Run search
python3 web_accounts_list_checker.py -u username
```

#### Social-Analyzer - Deep Profile Analysis

```bash
# Install Social-Analyzer
pip3 install social-analyzer

# Run comprehensive analysis
social-analyzer --username "username" --metadata
```

### Practical Projects

#### Project 1: Mini OSINT Report

**Objective**: Create a comprehensive username investigation report

**Steps**:

1. Choose a target username (use your own or public figure)
2. Run Sherlock with Tor protection
3. Document all discovered accounts
4. Manually verify each account
5. Create a written report including:
   - Executive summary
   - Methodology description
   - Platform-by-platform findings
   - Correlation analysis
   - Confidence assessment
   - Supporting screenshots

**Report Template**:

```markdown
# Username Investigation Report

## Subject Information

- Target Username: [username]
- Investigation Date: [date]
- Investigator: [your name]

## Methodology

- Tools Used: Sherlock, Holehe, Manual verification
- Platforms Checked: 300+
- Privacy Measures: Tor routing

## Findings Summary

- Accounts Discovered: [number]
- High Confidence Matches: [number]
- Medium Confidence: [number]
- Low Confidence: [number]

## Detailed Analysis

[Platform-by-platform breakdown]

## Correlation Evidence

[Links between accounts]

## Conclusions

[Final assessment]
```

#### Project 2: Username Variation Analysis

**Objective**: Discover account naming patterns

**Steps**:

1. Generate username variations:
   - firstname.lastname
   - firstnamelastname
   - firstname_lastname
   - first.last
   - firstinitiallastname
2. Search all variations with Sherlock
3. Analyze which variations are most commonly used
4. Identify platform-specific naming preferences

---

## Advanced Level: Professional Investigation

### Learning Objectives

At this level, you will:

- Modify and extend Sherlock's capabilities
- Understand the underlying Python codebase
- Add custom platforms to the search database
- Automate investigation workflows
- Build integrated OSINT toolchains
- Conduct large-scale digital footprint analysis
- Detect impersonation and fake accounts

### Expert Skills

#### Understanding Sherlock's Architecture

**Core Components**:

- `sherlock/sherlock.py`: Main execution logic
- `sherlock/resources/data.json`: Platform database
- `sherlock/notify.py`: Result notification system
- `sherlock/sites.py`: Site-specific logic

**Platform Detection Methods**:

1. **Status Code**: HTTP 200 = exists, 404 = not found
2. **Error Message**: Specific text indicating account absence
3. **Response URL**: Redirect patterns
4. **Response Time**: Timing-based detection

#### Adding Custom Platforms

**Step 1: Analyze the Target Platform**

Test manually:

```bash
# Try accessing a known existing account
curl -I https://example.com/knownuser

# Try a non-existent account
curl -I https://example.com/nonexistentuser123456

# Note the differences in response
```

**Step 2: Edit data.json**

Open `sherlock/resources/data.json` and add your platform:

```json
{
  "NewPlatform": {
    "errorType": "status_code",
    "errorMsg": 404,
    "url": "https://newplatform.com/user/{username}",
    "urlMain": "https://newplatform.com",
    "username_claimed": "known_user",
    "username_unclaimed": "noonehas_this_username"
  }
}
```

**Detection Method Options**:

```json
// Method 1: Status Code Detection
{
  "errorType": "status_code",
  "errorMsg": 404
}

// Method 2: Message Detection
{
  "errorType": "message",
  "errorMsg": "User not found"
}

// Method 3: Response URL Detection
{
  "errorType": "response_url",
  "errorUrl": "https://example.com/404"
}
```

**Step 3: Test Your Addition**

```bash
# Test with known usernames
python3 sherlock known_user --site NewPlatform --verbose

# Test with unlikely username
python3 sherlock unlikely_username_12345 --site NewPlatform --verbose
```

#### Advanced Search Techniques

```bash
# Search with multiple sites filter
python3 sherlock username \
  --site Twitter --site Instagram --site GitHub \
  --tor --timeout 45 --output results.json

# Use local data file (custom platforms)
python3 sherlock username --local custom_data.json

# Disable SSL verification (use cautiously)
python3 sherlock username --no-check-ssl

# Custom user agent
python3 sherlock username --user-agent "Custom OSINT Bot 1.0"
```

#### Automation and Scripting

**Automated Recurring Scans**

Create `auto_scan.sh`:

```bash
#!/bin/bash

# Configuration
USERNAME="target_username"
OUTPUT_DIR="./scans"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create output directory
mkdir -p $OUTPUT_DIR

# Run Sherlock scan
cd sherlock
source venv/bin/activate
python3 sherlock $USERNAME \
  --tor \
  --json "$OUTPUT_DIR/scan_$TIMESTAMP.json" \
  --timeout 30

# Compare with previous scan
python3 ../compare_scans.py \
  "$OUTPUT_DIR/scan_$TIMESTAMP.json" \
  "$OUTPUT_DIR/latest.json"

# Update latest
cp "$OUTPUT_DIR/scan_$TIMESTAMP.json" "$OUTPUT_DIR/latest.json"

# Send notification if changes detected
# Add your notification logic here
```

**Comparison Script (compare_scans.py)**:

```python
import json
import sys

def compare_scans(new_file, old_file):
    with open(new_file, 'r') as f:
        new_data = json.load(f)

    try:
        with open(old_file, 'r') as f:
            old_data = json.load(f)
    except FileNotFoundError:
        print("No previous scan found.")
        return

    # Find new accounts
    new_accounts = []
    for platform, data in new_data.items():
        if platform not in old_data:
            new_accounts.append(platform)

    if new_accounts:
        print(f"New accounts found: {', '.join(new_accounts)}")
        # Send alert notification
    else:
        print("No new accounts detected.")

if __name__ == "__main__":
    compare_scans(sys.argv[1], sys.argv[2])
```

**Set up Cron Job (Linux/macOS)**:

```bash
# Edit crontab
crontab -e

# Add daily scan at 2 AM
0 2 * * * /path/to/auto_scan.sh >> /path/to/scan.log 2>&1

# Add weekly scan every Sunday
0 2 * * 0 /path/to/auto_scan.sh >> /path/to/scan.log 2>&1
```

#### Integrated OSINT Toolchain

**Complete Investigation Script**:

```python
#!/usr/bin/env python3
import subprocess
import json
import os
from datetime import datetime

def run_sherlock(username):
    """Run Sherlock search"""
    cmd = [
        "python3", "sherlock/sherlock.py", username,
        "--tor", "--json", f"results_{username}_sherlock.json"
    ]
    subprocess.run(cmd)

def run_holehe(email):
    """Check email across platforms"""
    cmd = ["holehe", email, "--output", f"results_holehe.json"]
    subprocess.run(cmd)

def check_breaches(email):
    """Check for data breaches"""
    # Use haveibeenpwned API or similar
    pass

def generate_report(username, data):
    """Generate HTML report"""
    report = f"""
    <html>
    <head><title>OSINT Report: {username}</title></head>
    <body>
        <h1>Investigation Report</h1>
        <p>Date: {datetime.now()}</p>
        <h2>Sherlock Results</h2>
        <ul>
    """

    for platform, info in data.items():
        if info.get('exists'):
            report += f"<li>{platform}: {info.get('url')}</li>"

    report += """
        </ul>
    </body>
    </html>
    """

    with open(f"report_{username}.html", 'w') as f:
        f.write(report)

def main():
    username = input("Enter username to investigate: ")
    email = input("Enter associated email (optional): ")

    print("[*] Running Sherlock...")
    run_sherlock(username)

    if email:
        print("[*] Running Holehe...")
        run_holehe(email)
        print("[*] Checking breaches...")
        check_breaches(email)

    print("[*] Generating report...")
    with open(f"results_{username}_sherlock.json", 'r') as f:
        data = json.load(f)
    generate_report(username, data)

    print(f"[+] Report generated: report_{username}.html")

if __name__ == "__main__":
    main()
```

#### Integration with Advanced Tools

**Maltego Integration**

- Import Sherlock results into Maltego
- Visualize account relationships
- Create network graphs
- Identify hidden connections

**SpiderFoot Integration**

```bash
# Install SpiderFoot
git clone https://github.com/smicallef/spiderfoot.git
cd spiderfoot
pip3 install -r requirements.txt

# Run web interface
python3 sf.py -l 127.0.0.1:5001

# Use Sherlock results as starting point
# SpiderFoot will automatically expand investigation
```

**Recon-ng Framework**

```bash
# Install Recon-ng
pip3 install recon-ng

# Launch
recon-ng

# Use Sherlock data in modules
[recon-ng][default] > modules load recon/profiles-profiles/namechk
[recon-ng][default][namechk] > options set SOURCE username
[recon-ng][default][namechk] > run
```

### Advanced Projects

#### Project 1: Digital Footprint Mapper

**Objective**: Create a comprehensive map of your complete online presence

**Requirements**:

- Sherlock for username discovery
- Holehe for email verification
- Manual investigation of discovered accounts
- Data visualization tools

**Steps**:

1. Search all known username variations
2. Search all email addresses
3. Manually verify each discovered account
4. Download profile data (where permitted)
5. Create relationship diagram
6. Set up monitoring for new account creation

**Deliverables**:

- Complete account inventory
- Visual network map
- Privacy assessment report
- Remediation recommendations

#### Project 2: Impersonation Detection System

**Objective**: Build a system to detect fake accounts impersonating a brand or individual

**Components**:

1. **Username Variation Generator**

   - Generate common misspellings
   - Create lookalike variations
   - Test Unicode character substitutions

2. **Automated Scanning**

   - Daily Sherlock scans for variations
   - Alert system for new discoveries
   - Confidence scoring algorithm

3. **Verification Engine**

   - Profile content analysis
   - Image comparison
   - Activity pattern detection

4. **Reporting Dashboard**
   - Real-time account monitoring
   - Risk assessment scoring
   - Takedown recommendation system

**Implementation Example**:

```python
import itertools
import string

def generate_variations(username):
    """Generate common username variations"""
    variations = [username]

    # Common substitutions
    substitutions = {
        'a': ['4', '@'],
        'e': ['3'],
        'i': ['1', '!'],
        'o': ['0'],
        's': ['5', '$']
    }

    # Generate substitution combinations
    chars = list(username)
    for i, char in enumerate(chars):
        if char.lower() in substitutions:
            for sub in substitutions[char.lower()]:
                new_variation = chars.copy()
                new_variation[i] = sub
                variations.append(''.join(new_variation))

    # Add common suffixes
    suffixes = ['official', '2023', 'real', 'verified', 'hq']
    for suffix in suffixes:
        variations.append(f"{username}{suffix}")
        variations.append(f"{username}_{suffix}")

    return list(set(variations))

# Usage
username = "brandname"
variations = generate_variations(username)
print(f"Checking {len(variations)} variations...")
```

#### Project 3: Historical Username Tracking

**Objective**: Track username changes and account migrations over time

**Tools Needed**:

- Wayback Machine API
- Sherlock for current state
- Archive.org snapshots
- Social media APIs (where available)

**Process**:

1. Current state snapshot with Sherlock
2. Historical lookup in web archives
3. API historical data retrieval
4. Timeline construction
5. Pattern analysis

---

## Summary and Learning Path

### Skill Progression Matrix

| Level            | Focus Area       | Core Tools            | Key Skills                                               | Estimated Time |
| ---------------- | ---------------- | --------------------- | -------------------------------------------------------- | -------------- |
| **Beginner**     | Basic Operations | Sherlock, CLI         | Installation, basic searches, output saving              | 1-2 weeks      |
| **Intermediate** | Investigation    | Sherlock, Tor, Holehe | Multi-username correlation, privacy, manual verification | 4-6 weeks      |
| **Advanced**     | Automation       | Python, JSON, APIs    | Custom platforms, scripting, toolchain integration       | 3-6 months     |

### Recommended Learning Sequence

**Month 1: Foundation**

- Week 1: Installation and basic usage
- Week 2: Output formats and interpretation
- Week 3: Manual verification techniques
- Week 4: First complete investigation

**Month 2-3: Intermediate Skills**

- Week 5-6: Multi-username correlation
- Week 7-8: Privacy and anonymity with Tor
- Week 9-10: Tool integration (Holehe, WhatsMyName)
- Week 11-12: Mini OSINT report project

**Month 4-6: Advanced Mastery**

- Month 4: Python scripting and automation
- Month 5: Custom platform addition and testing
- Month 6: Complete toolchain and advanced projects

### Best Practices

#### Operational Security

- Always use VPN or Tor for sensitive investigations
- Maintain separate investigation personas
- Use virtual machines for isolation
- Clear browser cache and cookies regularly

#### Legal and Ethical Compliance

- Only use publicly available information
- Respect platform terms of service
- Comply with GDPR and privacy regulations
- Document investigation methodology
- Obtain proper authorization when required

#### Quality Assurance

- Verify findings through multiple sources
- Document confidence levels
- Maintain chain of custody
- Regular tool updates and testing
- Peer review of significant findings

### Resources for Further Learning

#### Official Documentation

- [Sherlock GitHub Repository](https://github.com/sherlock-project/sherlock)
- [Sherlock Documentation](https://sherlock-project.github.io/)

#### Complementary Tools

- [Holehe](https://github.com/megadose/holehe) - Email to account matching
- [WhatsMyName](https://github.com/WebBreacher/WhatsMyName) - Username enumeration
- [Maigret](https://github.com/soxoj/maigret) - Advanced username collection
- [Social-Analyzer](https://github.com/qeeqbox/social-analyzer) - Profile analysis

#### Learning Communities

- r/OSINT - Reddit community
- OSINT Curious - Webinars and resources
- Bellingcat - Investigation techniques
- Trace Labs - OSINT CTF events

Remember: OSINT investigations must always be conducted ethically and legally. Use these tools responsibly and respect individual privacy rights.
