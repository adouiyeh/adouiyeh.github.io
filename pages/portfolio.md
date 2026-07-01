---
layout: default
title: Portfolio
---

<section class="card">
  <h1>Portfolio</h1>
  <p>Selected work spanning static-site builds, small product concepts, and design-forward landing pages.</p>
  <div class="project-grid">
    {% for project in site.data.projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>
