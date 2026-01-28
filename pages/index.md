---
layout: default
title: "Open Course Website Template"
---

<div class="homepage">
    <section class="hero">
        <div class="hero-content">
            <h1>{{ site.course.name }}</h1>
            <p class="tagline">Course materials, lectures, and resources</p>
            <p class="course-meta">
                {{ site.course.semester }} | {{ site.course.institution }}<br>
                Instructor: {{ site.data.course-info.instructor.name }}
            </p>
            <div class="hero-buttons">
                <a href="{{ '/pages/syllabus/' | relative_url }}" class="btn btn-primary">View Syllabus</a>
                <a href="{{ '/pages/schedule/' | relative_url }}" class="btn btn-secondary">See Schedule</a>
            </div>
        </div>
    </section>
    
    <section class="course-info">
        <div class="info-grid">
            <div class="info-card">
                <h3>📚 Course Overview</h3>
                <p>{{ site.data.course-info.description | truncatewords: 30 }}</p>
                <a href="{{ '/pages/syllabus/' | relative_url }}" class="card-link">Learn more →</a>
            </div>
            
            <div class="info-card">
                <h3>📅 Course Schedule</h3>
                <p>{{ site.data.schedule.total_weeks }}-week course with weekly meetings and assignments</p>
                <a href="{{ '/pages/schedule/' | relative_url }}" class="card-link">Full schedule →</a>
            </div>
            
            <div class="info-card">
                <h3>🎓 Learning Outcomes</h3>
                <p>Comprehensive learning objectives and competencies developed in this course</p>
                <a href="{{ '/pages/syllabus/#learning-outcomes' | relative_url }}" class="card-link">View all →</a>
            </div>
            
            <div class="info-card">
                <h3>📞 Get Help</h3>
                <p>Office hours: {{ site.data.course-info.instructor.office_hours }}</p>
                <a href="mailto:{{ site.data.course-info.instructor.email }}" class="card-link">
                    Email instructor →
                </a>
            </div>
        </div>
    </section>
    
    <section class="announcements">
        <h2>Latest Announcements</h2>
        <div class="announcements-list">
            {% for announcement in site.data.announcements.announcements limit: 3 %}
            <div class="announcement-item announcement-{{ announcement.type }}">
                <div class="announcement-date">
                    {{ announcement.date | date: "%b %d" }}
                </div>
                <div class="announcement-content">
                    <h4>{{ announcement.title }}</h4>
                    <p>{{ announcement.content }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
        <a href="{{ '/announcements/' | relative_url }}" class="btn btn-secondary">View All Announcements</a>
    </section>
    
    <section class="quick-links">
        <h2>Course Materials</h2>
        <div class="links-grid">
            <a href="{{ '/lectures/' | relative_url }}" class="link-card">
                <h3>📖 Lectures</h3>
                <p>Weekly lectures and course notes</p>
            </a>
            
            <a href="{{ '/assignments/' | relative_url }}" class="link-card">
                <h3>✏️ Assignments</h3>
                <p>Homework and weekly assignments</p>
            </a>
            
            <a href="{{ '/projects/' | relative_url }}" class="link-card">
                <h3>💻 Projects</h3>
                <p>Major projects and final project</p>
            </a>
            
            <a href="{{ '/pages/resources/' | relative_url }}" class="link-card">
                <h3>🔗 Resources</h3>
                <p>Tools, references, and documentation</p>
            </a>
        </div>
    </section>
</div>
