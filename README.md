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
## 开放课程网站模板

这是一个基于 Jekyll 的开放课程网站模板，适用于大学课程、训练营或任何教学项目。

## 功能亮点

- 易于定制：使用简单的 YAML 文件管理课程信息、日程和内容
- 结构化内容：内置讲座、作业、项目与资源的组织方式
- 专业设计：响应式界面，采用现代设计规范
- 移动友好：在手机、平板和桌面设备上表现良好
- 支持 SEO：适配搜索引擎的静态站点结构
- 性能优越：Jekyll 静态站点生成，加载快速
- 支持 GitHub Pages：可免费托管

## 包含内容

- 主页：课程概览与快捷链接
- 教学大纲（Syllabus）：课程信息、政策与评分标准
- 日程：逐周教学安排
- 讲义（Lectures）：单独讲座页面与资料
- 作业（Assignments）：作业说明与提交要求
- 项目（Projects）：课程项目规范
- 资源（Resources）：工具与参考资料
- 常见问题（FAQ）

## 快速开始

### 前置条件

```bash
ruby -v   # 建议 Ruby 3.2+
git --version
```

### 本地预览

1. 克隆仓库：

```bash
git clone https://github.com/yourusername/obsidian-website-template.git
cd obsidian-website-template
```

2. 安装依赖：

```bash
bundle install
```

3. 本地运行：

```bash
bundle exec jekyll serve
```

打开 http://localhost:4000 查看站点。

4. 编辑课程信息：修改 `_data/course-info.yml` 中的占位符

5. 部署到 GitHub Pages：推送到 GitHub 并在仓库设置中启用 Pages

详细定制说明请参阅 `CUSTOMIZATION.md`。

## 文件结构（概览）

```text
_config.yml
_data/
  ├─ course-info.yml
  ├─ schedule.yml
  ├─ nav.yml
  └─ announcements.yml
_layouts/
_includes/
_lectures/
_assignments/
_projects/
pages/
assets/
Gemfile
```

## 自定义概要

- 在 `_data/course-info.yml` 中设置课程标题、教师、学期、学习目标等
- 在 `_data/schedule.yml` 中设置逐周计划
- 编辑 `pages/` 下的页面以添加课程具体内容（主页、大纲、资源、FAQ）
- 修改 `assets/css/main.css` 调整配色与排版

更多定制内容请参阅 `CUSTOMIZATION.md`。

## 添加课程内容示例

创建讲义：在 `_lectures/` 新建 Markdown 文件并添加前置元数据（front matter）

创建作业：在 `_assignments/` 新建作业文件并设置 `due_date` 等字段

创建项目：在 `_projects/` 新建项目文件并添加评分标准

## 部署选项

- GitHub Pages：推送后在仓库设置启用 Pages
- 自建服务器：`bundle exec jekyll build`，将 `_site/` 上传到服务器
- 自定义域名：在根目录添加 `CNAME` 文件并配置 DNS

## 技术栈

- Jekyll（静态站点生成器）
- Liquid 模板语言
- YAML 数据文件
- HTML/CSS/JavaScript

## 帮助与贡献

- 阅读 `CUSTOMIZATION.md` 获取详细指导
- 如需帮助，可在仓库中提交 Issue
- 欢迎贡献：Fork → 新建分支 → 提交 PR

---

开始自定义你的课程网站吧！如需我把其他页面也翻译为中文（例如 `syllabus.md`、`index.md`），我可以继续处理。 