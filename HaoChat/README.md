# HaoChat

This folder contains the HaoChat feature for the website.

| File | Description |
|------|-------------|
| **haochat.html** | The chat page (served at `/haochat/` via Jekyll `permalink`). |
| **HAOCHAT_SPACE.md** | Setup guide and reference `app.py` for the Hugging Face Space (YuexingHao/HaoChat). |

**API fallback:** The optional Vercel serverless API that powers the chat when the Space is not used lives at the **repository root**: `api/chat.js`. It is kept there so Vercel serves it at `/api/chat` without extra config. Config is in `_config.yml` (`haochat_space_id`, `haochat_api_url`).
