# Press Images Guide

This folder stores website screenshots for the press page cards.

## How to Add Website Snapshots

### Option 1: Manual Screenshots (Recommended for Best Quality)

1. Visit each press article URL
2. Take a screenshot of the article (use Chrome's full-page screenshot or similar)
3. Crop to a good representative section (recommend 470x380px or 2:1.6 ratio)
4. Save with a descriptive filename (e.g., `mayo-clinic-ai-agent.jpg`)
5. Place in this folder (`assets/img/press/`)

### Option 2: Automated Screenshot Services

Use one of these free services to capture screenshots:

- **screenshotone.com** - Free API for screenshots
- **urlbox.io** - Screenshot API with free tier
- **screenshotapi.net** - Simple screenshot API

### Option 3: Browser Extensions

- **GoFullPage** (Chrome/Firefox) - Full page screenshots
- **Awesome Screenshot** - Capture and edit
- **Nimbus Screenshot** - Screen capture tool

## Adding Images to Press Cards

Once you have the images, edit `press.html` and add an `<img>` tag inside the `.press-card-image` div:

### Before (current - gradient with icon):
```html
<div class="press-card-image healthcare">
  <i class="fas fa-hospital-user"></i>
</div>
```

### After (with screenshot):
```html
<div class="press-card-image healthcare">
  <img src="/Yuexing-Hao/assets/img/press/mayo-clinic-ai-agent.jpg" alt="Mayo Clinic News">
</div>
```

The gradient background will show through if the image fails to load, and the icon will be hidden once an image is present.

## Recommended Image Specs

- **Dimensions**: 470x380px (or maintain 2:1.6 ratio)
- **Format**: JPG or PNG
- **File size**: Under 200KB (optimized for web)
- **Quality**: 80-85% JPEG quality

## Image Names (Suggested)

1. `mayo-clinic-ai-agent.jpg` - Mayo Clinic study
2. `google-gemini-wayfinding.jpg` - Google Research blog
3. `cornell-llm-cancer-care.jpg` - Cornell News
4. `mit-medical-llm-bias.jpg` - MIT News
5. `cornell-startup-awards.jpg` - Cornell Chronicle
6. `cornell-grad-spotlight.jpg` - Cornell Graduate School
7. `women-in-tech-award.jpg` - Women in Tech ceremony
8. `cornell-ai-older-adults.jpg` - Cornell Chronicle
9. `cornell-life-sciences.jpg` - Life Sciences Fellowship
10. `cornell-ai-trust.jpg` - AI Tool Trust study

## Quick Commands

To optimize images:
```bash
# Using ImageMagick (if installed)
convert input.jpg -resize 470x380^ -quality 85 output.jpg

# Using mogrify to batch process
mogrify -resize 470x380^ -quality 85 *.jpg
```
