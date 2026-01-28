# Blog Posts Guide

## How to Create a New Blog Post

### 1. File Naming Convention

Create a new markdown file in the `_posts` directory with the following format:

```
YYYY-MM-DD-title-of-your-post.md
```

**Example:** `2025-01-28-my-awesome-post.md`

### 2. Front Matter (Required)

Each blog post must start with YAML front matter:

```yaml
---
layout: blog-post
title: "Your Post Title"
date: 2025-01-28
author: Yuexing Hao
tags: [AI, Research, Healthcare]
description: "A brief description of your post for SEO"
---
```

### 3. Writing Your Post

After the front matter, write your post using Markdown:

```markdown
## Introduction

Your introduction text here...

### Subsection

More content...

- Bullet points
- Are supported

1. Numbered lists
2. Work too

**Bold text** and *italic text*

[Links](https://example.com) and images:

![Alt text](/path/to/image.jpg)
```

### 4. Example Post Structure

```markdown
---
layout: blog-post
title: "Understanding LLM Alignment"
date: 2025-01-28
author: Yuexing Hao
tags: [AI, LLM, Alignment]
description: "Exploring the challenges and approaches in aligning large language models"
---

## Introduction

Large Language Models have revolutionized AI...

## Main Content

### Key Concepts

1. **Reinforcement Learning from Human Feedback (RLHF)**
2. **Constitutional AI**
3. **Prompt Engineering**

## Conclusion

In this post, we explored...
```

### 5. Publishing

Once you create a new post file:

1. Commit the file: `git add _posts/your-new-post.md`
2. Commit: `git commit -m "Add new blog post: Your Title"`
3. Push: `git push`

GitHub Pages will automatically rebuild your site and the new post will appear on your blog page!

## Tips

- **Use descriptive titles**: Make titles clear and searchable
- **Add tags**: Help readers find related content
- **Write good excerpts**: The first paragraph appears in the blog list
- **Add images**: Visual content makes posts more engaging
- **Proofread**: Check spelling and formatting before publishing

## Blog Features

✨ Your blog includes:
- Responsive design matching your site theme
- Automatic post listing sorted by date
- Tag support for categorization
- Dark mode support
- Smooth animations and hover effects
- Mobile-friendly layout
- SEO-optimized structure
