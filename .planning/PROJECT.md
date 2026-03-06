# Vimeo Gyorsító

## What This Is

Egy minimális Chrome bővítmény, ami automatikusan beállítja a Vimeo videók lejátszási sebességét egy felhasználó által megadott alapértelmezett értékre. Megszünteti azt a bosszantó problémát, hogy minden egyes Vimeo videónál kézzel kell a fogaskerékre kattintva átállítani a sebességet — különösen hasznos 1000+ videót tartalmazó kurzus/klub környezetben.

## Core Value

Bármely Vimeo videó automatikusan a felhasználó által beállított sebességgel induljon el, kézi beavatkozás nélkül.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Alapértelmezett lejátszási sebesség beállítása popup-ból
- [ ] Preset sebességek (1x, 1.25x, 1.5x, 1.75x, 2x) egy kattintással
- [ ] Szabad sebességérték bevitele (pl. 1.3x, 2.5x)
- [ ] Beállítás megőrzése (Chrome storage)
- [ ] Automatikus sebesség alkalmazása Vimeo videó indításakor
- [ ] Működés vimeo.com-on és beágyazott Vimeo lejátszóknál is

### Out of Scope

- Per-videó egyedi sebesség mentése — túl komplex ehhez a minimális bővítményhez
- Videón megjelenő overlay — popup elegendő az egyszer-beállítás használati mintához
- Más videóplatformok támogatása (YouTube, stb.) — kizárólag Vimeo

## Context

- A felhasználó 1000+ Vimeo videót tartalmazó online klubot üzemeltet
- A Vimeo nem jegyez meg lejátszási sebesség preferenciát videók között
- A videók beágyazva jelennek meg a klub oldalán, de vimeo.com-on is nézhetők
- Chrome Manifest V3 szükséges (MV2 deprecated)

## Constraints

- **Platform**: Chrome bővítmény (Manifest V3)
- **Scope**: Minimális — csak Vimeo sebesség, semmi más
- **Kompatibilitás**: Vimeo beágyazott player (iframe) + vimeo.com natív player

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Popup UI az overlay helyett | Egyszer-beállítás use case, nem kell vide videónként módosítani | — Pending |
| Globális sebesség (nem per-videó) | Egyszerűség, a felhasználó mindig ugyanazt a sebességet akarja | — Pending |
| Preset + szabad bevitel kombináció | Gyors váltás a gyakori értékek között + rugalmasság | — Pending |

---
*Last updated: 2026-03-06 after initialization*
