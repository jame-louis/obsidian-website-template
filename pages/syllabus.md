---
layout: course-page
title: "教学大纲"
permalink: /pages/syllabus/
---

## 课程信息

- **课程名称：** {{ site.data.course-info.title }}  
- **课程代码：** {{ site.data.course-info.course_code }}  
- **学期：** {{ site.data.course-info.semester }} {{ site.data.course-info.year }}  
- **学分：** {{ site.data.course-info.credits }}  
- **难度等级：** {{ site.data.course-info.level }}  
- **授课单位：** {{ site.data.course-info.institution }}  

### 授课教师

- **姓名：** {{ site.data.course-info.instructor.name }}  
- **邮箱：** [{{ site.data.course-info.instructor.email }}](mailto:{{ site.data.course-info.instructor.email }})  
- **办公地点：** {{ site.data.course-info.instructor.office }}  
- **办公时间：** {{ site.data.course-info.instructor.office_hours }}  

### 上课时间与地点

- **上课日：** {{ site.data.course-info.meeting.days }}  
- **上课时间：** {{ site.data.course-info.meeting.time }}  
- **地点：** {{ site.data.course-info.meeting.location }}  

---

## 课程简介

{{ site.data.course-info.description }}

---

## 先修要求

{% for prereq in site.data.course-info.prerequisites %}
- {{ prereq }}
{% endfor %}

---

## 学习目标

完成本课程后，学生应能够：

{% for outcome in site.data.course-info.learning_outcomes %}
- {{ outcome }}
{% endfor %}

---

## 所需软件与教材

### 软件

| 工具 | 版本 | 链接 | 费用 |
|------|------:|------|------|
{% for tool in site.data.course-info.required_software %}
| {{ tool.name }} | {{ tool.version }} | [下载]({{ tool.link }}) | {{ tool.cost }} |
{% endfor %}

### 教材与参考

{{ site.data.course-info.textbook_note }}

---

## 评分方式

| 项目 | 权重 (%) |
|------|---------:|
| 课堂参与 | {{ site.data.course-info.grading.participation }} |
| 小作业 | {{ site.data.course-info.grading.homework }} |
| 课后作业 | {{ site.data.course-info.grading.assignments }} |
| 项目 | {{ site.data.course-info.grading.projects }} |
| 期末/最终项目 | {{ site.data.course-info.grading.final_project }} |

### 评分等级

| 等级 | 分数范围 |
|------|--------:|
| A | 90-100 |
| B | 80-89 |
| C | 70-79 |
| D | 60-69 |
| F | 低于 60 |

---

## 课程政策

### 出勤政策
{{ site.data.course-info.policies[0].content }}

### 迟交作业
{{ site.data.course-info.policies[1].content }}

### 学术诚信
{{ site.data.course-info.policies[2].content }}

### 无障碍服务
{{ site.data.course-info.policies[3].content }}

---

## 教学日程

详细逐周安排见 [课程日程]({{ '/pages/schedule/' | relative_url }})。

**重要日期示例（请在 `_data/schedule.yml` 中更新）：**
- **课程开始：** {{ site.data.schedule.weeks[0].start_date }}
- **中期考试：** 第 7 周
- **期末汇报：** {{ site.data.schedule.weeks[15].start_date }}
- **课程结束：** {{ site.data.schedule.weeks[15].end_date }}

---

## 沟通

课程网站包含所有课程资料与更新。遇到问题请通过邮箱联系授课教师： [{{ site.data.course-info.instructor.email }}](mailto:{{ site.data.course-info.instructor.email }})。

办公时间：{{ site.data.course-info.instructor.office_hours }}（详见课程大纲）

响应时间：工作日内通常 24 小时内回复，周末或节假日可能延迟。

---

## 无障碍与支持

{{ site.data.course-info.policies[3].content }}

若需额外帮助，请联系学校无障碍服务或授课教师。

---

## 免责声明

教学大纲可能会在学期中根据教学需要进行调整，若有重大变更将及时通知学生。
