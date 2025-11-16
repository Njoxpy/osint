# Beginner's Guide to Sherlock

## Module Overview

This comprehensive beginner's guide introduces you to Sherlock, a powerful username enumeration tool used in Open Source Intelligence (OSINT) investigations. By the end of this module, you will understand how to install, configure, and effectively use Sherlock for username discovery across multiple platforms.

### Learning Objectives

By completing this module, you will be able to:

1. Understand Sherlock's core functionality and capabilities
2. Successfully install and configure Sherlock on your system
3. Execute basic and advanced username searches
4. Interpret search results accurately
5. Save and organize investigation data
6. Avoid common beginner mistakes
7. Conduct preliminary account verification

---

## 1. Understanding Sherlock

### What is Sherlock?

Sherlock is a Python-based OSINT tool designed to automate the process of username enumeration across hundreds of social media platforms, forums, and websites. Rather than manually checking each platform individually, Sherlock streamlines the investigation process by simultaneously querying over 400 platforms for a specific username.

### Core Functionality

**Primary Purpose**: Determine whether a specific username exists on various online platforms

**How It Works**:

1. Takes a username as input
2. Queries hundreds of websites simultaneously
3. Analyzes HTTP responses to determine account existence
4. Reports findings with direct links to discovered accounts

### Platform Coverage

Sherlock searches across diverse categories including:

**Social Media Platforms**:

- Instagram
- Facebook
- Twitter/X
- TikTok
- LinkedIn
- Snapchat
- Pinterest

**Developer Communities**:

- GitHub
- GitLab
- Stack Overflow
- Dev.to
- CodePen
- HackerRank

**Content Platforms**:

- Medium
- WordPress
- Blogger
- YouTube
- Vimeo
- SoundCloud

**Gaming Networks**:

- Steam
- Xbox Live
- PlayStation Network
- Twitch
- Discord

**Forums and Communities**:

- Reddit
- Quora
- 4chan
- Discord
- Telegram

**Professional Networks**:

- LinkedIn
- AngelList
- Behance
- Dribbble

**Total Coverage**: Over 400 platforms and growing

### Use Cases in OSINT

**Digital Footprint Analysis**:

- Map an individual's online presence
- Identify all platforms where a person maintains accounts
- Track username consistency across platforms

**Identity Verification**:

- Confirm the authenticity of claimed identities
- Cross-reference information across multiple platforms
- Detect inconsistencies in profile information

**Investigation Support**:

- Background research for due diligence
- Cybersecurity threat intelligence
- Brand monitoring and protection
- Journalistic research

**Security Applications**:

- Identify potential data exposure
- Assess personal information leakage
- Evaluate privacy posture

### How Sherlock Determines Account Existence

Sherlock uses multiple detection methods:

**HTTP Status Code Analysis**:

- **200 OK**: Account exists and is accessible
- **404 Not Found**: Username does not exist on platform
- **403 Forbidden**: Platform blocks or restricts access
- **429 Too Many Requests**: Rate limiting in effect

**Response Message Analysis**:

- Searches for specific error messages indicating non-existence
- Identifies platform-specific "user not found" messages
- Analyzes page content for account indicators

**URL Redirect Detection**:

- Monitors redirects to error pages
- Tracks changes in response URLs
- Identifies platform-specific redirect patterns

### Example Search Workflow

**Input Command**:

```bash
python3 sherlock njoxlee
```

**Sherlock's Process**:

1. Reads the username "njoxlee"
2. Queries 400+ platforms simultaneously
3. Analyzes each platform's response
4. Categorizes results as Found, Not Found, or Error
5. Displays results with direct account URLs

**Expected Output Format**:

```
[*] Checking username njoxlee on:

[+] Instagram: https://instagram.com/njoxlee
[+] GitHub: https://github.com/njoxlee
[+] Twitter: https://twitter.com/njoxlee
[-] Reddit: Not found
[-] Facebook: Not found
[!] TikTok: Error (Rate limited)
```

This automated process saves investigators hours of manual checking across hundreds of platforms.

---

## 2. Installing Sherlock

### System Requirements

**Operating System**:

- Linux (Ubuntu, Debian, Kali, Arch)
- macOS (10.12 or later)
- Windows (with WSL or native Python)

**Software Requirements**:

- Python 3.7 or higher
- pip (Python package installer)
- Git version control
- Internet connection

