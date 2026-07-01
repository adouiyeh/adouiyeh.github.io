---
layout: default
title: Home
---

<section class="hero card">
  <p class="eyebrow">Personal blog · portfolio · frontend craft</p>
  <h1>Hi, I’m Adouiyeh.</h1>
  <p>I build thoughtful websites with a focus on clear writing, useful design, and modern Jekyll workflows.</p>
  <div class="hero-actions">
    <a class="btn btn-primary" href="{{ '/pages/portfolio.html' | relative_url }}">See my work</a>
    <a class="btn btn-secondary" href="{{ '/pages/blog.html' | relative_url }}">Read the blog</a>
  </div>
</section>

<section class="card">
  <div class="section-heading">
    <h2>Featured projects</h2>
    <a href="{{ '/pages/portfolio.html' | relative_url }}">View all</a>
  </div>
  <div class="project-grid">
    {% for project in site.data.projects limit:3 %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>

<section class="card">
  <div class="section-heading">
    <h2>Latest posts</h2>
    <a href="{{ '/pages/blog.html' | relative_url }}">Browse all</a>
  </div>
  <ul class="post-list">
    {% for post in site.posts limit:3 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span>{{ post.date | date: "%B %d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
</section>
