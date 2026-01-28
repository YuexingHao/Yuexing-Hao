# Blog Post Images Organization

This directory contains images for individual blog posts, organized by post.

## Structure

Each blog post has its own folder matching the post filename (without the `.md` extension):

```
assets/posts/
├── 2025-01-28-welcome-to-my-blog/
│   ├── PhD_Commitee.jpg
│   ├── PhD_Publications.jpg
│   ├── PhD_Family.jpg
│   ├── PhD_Friend1.jpg
│   ├── PhD_Friend2.jpg
│   └── PhD_Friend3.jpg
├── 2025-01-29-rejections/
│   └── (images for this post)
└── README.md
```

## How to Add Images to a New Blog Post

1. Create a folder matching your post filename:
   ```bash
   mkdir -p assets/posts/YYYY-MM-DD-post-title
   ```

2. Add your images to that folder

3. Reference images in your blog post:
   ```markdown
   ![Alt text](/Yuexing-Hao/assets/posts/YYYY-MM-DD-post-title/image.jpg)
   ```

   Or with HTML:
   ```html
   <img src="/Yuexing-Hao/assets/posts/YYYY-MM-DD-post-title/image.jpg" alt="Description">
   ```

4. Set featured image in front matter:
   ```yaml
   featured_image: /Yuexing-Hao/assets/posts/YYYY-MM-DD-post-title/featured.jpg
   ```

## Benefits

- **Organized**: Each post's images are grouped together
- **Easy to find**: No searching through a massive img folder
- **Easy to delete**: Remove a post and its images together
- **Scalable**: Works well as you add more blog posts
