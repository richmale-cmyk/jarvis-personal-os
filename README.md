# J.A.R.V.I.S. Personal OS

**Just A Rather Very Intelligent System**  
Personal AI Operating System for **Richard Male** — Head of Ground Operations, Air Arabia, Sharjah UAE.

🔗 **Live:** https://jarvis-os-lovat.vercel.app  
📦 **Repo:** https://github.com/richmale-cmyk/jarvis-personal-os

---

## What it is

A full-screen HUD dashboard styled after the Marvel JARVIS computer. Dark aesthetic, cyan glow, particle network background, monospace fonts. Built to be a personal command centre — not a generic tool.

Runs in two modes:
- **Cowork (Claude desktop app)** — full live data: Gmail, Google Calendar, AI responses
- **Vercel (standalone web)** — voice agent + text terminal + health/budget/reminders (all persisted)

---

## Features

### Live data (Cowork mode)
- **Gmail inbox** — unread count, senders, subjects, timestamps (GST)
- **Google Calendar** — today's schedule in Dubai time
- **Morning Brief** — AI-generated summary of inbox + schedule in JARVIS voice
- **Daily Plan** — prioritised operational plan based on calendar and current context
- **Draft Reply** — AI drafts email replies in Richard's voice

### Always-on (Vercel + Cowork)
- **Text terminal** — type any command or query, JARVIS responds in character
- **Voice output** — Web Speech API (British male voice) reads all JARVIS responses aloud
- **Voice agent** — ElevenLabs Daniel "Steady Broadcaster" AI agent (real-time two-way conversation)
- **Intel ticker** — scrolling feed of aviation/ops news headlines
- **Clock** — live GST (UTC+4) time and date

### Personal data (localStorage, persists across sessions)
- **Health log** — weight (kg), sleep (hrs), steps, mood (1–5), daily note
- **Budget tracker** — monthly income, total spend, remaining balance, category breakdown (AED)
- **Reminders & Actions** — add, tick off, delete. Survive page reloads.
- **Active Directives & Learnings** — ops notes, strategic priorities, key learnings. Pre-loaded with current context.

---

## JARVIS character & context

JARVIS knows who Richard is. Every response is in character — intelligent, direct, slightly formal, British. The following context is embedded:

**Role & company**
- Richard Male, Head of Ground Operations, Air Arabia, Sharjah UAE
- ~3 weeks into role (hired to professionalise a fast-growing, immature ops function)
- 120 aircraft on order — must scale before the fleet arrives

**Background**
- 20+ years airline ground ops: easyJet (17yrs, Deputy Head Ground Ops) → Qantas (Head of Ops, Sydney Airport) → Swissport (Global Head GH, Zurich) → Air Arabia (now)
- Deep LCC + FSC + handler-side experience — rare dual perspective

**Active projects**
| Project | Status |
|---|---|
| Org restructure | Collapse 3 regional heads → single accountability model |
| CEO perception | 22yr CEO forms impressions and sticks to them — feed data to update |
| ISA engagement | Air Arabia's internal IT company — monthly meeting cadence set |
| Team development | Adrien (strongest, not strategic), Anda (new/weak), Shadi (good area mgr, can't step up) |
| Category management | Leverage scale across GH suppliers — no contract management exists yet |
| Onboarding/assessment | Building relationships, learning the operation |

**Key learnings embedded**
- Operation grew on personal relationships — professionalise without breaking what works
- OCC manages stations via "explain yourself" emails — immature, needs redesign
- CEO has been at Air Arabia 22 years, forms strong impressions — needs data, not narrative
- Benchmark = easyJet + Qantas — adapt proven models, don't invent from scratch
- Just Culture / human factors lens: blame the system, not the person

---

## Architecture

```
jarvis-vercel/
├── public/
│   └── index.html        # Full HUD dashboard (self-contained HTML/CSS/JS)
├── api/
│   └── chat.js           # Vercel Edge Function → Anthropic Claude API
├── package.json          # Minimal — static site, no framework
├── vercel.json           # Deployment config
└── README.md
```

### How the terminal works
- **In Cowork:** `window.cowork.askClaude()` → Claude Sonnet via Cowork connector
- **On Vercel:** `fetch('/api/chat')` → Edge Function → Anthropic API (`claude-haiku-4-5-20251001`) → response back to UI

### Voice agent
- Provider: ElevenLabs Conversational AI
- Agent ID: `agent_7901kv62dv18e86tsre2dghafmnx`
- Voice: Daniel — Steady Broadcaster (`onwK4e9ZLuTAKqWW03F9`)
- Model: Flash (eleven_flash_v2)
- First message: *"Good evening, Mr Male. JARVIS online. All systems nominal. How may I assist?"*
- System prompt: full Air Arabia / Richard Male context loaded

### MCP connectors (Cowork mode)
| Connector | ID |
|---|---|
| Gmail | `mcp__030a1145-bd06-4105-ba0b-7628745cb597__search_threads` |
| Google Calendar | `mcp__85fcfc1f-459a-4a4a-8b2b-1439a7d8b521__list_events` |

---

## Deployment

### Vercel
```bash
cd jarvis-vercel
npx vercel --prod
```
Project: `richmale-cmyks-projects/jarvis-os`  
Alias: https://jarvis-os-lovat.vercel.app

### Environment variables
Go to: https://vercel.com/richmale-cmyks-projects/jarvis-os/settings/environment-variables

| Variable | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Powers text terminal in standalone Vercel mode |

### GitHub sync
```bash
git add .
git commit -m "your message"
git push
```

---

## Design

- Background: `#030810` (near-black deep blue)
- Primary: `#00d4ff` (cyan)
- Accent: `#6633ff` (purple)
- Green: `#00ff88` / Orange: `#ff6b35` / Red: `#ff3355`
- Font: Courier New / Lucida Console (monospace throughout)
- Canvas particle network background (80 nodes, animated)
- Sweep animations on each panel
- Speaking glow pulse when voice is active
- 4-column grid: Inbox+Health | JARVIS Main | Calendar+Directives | Reminders+Budget

---

## Build history

| Session | What was built |
|---|---|
| June 2026 | Initial JARVIS OS concept — V.A.U.L.T. reference screenshots |
| June 2026 | Gmail + Calendar MCP integration via Cowork |
| June 2026 | Canvas HUD, particle network, arc SVG, voice (Web Speech API) |
| June 2026 | ElevenLabs Daniel voice agent created in Richard's account (`agent_7901kv62dv18e86tsre2dghafmnx`) |
| June 2026 | Deployed to Vercel (`personal-os` then migrated to `jarvis-os`) |
| June 2026 | v2 rewrite: 4-col layout, health panel, budget panel, reminders, directives/learnings |
| June 2026 | Vercel Edge Function `/api/chat` for standalone text terminal |
| June 2026 | GitHub repo created: `richmale-cmyk/jarvis-personal-os` |
| June 2026 | Text terminal confirmed working via API test |

---

*"Good evening, Mr Male. All systems nominal."*
