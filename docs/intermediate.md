# Intermediate Sherlock OSINT Techniques

## Module Overview

This intermediate-level module builds upon foundational Sherlock knowledge to develop advanced OSINT investigation capabilities. You will learn to conduct multi-username searches, maintain operational security, correlate digital identities across platforms, integrate complementary tools, and produce professional intelligence reports.

### Prerequisites

Before proceeding, ensure you have:

- Completed the beginner Sherlock module
- Successfully performed basic username searches
- Understanding of result interpretation
- Familiarity with manual account verification

### Learning Objectives

By completing this module, you will master:

1. Multi-username pattern recognition and searching
2. Anonymous investigation techniques using Tor
3. Cross-platform account correlation methodologies
4. Integration of complementary OSINT tools
5. Professional OSINT report writing
6. Advanced verification and attribution techniques

---

## 1. Advanced Multi-Username Search Strategies

### Understanding Username Pattern Psychology

Individuals rarely use completely random usernames across platforms. Instead, they follow predictable patterns based on cognitive biases and personal preferences. Recognizing these patterns significantly improves investigation efficiency.

### Common Username Patterns

**Numerical Variations**:

- Original: `johnsmith`
- Variations: `johnsmith1`, `johnsmith123`, `johnsmith2023`, `johnsmith99`

**Character Substitutions**:

- Original: `alexjones`
- Variations: `al3xjones`, `4lexjones`, `alexj0nes`, `al3xj0n3s`

**Delimiter Additions**:

- Original: `marybrown`
- Variations: `mary_brown`, `mary.brown`, `mary-brown`, `mary.j.brown`

**Reversed Order**:

- Original: `njoxlee`
- Variations: `leenjox`, `lee_njox`, `njox_lee`

**Abbreviations and Shortenings**:

- Original: `christopher_wilson`
- Variations: `chris_wilson`, `c_wilson`, `chriswilson`, `cwilson`

**Platform-Specific Handles**:

- Twitter: `@njoxlee` (handle format)
- Instagram: `njoxlee.official` (brand format)
- Gaming: `njoxlee_pro` (skill indicator)
- Professional: `n.lee` (formal format)

### Multi-Username Search Syntax

**Basic Multi-Search**:

```bash
python3 sherlock username1 username2 username3
```

**Pattern-Based Search Example**:

```bash
python3 sherlock njoxlee lee_njox njox nj0x njoxlee123 leenjox
```

**What This Accomplishes**:

- Searches all variations simultaneously
- Identifies which patterns are actively used
- Reveals platform preferences
- Discovers abandoned or dormant accounts
- Maps the complete username footprint

### Advanced Pattern Generation

**Creating Username Variation Lists**:

```bash
# Create a variation list file
echo "njoxlee" > usernames.txt
echo "lee_njox" >> usernames.txt
echo "njox_lee" >> usernames.txt
echo "njoxlee123" >> usernames.txt
echo "njoxlee_dev" >> usernames.txt

# Search all variations
python3 sherlock $(cat usernames.txt)
```

**Automated Pattern Generation** (Python Script):

```python
#!/usr/bin/env python3
# username_variants.py

def generate_variants(base_username):
    variants = [
        base_username,
        base_username + "123",
        base_username + "2023",
        base_username.replace("o", "0"),
        base_username.replace("e", "3"),
        "_".join([base_username[:len(base_username)//2],
                  base_username[len(base_username)//2:]]),
        base_username + "_official",
        base_username + "_real",
        "".join(reversed(base_username))
    ]
    return variants

# Example usage
username = "njoxlee"
variations = generate_variants(username)
print("\n".join(variations))
```

### Pattern Recognition Analysis

**Correlation Indicators**:

1. **Consistent Core Elements**: Same base name across variations
2. **Temporal Markers**: Years, ages, or dates in usernames
3. **Professional Indicators**: "dev", "pro", "official" suffixes
4. **Geographic Markers**: City codes, country abbreviations
5. **Interest Tags**: Hobby or interest-related suffixes

**Example Analysis**:

```
Found Accounts:
- GitHub: njoxlee
- Twitter: njox_lee
- Reddit: njoxlee_dev
- Medium: njoxlee

Pattern Assessment:
✓ Core identifier: "njox" + "lee"
✓ Delimiter preference: underscore
✓ Professional context: "_dev" suffix on technical platform
✓ Consistency score: 95%
✓ Confidence: High - Same person
```

### Best Practices for Multi-Username Searches

**Effective Search Strategy**:

1. Start with known username
2. Generate 5-10 logical variations
3. Run comprehensive search
4. Analyze results for additional patterns
5. Iterate with newly discovered variations
6. Document pattern evolution

**Avoid Over-Searching**:

- Don't search 50+ variations simultaneously
- Focus on high-probability patterns
- Prioritize variations discovered in initial searches
- Consider platform-specific naming conventions

---

## 2. Operational Security: Anonymous Investigation with Tor

### Why Anonymity Matters in OSINT

**Risks of Non-Anonymous Investigations**:

- **IP Exposure**: Target platforms log your IP address
- **Rate Limiting**: Repeated queries from same IP trigger blocks
- **Detection**: Subjects may detect investigation activity
- **Legal Concerns**: Some jurisdictions require anonymized research
- **Platform Bans**: Automated queries violate Terms of Service

### Understanding Tor Integration

**What Tor Provides**:

- Routes traffic through multiple encrypted relays
- Masks your real IP address
- Prevents platform fingerprinting
- Bypasses geographic restrictions
- Reduces rate limiting effectiveness

**Tor Network Architecture**:

```
Your Computer → Entry Node → Middle Relay → Exit Node → Target Website
    (IP Hidden)   (Encrypted)  (Encrypted)   (New IP)    (Receives Request)
```

### Installing and Configuring Tor

#### Linux Installation

**Ubuntu/Debian/Kali**:

```bash
# Update package repositories
sudo apt update

# Install Tor service
sudo apt install tor -y

# Start Tor service
sudo systemctl start tor

# Enable Tor to start on boot
sudo systemctl enable tor

# Verify Tor is running
sudo systemctl status tor
```

**Expected Output**:

```
● tor.service - Anonymizing overlay network for TCP
   Loaded: loaded (/lib/systemd/system/tor.service; enabled)
   Active: active (running) since Sat 2025-11-16 10:30:00 UTC
```

#### macOS Installation

```bash
# Install Tor via Homebrew
brew install tor

# Start Tor
brew services start tor

# Verify installation
tor --version
```

#### Tor Configuration

**Check Tor SOCKS Proxy** (default: localhost:9050):

```bash
# View Tor configuration
cat /etc/tor/torrc | grep SOCKSPort

# Should show: SOCKSPort 9050
```

### Running Sherlock with Tor

**Basic Tor Search**:

```bash
python3 sherlock username --tor
```

**Verify Tor Connection**:

```bash
# Before running Sherlock, test Tor connectivity
curl --socks5 localhost:9050 https://check.torproject.org/api/ip

# Expected output shows Tor exit node IP, not your real IP
```

**Tor Search with Output**:

```bash
python3 sherlock username --tor --output tor_results.txt --json
```

### Advanced Tor Options

**Adjust Timeout for Tor (Slower Connection)**:

```bash
python3 sherlock username --tor --timeout 30
```

**Tor with Specific Sites**:

```bash
python3 sherlock username --tor --site GitHub --site Twitter
```

**Verbose Tor Debugging**:

```bash
python3 sherlock username --tor --verbose
```

### Tor Best Practices

**Security Considerations**:

1. **Don't Mix Anonymous and Non-Anonymous Searches**: Maintain separation
2. **Clear Browser Cookies**: Prevent cross-session tracking
3. **Use Tor Browser for Manual Verification**: Don't visit links directly
4. **Rotate Circuits Periodically**: Force new Tor path
5. **Avoid Login**: Never authenticate while using Tor for OSINT

**Performance Optimization**:

- Tor is slower than direct connections (expect 2-3x longer searches)
- Use targeted searches rather than broad scans
- Consider using `--print-found` to reduce output noise
- Schedule intensive searches during off-peak hours

**Circuit Renewal** (Force New Tor Path):

```bash
# Restart Tor to get new circuit
sudo systemctl restart tor

# Or use Tor control port (advanced)
echo -e 'AUTHENTICATE ""\r\nSIGNAL NEWNYM\r\nQUIT' | nc 127.0.0.1 9051
```

### Legal and Ethical Considerations

**Acceptable Use**:

- Passive information gathering
- Public data collection
- Background research
- Security assessments (authorized)

**Prohibited Activities**:

- Bypassing authentication
- Unauthorized access attempts
- Harassment or stalking
- Terms of Service violations

---

## 3. Cross-Platform Account Correlation Methodology

### The Art of Digital Attribution

Account correlation is the process of determining whether multiple online accounts belong to the same individual. This is the core skill that distinguishes amateur researchers from professional OSINT analysts.

### Correlation Framework: The Five-Factor Model

#### Factor 1: Visual Identity Analysis

**Profile Picture Correlation**:

**What to Examine**:

1. **Facial Recognition**:

   - Same person in photos across platforms?
   - Similar age progression?
   - Consistent facial features?

2. **Photography Characteristics**:

   - Same background locations?
   - Identical lighting conditions?
   - Matching camera angles?
   - Similar photo quality/resolution?