### Installation on Linux

#### Step 1: Update System Packages

```bash
# Update package repositories
sudo apt update

# Upgrade existing packages
sudo apt upgrade -y
```

#### Step 2: Install Prerequisites

```bash
# Install Python 3, pip, and Git
sudo apt install python3 python3-pip git -y

# Verify installations
python3 --version  # Should show Python 3.7+
pip3 --version     # Should show pip version
git --version      # Should show Git version
```

#### Step 3: Clone Sherlock Repository

```bash
# Clone from GitHub
git clone https://github.com/sherlock-project/sherlock.git

# Navigate to the directory
cd sherlock

# View directory contents
ls -la
```

#### Step 4: Install Python Dependencies

```bash
# Install required packages
pip3 install -r requirements.txt

# Alternative: Install in user directory (no sudo needed)
pip3 install --user -r requirements.txt
```

#### Step 5: Verify Installation

```bash
# Test Sherlock installation
python3 sherlock --help

# Expected output: Help menu with usage instructions
```

### Installation on macOS

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python and Git
brew install python git

# Clone and install Sherlock
git clone https://github.com/sherlock-project/sherlock.git
cd sherlock
pip3 install -r requirements.txt

# Verify installation
python3 sherlock --help
```

### Installation on Windows (WSL)

```bash
# Enable WSL and install Ubuntu from Microsoft Store
# Then follow Linux installation steps

# Or use native Windows Python:
# 1. Install Python from python.org
# 2. Install Git from git-scm.com
# 3. Open PowerShell or Command Prompt
# 4. Follow the same git clone and pip install steps
```

### Virtual Environment Setup (Recommended)

Using a virtual environment prevents dependency conflicts:

```bash
# Navigate to Sherlock directory
cd sherlock

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # Linux/macOS
# OR
venv\Scripts\activate     # Windows

# Install dependencies in virtual environment
pip install -r requirements.txt

# Deactivate when done
deactivate
```

### Troubleshooting Installation Issues

**Issue: Permission Denied**

```bash
# Solution: Use --user flag
pip3 install --user -r requirements.txt
```

**Issue: Python Command Not Found**

```bash
# Solution: Use python3 explicitly
python3 sherlock username
```

**Issue: Module Not Found**

```bash
# Solution: Reinstall dependencies
pip3 install --force-reinstall -r requirements.txt
```

---

## 3. Running Your First Search

### Basic Single Username Search

**Command Structure**:

```bash
python3 sherlock [username]
```

**Example**:

```bash
python3 sherlock njoxlee
```

**What Happens**:

1. Sherlock loads its platform database
2. Initiates simultaneous HTTP requests
3. Analyzes responses from each platform
4. Displays results in real-time
5. Provides direct links to found accounts

### Searching Multiple Usernames

**Command**:

```bash
python3 sherlock username1 username2 username3
```

**Example**:

```bash
python3 sherlock njoxlee lee_njox njox
```

**Use Cases**:

- Search username variations simultaneously
- Compare results across different aliases
- Investigate related accounts
- Identify username patterns

### Understanding Search Progress

During execution, Sherlock displays:

```
[*] Checking username njoxlee on:
[*] 100 sites to check
[+] Found on 23 platforms
[-] Not found on 75 platforms
[!] 2 errors encountered
```

**Progress Indicators**:

- Total platforms queried
- Number of successful discoveries
- Failed or non-existent accounts
- Errors or blocked requests

### Common Search Variations

**Case Sensitivity**:

```bash
# Different cases may yield different results
python3 sherlock JohnDoe
python3 sherlock johndoe
python3 sherlock JOHNDOE
```

**Special Characters**:

```bash
# Test usernames with underscores, dots, hyphens
python3 sherlock john_doe
python3 sherlock john.doe
python3 sherlock john-doe
```

---

## 4. Understanding Search Results

### Result Categories

**Found Accounts (Positive Results)**:

```
[+] Instagram: https://instagram.com/njoxlee
```

- Username exists on the platform
- Direct link provided to the account
- Requires manual verification for ownership confirmation

**Not Found (Negative Results)**:

```
[-] Reddit: Not found
```

- Username does not exist on this platform
- Account may have been deleted or never created
- Username might be available for registration

**Errors (Inconclusive Results)**:

```
[!] TikTok: Error (Connection timeout)
```

- Platform couldn't be checked successfully
- Common causes: Rate limiting, blocking, server issues
- Requires manual verification or retry

### Interpreting Results

**High Confidence Indicators**:

- Multiple found accounts with similar profile information
- Consistent profile pictures across platforms
- Matching biographical information
- Linked accounts or cross-references

**Low Confidence Indicators**:

- Very common username (e.g., "john123")
- Inconsistent profile information
- Abandoned or inactive accounts
- Generic or placeholder content

### Sample Output Breakdown

```
[*] Checking username njoxlee on:

