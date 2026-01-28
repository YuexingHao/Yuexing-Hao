---
layout: simple
title: Blog
---

<style>
.blog-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}

.blog-header {
  text-align: center;
  margin-bottom: 50px;
}

.blog-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #043361;
  margin-bottom: 15px;
  letter-spacing: -0.02em;
}

.blog-header p {
  font-size: 1.15rem;
  color: #666;
  font-weight: 400;
}

@media (prefers-color-scheme: dark) {
  .blog-header h1 {
    color: rgb(62, 183, 240);
  }
  .blog-header p {
    color: #aaa;
  }
}

.blog-posts {
  display: grid;
  gap: 30px;
}

.blog-post-card {
  background: white;
  border-radius: 16px;
  padding: 35px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
}

.blog-post-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #89a3cc, #5d6f9f);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.blog-post-card:hover::before {
  transform: scaleX(1);
}

.blog-post-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  border-color: rgba(93, 111, 159, 0.1);
}

@media (prefers-color-scheme: dark) {
  .blog-post-card {
    background: rgba(32, 33, 43, 0.5);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  .blog-post-card:hover {
    background: rgba(32, 33, 43, 0.8);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }
}

.post-card-title {
  font-size: 1.9rem;
  font-weight: 700;
  color: #043361;
  margin-bottom: 12px;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

@media (prefers-color-scheme: dark) {
  .post-card-title {
    color: rgb(62, 183, 240);
  }
}

.post-card-meta {
  color: #828282;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.post-card-excerpt {
  color: #333;
  line-height: 1.6;
  margin-bottom: 15px;
}

@media (prefers-color-scheme: dark) {
  .post-card-excerpt {
    color: #dadbdf;
  }
}

.post-card-tags {
  margin-top: 15px;
}

.post-card-tags .tag {
  display: inline-block;
  background: linear-gradient(135deg, rgba(137, 163, 204, 0.15), rgba(93, 111, 159, 0.15));
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  margin-right: 8px;
  color: #5d6f9f;
  font-weight: 500;
  border: 1px solid rgba(93, 111, 159, 0.2);
}

@media (prefers-color-scheme: dark) {
  .post-card-tags .tag {
    background: linear-gradient(135deg, rgba(62, 183, 240, 0.15), rgba(93, 111, 159, 0.15));
    color: rgb(62, 183, 240);
    border-color: rgba(62, 183, 240, 0.3);
  }
}

.read-more {
  color: #043361;
  font-weight: 600;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

@media (prefers-color-scheme: dark) {
  .read-more {
    color: rgb(62, 183, 240);
  }
}

.no-posts {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

@media (max-width: 768px) {
  .blog-header h1 {
    font-size: 2.2rem;
  }
  .post-card-title {
    font-size: 1.5rem;
  }
}
</style>

<div class="blog-container">
  <div class="blog-header">
    <h1>Blog</h1>
    <p>Thoughts on AI, research, and technology</p>
  </div>

  <div class="blog-posts">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% if sorted_posts.size > 0 %}
      {% for post in sorted_posts %}
        <a href="{{ post.url | relative_url }}" class="blog-post-card">
          <h2 class="post-card-title">{{ post.title }}</h2>
          <div class="post-card-meta">
            <i class="far fa-calendar"></i> {{ post.date | date: "%B %d, %Y" }}
          </div>
          {% if post.excerpt %}
            <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
          {% endif %}
          {% if post.tags %}
            <div class="post-card-tags">
              {% for tag in post.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
          <div style="margin-top: 15px;">
            <span class="read-more">Read more →</span>
          </div>
        </a>
      {% endfor %}
    {% else %}
      <div class="no-posts">
        <i class="fas fa-pencil-alt" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.3;"></i>
        <p style="font-size: 1.2rem;">No blog posts yet. Stay tuned!</p>
      </div>
    {% endif %}
  </div>
</div>
