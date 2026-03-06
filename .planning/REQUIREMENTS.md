# Requirements: Vimeo Gyorsito

**Defined:** 2026-03-06
**Core Value:** Barmely Vimeo video automatikusan a felhasznalo altal beallitott sebesseggel induljon el, kezi beavatkozas nelkul.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Sebesseg Vezerles

- [ ] **SPEED-01**: User can set a default playback speed that auto-applies to every Vimeo video
- [ ] **SPEED-02**: User can choose from preset speeds (1x, 1.25x, 1.5x, 1.75x, 2x) with one click
- [ ] **SPEED-03**: User can enter any custom speed value (including above 2x)
- [ ] **SPEED-04**: Speed setting persists across browser sessions (Chrome storage sync)
- [ ] **SPEED-05**: Speed is re-applied when Vimeo player resets it (seek, pause, quality change)

### Beagyazas Tamogatas

- [ ] **EMBED-01**: Extension works on vimeo.com video pages
- [ ] **EMBED-02**: Extension works on embedded Vimeo iframes on any third-party website

### Felhasznaloi Felulet

- [ ] **UI-01**: User can open a popup panel by clicking the extension icon
- [ ] **UI-02**: Popup shows the current speed setting
- [ ] **UI-03**: Extension badge displays the current speed (e.g. "2x")

## v2 Requirements

### Sebesseg Vezerles

- **SPEED-06**: User can change speed via keyboard shortcuts (+/- keys)
- **SPEED-07**: User can set per-domain speed preferences

### Felhasznaloi Felulet

- **UI-04**: Speed overlay displayed on the video player

## Out of Scope

| Feature | Reason |
|---------|--------|
| Per-video sebesseg mentes | Too complex, global setting covers the use case |
| Other video platforms (YouTube, etc.) | Vimeo-only focus |
| Vimeo Player SDK usage | Account-level restrictions, direct HTML5 API is better |
| Mobile app | Chrome extension is desktop only |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| SPEED-01 | Phase 1 | Pending |
| SPEED-02 | Phase 2 | Pending |
| SPEED-03 | Phase 2 | Pending |
| SPEED-04 | Phase 2 | Pending |
| SPEED-05 | Phase 1 | Pending |
| EMBED-01 | Phase 1 | Pending |
| EMBED-02 | Phase 1 | Pending |
| UI-01 | Phase 2 | Pending |
| UI-02 | Phase 2 | Pending |
| UI-03 | Phase 2 | Pending |

**Coverage:**
- v1 requirements: 10 total
- Mapped to phases: 10
- Unmapped: 0

---
*Requirements defined: 2026-03-06*
*Last updated: 2026-03-06 after roadmap creation*
