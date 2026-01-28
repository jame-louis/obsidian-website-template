# Customization Guide

This is a **generic open course website template** built with Jekyll. You can customize it for any course by updating the configuration and content files.

## Quick Start

1. **Fork or clone this repository**
2. **Update the configuration files** (see sections below)
3. **Build and preview** with `bundle exec jekyll serve`
4. **Deploy to GitHub Pages** or your own server

---

## Configuration Files to Customize

### 1. `_config.yml` - Site-Wide Settings

This file contains your site title, course name, and Jekyll configuration.

**Required changes:**
```yaml
title: "[Your Course Title]"              # Site title
course:
  name: "[Your Course Name]"              # Course name
  code: "[CS XXXX]"                       # Course code
```

**Optional changes:**
- `description`: Brief course description
- `url`: Your website URL (for GitHub Pages, use `https://username.github.io/repository-name`)
- `baseurl`: Repository name if hosting on GitHub Pages

### 2. `_data/course-info.yml` - Course Metadata

This file contains all course details shown on the syllabus and other pages.

**Essential information to update:**
```yaml
title: "[Your Course Title]"
course_code: "[CS XXXX]"
institution: "[Your University]"
department: "[Your Department]"
semester: "[Semester, Year]"
start_date: "[YYYY-MM-DD]"
end_date: "[YYYY-MM-DD]"
```

**Instructor information:**
```yaml
instructor:
  name: "[Instructor Name]"
  email: "[instructor@email.com]"
  office: "[Building Room #]"
  office_hours: "[Days and times]"
```

**Course description:**
```yaml
description: "[Your detailed course description]"
```

**Learning outcomes:**
```yaml
learning_outcomes:
  - "[Student will be able to: specific skill 1]"
  - "[Student will understand: specific concept 1]"
  - "[Student will create: specific deliverable 1]"
  - # ... add more outcomes
```

**Prerequisites and requirements:**
```yaml
prerequisites: "[List prerequisites or 'None']"
required_software:
  - name: "[Tool Name]"
    version: "[Version requirement]"
    download_url: "[Link to download]"
```

**Grading breakdown:**
```yaml
grading:
  participation: 5
  homework: 15
  assignments: 20
  projects: 40
  final: 20
  # Total should equal 100
```

### 3. `_data/schedule.yml` - Course Schedule

This file defines your week-by-week course schedule.

**Basic structure:**
```yaml
semester_start: "[YYYY-MM-DD]"
semester_end: "[YYYY-MM-DD]"
total_weeks: 16  # Change to your course length

weeks:
  - week: 1
    title: "[Week 1 Title]"
    start_date: "[YYYY-MM-DD]"
    end_date: "[YYYY-MM-DD]"
    topics:
      - "[Topic 1]"
      - "[Topic 2]"
    learning_objectives:
      - "[What students will learn]"
    lectures:
      - "week-01-lecture-01"  # Match lecture file names
    assignments:
      - "assignment-01"
    projects:
      - "project-01-name"
    milestone: false  # Set to true for major deadlines
```

**Tips:**
- Create a week block for each week of your course
- Use consistent naming for lectures, assignments, and projects
- Reference files that you'll create in `_lectures/`, `_assignments/`, `_projects/` folders

### 4. `_data/announcements.yml` - Course Announcements

Update with your course start date, important deadlines, and key dates.

```yaml
announcements:
  - date: "[YYYY-MM-DD]"
    title: "[Announcement Title]"
    content: "[Announcement text]"
    type: "important"  # or "reminder", "update"
    urgency: "high"    # or "medium", "low"

important_dates:
  - date: "[YYYY-MM-DD]"
    title: "[Event name - e.g., Midterm Exam]"
```

### 5. `_data/nav.yml` - Navigation Menu

Update navigation links if you add new pages or sections.

```yaml
main:
  - text: "[Menu Item]"
    url: "/pages/[your-page]/"
```

---

## Content Files to Customize

### 1. Homepage (`pages/index.md`)

Update the hero section and course description:

```markdown
# [Your Course Title]

[Your course tagline - e.g., "Learn web development from fundamentals to deployment"]

## Course Description
[Your course description explaining what students will learn]
```

### 2. Syllabus (`pages/syllabus.md`)

The syllabus automatically pulls from `_data/course-info.yml`, but you can add:
- Course policies (attendance, late work, academic integrity)
- Grading scale
- Required textbooks
- Course communication expectations

### 3. Schedule (`pages/schedule.md`)

This page automatically generates from `_data/schedule.yml`. No changes needed here unless you want to customize the layout.

### 4. Resources (`pages/resources.md`)

Replace the resource links with resources for your course:

```markdown
## [Resource Category]

- **[Tool/Resource Name]:** [Link] - [Description]
- **[Another Resource]:** [Link] - [Description]
```

**Resource categories to customize:**
- Development Tools (required software)
- Official Documentation
- Libraries & Frameworks
- Testing & Debugging Tools
- APIs & Services
- Learning Resources
- Design Resources
- Community & Support

### 5. FAQ (`pages/faq.md`)

