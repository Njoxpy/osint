# OSINT Learning Guide

A comprehensive Open Source Intelligence (OSINT) learning guide built with MkDocs Material.

## Features

- **Comprehensive Coverage**: Complete guide to OSINT tools and techniques
- **Professional Documentation**: Clean, searchable, and mobile-friendly interface
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Search Functionality**: Full-text search across all documentation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Print-Friendly**: Optimized layouts for printing documentation

## Quick Start

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Njoxpy/osint.git
   cd osint
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Serve locally**:
   ```bash
   mkdocs serve
   ```

4. **Open in browser**:
   Navigate to `http://127.0.0.1:8000`

### Building for Production

```bash
mkdocs build
```

The built site will be in the `site/` directory.

## Project Structure

```
osint/
├── docs/                          # Documentation source files
│   ├── index.md                   # Homepage
│   ├── osint-fundamentals.md      # OSINT basics
│   ├── note-taking.md             # Note-taking tools and techniques
│   ├── tools.md                   # OSINT tools overview
│   ├── search-engines.md          # Search engines and operators
│   ├── email-discovery.md         # Email discovery techniques
│   ├── reverse-image-searching.md # Image analysis and verification
│   ├── identifying-geolocation.md # Geolocation techniques
│   ├── ai-osint.md               # AI in OSINT
│   ├── images.md                 # Image gallery
│   ├── external-resources.md      # External links and resources
│   ├── images/                   # Image assets
│   ├── stylesheets/              # Custom CSS
│   └── javascripts/              # Custom JavaScript
├── .github/workflows/            # GitHub Actions for deployment
├── mkdocs.yml                    # MkDocs configuration
├── requirements.txt              # Python dependencies
└── README.md                     # This file
```

## Content Overview

### Getting Started
- **OSINT Fundamentals**: Core principles and methodologies
- **Note Taking**: Essential tools for organizing research

### Tools & Techniques
- **OSINT Tools**: Comprehensive tool overview
- **Search Engines**: Advanced search operators and techniques
- **Email Discovery**: Methods for finding and verifying email addresses

### Advanced Topics
- **Image Analysis**: Reverse image searching and metadata analysis
- **Geolocation**: Techniques for identifying geographical locations
- **AI in OSINT**: Artificial intelligence applications

### Resources
- **Image Gallery**: Visual examples and practice materials
- **External Links**: Curated collection of external resources

## Deployment

### GitHub Pages (Automatic)

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Site will be available at `https://njoxpy.github.io/osint`

### Manual Deployment

1. **Build the site**:
   ```bash
   mkdocs build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   mkdocs gh-deploy
   ```

## Customization

### Theme Configuration

The site uses MkDocs Material with custom configuration in `mkdocs.yml`:

- **Color Scheme**: Indigo primary color with automatic dark/light mode
- **Navigation**: Tabbed navigation with sections
- **Features**: Search, navigation enhancements, code copying
- **Extensions**: Markdown extensions for enhanced formatting

### Custom Styling

Custom CSS is located in `docs/stylesheets/extra.css`:

- Enhanced table styling
- Custom button designs
- Responsive design improvements
- Print optimizations

### JavaScript Enhancements

Custom JavaScript in `docs/javascripts/extra.js` provides:

- Copy code functionality
- Reading time estimation
- Smooth scrolling
- Keyboard shortcuts
- Progress indicator

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-content`
3. **Make your changes** and test locally with `mkdocs serve`
4. **Commit your changes**: `git commit -am 'Add new content'`
5. **Push to the branch**: `git push origin feature/new-content`
6. **Create a Pull Request**

### Content Guidelines

- Use clear, concise language
- Include practical examples
- Add relevant links and resources
- Follow existing formatting conventions
- Test all code examples

### Adding New Pages

1. Create a new `.md` file in the `docs/` directory
2. Add the page to the navigation in `mkdocs.yml`
3. Use appropriate headings and formatting
4. Include relevant cross-references

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [MkDocs](https://mkdocs.org/) - Static site generator
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - Material Design theme
- [OSINT Community](https://osintcurio.us/) - Inspiration and resources
- [Bellingcat](https://bellingcat.com/) - Investigation techniques and methodologies

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Njoxpy/osint/issues) page
2. Create a new issue with detailed description
3. Join the OSINT community discussions

## Disclaimer

This documentation is for educational purposes only. Always ensure your OSINT activities comply with:

- Local and international laws
- Platform terms of service
- Ethical guidelines
- Privacy regulations (GDPR, CCPA, etc.)

Remember to conduct your research responsibly and respect individuals' privacy rights.

---

**Author**: Njoxpy  
**Repository**: [https://github.com/Njoxpy/osint](https://github.com/Njoxpy/osint)  
**Documentation**: [https://njoxpy.github.io/osint](https://njoxpy.github.io/osint)
