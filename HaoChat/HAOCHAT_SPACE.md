# HaoChat Hugging Face Space Setup

Your website's HaoChat page connects to the Space **YuexingHao/HaoChat**. If replies are off-topic (e.g. LinkedIn profile text when you say "hi"), the Space's **parameter order** or **system prompt** is likely wrong.

**Important:** The Space's default system prompt must be **identical** to the prompt in `haochat.html` (the `SYSTEM_MSG` variable). The website sends this prompt with every request; if the Space ignores it (wrong parameter order) or uses a different default, answers will be wrong. Keep both in sync.

## API contract (website → Space)

The site sends one of:

1. **Gradio client** (named): `{ message, history, system_message, max_tokens, temperature, top_p }`
2. **Fetch fallback** (positional): `data: [message, history, system_message, max_tokens, temperature, top_p]`

So the Space's chat function **must** use this **exact parameter order**:

1. `message` (str) – current user message  
2. `history` – list of `[user_msg, assistant_msg]` pairs or `[{role, content}, ...]`  
3. `system_message` (str) – system prompt (your site sends the Yuexing bio)  
4. `max_tokens` (int)  
5. `temperature` (float)  
6. `top_p` (float)  
7. (optional) `hf_token` for Inference API

If the Space has a different order (e.g. `system_message` first), then "hi" can end up as the system prompt and the long bio as the user message, which leads to irrelevant LinkedIn-style replies.

### Why the reply talks about LinkedIn when the user said "hi"

The website **never** sends "LinkedIn" as the user message—it only sends what the user typed (e.g. "hi") plus the long system prompt (your bio). If the model still replies with LinkedIn or profile-writing advice, the Space is **using the wrong parameter order**. The model is then seeing:

- **System prompt:** "hi" (your greeting)
- **User message:** the long Yuexing bio

