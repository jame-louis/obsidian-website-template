---
layout: course-page
title: "Syllabus"
permalink: /pages/syllabus/
---

## Course Information

**Course Title:** {{ site.data.course-info.title }}  
**Course Code:** {{ site.data.course-info.course_code }}  
**Semester:** {{ site.data.course-info.semester }}  
**Credits:** {{ site.data.course-info.credits }}  
**Level:** {{ site.data.course-info.level }}  
**Institution:** {{ site.data.course-info.institution }}  

### Instructor

**Name:** {{ site.data.course-info.instructor.name }}  
**Email:** [{{ site.data.course-info.instructor.email }}](mailto:{{ site.data.course-info.instructor.email }})  
**Office:** {{ site.data.course-info.instructor.office }}  
**Office Hours:** {{ site.data.course-info.instructor.office_hours }}  

### Meeting Times

**Days:** {{ site.data.course-info.meeting.days }}  
**Time:** {{ site.data.course-info.meeting.time }}  
**Location:** {{ site.data.course-info.meeting.location }}  
**Duration:** {{ site.data.course-info.meeting.duration_minutes }} minutes per class  

---

## Course Description

{{ site.data.course-info.description }}

---

## Prerequisites

{% for prereq in site.data.course-info.prerequisites %}
- {{ prereq }}
{% endfor %}

---

## Learning Outcomes

Upon successful completion of this course, students will be able to:

{% for outcome in site.data.course-info.learning_outcomes %}
- {{ outcome }}
{% endfor %}

---

## Required Software & Materials

### Software

| Tool | Version | Link | Cost |
|------|---------|------|------|
{% for tool in site.data.course-info.required_software %}
| {{ tool.name }} | {{ tool.version }} | [Download]({{ tool.link }}) | {{ tool.cost }} |
{% endfor %}

### Textbooks

{{ site.data.course-info.textbook_note }}

---

## Grading

### Grade Components

| Component | Percentage |
|-----------|-----------|
| Participation | 5% |
| Homework | 15% |
| Assignments | 20% |
| Projects | 40% |
| Final Project | 20% |

### Grading Scale

| Grade | Range |
|-------|-------|
| A | 90-100 |
| B | 80-89 |
| C | 70-79 |
| D | 60-69 |
| F | Below 60 |

---

## Course Policies

### Attendance Policy
{{ site.data.course-info.policies[0].content }}

### Late Work Policy
{{ site.data.course-info.policies[1].content }}

### Academic Integrity
{{ site.data.course-info.policies[2].content }}

### Accessibility
{{ site.data.course-info.policies[3].content }}

---

## Course Schedule

For the detailed week-by-week schedule, including topics, deadlines, and milestones, 
please see the [Course Schedule]({{ '/pages/schedule/' | relative_url }}).

**Important Dates:**
- **Course Begins:** {{ site.data.schedule.weeks[0].start_date | date: "%B %d, %Y" }}
- **Midterm Exam:** Week 7
- **Spring Break:** March 23 - March 30
- **Final Presentations:** {{ site.data.schedule.weeks[15].start_date | date: "%B %d, %Y" }}
- **Course Ends:** {{ site.data.schedule.weeks[15].end_date | date: "%B %d, %Y" }}

---

## Communication

**Course Website:** This course website contains all materials and updates.  
**Email:** For questions, email the instructor at [{{ site.data.course-info.instructor.email }}](mailto:{{ site.data.course-info.instructor.email }})  
**Office Hours:** {{ site.data.course-info.instructor.office_hours }} in {{ site.data.course-info.instructor.office }}  
**Response Time:** Emails will be answered within 24 hours (48 hours on weekends)

---

## Accommodations for Students with Disabilities

{{ site.data.course-info.policies[3].content }}

Contact your university's disability services office for more information.

---

## Disclaimer

This syllabus is subject to change at the instructor's discretion. Students will be notified of any significant changes.