3. **Image Metadata** (if accessible):
   - Same camera model (EXIF data)?
   - Matching GPS coordinates?
   - Consistent timestamp patterns?

**Advanced Technique: Reverse Image Search**:

```bash
# Download profile pictures
wget https://example.com/profile1.jpg -O profile1.jpg
wget https://example.com/profile2.jpg -O profile2.jpg

# Reverse search using tools:
# - Google Images (images.google.com)
# - TinEye (tineye.com)
# - Yandex Images (yandex.com/images)
```

**Correlation Scoring**:

- Identical image: **100% correlation**
- Cropped/edited version: **90% correlation**
- Same person, different photo: **80% correlation**
- Similar style/aesthetic: **50% correlation**
- Different people: **0% correlation**

#### Factor 2: Biographical Information Analysis

**Bio/Description Elements**:

**Common Reused Elements**:

1. **Quotes and Mottos**:

   - Favorite sayings
   - Personal philosophies
   - Inspirational quotes
   - Song lyrics

2. **Professional Information**:

   - Job titles
   - Company names
   - Skills lists
   - Certifications

3. **Personal Identifiers**:

   - Location (city, country)
   - Age or birth year
   - Relationship status
   - Educational background

4. **Contact Information**:

   - Email addresses
   - Website URLs
   - Phone numbers (partial)
   - Other social media handles

5. **Interests and Hobbies**:
   - Sports teams
   - Music preferences
   - Technology interests
   - Political views

**Example Correlation**:

```
Platform A (GitHub):
Bio: "Full-stack developer | Coffee enthusiast | Based in Dar es Salaam"

Platform B (Twitter):
Bio: "Full-stack dev | Coffee addict | DSM | Building cool stuff"

Platform C (LinkedIn):
Bio: "Full Stack Developer in Dar es Salaam | Passionate about web technologies"

Analysis:
✓ Profession match: Full-stack developer (3/3)
✓ Location match: Dar es Salaam (3/3)
✓ Interest match: Coffee/technology (2/3)
✓ Consistency: 95%
Conclusion: High probability - Same person
```

#### Factor 3: URL and Link Analysis

**Cross-Platform Linking**:

**What to Look For**:

1. **Social Media Cross-References**:

   ```
   GitHub bio → Links to Twitter
   Twitter bio → Links to Instagram
   Instagram bio → Links to GitHub
   = Confirmed connection
   ```

2. **Personal Websites**:

   - Same domain linked from multiple accounts
   - Website portfolio listing all social accounts
   - Blog posts cross-posted on multiple platforms

3. **Professional Profiles**:
   - LinkedIn URL in Twitter bio
   - Portfolio site linking all platforms
   - Company website with social links

**Link Verification Process**:

```
Step 1: Record all URLs found in bios
Step 2: Visit each linked page
Step 3: Check if pages link back to other accounts
Step 4: Create link map
Step 5: Identify strongly connected clusters
```

**Link Map Example**:

```
GitHub (njoxlee)
    ↓ Links to
Twitter (@njox_lee)
    ↓ Links to
Instagram (njoxlee)
    ↓ Links to
Website (njoxlee.dev)
    ↓ Links back to all above

Conclusion: Circular verification = Strong correlation
```

#### Factor 4: Temporal Pattern Analysis

**Activity Timeline Correlation**:

**Posting Time Analysis**:

1. **Timezone Consistency**:

   ```
   Platform A: Posts at 09:00, 13:00, 20:00
   Platform B: Posts at 09:15, 13:30, 20:30

   Analysis: Same timezone (UTC+3)
   Conclusion: Likely same person
   ```

2. **Activity Patterns**:

   - Weekday vs weekend posting
   - Morning vs evening activity
   - Lunch break posting (12:00-13:00)
   - Late night activity patterns

3. **Account Creation Dates**:

   ```
   GitHub: Created March 2018
   Twitter: Created April 2018
   Instagram: Created May 2018

   Pattern: Sequential platform adoption
   Conclusion: Consistent with single user onboarding
   ```

4. **Dormancy Periods**:
   - Simultaneous inactivity across platforms
   - Coordinated returns to activity
   - Matching vacation/absence periods

**Temporal Correlation Tool** (Conceptual):

```python
# Pseudo-code for timeline analysis
accounts = {
    "GitHub": ["2025-11-15 09:23", "2025-11-15 14:45", "2025-11-15 21:10"],
    "Twitter": ["2025-11-15 09:30", "2025-11-15 14:52", "2025-11-15 21:15"]
}

# Calculate average posting time difference
# If < 30 minutes across platforms → High correlation
```

#### Factor 5: Username Pattern Recognition

**Pattern Consistency Analysis**:

**Naming Convention Patterns**:

1. **Core Identity Preservation**:

   ```
   njoxlee     → Core: "njox" + "lee"
   lee_njox    → Core: "lee" + "njox" (reversed)
   njox_dev    → Core: "njox" + descriptor
   mrnjox      → Core: "njox" + title
   ```

2. **Delimiter Preferences**:

   - User prefers underscores: `user_name`
   - User prefers dots: `user.name`
   - User prefers hyphens: `user-name`
   - Consistency = high correlation

3. **Numerical Patterns**:

   ```
   Same numbers across platforms:
   - johnsmith1990 (birth year)
   - john.smith.1990
   - jsmith1990

   Pattern: Birth year preference
   Conclusion: Strong correlation
   ```

4. **Professional vs Personal Segregation**:

   ```
   Professional platforms: john_smith_dev, johnsmith.pro
   Personal platforms: johnnys, j_smith_music

   Pattern: Identity segmentation
   Conclusion: Moderate correlation (requires additional factors)
   ```

### Comprehensive Correlation Scoring System

**Scoring Matrix**:

| Factor            | Weight   | Score (0-100) | Weighted Score |
| ----------------- | -------- | ------------- | -------------- |
| Profile Picture   | 25%      | 90            | 22.5           |
| Bio Information   | 20%      | 85            | 17.0           |
| Link Analysis     | 25%      | 95            | 23.75          |
| Temporal Patterns | 15%      | 70            | 10.5           |
| Username Pattern  | 15%      | 80            | 12.0           |
| **Total**         | **100%** | -             | **85.75**      |

**Confidence Levels**:

- **90-100**: Very High (almost certain)
- **80-89**: High (strong evidence)
- **70-79**: Moderate (likely same person)
- **60-69**: Low (possible connection)
- **Below 60**: Insufficient (no correlation)

### Practical Correlation Workflow

**Step-by-Step Process**:

1. **Data Collection**:

   ```bash
   # Run Sherlock search
   python3 sherlock username --json correlation_data.json

   # Visit each found account
   # Screenshot profiles
   # Document key information
   ```

2. **Spreadsheet Creation**:

   ```
   | Platform | Username | Profile Pic | Bio Elements | Links | Posting Time | Score |
   |----------|----------|-------------|--------------|-------|--------------|-------|
   | GitHub   | njoxlee  | dev_pic.jpg | Developer, DSM | twitter.com/njox | 09:00-21:00 | 90 |
   | Twitter  | njox_lee | same_pic.jpg | Dev, DSM | github.com/njoxlee | 09:15-21:15 | 95 |
   ```

3. **Visual Comparison**:

   - Place screenshots side-by-side
   - Highlight matching elements
   - Note discrepancies

4. **Temporal Analysis**:

   - Create timeline of posts
   - Identify timezone
   - Map activity patterns

5. **Scoring**:

   - Apply scoring matrix
   - Calculate weighted average
   - Determine confidence level

6. **Documentation**:
   - Write correlation report
   - Include evidence screenshots
   - Justify confidence rating

---

## 4. Integrating Complementary OSINT Tools

### Building a Multi-Tool Investigation Framework

While Sherlock excels at username enumeration, professional OSINT investigations require a diverse toolkit. Integrating complementary tools creates a comprehensive investigation capability.

### Tool 1: Holehe - Email to Social Account Mapping

#### Understanding Holehe

**Purpose**: Determine which social media and online accounts are associated with a specific email address.

**How It Works**:

- Leverages password recovery pages
- Checks email registration status
- Identifies platform-specific account existence
- Does not require account access

**Platforms Covered** (140+):

- Social media (Facebook, Twitter, Instagram)
- Professional networks (LinkedIn, Indeed)
- E-commerce (Amazon, eBay, Etsy)
- Gaming (Steam, Xbox, PlayStation)
- Financial (PayPal, Venmo)
- Streaming (Netflix, Spotify, Hulu)
- Dating (Tinder, Bumble, Match)

#### Installing Holehe

```bash
# Install via pip
pip3 install holehe

# Verify installation
holehe --help

# Update to latest version
pip3 install --upgrade holehe
```

#### Using Holehe

**Basic Email Search**:

```bash
holehe target@example.com
```

**Save Results**:

```bash
holehe target@example.com > holehe_results.txt
```

**Check Multiple Emails**:

```bash
# Create email list
echo "email1@example.com" > emails.txt
echo "email2@example.com" >> emails.txt

# Check all emails
while read email; do
    echo "Checking: $email"
    holehe "$email"
    echo "---"
done < emails.txt
```

#### Sample Output

```
[+] Email used: target@example.com

[+] Facebook: Account exists
[+] Instagram: Account exists
[+] Twitter: Account exists
[-] LinkedIn: Not found
[-] GitHub: Not found
[+] Spotify: Account exists
[+] Netflix: Account exists
```

#### Holehe + Sherlock Integration Workflow

