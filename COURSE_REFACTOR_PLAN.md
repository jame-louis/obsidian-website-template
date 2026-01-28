# Android Programming & Design Course Website - Refactoring Plan

## 1. Vision & Goals

Transform the current Obsidian-Jekyll template into a comprehensive course management website featuring:
- Central hub for course information and syllabus
- Structured lecture materials with slides and notes
- Weekly schedules with clear learning objectives
- Homework assignments with submission tracking
- Project showcases with requirements and rubrics
- Resources library (tools, APIs, documentation)
- Student discussion/announcements area

---

## 2. Content Architecture

### 2.1 Main Sections

```
Course Website
├── Home (Course Overview)
├── Syllabus & Course Info
├── Schedule & Calendar
├── Lectures (by week/module)
├── Homework & Assignments
├── Projects
├── Resources
├── FAQ
└── Announcements
```

### 2.2 Course Structure
**Duration**: 16 weeks  
**Format**: Lectures + Labs + Projects  
**Topics**:
- Week 1-2: Android Fundamentals, Environment Setup, Activities & Intents
- Week 3-4: Layouts, UI Widgets, Fragment Basics
- Week 5-6: Data Persistence (SQLite, SharedPreferences)
- Week 7-8: RecyclerView, Networking (REST APIs)
- Week 9-10: Location Services, Sensors, Maps API
- Week 11-12: Material Design, Animations
- Week 13-14: Firebase, Notifications, Background Services
- Week 15-16: Final Project, Testing, Deployment

---

## 3. Directory Structure

### Proposed Organization

```
obsidian-website-template/
├── _config.yml                    # Configuration
├── _layouts/
│   ├── default.html               # Base layout
│   ├── course-page.html           # Course info pages
│   ├── lecture.html               # Individual lecture
│   ├── assignment.html            # Homework/assignment
│   ├── project.html               # Project details
│   └── schedule.html              # Weekly schedule
├── _includes/
│   ├── navigation.html            # Main nav
│   ├── sidebar.html               # Week navigation
│   ├── learning-objectives.html   # LO component
│   ├── assignment-card.html       # Assignment preview
│   └── project-card.html          # Project preview
├── _data/
│   ├── course-info.yml            # Course metadata
│   ├── schedule.yml               # Weekly schedule
│   ├── lectures.yml               # Lecture index
│   └── projects.yml               # Project metadata
├── _collections/
│   ├── lectures/                  # Weekly lecture folders
│   │   ├── week-01/
│   │   ├── week-02/
│   │   └── ...
│   ├── assignments/               # Homework assignments
│   ├── projects/                  # Major projects
│   └── resources/                 # Course resources
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── course.css             # Course-specific styles
│   │   └── responsive.css
│   ├── js/
│   │   ├── navigation.js
│   │   └── schedule.js
│   ├── images/
│   │   ├── course/
│   │   ├── screenshots/
│   │   └── diagrams/
│   └── downloads/
│       ├── slides/
│       ├── code-samples/
│       └── projects/
├── pages/
│   ├── index.md                   # Home page
│   ├── syllabus.md                # Course syllabus
│   ├── schedule.md                # Full schedule
│   ├── resources.md               # Resources page
│   ├── faq.md                     # FAQs
│   └── announcements.md           # Announcements
└── _posts/                        # Blog/news posts
```

---

## 4. Jekyll Collections & Data Files

### 4.1 Collections to Create

```yaml
# _config.yml additions
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
  resources:
    output: true
    permalink: /resources/:slug/
```

### 4.2 Data Files (_data/)

**course-info.yml**:
```yaml
title: Android Programming & Design
instructor: Dr. [Name]
semester: Spring 2026
credits: 3
meeting_times: MWF 10:00 AM - 11:15 AM
office_hours: TR 2:00 PM - 4:00 PM
description: Introduction to Android app development...
learning_outcomes:
  - Build functional Android applications
  - Design intuitive UI/UX
  - Work with APIs and databases
```

**schedule.yml**:
```yaml
weeks:
  - week: 1
    title: "Android Fundamentals"
    start_date: 2026-01-27
    topics:
      - topic: "Course Overview & Setup"
        lecture: "week-01/introduction"
      - topic: "Android Architecture"
        lecture: "week-01/architecture"
    assignment: "assignment-1"
    homework: "hw-1-setup"
    resources:
      - "android-studio-guide"
      - "adb-tutorial"
```

