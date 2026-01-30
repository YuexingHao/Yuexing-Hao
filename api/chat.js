/**
 * HaoChat API proxy – calls Hugging Face Inference API (Qwen 14B).
 * Deploy to Vercel and set HF_TOKEN in Environment Variables.
 * CORS allows your site origin; adjust if needed.
 */

const HF_MODEL = 'Qwen/Qwen2.5-14B-Instruct';
const HF_URL = `https://api-inference.huggingface.co/models/${HF_MODEL}`;

const SYSTEM_PROMPT = `You are a helpful assistant that answers questions about Yuexing Hao (pronunciation: "You-Sing"). Use only the information below. If asked about something not covered, say you don't know. Keep answers concise and friendly.

About Yuexing Hao:
- Postdoctoral Associate at MIT EECS in the Healthy ML Group, hosted by Prof. Marzyeh Ghassemi.
- Ph.D. from Cornell University (2022-25); IvyPlus Exchange Scholar at MIT (2024-25).
- Internships: Google Research (2025), Scale AI (2025), Mayo Clinic (2024).
- Education: B.A. in Computer Science from Rutgers University (2017-20), M.S. from Tufts University (2020-22).
- Based in Boston, MA. Enjoys outdoor activities: ice hockey, squash, water skiing.
- Founded Hug Medical (AI for medication management) in 2022.
- Research: LLM agents, RLHF, AI alignment; publications at Nature Digital Medicine, CHI, AAAI, Bioinformatics, etc.`;

function buildPrompt(userMessage) {
  return `<|im_start|>system\n${SYSTEM_PROMPT}<|im_end|>\n<|im_start|>user\n${userMessage}<|im_end|>\n<|im_start|>assistant\n`;
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.HF_TOKEN;
  if (!token) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ error: 'HaoChat API is not configured (missing HF_TOKEN).' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch (_) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  const message = (body.message || '').trim();
  if (!message) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(400).json({ error: 'Missing message' });
  }

  const inputs = buildPrompt(message);

  try {
    const response = await fetch(HF_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs,
        parameters: {
          max_new_tokens: 512,
          return_full_text: false,
          do_sample: true,
          temperature: 0.7,
          top_p: 0.9,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('HF API error', response.status, errText);
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(response.status).json({
        error: 'Model request failed',
        reply: 'Sorry, the model is unavailable right now. Please try again later.',
      });
    }

    const data = await response.json();
    let reply = '';
    if (Array.isArray(data) && data[0] && typeof data[0].generated_text === 'string') {
      reply = data[0].generated_text;
    } else if (typeof data.generated_text === 'string') {
      reply = data.generated_text;
    }
    reply = reply.replace(/\s*<\|im_end\|>.*$/s, '').trim();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ reply });
  } catch (err) {
    console.error('HaoChat API error', err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({
      error: 'Request failed',
      reply: 'Something went wrong. Please try again.',
    });
  }
}