So the model thinks the user pasted their bio and wants help with it, and it answers with LinkedIn/profile advice. **Fix:** In the Space's `app.py`, ensure the chat function's parameters are exactly: `message` (user's text), then `history`, then `system_message` (the bio), and that you build `messages` with `system = system_message` and the current user text as the last user message.

## Reference `app.py` for the Space

Replace (or align) your Space's `app.py` with the following. The important parts are:

- **Parameter order**: `message`, then `history`, then `system_message`, then tokens/temperature/top_p, then token.
- **System prompt**: Use the **incoming** `system_message` from the client (or the default below), not a LinkedIn template.
- **History**: Support both `[[user, assistant], ...]` and `[{role, content}, ...]`.

```python
import gradio as gr
from huggingface_hub import InferenceClient

# Must match SYSTEM_MSG in HaoChat/haochat.html exactly.
DEFAULT_SYSTEM = """You are Yuexing Hao. Reply in first person as Yuexing. Style: short and informal—1–3 sentences when possible. Never copy or paraphrase the bio below; answer only what the user asked. Casual, friendly tone. For greetings like "hi", say hi back and offer to help. If asked about something not in the bio, say you're not sure or point to yuexinghao.github.io.

About you (Yuexing Hao):
- You are a Postdoctoral Associate at MIT EECS in the Healthy ML Group, hosted by Prof. Marzyeh Ghassemi.
- You received your Ph.D. from Cornell University (2022–25) and were an IvyPlus Exchange Scholar at MIT (2024–25).
- Internships: Google Research (2025), Scale AI (2025), Mayo Clinic (2024).
- Education: B.A. in Computer Science from Rutgers University (2017–20), M.S. from Tufts University (2020–22).
- You are based in Boston, MA. In your spare time you enjoy ice hockey, squash, and water skiing.
- Your name means "happy walking is good"; pronunciation is "You-Sing."
- You founded Hug Medical (AI for medication management) in 2022 (hugmed.ai).

Research focus: LLM agents, RLHF, AI alignment; AI for healthcare and human–computer interaction.

Selected publications (first-authored): Nature Digital Medicine (MedEduChat, systematic review on LLMs in cancer), CHI (wayfinding/health conversations, patient-centered shared decision-making, in-basket/LLM comparison), CSCW, AAAI (veterinary precision health), Bioinformatics, IntelliSys; preprints on MedPAIR, MedGUIDE, MedPerturb, GPU equity, RtE. Venues: CHI, NPJ Digital Medicine, CSCW, AAAI, MCP Digital Health.

Selected awards/grants: PCCW Frank H.T. Rhodes Leadership & Mission Grant, APF K. Anders Ericsson Dissertation Research Grant, Life Science Technology Innovation Fellowship, ACM SIGCHI Gary Marsden Travel Award, NCWIT Collegiate Award, IEEE ComSoc Student Competition, ICM, Tufts Graduate Student Research Competition, and others (see yuexinghao.github.io).

Service: FAccT registration committee, CSCW/CHI associate chair.

Links: Google Scholar, GitHub (YuexingHao), LinkedIn, Twitter; CV and full site at yuexinghao.github.io."""


def respond(message, history, system_message, max_tokens, temperature, top_p, hf_token: gr.OAuthToken):
    if not message or not hf_token.token:
        yield "Please enter a message and connect your Hugging Face account."
        return

    client = InferenceClient(token=hf_token.token, model="Qwen/Qwen2.5-14B-Instruct")
    system = (system_message or "").strip() or DEFAULT_SYSTEM
    messages = [{"role": "system", "content": system}]

    # Build history: support [user, assistant] pairs or [{role, content}]
    for h in history or []:
        if isinstance(h, (list, tuple)) and len(h) >= 2:
            messages.append({"role": "user", "content": str(h[0])})
            if h[1]:
                messages.append({"role": "assistant", "content": str(h[1])})
        elif isinstance(h, dict) and "role" in h and "content" in h:
            messages.append({"role": h["role"], "content": str(h["content"])})

    messages.append({"role": "user", "content": message})

    response = ""
    for chunk in client.chat_completion(
        messages,
        max_tokens=max_tokens,
        stream=True,
        temperature=temperature,
        top_p=top_p,
    ):
        if chunk.choices and getattr(chunk.choices[0].delta, "content", None):
            response += chunk.choices[0].delta.content
        yield response


with gr.Blocks() as demo:
    gr.Markdown("# HaoChat – Ask Yuexing Hao")
    chatbot = gr.ChatInterface(
        respond,
        type="messages",
        additional_inputs=[
            gr.Textbox(label="System message", value=DEFAULT_SYSTEM, lines=4),
            gr.Slider(64, 1024, value=512, step=64, label="Max tokens"),
            gr.Slider(0, 2, value=0.7, step=0.05, label="Temperature"),
            gr.Slider(0, 1, value=0.95, step=0.05, label="Top p"),
            gr.OAuthToken(),
        ],
    )

demo.launch()
```

**Important:** If your Space uses `gr.ChatInterface`, the **order of `additional_inputs`** must match the order above: system message, max_tokens, temperature, top_p, OAuth token. And the **first two arguments** of `respond` must be `message` and `history` (Gradio passes those from the chat UI). So the full signature is:

`respond(message, history, system_message, max_tokens, temperature, top_p, hf_token)`.

## Checklist

1. In the Space repo, open `app.py` and ensure:
   - The chat function's parameters are in this order: **message, history, system_message, max_tokens, temperature, top_p** (and token if used).
   - There is **no** LinkedIn or "profile update" system prompt; use the Yuexing default above or the one sent by the website.
2. Commit and push; wait for the Space to rebuild.
3. On your site, send "hi" again; you should get a short, first-person reply from Yuexing, not LinkedIn text.

If you already have a different UI (e.g. custom inputs), keep the same **parameter order** when you call the inference client and when you expose the endpoint as `/chat`.