**lectures.yml**:
```yaml
lectures:
  - id: week-01-intro
    week: 1
    title: "Course Overview & Android Basics"
    date: 2026-01-27
    slides: "lectures/week-01/slides.pdf"
    code: "lectures/week-01/starter-code.zip"
    duration: 75
```

---

## 5. Page & Layout Templates

### 5.1 New Pages

| Page | Purpose | Layout |
|------|---------|--------|
| Home (`index.md`) | Course overview, quick links | default |
| Syllabus | Course policies, grading, objectives | course-page |
| Schedule | Week-by-week overview | schedule |
| Lectures Index | Browse all lectures | default |
| Individual Lecture | Slides, notes, code | lecture |
| Assignments Index | All homework | default |
| Individual Assignment | Requirements, submission | assignment |
| Projects Index | All projects | default |
| Individual Project | Details, rubric, examples | project |
| Resources | Tools, APIs, docs | course-page |
| FAQ | Common questions | course-page |
| Announcements | News & updates | default |

### 5.2 Layout Files to Create

**`_layouts/lecture.html`**:
- Course breadcrumb
- Week navigation sidebar
- Lecture title & metadata
- Learning objectives
- Lecture content
- Embedded slides or video
- Code example section
- Next/Previous lecture links
- Discussion/Q&A section

**`_layouts/assignment.html`**:
- Assignment title, due date
- Learning objectives covered
- Requirements/description
- Submission format
- Rubric/grading criteria
- Resources & examples
- Starter code download

**`_layouts/project.html`**:
- Project overview
- Learning goals
- Requirements & features
- Rubric/evaluation criteria
- Team size & deadlines
- Resources & APIs to use
- Submission checklist

**`_layouts/schedule.html`**:
- Calendar/timeline view
- Week cards with collapsible details
- Quick access to lecture, assignment, project

---

## 6. Structured Content Examples

### 6.1 Lecture Structure
```markdown
---
layout: lecture
week: 1
date: 2026-01-27
title: "Android Architecture & Project Setup"
learning_objectives:
  - Understand Android stack layers
  - Set up Android Studio
  - Create first Android project
  - Navigate project structure
resources:
  - "Android Docs: Architecture"
  - "Android Studio Setup Guide"
slides_url: "/assets/downloads/slides/week-01-intro.pdf"
code_repo: "https://github.com/course/week-01-starter"
video_id: "youtube-id-here"
---

## Overview
[Content here]

## Key Concepts
[Content here]

## Code Example
[Code snippet here]

## Next Steps
- Read: Android Fundamentals documentation
- Watch: Architecture Deep Dive video
- Prepare: Download Android Studio
```

### 6.2 Assignment Structure
```markdown
---
layout: assignment
title: "Assignment 1: Android Environment Setup"
week: 1
due_date: 2026-02-03
submission_type: "GitHub Repository Link"
rubric:
  - criterion: "Android Studio Installation"
    points: 25
  - criterion: "First App Creation"
    points: 25
  - criterion: "Running on Emulator"
    points: 25
  - criterion: "Code Quality & Submission"
    points: 25
---

## Objective
Students will set up Android development environment...

## Requirements
1. Install Android Studio
2. Create first Android project
3. Run on emulator/device
4. Submit GitHub link

## Submission
- Due: [DATE]
- Submit: Link in assignment portal
- Format: GitHub repository
```

### 6.3 Project Structure
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
learning_objectives:
  - Implement RESTful API calls
  - Build complex UI with RecyclerView
  - Manage user authentication
  - Persist data with SQLite
---

## Overview
Build a Twitter-like application with posts, likes, follows...

## Requirements
- User authentication
- Post feed with pagination
- Create/delete posts
- Follow/unfollow users
- Search functionality

## Rubric
- Functionality (30%)
- UI/UX Design (20%)
- Code Quality (25%)
- Documentation (15%)
- Presentation (10%)

## Resources
- Twitter API or Mock REST API
- Firebase Authentication
- RecyclerView tutorials

