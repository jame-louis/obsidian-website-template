---
layout: course-page
title: "主页"
permalink: /
---

## 欢迎

### {{ site.data.course-info.title }}（{{ site.data.course-info.course_code }}）

欢迎来到课程网站。这里汇集了课程大纲、教学日程、讲义、作业与参考资源。

### 快速链接

- [教学大纲]({{ '/pages/syllabus/' | relative_url }})
- [课程日程]({{ '/pages/schedule/' | relative_url }})
- [讲义]({{ '/lectures/' | relative_url }})
- [作业]({{ '/assignments/' | relative_url }})
- [资源]({{ '/pages/resources/' | relative_url }})
- [常见问题]({{ '/pages/faq/' | relative_url }})

### 公告

{% for item in site.data.announcements.announcements limit:3 %}
- **{{ item.date }}** — {{ item.title }}: {{ item.content }}
{% endfor %}

如需更多信息，请先阅读 [CUSTOMIZATION.md](CUSTOMIZATION.md) 或联系授课教师：{{ site.data.course-info.instructor.email }}。