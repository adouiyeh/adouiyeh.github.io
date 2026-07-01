---
layout: default
title: Blog
---

<section class="card">
  <h1>Blog</h1>
  <p>Recent notes on web design, static sites, and the craft of building simple digital experiences.</p>
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span> — {{ post.date | date: "%B %d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
</section>