Replace Android-specific questions with your course-specific FAQ:

```markdown
### [Section Header]

**Q: Your question here?**

A: Your answer here.
```

**FAQ sections to include:**
- General Course Questions
- Prerequisites & Enrollment
- Technical Requirements
- Grading & Assessment
- Assignments & Projects
- Communication & Help
- Course-Specific Topics

---

## Creating Course Content

### Adding Lectures

Create files in `_lectures/` folder:

```markdown
---
layout: lecture
title: "[Lecture Title]"
week: 1
date: 2026-01-27
permalink: /lectures/week-01-lecture-01/
---

## [Lecture Title]

### Learning Objectives
- [Objective 1]
- [Objective 2]

### Content
[Your lecture content here]

### Key Concepts
- [Concept 1]
- [Concept 2]
```

### Adding Assignments

Create files in `_assignments/` folder:

```markdown
---
layout: assignment
title: "[Assignment Name]"
week: 1
due_date: 2026-02-05
permalink: /assignments/assignment-01/
---

## [Assignment Name]

### Objectives
- [Learning objective this assignment targets]

### Requirements
- [Requirement 1]
- [Requirement 2]

### Submission
[How and where to submit]
```

### Adding Projects

Create files in `_projects/` folder:

```markdown
---
layout: project
title: "[Project Name]"
week: 5
due_date: 2026-03-15
group: true  # or false for individual projects
permalink: /projects/project-01/
---

## [Project Name]

### Objectives
[What this project teaches]

### Requirements
[Specific project requirements]

### Deliverables
[What needs to be submitted]

### Grading Rubric
[How the project will be graded]
```

---

## Styling & Customization

### Colors

Edit `assets/css/main.css` to change the color scheme:

```css
/* Primary colors */
--primary: #1976d2;      /* Main brand color */
--primary-light: #42a5f5;
--primary-dark: #1565c0;

/* Secondary colors */
--secondary: #388e3c;     /* Accent color */
--secondary-light: #66bb6a;
--secondary-dark: #2e7d32;
```

### Fonts

Update the `@import` statement at the top of `main.css` to use different Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=[Your+Font+Family]&display=swap');
```

### Logo

Replace the site title with a logo by editing `_includes/navigation.html`.

---

## Deployment

### GitHub Pages (Free)

1. **Fork this repository** on GitHub
2. **Go to repository Settings → Pages**
3. **Set source to `main` branch → `/root` folder**
4. **Your site will be available at:** `https://yourusername.github.io/repository-name`

In `_config.yml`, make sure to set:
```yaml
url: "https://yourusername.github.io"
baseurl: "/repository-name"
```

### Your Own Server

1. **Build the site:** `bundle exec jekyll build`
2. **Upload the `_site/` folder** to your web server
3. **Configure your domain** to point to the server

---

## Common Customizations Checklist

- [ ] Update `_config.yml` with site and course title
- [ ] Update `_data/course-info.yml` with instructor info and course details
- [ ] Update `_data/schedule.yml` with your course weeks
- [ ] Update `_data/announcements.yml` with your important dates
- [ ] Update `pages/index.md` homepage
- [ ] Update `pages/syllabus.md` with course policies
- [ ] Update `pages/resources.md` with your course resources
- [ ] Update `pages/faq.md` with your course FAQ
- [ ] Create lectures in `_lectures/` folder
- [ ] Create assignments in `_assignments/` folder
- [ ] Create projects in `_projects/` folder
- [ ] Test locally with `bundle exec jekyll serve`
- [ ] Deploy to GitHub Pages or your server

---

## Template Placeholders

Throughout the template, you'll see placeholders like:

- `[Course Title]` - Replace with your actual course title
- `[Your University]` - Replace with your institution
- `[Instructor Name]` - Replace with actual instructor name
- `[Topic 1]` - Replace with specific content topics
- `[Link to X]` - Replace with actual URLs

Always replace these placeholders with your specific content.

---

## Need Help?

### Editing the Files
- Use a text editor (VS Code, Atom, Sublime)
- Use GitHub's web editor to make quick changes
- Use Jekyll locally to preview before deploying

### Learning Resources
- [Jekyll Documentation](https://jekyllrb.com)
- [YAML Format Guide](https://yaml.org)
- [GitHub Pages Guide](https://pages.github.com)

### Troubleshooting
1. **Site doesn't build?** Check `_config.yml` syntax
2. **Links broken?** Verify `permalink` values in front matter
3. **Styles missing?** Make sure CSS file is in `assets/css/main.css`

---

## Advanced Customizations

### Adding a Custom Domain
If deploying to GitHub Pages with a custom domain:
1. Create a `CNAME` file in the root with your domain
2. Configure DNS settings at your registrar
3. See [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Using Collections for Other Content
Edit `_config.yml` to add new collections:
```yaml
collections:
  resources:
    output: true
    permalink: /:collection/:slug/
```

### Custom Layouts
Create new HTML files in `_layouts/` folder to extend the template.

---

**Happy teaching! 🎓**

For questions or improvements, consider contributing back to the template repository.