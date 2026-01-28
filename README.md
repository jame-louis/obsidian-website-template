# Open Course Website Template

A Jekyll-based template for creating beautiful, professional course websites for any open course, bootcamp, or training program.

## Features

✨ **Easy to Customize** - Simple YAML configuration files for course details, schedule, and content
📚 **Structured Content** - Built-in organization for lectures, assignments, projects, and resources
🎨 **Professional Design** - Responsive, modern design with Material Design principles
📱 **Mobile Friendly** - Works great on phones, tablets, and desktops
🔍 **SEO Ready** - Optimized for search engines
⚡ **Fast Performance** - Static site generation with Jekyll
🚀 **GitHub Pages Ready** - Deploy free to GitHub Pages or any web server

## What's Included

- **Homepage** - Course overview and quick links
- **Syllabus** - Complete course information, policies, and grading
- **Schedule** - Week-by-week course timeline
- **Lectures** - Individual lecture pages with materials
- **Assignments** - Assignment descriptions and requirements
- **Projects** - Major project specifications
- **Resources** - Curated links and tools for your course
- **FAQ** - Frequently asked questions
- **Responsive Design** - Works on all devices

## Quick Start

### Prerequisites
- Ruby 3.2+
- Git
- (Optional) GitHub account for free hosting

### Installation

1. **Clone or fork this repository**
   ```bash
   git clone https://github.com/yourusername/open-course-website-template.git
   cd open-course-website-template
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Update course information** in `_data/course-info.yml`
   ```yaml
   title: "Your Course Title"
   course_code: "CS 101"
   instructor:
     name: "Your Name"
     email: "your.email@university.edu"
   ```

4. **Preview locally**
   ```bash
   bundle exec jekyll serve
   ```
   Visit http://localhost:4000 in your browser

5. **Customize the rest of your course**
   - Update `_config.yml`
   - Update data files in `_data/`
   - Update pages in `pages/`
   - Add lectures, assignments, and projects

6. **Deploy to GitHub Pages**
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Your site will be live at `https://yourusername.github.io/repository-name`

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed customization instructions.

## File Structure

```
├── _config.yml                 # Site configuration
├── _data/
│   ├── course-info.yml        # Course metadata
│   ├── schedule.yml           # Week-by-week schedule
│   ├── nav.yml                # Navigation structure
│   └── announcements.yml      # Course announcements
├── _layouts/                  # Page templates
├── _includes/                 # Reusable components
├── _lectures/                 # Lecture content
├── _assignments/              # Assignment descriptions
├── _projects/                 # Project specifications
├── _resources/                # Learning resources
├── pages/                     # Main pages
│   ├── index.md              # Homepage
│   ├── syllabus.md           # Course syllabus
│   ├── schedule.md           # Schedule page
│   ├── resources.md          # Resources page
│   └── faq.md                # FAQ
├── assets/
│   ├── css/                  # Stylesheets
│   ├── js/                   # JavaScript
│   └── images/               # Images
└── Gemfile                   # Ruby dependencies
```

## Customization Highlights

### 1. Course Information
Edit `_data/course-info.yml` to set:
- Course title, code, and description
- Instructor information and office hours
- Learning outcomes
- Prerequisites and required software
- Grading breakdown

### 2. Schedule
Edit `_data/schedule.yml` to define:
- Course start and end dates
- Weekly topics and learning objectives
- Lecture and assignment references
- Important milestones and deadlines

### 3. Content Pages
Update these files with your course-specific content:
- `pages/index.md` - Course overview
- `pages/syllabus.md` - Detailed syllabus and policies
- `pages/resources.md` - Tools, documentation, and links
- `pages/faq.md` - Common questions

### 4. Styling
Edit `assets/css/main.css` to:
- Change colors and theme
- Adjust typography
- Customize layout and spacing

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for complete documentation.

## Adding Course Content

### Create a Lecture
Create a new file in `_lectures/week-01-introduction.md`:
```markdown
---
layout: lecture
title: "Introduction to the Course"
week: 1
date: 2026-01-27
---

## Introduction

[Your lecture content here]
```