[+] GitHub: https://github.com/njoxlee
    Status: Found
    Response Time: 0.34s

[+] Instagram: https://instagram.com/njoxlee
    Status: Found
    Response Time: 0.52s

[-] Twitter: Not found
    Status: 404 Not Found

[!] Facebook: Error
    Status: Rate limited
    Response: 429 Too Many Requests
```

### Next Steps After Finding Accounts

1. **Click on Found Links**: Visit each discovered account
2. **Profile Analysis**: Examine profile information
3. **Content Review**: Check posts, photos, comments
4. **Connection Analysis**: Look for linked accounts
5. **Timestamp Verification**: Note account creation dates
6. **Activity Assessment**: Determine if account is active

---

## 5. Saving Search Results

### Text File Output

**Basic Text Format**:

```bash
python3 sherlock njoxlee --output results.txt
```

**Features**:

- Human-readable format
- Easy to share and review
- Simple text editor compatible
- Good for quick reference

**Output Location**:

```
sherlock/results/njoxlee.txt
```

**Sample Content**:

```
Username: njoxlee
Search Date: 2025-11-16 10:30:45

Found Accounts:
1. GitHub: https://github.com/njoxlee
2. Instagram: https://instagram.com/njoxlee
3. Medium: https://medium.com/@njoxlee

Not Found:
- Twitter
- Reddit
- Facebook
```

### JSON Format Output

**Command**:

```bash
python3 sherlock njoxlee --json results.json
```

**Advantages**:

- Structured data format
- Easy to parse programmatically
- Integration with other tools
- Better for data analysis

**Sample JSON Structure**:

```json
{
  "njoxlee": {
    "GitHub": {
      "url": "https://github.com/njoxlee",
      "status": "found",
      "http_status": 200,
      "response_time": 0.34
    },
    "Instagram": {
      "url": "https://instagram.com/njoxlee",
      "status": "found",
      "http_status": 200,
      "response_time": 0.52
    },
    "Twitter": {
      "status": "not_found",
      "http_status": 404
    }
  }
}
```

### CSV Format Output

**Command**:

```bash
python3 sherlock njoxlee --csv results.csv
```

**Use Cases**:

- Spreadsheet analysis
- Database import
- Bulk processing
- Comparative analysis

### Organizing Results

**Directory Structure**:

```
investigations/
├── case001_njoxlee/
│   ├── sherlock_results.txt
│   ├── sherlock_results.json
│   ├── screenshots/
│   └── analysis_notes.md
├── case002_johndoe/
│   └── ...
```

**Best Practices**:

- Create separate folders for each investigation
- Include timestamps in filenames
- Maintain backup copies
- Document analysis findings separately

---

## 6. Common Beginner Mistakes to Avoid

### Mistake 1: Assuming Sherlock Confirms Identity

**The Problem**:
Many beginners believe that finding a username on a platform automatically confirms it belongs to their target person.

**Reality**:

- Sherlock only checks if a username exists
- It does NOT verify who owns the account
- Multiple people can have similar usernames
- Accounts can be abandoned, fake, or impersonation

**Solution**:
Always perform manual verification:

```
1. Visit the discovered account
2. Check profile picture
3. Review bio and description
4. Examine posts and content
5. Look for verification badges
6. Cross-reference with known information
7. Compare timestamps and activity
```

**Example Verification Checklist**:

- [ ] Profile picture matches known photos
- [ ] Bio contains accurate information
- [ ] Location matches target's location
- [ ] Posting language and style match
- [ ] Account creation date is logical
- [ ] Friends/followers include known associates
- [ ] Content relates to known interests

### Mistake 2: Searching Without Proper Internet Connection

**The Problem**:
Sherlock requires stable internet to query hundreds of websites.

**Common Issues**:

- Intermittent connections cause incomplete results
- VPN disconnections mid-search
- Network timeouts lead to errors
- Rate limiting from unstable connections

**Solution**:

```bash
# Test internet connection first
ping -c 4 google.com

