# OSINT (Open Source Intelligence)

OSINT involves collecting and analyzing information that is publicly available for research purposes. This intelligence gathering technique uses open sources to obtain actionable information.

## Taking Effective Notes

### Note Taking Tools

- [KeepNote](https://keepnote.org/) - Hierarchical note organization
- [Notion](http://notion.so/) - All-in-one workspace for notes and collaboration
- [CherryTree](https://www.giuspen.net/cherrytree/) - Hierarchical note taking application
- [OneNote](https://onenote.cloud.microsoft/) - Microsoft's cloud-based note taking platform
- [Joplin](https://joplinapp.org/) - Open source note taking and to-do application

### Image Editing Tools

- [Greenshot](https://getgreenshot.org/) - Screenshot and annotation tool
- [Flameshot](https://flameshot.org/) - Powerful screenshot software

## Sock Puppets

### Creating Sock Puppets

Sock puppets are fake online personas used for intelligence gathering without revealing your real identity.

**Resources:**

- [Creating Effective Sock Puppets](https://notes.z3r0r3z.com/osint/sock_puppets/jake_creps_sock_puppet/)
- [The Art Of The Sock](https://www.secjuice.com/the-art-of-the-sock-osint-humint/)
- [Anonymous Sockpuppet Account Setup Process](https://www.reddit.com/r/OSINT/comments/dp70jr/my_process_for_setting_up_anonymous_sockpuppet/)

**Example Email:**

> louisthornton@jourrapide.com

**Todo:**

- Create fake user personas for Twitter, LinkedIn, and Facebook

## Search Engines

### Popular Search Engines

- [Google](https://google.com/) - The standard search engine that most others are built around
- [Bing](https://bing.com) - Microsoft's search engine, now enhanced with AI capabilities
- [Yahoo](https://yahoo.com) - Currently runs on Bing's backend infrastructure
- **Baidu** - Dominant search engine in China
- [Yandex](https://yandex.com/) - Popular search engine in Russia and Eastern Europe
- **DuckDuckGo** - Privacy-focused search engine with no user tracking

**Note:** Yandex is considered the best search engine for reverse image searching compared to other available options.

## Search Engine Operators

### Site-Specific Searches

To retrieve user information or any specific information from a particular website:

```
user info(name, age, sex) site:www.website.com
```

### Boolean Operators

Use the AND operator to combine search terms for more specific results when gathering information about users.

### Exact Match Searches

To find exact phrase matches, use quotation marks:

```
"njox" site:must.ac.tz
```

### Wildcard Searches

You can use wildcard operators (\*) to broaden your search and find variations of terms.

### File Type Searches

To search for specific file types containing sensitive information like passwords:

```
site:tesla.com password filetype:pdf
```

### subdomains

```md
site:must.ac.tz -WWW

site:must.ac.tz -WWW -forums
```

### passewrd

```md
"njox" intext:password
intitle:password
```

### Searching

- to use google advanced search then use http://google.com/advanced_search

This technique helps locate PDF documents on Tesla's website that might contain password-related information.

```

```

## References

- [How to Google like a Pro – 10 Tips for More Effective Googling](https://www.freecodecamp.org/news/how-to-google-like-a-pro-10-tips-for-effective-googling/)