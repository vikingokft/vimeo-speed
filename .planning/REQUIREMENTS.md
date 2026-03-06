# Requirements: Vimeo Gyorsító

**Defined:** 2026-03-06
**Core Value:** Bármely Vimeo videó automatikusan a felhasználó által beállított sebességgel induljon el, kézi beavatkozás nélkül.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Sebesség Vezérlés

- [ ] **SPEED-01**: User can set a default playback speed that auto-applies to every Vimeo video
- [ ] **SPEED-02**: User can choose from preset speeds (1x, 1.25x, 1.5x, 1.75x, 2x) with one click
- [ ] **SPEED-03**: User can enter any custom speed value (including above 2x)
- [ ] **SPEED-04**: Speed setting persists across browser sessions (Chrome storage sync)
- [ ] **SPEED-05**: Speed is re-applied when Vimeo player resets it (seek, pause, quality change)

### Beágyazás Támogatás

- [ ] **EMBED-01**: Extension works on vimeo.com video pages
- [ ] **EMBED-02**: Extension works on embedded Vimeo iframes on any third-party website

### Felhasználói Felület

- [ ] **UI-01**: User can open a popup panel by clicking the extension icon
- [ ] **UI-02**: Popup shows the current speed setting
- [ ] **UI-03**: Extension badge displays the current speed (e.g. "2x")

## v2 Requirements

### Sebesség Vezérlés

- **SPEED-06**: User can change speed via keyboard shortcuts (+/- keys)
- **SPEED-07**: User can set per-domain speed preferences

### Felhasználói Felület

- **UI-04**: Speed overlay displayed on the video player

## Out of Scope

| Feature | Reason |
|---------|--------|
| Per-videó sebesség mentés | Túl komplex, a globális beállítás lefedi a használati mintát |
| Más videóplatformok (YouTube, stb.) | Kizárólag Vimeo-fókusz |
| Vimeo Player SDK használata | Account-szintű korlátozások, direkt HTML5 API jobb |
| Mobilalkalmazás | Chrome bővítmény csak desktop |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| SPEED-01 | TBD | Pending |
| SPEED-02 | TBD | Pending |
| SPEED-03 | TBD | Pending |
| SPEED-04 | TBD | Pending |
| SPEED-05 | TBD | Pending |
| EMBED-01 | TBD | Pending |
| EMBED-02 | TBD | Pending |
| UI-01 | TBD | Pending |
| UI-02 | TBD | Pending |
| UI-03 | TBD | Pending |

**Coverage:**
- v1 requirements: 10 total
- Mapped to phases: 0
- Unmapped: 10

---
*Requirements defined: 2026-03-06*
*Last updated: 2026-03-06 after initial definition*
