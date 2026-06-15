# J.A.R.V.I.S. Personal OS

**Richard Male · Head of Ground Operations · Air Arabia**

A personal AI operating system dashboard built with a JARVIS/HUD aesthetic. Deployed at [personal-os-silk.vercel.app](https://personal-os-silk.vercel.app).

---

## What it does

- **Live Gmail inbox** — unread count, sender, subject (requires Cowork)
- **Live Google Calendar** — today's schedule in GST (requires Cowork)
- **JARVIS response terminal** — type queries, get intelligent responses in JARVIS style
- **Voice output** — Web Speech API (British male voice) + ElevenLabs Daniel "Steady Broadcaster" voice agent
- **Health log** — weight, sleep, steps, mood (localStorage)
- **Budget tracker** — income, spend, categories in AED (localStorage)
- **Reminders & Actions** — add/complete/delete reminders (localStorage)
- **Active Directives & Learnings** — persistent ops notes (localStorage)
- **Intel feed ticker** — aviation/ops news from Gmail
- **Canvas particle network** — HUD background animation

---

## Architecture

```
jarvis-vercel/
├── index.html          # Full self-contained HUD dashboard
├── api/
│   └── chat.js         # Vercel Edge Function → Claude API (for standalone terminal)
├── vercel.json         # Deployment config
└── README.md
```

---

## Deployment

```bash
cd jarvis-vercel
npx vercel --prod
```

Linked to Vercel project: `richmale-cmyks-projects/personal-os`

---

## Environment variables (Vercel)

| Variable | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Powers the command terminal in standalone mode |

Set via: Vercel dashboard → Project Settings → Environment Variables

---

## Voice agent

ElevenLabs Conversational AI agent: `agent_7901kv62dv18e86tsre2dghafmnx`
- Voice: Daniel — Steady Broadcaster (`onwK4e9ZLuTAKqWW03F9`)
- Model: Flash (eleven_flash_v2)
- First message: *"Good evening, Mr Male. JARVIS online. All systems nominal."*

---

## Key context loaded into JARVIS

- Air Arabia Ground Ops — 120 aircraft on order
- Org restructure: collapse 3 regional heads → single accountability
- Team: Adrien (strongest, not strategic), Anda (new/weak), Shadi (good area mgr, can't step up)
- CEO: 22 years at Air Arabia, forms impressions and sticks to them
- Benchmark: easyJet + Qantas

---

## Modes

| Mode | Terminal | Email/Cal | Voice |
|---|---|---|---|
| **Cowork** (Claude desktop) | ✅ Full AI | ✅ Live | ✅ |
| **Vercel standalone** | ✅ Via /api/chat | — | ✅ ElevenLabs widget |

---

*Built session by session — June 2026*