**Combined Investigation**:

```bash
# Step 1: Find email from username research
# (from social profiles, public records, etc.)

# Step 2: Run Holehe
holehe discovered_email@example.com > holehe_output.txt

# Step 3: Extract usernames from discovered accounts

# Step 4: Run Sherlock on extracted usernames
python3 sherlock extracted_username1 extracted_username2

# Step 5: Cross-reference and correlate findings
```

**Example Integration**:

```
Investigation Target: John Doe

Sherlock Results:
→ Found username: johndoe_dev on GitHub
→ GitHub profile lists email: johndoe@example.com

Holehe Results:
→ johndoe@example.com registered on:
  - Facebook
  - Instagram
  - Twitter
  - LinkedIn

Next Step: Search for "johndoe" variations on newly identified platforms
```

### Tool 2: WhatsMyName - Extended Username Database

#### Understanding WhatsMyName

**Purpose**: Username enumeration with different platform database and detection methods than Sherlock.

**Advantages**:

- Different platform coverage (some platforms Sherlock misses)
- Alternative detection methods
- Regular database updates
- JSON-based configuration (easy to customize)

**Key Differences from Sherlock**:

- Focuses on different platform subset
- Uses different HTTP detection techniques
- Complementary rather than redundant

#### Installing WhatsMyName

```bash
# Clone repository
git clone https://github.com/WebBreacher/WhatsMyName.git

# Navigate to directory
cd WhatsMyName

# Install dependencies
pip3 install -r requirements.txt

# Verify installation
python3 whatsmyname.py --help
```

#### Using WhatsMyName

**Basic Search**:

```bash
python3 whatsmyname.py -u username
```

**Search Multiple Usernames**:

```bash
python3 whatsmyname.py -u username1 username2 username3
```

**Output to File**:

```bash
python3 whatsmyname.py -u username -o results.txt
```

**JSON Output**:

```bash
python3 whatsmyname.py -u username -o results.json --format json
```

**Search Specific Sites Only**:

```bash
python3 whatsmyname.py -u username -s GitHub Twitter Instagram
```

#### Sherlock vs WhatsMyName Comparison

**When to Use Sherlock**:

- Primary tool for username searches
- Broader platform coverage
- Faster execution
- Better maintained

**When to Use WhatsMyName**:

- Sherlock missed platforms
- Verification of Sherlock results
- Platform-specific searches
- Custom platform additions

**Best Practice: Use Both**:

```bash
# Run Sherlock first
python3 sherlock username --json sherlock_results.json

# Run WhatsMyName second
python3 whatsmyname.py -u username -o whatsmyname_results.json --format json

# Compare results
# Platforms found by both = High confidence
# Platforms found by only one = Requires verification
```

### Tool 3: Social-Analyzer - Deep Profile Analysis

#### Installing Social-Analyzer

```bash
# Clone repository
git clone https://github.com/qeeqbox/social-analyzer.git

# Navigate to directory
cd social-analyzer

# Install dependencies
pip3 install -r requirements.txt
```

#### Using Social-Analyzer

```bash
# Basic search
python3 app.py --username "username" --metadata

# Search with screenshots
python3 app.py --username "username" --screenshots
```

### Tool 4: Maigret - Advanced Username Collection

#### Installing Maigret

```bash
# Install via pip
pip3 install maigret

# Or clone from GitHub
git clone https://github.com/soxoj/maigret.git
cd maigret
pip3 install -r requirements.txt
```

#### Using Maigret

```bash
# Basic search
maigret username

# Save HTML report
maigret username --html

# Timeout adjustment
maigret username --timeout 30
```

### Integrated Tool Workflow

**Comprehensive Investigation Process**:

```bash
#!/bin/bash
# osint_investigation.sh - Automated multi-tool workflow

USERNAME=$1
EMAIL=$2

echo "=== OSINT Investigation: $USERNAME ==="
echo

echo "[1/4] Running Sherlock..."
python3 sherlock "$USERNAME" --json sherlock_results.json

echo
echo "[2/4] Running WhatsMyName..."
python3 whatsmyname.py -u "$USERNAME" -o whatsmyname_results.json --format json

if [ ! -z "$EMAIL" ]; then
    echo
    echo "[3/4] Running Holehe on $EMAIL..."
    holehe "$EMAIL" > holehe_results.txt
fi

echo
echo "[4/4] Running Maigret..."
maigret "$USERNAME" --html

echo
echo "=== Investigation Complete ==="
echo "Results saved in current directory"
```

**Usage**:

```bash
chmod +x osint_investigation.sh
./osint_investigation.sh johndoe johndoe@example.com
```

---

## 5. Professional OSINT Report Writing

### Report Structure and Components

A professional OSINT report transforms raw data into actionable intelligence. It must be clear, concise, evidence-based, and reproducible.

