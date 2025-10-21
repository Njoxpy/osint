# Search Engines and Operators

Mastering search engines and their operators is fundamental to effective OSINT investigations. This guide covers essential search engines and advanced search techniques.

## Popular Search Engines

### [Google](https://google.com/)
- **Description**: The standard search engine that most others are built around
- **Strengths**: Comprehensive indexing, advanced operators, cached pages
- **Best for**: General searches, document discovery, cached content
- **Advanced Search**: [google.com/advanced_search](http://google.com/advanced_search)

### [Bing](https://bing.com)
- **Description**: Microsoft's search engine, now enhanced with AI capabilities
- **Strengths**: Visual search, video search, integration with Microsoft services
- **Best for**: Image searches, academic content, Microsoft ecosystem

### [Yahoo](https://yahoo.com)
- **Description**: Currently runs on Bing's backend infrastructure
- **Strengths**: News aggregation, finance data, legacy content
- **Best for**: Historical searches, news archives

### [Yandex](https://yandex.com/)
- **Description**: Popular search engine in Russia and Eastern Europe
- **Strengths**: **Best search engine for reverse image searching**
- **Best for**: Image analysis, Russian/Eastern European content, facial recognition
- **Note**: Superior reverse image search capabilities compared to other engines

### Baidu
- **Description**: Dominant search engine in China
- **Strengths**: Chinese content, local Chinese services
- **Best for**: Chinese language content, local Chinese information

### DuckDuckGo
- **Description**: Privacy-focused search engine with no user tracking
- **Strengths**: Privacy protection, no filter bubbles, anonymous searching
- **Best for**: Sensitive investigations, unbiased results

## Advanced Search Operators

### Site-Specific Searches

#### Basic Site Search
```
site:example.com keyword
```
Searches for content only within the specified domain.

#### Exclude Main Domain
```
site:example.com -www
```
Finds subdomains while excluding the main www subdomain.

#### Multiple Exclusions
```
site:example.com -www -forums
```
Excludes multiple subdomains or sections.

#### Example: University Information
```
site:must.ac.tz "njox"
```
Searches for "njox" only on the must.ac.tz domain.

### File Type Searches

#### Document Discovery
```
site:tesla.com password filetype:pdf
```
Locates PDF documents containing "password" on Tesla's website.

#### Common File Types
```
filetype:pdf
filetype:doc
filetype:xls
filetype:ppt
filetype:txt
```

### Content-Specific Searches

#### Text Content Search
```
"njox" intext:password
```
Finds pages where "njox" appears and the word "password" is in the text.

#### Title Search
```
intitle:password
```
Searches for pages with "password" in the title.

#### URL Search
```
inurl:admin
```
Finds pages with "admin" in the URL.

### Boolean Operators

#### AND Operator
```
"john smith" AND "new york"
```
Both terms must appear in results.

#### OR Operator
```
"john smith" OR "j smith"
```
Either term can appear in results.

#### NOT Operator (-)
```
"john smith" -facebook
```
Excludes results containing "facebook".

### Exact Match Searches

#### Phrase Search
```
"exact phrase here"
```
Searches for the exact phrase in quotation marks.

#### Example
```
"njox" site:must.ac.tz
```
Finds exact matches for "njox" on the specified domain.

### Wildcard Searches

#### Single Character Wildcard (?)
```
wom?n
```
Matches "woman" or "women".

#### Multiple Character Wildcard (*)
```
"john * smith"
```
Matches any words between "john" and "smith".

### Time-Based Searches

#### Date Ranges (Google)
```
after:2020 before:2023
```
Limits results to specific date ranges.

#### Recent Content
```
keyword after:2023-01-01
```
Shows only content published after the specified date.

### Specialized Operators

#### Related Sites
```
related:example.com
```
Finds websites similar to the specified domain.

#### Cache Search
```
cache:example.com
```
Shows Google's cached version of the page.

#### Link Search
```
link:example.com
```
Finds pages that link to the specified domain.

## Search Engine Combinations

### Cross-Engine Verification
Always verify important findings across multiple search engines:

1. **Primary Search**: Google for comprehensive results
2. **Image Verification**: Yandex for reverse image searches
3. **Privacy Search**: DuckDuckGo for unbiased results
4. **Regional Content**: Baidu for Chinese content, Yandex for Russian content

### Advanced Combinations

#### Multi-Site Search
```
(site:twitter.com OR site:facebook.com OR site:linkedin.com) "john smith"
```

#### Complex Boolean Logic
```
("john smith" OR "j smith") AND (site:linkedin.com OR site:facebook.com) -"not this john"
```

## Practical Examples

### Finding Email Addresses
```
"john smith" "@company.com"
site:company.com "email" OR "contact"
site:company.com filetype:pdf "john smith"
```

### Subdomain Discovery
```
site:*.company.com
site:company.com -www -mail -ftp
```

### Password Hunting
```
site:company.com "password" filetype:pdf
site:company.com "login" OR "credentials" filetype:doc
intitle:"index of" "password.txt"
```

### Social Media Investigation
```
site:twitter.com "john smith" "company name"
site:linkedin.com "john smith" "software engineer"
site:facebook.com "john smith" location
```

## Search Strategy Tips

### Information Gathering Workflow

1. **Start Broad**: Begin with general keywords
2. **Narrow Down**: Add specific operators and filters
3. **Cross-Verify**: Check results on multiple engines
4. **Document Everything**: Save URLs, timestamps, and screenshots

### Common Mistakes to Avoid

- Relying on a single search engine
- Not using quotation marks for exact phrases
- Forgetting to verify information from multiple sources
- Not documenting search queries used

### Forgotten Password Method

Many websites reveal partial email addresses during password recovery:

1. Navigate to login page
2. Click "Forgot Password"
3. Enter suspected email variations
4. Note partial email reveals in error messages
5. Use this information to confirm email patterns

## References

- [How to Google like a Pro – 10 Tips for More Effective Googling](https://www.freecodecamp.org/news/how-to-google-like-a-pro-10-tips-for-effective-googling/)
- [Google Search Operators: Complete List](https://ahrefs.com/blog/google-advanced-search-operators/)
- [Yandex Search Operators Guide](https://yandex.com/support/search/query-language/search-operators.html)