## Submission
- Demo video (3-5 min)
- Source code on GitHub
- Presentation (10 min)
```

---

## 7. Implementation Phases

### Phase 1: Setup & Structure (Week 1)
- [ ] Create directory structure
- [ ] Set up Jekyll collections
- [ ] Create data files (course-info, schedule)
- [ ] Design and implement new layouts
- [ ] Create navigation system

### Phase 2: Course Information (Week 1-2)
- [ ] Update homepage with course overview
- [ ] Create syllabus page
- [ ] Create schedule page with calendar
- [ ] Add course policies & grading rubric
- [ ] Create FAQ page

### Phase 3: Lectures (Week 2-3)
- [ ] Create week folders in lectures collection
- [ ] Add 3 sample weeks of lectures
- [ ] Create lecture template with all components
- [ ] Add slides and code samples
- [ ] Implement week navigation sidebar

### Phase 4: Assignments (Week 3-4)
- [ ] Create assignment collection
- [ ] Write assignment templates
- [ ] Add 8-10 assignments across semester
- [ ] Create assignment submission tracking
- [ ] Add rubrics and grading criteria

### Phase 5: Projects (Week 4-5)
- [ ] Create projects collection
- [ ] Design 3-4 major projects
- [ ] Create project templates with requirements
- [ ] Add rubrics and examples
- [ ] Create project showcase page

### Phase 6: Resources & Polish (Week 5-6)
- [ ] Create resources page
- [ ] Add tools, APIs, documentation links
- [ ] Implement announcements system
- [ ] Add search functionality
- [ ] Style and responsive design
- [ ] Test and deploy

---

## 8. Key Features to Implement

### Core Features
- [ ] Responsive course website
- [ ] Week-by-week navigation
- [ ] Searchable lectures & assignments
- [ ] Downloadable resources (slides, code)
- [ ] Calendar/schedule view
- [ ] Announcement system
- [ ] FAQ with categories
- [ ] Contact form for instructors

### Nice-to-Have Features
- [ ] Student grade tracker (private)
- [ ] Discussion forums
- [ ] Video integration (YouTube, Vimeo)
- [ ] Live Q&A chat
- [ ] Assignment submission portal
- [ ] Peer code review system
- [ ] Certificate generation
- [ ] Mobile app

### Technical Enhancements
- [ ] Add Jekyll plugins for search
- [ ] Implement sitemap.xml
- [ ] Add RSS feeds for announcements
- [ ] Optimize images and assets
- [ ] Implement dark mode
- [ ] Add analytics
- [ ] SEO optimization

---

## 9. Styling Approach

### CSS Organization
```
assets/css/
├── main.css              # Base styles
├── course.css            # Course-specific styles
├── layouts.css           # Page layouts
├── components.css        # Reusable components
├── responsive.css        # Mobile-first responsive
└── dark-mode.css         # Dark theme
```

### Design System
- **Color Scheme**: Android Material Design (primary blue)
- **Typography**: Clean, readable fonts
- **Components**: Cards, buttons, sidebars, navigation
- **Accessibility**: WCAG 2.1 AA compliance

---

## 10. Sample File Examples

### Example: Week 1 Lecture
Location: `_collections/lectures/week-01/01-introduction.md`

### Example: Assignment 1
Location: `_collections/assignments/assignment-01.md`

### Example: Project 1
Location: `_collections/projects/project-01-twitter-clone.md`

### Example: Data File
Location: `_data/schedule.yml`

---

## 11. Migration Checklist

- [ ] Backup current site
- [ ] Create new directory structure
- [ ] Set up Jekyll collections in _config.yml
- [ ] Create data files
- [ ] Create new layout templates
- [ ] Create include components
- [ ] Remove old example posts
- [ ] Update homepage
- [ ] Create pages (syllabus, schedule, resources, etc.)
- [ ] Add sample lectures (week 1-2)
- [ ] Add sample assignments
- [ ] Add sample projects
- [ ] Test all pages and links
- [ ] Implement styling
- [ ] Deploy and test on live site

---

## 12. GitHub Repository Structure

Consider organizing course materials:
```
course-repo/
├── lectures/           # Lecture notes & slides
├── assignments/        # Assignment descriptions
├── projects/          # Project specifications
├── starter-code/      # Code templates per week
├── solutions/         # Instructor solutions (private)
└── README.md
```

---

## Next Steps

1. **Review & Adjust**: Confirm course structure and timeline
2. **Create Templates**: Build Jekyll layouts
3. **Populate Week 1**: Add first week's lectures and assignments
4. **Test Locally**: Run Jekyll build and test all pages
5. **Deploy**: Push to GitHub Pages
6. **Iterate**: Add remaining weeks progressively