### Standard OSINT Report Template

#### Executive Summary

**Purpose**: Provide high-level overview for non-technical stakeholders

**Components**:

- Investigation objective
- Key findings (2-3 sentences)
- Confidence level
- Recommendations

**Example**:

```markdown
## Executive Summary

**Objective**: Identify and verify online accounts associated with username "njoxlee"

**Key Findings**: Investigation revealed 18 confirmed accounts across major platforms
including GitHub, Instagram, Twitter, and LinkedIn. Cross-platform correlation analysis
indicates 95% confidence that all discovered accounts belong to the same individual
based on consistent profile information, linked accounts, and temporal patterns.

**Confidence Level**: High (95%)

**Recommendation**: Accounts verified as legitimate and currently active. No
impersonation or fraudulent activity detected.
```

#### Investigation Methodology

**Purpose**: Document techniques for reproducibility

**Components**:

- Tools used
- Search parameters
- Date and time of investigation
- Limitations and constraints

**Example**:

```markdown
## Methodology

**Tools Employed**:

- Sherlock v0.14.3 (username enumeration)
- Holehe v1.8 (email-to-account mapping)
- WhatsMyName (verification)
- Manual verification via browser

**Search Parameters**:

- Primary username: njoxlee
- Variations tested: njox_lee, lee_njox, njox, mrnjox
- Email address: njoxlee@example.com (discovered via GitHub profile)

**Investigation Timeline**:

- Start: 2025-11-16 09:00 UTC
- End: 2025-11-16 11:30 UTC
- Duration: 2.5 hours

**Limitations**:

- Private accounts not accessible
- Some platforms require authentication (excluded)
- Results reflect point-in-time snapshot
```

#### Findings and Evidence

**Purpose**: Present discovered information with supporting evidence

**Components**:

- Account listing
- Correlation analysis
- Evidence screenshots
- Verification details

**Example**:

```markdown
## Findings

### Confirmed Accounts (18 total)

#### High Confidence Accounts (95-100% correlation)

**1. GitHub**

- URL: https://github.com/njoxlee
- Username: njoxlee
- Profile Picture: developer_headshot.jpg
- Bio: "Full-stack developer | Python enthusiast | Dar es Salaam, Tanzania"
- Email: njoxlee@example.com (public)
- Activity: Active (last commit 2 days ago)
- Correlation Factors:
  - Links to Twitter account
  - Same profile picture as LinkedIn
  - Professional bio matches LinkedIn
- Confidence: 100%

**2. Twitter**

- URL: https://twitter.com/njox_lee
- Username: njox_lee
- Profile Picture: same_developer_headshot.jpg (identical)
- Bio: "Dev | Python | DSM | github.com/njoxlee"
- Followers: 1,247
- Activity: Active (last tweet 1 day ago)
- Correlation Factors:
  - Links back to GitHub
  - Same profile picture
  - Matching location (DSM = Dar es Salaam)
  - Identical interests (Python, development)
- Confidence: 100%

**3. LinkedIn**

- URL: https://linkedin.com/in/njox-lee
- Profile Picture: professional_headshot.jpg (same person, professional attire)
- Name: Njox Lee
- Title: Full Stack Developer
- Location: Dar es Salaam, Tanzania
- Activity: Active
- Correlation Factors:
  - Same person in profile picture
  - Matching profession and location
  - Skills align with GitHub repositories
- Confidence: 95%

[Continue for all 18 accounts...]
```

#### Correlation Analysis

**Purpose**: Explain attribution logic

**Example**:

```markdown
## Correlation Analysis

### Visual Identity

- **Profile Pictures**:
  - 12 of 18 accounts use identical or similar professional headshot
  - 4 accounts use casual photos of same individual
  - 2 accounts use logo/avatar (brand accounts)
  - Reverse image search confirms original photos (not stock images)

### Biographical Information

- **Location Consistency**:
  - 15 of 18 accounts list Dar es Salaam, Tanzania
  - 3 accounts list "Tanzania" without city
  - 0 conflicting locations
- **Professional Identity**:
  - 14 accounts identify as "developer" or "programmer"
  - 8 specifically mention "Python"
  - 6 mention "full-stack"
  - Consistent professional narrative

### Cross-Platform Linking

- **Direct Links Found**:
  - GitHub → Twitter (bio link)
  - Twitter → GitHub (bio link)
  - LinkedIn → GitHub (profile section)
  - Personal website → All major platforms
- **Link Verification**:
  - All links functional and reciprocal
  - Website (njoxlee.dev) lists all discovered accounts
  - Forms strongly connected network

### Temporal Patterns

- **Account Creation Timeline**:
  - GitHub: March 2018
  - Twitter: April 2018
  - Instagram: June 2018
  - LinkedIn: August 2018
  - Sequential adoption pattern typical of single user
- **Activity Patterns**:
  - Primary activity: 08:00-22:00 EAT (UTC+3)
  - Posting peaks: 09:00, 13:00, 20:00
  - Weekday > Weekend activity
  - Consistent across all platforms

### Username Patterns

- **Core Identity**: "njox" + "lee" in various formations
- **Variations**:
  - njoxlee (primary)
  - njox_lee (delimiter variant)
  - lee_njox (reversed)
  - njox (shortened)
- **Pattern Consistency**: 100% adherence to core elements

### Confidence Score: 95%

Based on weighted correlation matrix, extremely high probability all
accounts belong to same individual.
```

