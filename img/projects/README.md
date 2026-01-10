# Project Screenshots Directory

This directory contains screenshots for portfolio projects.

## Naming Convention

For each project, create a subdirectory with the project ID and add screenshots:

```
img/projects/
├── yaake/
│   ├── screenshot-1.jpg
│   ├── screenshot-2.jpg
│   └── screenshot-3.jpg
├── oversave/
│   ├── screenshot-1.jpg
│   └── screenshot-2.jpg
├── microservices-ecommerce/
│   ├── screenshot-1.jpg
│   └── screenshot-2.jpg
└── ...
```

## Project IDs

- `yaake` - YAAKE AI-Powered Career Platform
- `oversave` - Over-save Budget Tracking App
- `microservices-ecommerce` - Microservices E-Commerce Platform
- `data-validation-ml` - Data Validation System with ML
- `bookhub` - BookHub Book Review Platform
- `linkedleads` - LinkedLeads Automation
- `journal-system` - Journal Management System
- `housing-prices` - Housing Prices Visualization
- `crypto-prediction` - Crypto Price Prediction

## Recommended Image Specifications

- **Format:** JPG or PNG
- **Dimensions:** 1920x1080 or 1600x900 (16:9 aspect ratio)
- **File size:** < 500KB per image (optimize for web)
- **Content:** Screenshots showing key features and UI

## Adding Screenshots to the Website

1. Add your screenshots to the appropriate project folder
2. Update `js/main.js` in the project data structure
3. Replace the screenshot placeholder section with actual image gallery

Example code to add in `main.js` for a project:

```javascript
screenshots: [
    'img/projects/yaake/screenshot-1.jpg',
    'img/projects/yaake/screenshot-2.jpg',
    'img/projects/yaake/screenshot-3.jpg'
]
```

Then update the rendering function to display the gallery instead of the placeholder.