# Use stable wired connection when possible
# Consider using --timeout flag for slow connections
python3 sherlock username --timeout 30
```

### Mistake 3: Not Manually Verifying Found Accounts

**The Problem**:
Accepting Sherlock results without verification leads to false conclusions.

**What You Must Check**:

**Profile Picture**:

- Download and reverse image search
- Check if it's a stock photo
- Compare across multiple platforms

**Biography/Description**:

- Does it contain accurate details?
- Is the writing style consistent?
- Are there verifiable claims?

**Posts and Content**:

- Review recent activity
- Check posting frequency
- Analyze content themes
- Look for personal information

**Links and References**:

- Check linked websites
- Verify email addresses
- Examine connected accounts

**Activity Patterns**:

- When was the account created?
- Is it currently active?
- Regular posting schedule?
- Engagement with others?

### Mistake 4: Using Overly Common Usernames

**The Problem**:
Searching generic usernames produces too many irrelevant results.

**Examples of Poor Username Choices**:

- john123
- user1234
- admin
- test
- mike
- alex2000

**Why This Fails**:

- Thousands of people use these usernames
- Impossible to determine which account is relevant
- Wastes investigation time
- Leads to false conclusions

**Better Approach**:
Search for unique, specific usernames:

- Unusual combinations: "njoxlee_dev"
- Unique identifiers: "njoxlee1990tz"
- Platform-specific handles: "@njoxlee_official"
- Known aliases from other sources

### Mistake 5: Ignoring Error Messages

**The Problem**:
Dismissing errors without understanding their cause.

**Common Errors and Meanings**:

**Rate Limiting (429)**:

```
[!] Instagram: Error (Rate limited)
```

- Too many requests in short time
- Platform blocking automated queries
- Solution: Wait and retry, use --tor flag

**Connection Timeout**:

```
[!] Site: Error (Connection timeout)
```

- Platform server not responding
- Network connectivity issues
- Solution: Retry later, check internet

**Access Denied (403)**:

```
[!] Platform: Error (Access forbidden)
```

- Platform blocking your IP or user agent
- Geographic restrictions
- Solution: Use VPN or Tor

### Mistake 6: Not Documenting the Investigation

**The Problem**:
Failing to record findings leads to lost information and unprofessional results.

**What to Document**:

```markdown
## Investigation Report

**Target Username**: njoxlee
**Date**: 2025-11-16
**Investigator**: [Your name]

### Sherlock Results Summary

- Platforms checked: 412
- Accounts found: 23
- High confidence: 18
- Requires verification: 5

### Verified Accounts

