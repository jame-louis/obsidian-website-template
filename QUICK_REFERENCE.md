# Android Course Website - Quick Reference Guide

## Project Structure Overview

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `_data/` | YAML data files (course info, schedule, navigation) |
| `_layouts/` | HTML templates for different page types |
| `_includes/` | Reusable HTML components |
| `_collections/lectures/` | Weekly lecture content |
| `_collections/assignments/` | Homework and assignment files |
| `_collections/projects/` | Major project descriptions |
| `pages/` | Main course pages (syllabus, FAQ, etc.) |
| `assets/css/` | Stylesheets |
| `assets/js/` | JavaScript files |
| `_site/` | Generated static website (output) |

### Core Data Files

**`_data/course-info.yml`**
- Contains all course metadata
- Instructor info, grading scale, policies, learning outcomes

**`_data/schedule.yml`**
- 16-week detailed schedule
- Topics, lectures, assignments, resources per week
- Exams and holidays

**`_data/nav.yml`**
- Site navigation structure
- Main menu and sidebar items

---

## Adding Content

### Adding a New Lecture

1. Create a file in `_collections/lectures/`:
   ```
   _collections/lectures/week-01-introduction.md
   ```

2. Use this template:
   ```markdown
   ---
   layout: lecture
   week: 1
   date: 2026-01-27
   title: "Android Architecture & Project Setup"
   learning_objectives:
     - "Understand Android stack layers"
     - "Set up Android Studio"
   slides_url: "/assets/downloads/slides/week-01-intro.pdf"
   code_samples: "/assets/downloads/code-samples/week-01-starter.zip"
   resources:
     - "Android Docs: Architecture"
   ---
   
   ## Lecture Content
   [Your markdown content here]
   ```

### Adding a New Assignment

1. Create a file in `_collections/assignments/`:
   ```
   _collections/assignments/assignment-01-setup.md
   ```

2. Use this template:
   ```markdown
   ---
   layout: assignment
   title: "Assignment 1: Android Environment Setup"
   week: 1
   due_date: 2026-02-03
   points: 100
   submission_type: "GitHub Repository Link"
   rubric:
     - criterion: "Criterion Name"
       points: 25
   starter_code: "/assets/downloads/code-samples/assignment-01-starter.zip"
   learning_objectives:
     - "Objective 1"
     - "Objective 2"
   ---
   
   ## Requirements
   [Assignment details]
   ```

### Adding a New Project

1. Create a file in `_collections/projects/`:
   ```
   _collections/projects/project-01-twitter-clone.md
   ```

2. Use this template:
   ```markdown
   ---
   layout: project
   title: "Project 1: Twitter Clone"
   number: 1
   difficulty: "Intermediate"
   duration: "4 weeks"
   team_size: "2-3 students"
   start_date: 2026-02-10
   due_date: 2026-03-10
   rubric:
     - criterion: "Functionality"
       weight: "30%"
       details: "All features implemented and working"
   learning_objectives:
     - "Build complex UI with RecyclerView"
     - "Implement REST API calls"
   ---
   
   ## Overview
   [Project description]
   ```

### Adding a New Resource

1. Create a file in `_collections/resources/`:
   ```
   _collections/resources/android-studio-guide.md
   ```

2. Use this template:
   ```markdown
   ---
   layout: resource
   title: "Android Studio Installation Guide"
   description: "Step-by-step guide to install and configure Android Studio"
   ---
   
   [Resource content]
   ```

---

## Editing Data Files

### Update Course Information

**File:** `_data/course-info.yml`

Change the instructor name:
```yaml
instructor:
  name: "Dr. John Smith"  # Change this
  email: "instructor@example.com"
```

### Add a New Announcement

**File:** `_data/announcements.yml`

Add to the announcements list:
```yaml
announcements:
  - date: "2026-01-28"
    title: "New Announcement"
    content: "Your announcement content here"
    type: "important"  # or "reminder"
    urgency: "high"    # or "medium", "low"
```