#### Risk Assessment

**Purpose**: Identify security or reputation concerns

**Example**:

```markdown
## Risk Assessment

### Information Exposure

- **Email Address**: Publicly visible on GitHub
- **Location**: City-level precision disclosed
- **Full Name**: Available on LinkedIn
- **Employment History**: Detailed on LinkedIn
- **Personal Interests**: Disclosed across platforms

**Risk Level**: Moderate
**Recommendation**: Consider privacy settings review

### Account Security

- **Verification Status**:
  - Twitter: Not verified
  - LinkedIn: Verified email
  - GitHub: 2FA enabled (indicated by security badge)

**Risk Level**: Low
**Recommendation**: Enable 2FA on all platforms

### Impersonation Risk

- **Username Availability**:
  - Checked 50+ platforms
  - "njoxlee" available on 32 platforms
  - No detected impersonation accounts

**Risk Level**: Low
**Recommendation**: Register on key platforms to prevent squatting

### Reputation

- **Content Analysis**: Professional, technical, appropriate
- **Sentiment**: Positive engagement
- **Controversial Content**: None detected

**Risk Level**: Very Low
```

#### Recommendations

**Purpose**: Provide actionable next steps

**Example**:

```markdown
## Recommendations

### For Subject (if applicable)

1. Enable two-factor authentication on all accounts
2. Review privacy settings on Facebook and Instagram
3. Consider removing public email from GitHub profile
4. Register username on unclaimed platforms to prevent impersonation

### For Investigation

1. Accounts verified with high confidence
2. No further verification needed unless specific concerns arise
3. Monitor for new account creation (set up alerts)
4. Periodic review recommended (quarterly)

### For Stakeholders

1. Identity confirmed across 18 platforms
2. No red flags or concerning activity detected
3. Professional online presence maintained
4. Suitable for [background check/due diligence/partnership/etc.]
```

### Report Formatting Best Practices

**Professional Standards**:

1. **Use Clear Headers**: Hierarchical structure (H1, H2, H3)
2. **Include Metadata**: Date, investigator, version
3. **Cite Sources**: Link to original profiles
4. **Timestamp Everything**: When data was collected
5. **Include Screenshots**: Visual evidence
6. **Redact Sensitive Info**: Protect privacy as appropriate
7. **Use Tables**: For structured data comparison
8. **Version Control**: Track report updates

**Example Header**:

```markdown
# OSINT Investigation Report

**Report ID**: OSINT-2025-11-16-001
**Subject**: Username "njoxlee"
**Investigator**: [Your Name]
**Date**: November 16, 2025
**Classification**: Confidential
**Version**: 1.0
```

### Mini Report Template (Quick Format)

For rapid assessments:

```markdown
## Quick OSINT Assessment

**Target Username**: [username]
**Date**: [date]
**Tools Used**: Sherlock, Holehe, Manual verification

### Summary

- Platforms found: [number]
- High confidence: [number]
- Verification needed: [number]

### Key Accounts

1. [Platform]: [URL] - [Confidence%] - [Key identifier]
2. [Platform]: [URL] - [Confidence%] - [Key identifier]
3. [Platform]: [URL] - [Confidence%] - [Key identifier]

### Correlation Indicators

- Profile picture: [Match status]
- Bio information: [Consistency level]
- Links: [Cross-reference status]
- Timeline: [Pattern consistency]

### Confidence Level

[High/Medium/Low] - [Percentage]

### Notes

- [Any significant observations]
- [Red flags or concerns]
- [Recommendations]
```

---

## 6. Practical Intermediate Exercises

### Exercise 1: Multi-Username Pattern Investigation

**Objective**: Master username variation searching and pattern recognition

**Task**:

1. Choose a public figure or use your own username
2. Generate 8-10 logical variations
3. Run comprehensive Sherlock search:
   ```bash
   python3 sherlock variant1 variant2 variant3 variant4 --json variations.json
   ```
4. Analyze which patterns are most commonly used
5. Document your findings

**Deliverables**:

- List of variations tested
- Number of accounts found per variation
- Pattern analysis (which patterns work best)
- Confidence assessment

### Exercise 2: Anonymous Investigation

**Objective**: Practice operational security with Tor

**Task**:

1. Install and configure Tor
2. Verify Tor connectivity
3. Run Sherlock search with Tor:
   ```bash
   python3 sherlock username --tor --output tor_investigation.txt
   ```
4. Compare speed and results with non-Tor search
5. Document differences

**Questions to Answer**:

- How much slower was the Tor search?
- Were there any errors unique to Tor mode?
- Did you encounter rate limiting?
- How would you optimize Tor searches?

### Exercise 3: Comprehensive Correlation Analysis

**Objective**: Develop professional attribution skills

**Task**:

1. Select 3-5 accounts from a Sherlock search
2. Create detailed comparison spreadsheet
3. Analyze all five correlation factors:
   - Profile pictures
   - Bio information
   - Links
   - Temporal patterns
   - Username patterns
4. Calculate weighted confidence score
5. Write 1-page correlation report

**Deliverables**:

- Completed spreadsheet with scoring
- Evidence screenshots
- Correlation report with confidence level
- Justification for confidence rating

### Exercise 4: Multi-Tool Integration

**Objective**: Combine multiple OSINT tools effectively

**Task**:

1. Run Sherlock to find accounts
2. Extract email from discovered profile
3. Run Holehe on discovered email
4. Run WhatsMyName for verification
5. Cross-reference all findings
6. Create comprehensive account map

**Deliverables**:

- Sherlock results (JSON)
- Holehe results (text)
- WhatsMyName results (JSON)
- Visual account relationship map
- Integration analysis document

### Exercise 5: Professional Report Writing

**Objective**: Produce publication-quality OSINT report

**Task**:

1. Conduct full investigation on username of choice
2. Collect all evidence (screenshots, data exports)
3. Write complete OSINT report using template
4. Include all standard sections:
   - Executive summary
   - Methodology
   - Findings
   - Correlation analysis
   - Risk assessment
   - Recommendations

**Evaluation Criteria**:

- Completeness of investigation
- Quality of evidence
- Clarity of writing
- Professional formatting
- Actionable recommendations

---

## Summary and Progression

### Key Skills Mastered

By completing this intermediate module, you have developed:

1. **Advanced Search Techniques**: Multi-username pattern recognition
2. **Operational Security**: Anonymous investigation with Tor
3. **Analytical Skills**: Five-factor correlation methodology
4. **Tool Integration**: Combining Sherlock, Holehe, WhatsMyName
5. **Professional Communication**: OSINT report writing

### Skill Assessment Checklist

- [ ] Can generate and search 10+ username variations
- [ ] Successfully configured and used Tor with Sherlock
- [ ] Performed complete five-factor correlation analysis
- [ ] Integrated 3+ OSINT tools in single investigation
- [ ] Written professional OSINT report with evidence
- [ ] Calculated confidence scores using weighted matrix
- [ ] Identified temporal patterns across platforms
- [ ] Created visual account relationship maps

### Next Steps: Advanced Level

**Prerequisites for Advanced Module**:

- Completed all intermediate exercises
- Written at least 3 professional reports
- Comfortable with Python basics
- Understanding of APIs and automation

**Advanced Topics Preview**:

- Sherlock automation with Python scripting
- Custom platform additions to Sherlock
- Large-scale investigations (100+ usernames)
- Dark web username searching
- API integration and data pipelines
- Machine learning for pattern recognition
- Advanced anonymization techniques
- Legal and ethical frameworks

### Continuous Improvement

**Daily Practice** (30 minutes):

- Search 2-3 usernames with variations
- Practice one correlation technique
- Review one tool's documentation

**Weekly Projects** (2-3 hours):

- Complete one full investigation
- Write one professional report
- Experiment with new tool integration

**Monthly Goals**:

- Build portfolio of 4-5 complete investigations
- Master one new complementary tool
- Contribute to OSINT community (forums, blogs)

### Additional Resources

**Advanced Reading**:

- "Open Source Intelligence Techniques" by Michael Bazzell
- "OSINT Handbook" by i-intelligence
- Bellingcat's Online Investigation Toolkit

**Communities**:

- r/OSINT (Reddit)
- OSINT Curious (Podcast and community)
- Trace Labs (CTF competitions)
- IntelTechniques Forum

**Certification Paths**:

- OSINT Combine Certification
- Trace Labs OSINT Certification
- SANS SEC487: Open-Source Intelligence Gathering

**Practice Platforms**:

- Trace Labs CTF (monthly competitions)
- OSINT Challenge projects
- Real-world investigations (ethical only)

Remember: Intermediate OSINT skills require practice and ethical application. Always respect privacy, comply with laws, and maintain professional standards.