1. GitHub (https://github.com/njoxlee)
   - Profile pic matches
   - Bio contains accurate info
   - Active within last week
2. Instagram (https://instagram.com/njoxlee)
   - Profile pic matches
   - Follower count: 1.2k
   - Content aligns with interests

### Notes

- All accounts created between 2018-2020
- Consistent profile pictures
- Similar bio descriptions
- Cross-references found between platforms
```

### Mistake 7: Not Using Available Flags and Options

**The Problem**:
Running only basic searches without utilizing Sherlock's advanced features.

**Useful Flags to Learn**:

```bash
# Save time with timeout settings
python3 sherlock username --timeout 10

# Use Tor for anonymity
python3 sherlock username --tor

# Search only specific sites
python3 sherlock username --site GitHub --site Twitter

# Verbose output for debugging
python3 sherlock username --verbose

# Print only found accounts
python3 sherlock username --print-found
```

---

## 7. Practical Exercise

### Your First Investigation Task

Complete these exercises to solidify your understanding:

### Exercise 1: Basic Username Search

**Objective**: Perform your first successful Sherlock search

**Steps**:

1. Choose a username (use your own or a public figure)
2. Navigate to Sherlock directory:
   ```bash
   cd sherlock
   ```
3. Run the search:
   ```bash
   python3 sherlock [USERNAME]
   ```
4. Wait for results to complete
5. Count how many platforms were checked
6. Note how many accounts were found

**Questions to Answer**:

- How many platforms did Sherlock check?
- How many accounts were found?
- Were there any errors?
- Which platforms had the most results?

### Exercise 2: Save and Review Results

**Objective**: Learn to save and organize investigation data

**Steps**:

1. Run a search with output flag:
   ```bash
   python3 sherlock [USERNAME] --output myresult.txt
   ```
2. Locate the output file:
   ```bash
   cd results
   ls -l
   ```
3. View the contents:
   ```bash
   cat myresult.txt
   ```
4. Create a JSON version:
   ```bash
   python3 sherlock [USERNAME] --json myresult.json
   ```

**Tasks**:

- Open both text and JSON files
- Compare the formats
- Identify which format you prefer for analysis
- Create a folder structure to organize results

### Exercise 3: Manual Account Verification

**Objective**: Practice verifying discovered accounts

**Steps**:

1. Select one "Found" account from your results
2. Click the provided URL
3. Analyze the account using this checklist:

**Verification Checklist**:

- [ ] Account is accessible and active
- [ ] Profile picture is present
- [ ] Bio/description contains information
- [ ] Recent posts or activity visible
- [ ] Followers/following counts seem legitimate
- [ ] Content matches expected interests
- [ ] No obvious signs of fake/bot account

4. Take a screenshot of the profile
5. Document your findings:

   ```markdown
   ## Account Verification

   **Platform**: [Platform name]
   **URL**: [Account URL]
   **Status**: Active/Inactive
   **Confidence Level**: High/Medium/Low

   **Observations**:

   - Profile picture: [Description]
   - Bio: [Content]
   - Activity: [Recent posts]
   - Authenticity markers: [Verification badges, etc.]

   **Conclusion**: [Is this likely the correct account?]
   ```

### Exercise 4: Multiple Username Variations

**Objective**: Search username variations to find related accounts

**Steps**:

1. Create a list of username variations:
   ```
   originalname
   original_name
   original.name
   originalname123
   originalname2023
   ```
2. Search all variations:
   ```bash
   python3 sherlock original originalname original_name --output variations.txt
   ```
3. Compare results across variations
4. Identify patterns

**Analysis Questions**:

- Which variation had the most results?
- Are there consistent accounts across variations?
- Do profile pictures match across platforms?
- Can you identify the primary username?

---

## Summary and Next Steps

### What You've Learned

By completing this beginner's module, you now understand:

- Sherlock's purpose and functionality in OSINT investigations
- How to install and configure Sherlock on your system
- Running basic and multi-username searches
- Interpreting search results accurately
- Saving results in multiple formats
- Common mistakes and how to avoid them
- Manual verification importance and techniques

### Key Takeaways

1. **Sherlock is a Discovery Tool**: It finds usernames, not identities
2. **Always Verify Manually**: Never trust automated results alone
3. **Document Everything**: Professional investigations require proper documentation
4. **Unique Usernames Work Best**: Generic names produce poor results
5. **Use Multiple Formats**: Save in text, JSON, and CSV for different purposes

### Moving to Intermediate Level

Ready to advance? Here's what comes next:

**Intermediate Skills to Learn**:

- Using Tor for anonymous searching
- Correlating accounts across platforms
- Integrating Sherlock with other OSINT tools
- Automating repetitive searches
- Building comprehensive digital footprints

**Recommended Next Tools**:

- **Holehe**: Email to account matching
- **WhatsMyName**: Extended platform coverage
- **Maigret**: Advanced username collection
- **Social-Analyzer**: Deep profile analysis

### Practice Recommendations

**Daily Practice** (Week 1):

- Search 3 different usernames daily
- Practice manual verification
- Experiment with different output formats
- Build your investigation documentation system

**Weekly Projects** (Weeks 2-4):

- Complete digital footprint of a public figure
- Investigate your own online presence
- Create a comprehensive OSINT report
- Build a reusable investigation workflow

### Additional Resources

**Official Documentation**:

- [Sherlock GitHub](https://github.com/sherlock-project/sherlock)
- [Sherlock Wiki](https://github.com/sherlock-project/sherlock/wiki)

**Learning Communities**:

- r/OSINT on Reddit
- OSINT Curious podcast and website
- Bellingcat online courses
- Trace Labs CTF events

**Reference Materials**:

- OSINT Framework (osintframework.com)
- IntelTechniques.com
- OSINT Combine

Remember: OSINT investigations must be conducted ethically and legally. Always respect privacy rights and comply with applicable laws and platform terms of service.
