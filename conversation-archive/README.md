# Conversation Archive

Verbatim record of the conversation with Claude that built this app.

## Files

- **`session-<id>.jsonl`** — Byte-for-byte copy of Claude Code's session log
  (the canonical record of every message, tool call, and tool result).
  This file came directly from `~/.claude/projects/-Users-cadavids/`
  on the day it was archived. Use it as the source of truth.
- **`transcript-YYYY-MM-DD.md`** — Human-readable rendering of just the
  user and Claude turns, with tool calls summarized. Easier to skim
  than the JSONL.

## Why this exists

Carolyn asked to lock in the entire conversation verbatim so it would
survive any future auto-compaction by Claude Code. These files do not
get auto-updated — they're a snapshot at the time they were exported.

## To re-export later

```bash
python3 /tmp/export_convo.py
```

(That script lives at `/tmp/export_convo.py` and points at the current
session by ID. Update the `SESSION` constant if Claude Code starts a
new session ID.)
