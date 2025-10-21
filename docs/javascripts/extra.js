// MathJax configuration for mathematical expressions
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Enhanced search functionality
document.addEventListener("DOMContentLoaded", function() {
  // Add search suggestions for OSINT terms
  const searchTerms = [
    "reverse image search",
    "EXIF data",
    "geolocation",
    "sock puppets",
    "search operators",
    "email discovery",
    "OSINT tools",
    "metadata analysis",
    "verification techniques",
    "social media intelligence"
  ];

  // Add copy code button functionality
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(function(codeBlock) {
    const button = document.createElement('button');
    button.className = 'md-clipboard md-icon';
    button.setAttribute('title', 'Copy to clipboard');
    button.innerHTML = '📋';
    
    button.addEventListener('click', function() {
      navigator.clipboard.writeText(codeBlock.textContent).then(function() {
        button.innerHTML = '✅';
        setTimeout(function() {
          button.innerHTML = '📋';
        }, 2000);
      });
    });
    
    codeBlock.parentNode.appendChild(button);
  });

  // Add table of contents navigation for long pages
  const headings = document.querySelectorAll('h2, h3, h4');
  if (headings.length > 5) {
    const tocContainer = document.createElement('div');
    tocContainer.className = 'page-toc';
    tocContainer.innerHTML = '<h4>On this page</h4>';
    
    const tocList = document.createElement('ul');
    headings.forEach(function(heading) {
      const tocItem = document.createElement('li');
      const tocLink = document.createElement('a');
      tocLink.href = '#' + heading.id;
      tocLink.textContent = heading.textContent;
      tocLink.className = 'toc-link-' + heading.tagName.toLowerCase();
      tocItem.appendChild(tocLink);
      tocList.appendChild(tocItem);
    });
    
    tocContainer.appendChild(tocList);
    
    // Insert TOC after the first paragraph
    const firstParagraph = document.querySelector('.md-content p');
    if (firstParagraph) {
      firstParagraph.parentNode.insertBefore(tocContainer, firstParagraph.nextSibling);
    }
  }

  // Add external link indicators
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach(function(link) {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      link.innerHTML += ' 🔗';
    }
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add reading time estimation
  const content = document.querySelector('.md-content__inner');
  if (content) {
    const text = content.textContent;
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    const readingTimeElement = document.createElement('div');
    readingTimeElement.className = 'reading-time';
    readingTimeElement.innerHTML = `📖 Estimated reading time: ${readingTime} minute${readingTime !== 1 ? 's' : ''}`;
    
    const title = document.querySelector('h1');
    if (title) {
      title.parentNode.insertBefore(readingTimeElement, title.nextSibling);
    }
  }
});

// Add keyboard shortcuts for navigation
document.addEventListener('keydown', function(e) {
  // Alt + S for search
  if (e.altKey && e.key === 's') {
    e.preventDefault();
    const searchInput = document.querySelector('[data-md-component="search-query"]');
    if (searchInput) {
      searchInput.focus();
    }
  }
  
  // Alt + H for home
  if (e.altKey && e.key === 'h') {
    e.preventDefault();
    window.location.href = '/';
  }
});

// Progress indicator for long pages
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight * 100;
  
  let progressBar = document.querySelector('.reading-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background-color: var(--md-primary-fg-color);
      z-index: 999;
      transition: width 0.1s;
    `;
    document.body.appendChild(progressBar);
  }
  
  progressBar.style.width = scrollPercent + '%';
});
