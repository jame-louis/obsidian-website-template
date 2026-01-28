title: "[Lecture Title]"
date: 2026-01-27
title: "[Assignment Name]"
due_date: 2026-02-05
title: "[Project Name]"
due_date: 2026-03-15
group: true  # or false for individual projects
# 自定义指南

本指南说明如何将本模板定制为适用于中文教学的课程网站。

## 快速开始

1. Fork 或 clone 本仓库
2. 修改配置文件（参见下文）
3. 使用 `bundle exec jekyll serve` 本地预览
4. 部署到 GitHub Pages 或托管服务器

---

## 需要定制的配置文件

### 1. `_config.yml` - 站点配置

在此设置站点标题、课程名等全局配置：

```yaml
title: "[课程标题]"
course:
  name: "[课程名称]"
  code: "[课程代码]"
```

### 2. `_data/course-info.yml` - 课程元数据

此文件包含课程大纲页面使用的全部课程信息（教师、学期、学习目标等）。请务必用中文填写：

示例：

```yaml
title: "计算机导论"
course_code: "CS101"
institution: "某某大学"
instructor:
  name: "张三"
  email: "zhangsan@university.edu"
```

### 3. `_data/schedule.yml` - 课程日程

定义逐周教学安排：

```yaml
semester_start: "[YYYY-MM-DD]"
semester_end: "[YYYY-MM-DD]"
total_weeks: 16

weeks:
  - week: 1
    title: "[第1周：课程介绍]"
    start_date: "[YYYY-MM-DD]"
    end_date: "[YYYY-MM-DD]"
    topics:
      - "[主题1]"
      - "[主题2]"
```

### 4. `_data/announcements.yml` - 公告

在此添加课程重要通知和关键日期，内容请使用中文。

---

## 页面内容定制

### 首页 `pages/index.md`

编辑首页的英雄区、课程简介及快速链接，确保中文表述清晰。

### 教学大纲 `pages/syllabus.md`

教学大纲会自动读取 `_data/course-info.yml`，你也可以在此页添加详细政策（出勤、迟交、学术诚信等），请用中文撰写。

### 日程页 `pages/schedule.md`

自动生成自 `_data/schedule.yml`，修改日程文件即可更新页面。

### 资源页 `pages/resources.md`

将资源替换为中文资源或带中文说明的链接（例如：文档、工具、参考书目）。

### 常见问题 `pages/faq.md`

用中文替换或补充常见问题，按部分（课程常规、技术要求、作业与项目、评分与政策、沟通与帮助）组织内容。

---

## 添加课程内容

### 添加讲义

在 `_lectures/` 中创建 Markdown 文件并添加 front matter：

```markdown
---
layout: lecture
title: "第一讲：课程介绍"
week: 1
date: 2026-01-27
permalink: /lectures/week-01-lecture-01/
---

## 第一讲：课程介绍

内容...
```

### 添加作业

在 `_assignments/` 中创建文件，指定 `due_date` 与评分要求。

### 添加项目

在 `_projects/` 中创建项目描述，并提供评分细则与提交方式。

---

## 样式与本地化

### 颜色与字体

在 `assets/css/main.css` 中修改变量以调整主题配色与字体。若需使用中文字体，可在 CSS 中引入相应的 Web 字体或系统字体。

示例（中文字体优先）：

```css
font-family: "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
```

---

## 部署与检查

本地预览：

```bash
bundle exec jekyll serve
```

常见检查项：
- 确认 `_data/` 中的中文内容正确显示
- 确认页面路径与 `permalink` 无误
- 检查 CSS 是否正确引用中文字体

---

如果你希望，我可以继续把 `pages/index.md`、`pages/syllabus.md` 等页面也翻译为中文并填写示例内容。 
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