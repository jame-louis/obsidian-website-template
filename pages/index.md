---
layout: course-page
title: "主页"
permalink: /
---

<section class="hero" aria-labelledby="hero-title">
	<div class="hero-inner container">
		<div class="hero-copy reveal">
			<h1 id="hero-title" class="hero-title">打造可发布的开放课程体验</h1>
			<p class="tagline">以项目为导向，结合讲义、作业与资源，帮助你在学期内实现实战成果。</p>
			<p class="course-meta">{{ site.data.course-info.title }}（{{ site.data.course-info.course_code }}） · {{ site.course.semester }}</p>
			<div class="hero-cta">
				<a class="btn btn-primary" href="{{ '/lectures/' | relative_url }}">查看讲义</a>
				<a class="btn btn-secondary" href="{{ '/assignments/' | relative_url }}">查看作业</a>
				<a class="btn btn-link" href="{{ '/pages/syllabus/' | relative_url }}">教学大纲</a>
			</div>
		</div>

		<div class="hero-visual" aria-hidden="true">
			<svg width="420" height="300" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-blob">
				<defs>
					<linearGradient id="g1" x1="0" x2="1">
						<stop offset="0%" stop-color="#0a66c2" stop-opacity="0.85"/>
						<stop offset="100%" stop-color="#ff8c42" stop-opacity="0.9"/>
					</linearGradient>
				</defs>
				<path d="M30 180C20 120 80 40 170 36C260 32 340 84 380 150C420 216 360 276 270 286C180 296 80 240 30 180Z" fill="url(#g1)" opacity="0.12"/>
				<path d="M60 170C52 130 98 68 160 62C222 56 310 90 352 140C394 190 350 250 270 268C190 286 84 230 60 170Z" fill="#ffffff" opacity="0.04"/>
			</svg>
		</div>
	</div>
</section>

<section class="container info-grid reveal">
	<div class="info-card">
		<h3>快速入门</h3>
		<p>浏览教学大纲和课程日程，了解评分标准与提交要求。</p>
		<p><a class="card-link" href="{{ '/pages/syllabus/' | relative_url }}">进入教学大纲 →</a></p>
	</div>

	<div class="info-card">
		<h3>本周讲义</h3>
		<p>按周查看讲义与学习目标，获取课堂资料与示例代码。</p>
		<p><a class="card-link" href="{{ '/lectures/' | relative_url }}">查看讲义 →</a></p>
	</div>

	<div class="info-card">
		<h3>项目与作业</h3>
		<p>查看当前与往期项目，获取评分细则与提交模板。</p>
		<p><a class="card-link" href="{{ '/assignments/' | relative_url }}">查看作业 →</a></p>
	</div>
</section>

<section class="container announcements-list reveal">
	<h2>最新公告</h2>
	{% for item in site.data.announcements.announcements limit:3 %}
	<div class="announcement-item">
		<div class="announcement-date">{{ item.date }}</div>
		<div class="announcement-content">
			<h4>{{ item.title }}</h4>
			<p>{{ item.content }}</p>
		</div>
	</div>
	{% endfor %}
</section>

<p class="container text-center text-light">如需更多信息，请阅读 <a href="/CUSTOMIZATION.md">CUSTOMIZATION.md</a> 或联系授课教师：<a href="mailto:{{ site.data.course-info.instructor.email }}">{{ site.data.course-info.instructor.email }}</a></p>