### Update the Schedule

**File:** `_data/schedule.yml`

Edit week details:
```yaml
weeks:
  - week: 1
    title: "New Week Title"
    topics:
      - "New Topic 1"
      - "New Topic 2"
```

---

## Styling

### Main CSS File
**`assets/css/main.css`**

### CSS Custom Properties (Variables)

```css
--primary-color: #1976d2;
--secondary-color: #388e3c;
--accent-color: #d32f2f;
--text-color: #212121;
--text-light: #666666;
--bg-light: #f5f5f5;
--bg-white: #ffffff;
```

### Useful CSS Classes

```css
.btn-primary        /* Blue button */
.btn-secondary      /* Green button */
.badge-week         /* Week badge */
.badge-difficulty-easy|intermediate|hard
.learning-objectives /* Learning objectives box */
.rubric-table       /* Formatted rubric table */
```

---

## Building & Testing

### Build the Site

```bash
cd /workspaces/obsidian-website-template
jekyll build
```

### Serve Locally

```bash
jekyll serve
# Visit http://localhost:4000/android-course
```

### Check for Errors

```bash
jekyll build --trace
```

---

## Site Navigation

### Main Pages

| Page | URL | File |
|------|-----|------|
| Home | `/` | `pages/index.md` |
| Syllabus | `/pages/syllabus/` | `pages/syllabus.md` |
| Schedule | `/pages/schedule/` | `pages/schedule.md` |
| Resources | `/pages/resources/` | `pages/resources.md` |
| FAQ | `/pages/faq/` | `pages/faq.md` |

### Collections

| Collection | URL Pattern | Directory |
|-----------|------------|-----------|
| Lectures | `/lectures/[lecture-name]/` | `_collections/lectures/` |
| Assignments | `/assignments/[assignment-name]/` | `_collections/assignments/` |
| Projects | `/projects/[project-name]/` | `_collections/projects/` |
| Resources | `/resources/[resource-name]/` | `_collections/resources/` |
| Announcements | `/announcements/[date]/[title]/` | `_posts/` |

---

## Deployment

### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Site will be published to `https://username.github.io/android-course`

### Custom Domain

Update `_config.yml`:
```yaml
baseurl: ""
url: "https://your-domain.com"
```

---

## Troubleshooting

### Jekyll Build Fails

1. Check syntax in YAML files (proper indentation)
2. Verify Liquid template syntax
3. Run `jekyll build --trace` for detailed error message

### Pages Not Generated

- Ensure files have proper YAML front matter
- Check that collection directories exist
- Verify file extensions are `.md`

### Styling Not Applied

- Clear browser cache
- Rebuild site: `jekyll clean && jekyll build`
- Check CSS file is linked in layout

---

## Configuration Reference

### `_config.yml` Key Settings

```yaml
site:
  title: "Android Programming & Design Course"
  course:
    name: "Android Programming & Design"
    semester: "Spring 2026"
    institution: "Your University"

baseurl: "/android-course"  # GitHub Pages path

collections:
  lectures:
    output: true
    permalink: /lectures/:path/
  assignments:
    output: true
    permalink: /assignments/:slug/
  projects:
    output: true
    permalink: /projects/:slug/
```

---

## Tips & Best Practices

1. **Use Markdown**: All content is in Markdown for easy editing
2. **YAML Indentation**: Always use 2 spaces (not tabs)
3. **Consistent Naming**: Use kebab-case for file names (`assignment-01.md`)
4. **Update Data Files**: Keep `_data/schedule.yml` updated for accurate course info
5. **Test Locally**: Always test changes locally before deploying
6. **Keep URLs Simple**: Clear, SEO-friendly URLs help with navigation
7. **Regular Backups**: Commit changes to Git regularly

---

## Quick Links

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Liquid Template Syntax](https://shopify.github.io/liquid/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Material Design Guidelines](https://material.io)

---

**Last Updated:** January 28, 2026  
**Version:** Phase 1 (Foundation)
