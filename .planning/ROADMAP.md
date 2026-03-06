# Roadmap: Vimeo Gyorsito

## Overview

Two-phase delivery of a minimal Chrome extension that auto-applies a user-chosen playback speed to all Vimeo videos. Phase 1 tackles the riskiest piece first: injecting a content script that reliably controls video speed across both vimeo.com and embedded iframes. Phase 2 adds the user-facing popup UI, preset/custom speed selection, and persistent storage.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Core Speed Injection** - Content script that finds and controls Vimeo video speed across all contexts
- [ ] **Phase 2: Settings UI and Persistence** - Popup interface with presets, custom input, storage, and badge

## Phase Details

### Phase 1: Core Speed Injection
**Goal**: Any Vimeo video -- native or embedded -- automatically plays at the desired speed without user interaction
**Depends on**: Nothing (first phase)
**Requirements**: SPEED-01, SPEED-05, EMBED-01, EMBED-02
**Success Criteria** (what must be TRUE):
  1. A Vimeo video on vimeo.com plays at the target speed immediately on load
  2. An embedded Vimeo player on a third-party site plays at the target speed immediately on load
  3. Speed is re-applied after the Vimeo player resets it (seek, pause, quality change)
  4. Extension loads as a valid Manifest V3 Chrome extension without errors
**Plans**: 1 plan

Plans:
- [ ] 01-01-PLAN.md -- Create extension scaffold and content script with speed injection logic

### Phase 2: Settings UI and Persistence
**Goal**: User can configure their preferred speed through a popup and have it persist forever
**Depends on**: Phase 1
**Requirements**: SPEED-02, SPEED-03, SPEED-04, UI-01, UI-02, UI-03
**Success Criteria** (what must be TRUE):
  1. User can click the extension icon and see a popup showing the current speed setting
  2. User can select a preset speed (1x, 1.25x, 1.5x, 1.75x, 2x) with one click and it applies immediately
  3. User can enter a custom speed value (e.g. 1.3x, 2.5x) and it applies immediately
  4. Speed setting survives browser restart (persisted in Chrome storage)
  5. Extension badge displays the current speed at a glance
**Plans**: TBD

Plans:
- [ ] 02-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Core Speed Injection | 0/1 | Not started | - |
| 2. Settings UI and Persistence | 0/? | Not started | - |