### Create an Assignment
Create a new file in `_assignments/assignment-01.md`:
```markdown
---
layout: assignment
title: "Assignment 1: Setup"
week: 1
due_date: 2026-02-05
---

## Assignment 1: Setup

[Assignment description and requirements]
```

### Create a Project
Create a new file in `_projects/project-01.md`:
```markdown
---
layout: project
title: "Project 1: Basic Application"
week: 4
due_date: 2026-03-10
---

## Project 1

[Project details, requirements, and rubric]
```

## Deployment Options

### GitHub Pages (Free)
- Push your repository to GitHub
- Enable Pages in repository settings
- Your site goes live automatically

### Custom Domain
- Add a `CNAME` file with your domain name
- Configure DNS settings at your registrar

### Self-Hosted Server
- Run `bundle exec jekyll build`
- Upload the `_site/` folder to your server
- Configure your web server to serve the site

## Configuration Examples

### For a Computer Science Course
```yaml
title: "CS 101: Introduction to Computer Science"
course_code: "CS 101"
institution: "Your University"
instructor:
  name: "Dr. Jane Smith"
  email: "j.smith@university.edu"
```

### For a Design Course
```yaml
title: "Design Fundamentals"
course_code: "DES 201"
institution: "Your Design School"
instructor:
  name: "Prof. John Designer"
  email: "john@designschool.edu"
```

### For a Business Course
```yaml
title: "Entrepreneurship & Startup Strategy"
course_code: "BUS 301"
institution: "Your Business School"
instructor:
  name: "Prof. Sarah Business"
  email: "sarah@bizschool.edu"
```

## Technical Stack

- **Jekyll 4.3+** - Static site generator
- **Liquid** - Template language
- **YAML** - Configuration and data files
- **HTML5 & CSS3** - Markup and styling
- **JavaScript** - Interactivity
- **Ruby 3.2+** - Required for Jekyll

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Static site generation for fast load times
- Optimized CSS and JavaScript
- Responsive images
- ~100/100 Lighthouse scores achievable

## Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML5
- Keyboard navigation support
- Screen reader friendly

## What Makes This a Template?

This site is intentionally built as a **generic template** that works for any course:

- ✅ No course-specific content hardcoded
- ✅ All course info in easy-to-edit YAML files
- ✅ Simple placeholder values guide customization
- ✅ Reusable layouts for lectures, assignments, projects
- ✅ Comprehensive customization guide included
- ✅ Works for any subject matter or course type

## Examples

This template has been used for courses including:
- Computer Science & Programming
- Web Development
- Mobile App Development
- Data Science & Machine Learning
- Design & UX
- Business & Entrepreneurship
- And more...

## Troubleshooting

### Site doesn't build
- Check Ruby version: `ruby -v` (should be 3.2+)
- Run `bundle install` to update gems
- Check `_config.yml` for YAML syntax errors

### Links are broken
- Verify `permalink` values in page front matter
- Check that referenced files exist
- Make sure URLs don't have trailing slashes (unless intended)

### Styles look wrong
- Clear browser cache
- Run `bundle exec jekyll clean` and rebuild
- Check CSS file paths in `assets/css/`

### Content not appearing
- Verify file names match references in `_data/`
- Check front matter formatting (must be valid YAML)
- Ensure files are in correct folders with correct extensions

## Getting Help

1. **Read the [CUSTOMIZATION.md](CUSTOMIZATION.md)** - Comprehensive guide to all customizations
2. **Check the [FAQ](pages/faq.md)** - Common questions and answers
3. **Review Jekyll docs** - [jekyllrb.com](https://jekyllrb.com)
4. **File an issue** - GitHub issues for bugs or questions

## Contributing

Found a bug or have an improvement? Contributions welcome!

1. Fork the repository
2. Create a branch for your changes
3. Make your improvements
4. Submit a pull request

## License

This template is provided as-is for educational use.

## Credits

Built with:
- [Jekyll](https://jekyllrb.com/) - Static site generator
- [Minima Theme](https://github.com/jekyll/minima) - Base theme
- [Material Design](https://material.io) - Design system

---

**Ready to create your course website?** Start with [CUSTOMIZATION.md](CUSTOMIZATION.md) for step-by-step instructions!

Questions? Check [CUSTOMIZATION.md](CUSTOMIZATION.md) or review the example files in the template.