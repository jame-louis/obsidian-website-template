---
layout: course-page
title: "Course Schedule"
permalink: /pages/schedule/
---

## Weekly Course Schedule

{{ site.data.course-info.description | truncatewords: 50 }}

**Duration:** {{ site.data.schedule.total_weeks }} weeks ({{ site.data.schedule.semester_start | date: "%B %d" }} - {{ site.data.schedule.semester_end | date: "%B %d, %Y" }})

---

{% for week in site.data.schedule.weeks %}

## Week {{ week.week }}: {{ week.title }}

**Dates:** {{ week.start_date | date: "%B %d" }} - {{ week.end_date | date: "%B %d, %Y" }}

### Topics

{% for topic in week.topics %}
- {{ topic }}
{% endfor %}

### Learning Objectives

{% for objective in week.learning_objectives %}
- {{ objective }}
{% endfor %}

### Course Materials

{% if week.lectures %}
**Lectures:**
{% for lecture in week.lectures %}
- [{{ lecture }}]({{ '/lectures/' | relative_url }})
{% endfor %}
{% endif %}

{% if week.assignments %}
**Assignments:**
{% for assignment in week.assignments %}
- [{{ assignment }}]({{ '/assignments/' | relative_url }})
{% endfor %}
{% endif %}

{% if week.projects %}
**Projects:**
{% for project in week.projects %}
- [{{ project }}]({{ '/projects/' | relative_url }})
{% endfor %}
{% endif %}

{% if week.resources %}
**Resources:**
{% for resource in week.resources %}
- [{{ resource }}]({{ '/resources/' | relative_url }})
{% endfor %}
{% endif %}

{% if week.milestone %}
### ⭐ Milestone: {{ week.milestone_name }}
{% endif %}

---

{% endfor %}

## Important Dates

| Date | Event |
|------|-------|
{% for item in site.data.announcements.important_dates %}
| {{ item.date | date: "%B %d, %Y" }} | {{ item.title }} |
{% endfor %}

## Exams

{% for exam in site.data.schedule.exams %}
- **{{ exam.name }}** (Week {{ exam.week }}): {{ exam.date | date: "%B %d, %Y" }}
  - Content: {{ exam.content }}
  - Format: {{ exam.type }}
{% endfor %}

## Holidays & Breaks

{% for holiday in site.data.schedule.holidays %}
- **{{ holiday.name }}:** {{ holiday.start_date | date: "%B %d" }} - {{ holiday.end_date | date: "%B %d, %Y" }}
{% endfor %}

---

**Note:** This schedule is subject to change at the instructor's discretion. 
Students will be notified of any significant changes via course announcements.
