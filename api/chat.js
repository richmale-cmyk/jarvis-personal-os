export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { query } = await req.json();
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({
      response: 'Terminal AI requires ANTHROPIC_API_KEY in Vercel environment settings. Voice agent is fully operational — use the mic button, Mr Male.'
    }), { headers: { 'Content-Type': 'application/json' } });
  }

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      messages: [{
        role: 'user',
        content: `You are JARVIS — the AI operating system for Richard Male, Head of Ground Operations at Air Arabia, Sharjah UAE. 3 weeks into role. Background: 20+ years in airline ground ops (easyJet Deputy Head → Qantas Head of Ops Sydney → Swissport Global Head GH → Air Arabia now). Brought in to professionalise a fast-growing, immature ground ops function. 120 aircraft on order. Key projects: org restructure (collapse 3 regional heads Adrien/Anda/Shadi to single accountability model), CEO perception management (22yr CEO forms impressions and sticks to them), ISA IT engagement, team development, category management for GH suppliers. Respond in JARVIS style — intelligent, direct, slightly formal, British tone. Concise — 2-3 sentences max unless depth is required. Never pad or hedge. Query: ${query}`
      }]
    })
  });

  const data = await resp.json();
  const text = data.content?.[0]?.text || 'Processing anomaly detected. Please restate your query, Mr Male.';

  return new Response(JSON.stringify({ response: text }), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}
