# SHPRC Stanford Website

**SHPRC** (Sexual Health Peer Resource Center) at Stanford is a student-run center for sexual health education, resources, and peer counseling.

---

## Project Overview

This repository houses the code and assets for SHPRC's public-facing website, designed to:

- Showcase services like peer counseling, safer sex supplies, and campus resources  
- Provide a schedule, photo gallery (e.g., Sex Week 2024), and contact info  
- Share health and Title IX resources for students  
- Offer anonymous ordering tools (e.g., staff packs, supplies via Google forms)

---

## Repository Structure

SHPRCStanford-website/
├── index.html           # Main homepage with navigation and content
├── style.css            # Main stylesheet for layout and design
├── event.js             # JavaScript for interactive elements
├── smooth-scroll.js     # Smooth scrolling functionality
├── assets/              # Images, videos, and media files
│   ├── SHPRC logo.jpg   # SHPRC branding and logos
│   ├── Stanford_Logo.webp # Stanford University branding
│   ├── background-video.mp4 # Background video content
│   ├── IMG_0860.PNG - IMG_0869.PNG # Photo gallery images
│   ├── livechat.png     # Live chat interface
│   ├── resources.png    # Resources section graphics
│   ├── schedule.png     # Schedule and events graphics
│   └── wave1.png, wave2.png # Decorative wave elements
├── CNAME                # Custom domain configuration
└── README.md            # This file

---

## Features & Highlights

- **Responsive Design**: Modern, mobile-friendly layout with smooth scrolling navigation
- **Interactive Elements**: Live chat functionality and smooth scroll effects
- **Visual Content**: Photo gallery showcasing SHPRC events and activities
- **Resource Integration**: Direct links to sexual health resources, Title IX information, and campus support
- **Anonymous Services**: Support for confidential ordering and peer counseling
- **Event Management**: Schedule display and event coordination tools

---

## Getting Started

### Option A: Local Development
1. Clone the repo:
   ```bash
   git clone https://github.com/dibdin/SHPRCStanford-website-.git
   cd SHPRCStanford-website-
   ```

2. Serve locally:
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   
   # Or using Node.js (if you have it installed)
   npx serve .
   
   # Or simply open the file in your browser
   open index.html
   ```

3. Visit your local site at `http://localhost:8000`

### Option B: Deployment (GitHub Pages)
- The site is configured for GitHub Pages deployment
- Custom domain is set up via CNAME file
- Visit the live site: [SHPRC Stanford Website](https://shprcstanford.com)

---

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Hosting**: GitHub Pages
- **Domain**: Custom domain with CNAME configuration
- **Media**: Optimized images and video content

---

## Contribution Guidelines

- **Content Updates**: Add, update, or improve content as needed (e.g., new events, updated contact info)
- **Visual Changes**: Commit image updates and layout changes under the main directory
- **Code Changes**: Structure contributions with descriptive commit messages
- **Review Process**: Open pull requests for review before merging

---

## Acknowledgments

- **Mission & Content**: Adapted from the official SHPRC site at Stanford
- **SHPRC's History**: One-stop student-run sexual health resource and peer education center
- **Additional Context**: Stanford Cardinal Service and campus outreach programs
- **Community Support**: Stanford's commitment to sexual health education and inclusion

---

## Contact & Credits

**Developed by Diba Dindoust**, former SHPRC peer counselor and website developer.

For updates or questions:
- **GitHub**: [dibdin](https://github.com/dibdin)
- **Email**: dibadindoust@stanford.edu

---

## Mission Statement

SHPRC is dedicated to providing comprehensive sexual health education, resources, and peer support to the Stanford community. Our website serves as a central hub for students seeking information, supplies, counseling, and community connection in a safe, inclusive, and confidential environment.

---

*Thank you for supporting sexual health, education, and inclusion at Stanford!*

---

### Why This Works:
- **Clear structure**: Visitors immediately understand the site's purpose and layout
- **Modular details**: Easy to map this README to the actual directory structure
- **Contextualized**: Incorporates mission and resources using Stanford references
- **Deployment-ready**: Offers instructions for both local testing and GitHub Pages hosting
