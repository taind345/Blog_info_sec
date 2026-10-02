---
name: Cyber Operations & Threat Intel HUD
colors:
  surface: '#10141a'
  surface-dim: '#10141a'
  surface-bright: '#353940'
  surface-container-lowest: '#0a0e14'
  surface-container-low: '#181c22'
  surface-container: '#1c2026'
  surface-container-high: '#262a31'
  surface-container-highest: '#31353c'
  on-surface: '#dfe2eb'
  on-surface-variant: '#b9ccb5'
  inverse-surface: '#dfe2eb'
  inverse-on-surface: '#2d3137'
  outline: '#849581'
  outline-variant: '#3b4b3a'
  surface-tint: '#00e55b'
  primary: '#edffe8'
  on-primary: '#003911'
  primary-container: '#00ff66'
  on-primary-container: '#007128'
  inverse-primary: '#006e27'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#fff8f7'
  on-tertiary: '#68000a'
  tertiary-container: '#ffd3cf'
  on-tertiary-container: '#bd1e26'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6bff83'
  primary-fixed-dim: '#00e55b'
  on-primary-fixed: '#002107'
  on-primary-fixed-variant: '#00531b'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#10141a'
  on-background: '#dfe2eb'
  surface-variant: '#31353c'
typography:
  display-lg:
    fontFamily: JetBrains Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 19px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-performance, immersive terminal interface engineered for cybersecurity practitioners, penetration testers, vulnerability researchers, and CTF competitors. Moving away from standard sterile tech documentation, it introduces an authoritative, tactical, operative console aesthetic. 

The mood fuses raw Unix command-line authenticity with the crisp precision of a cyber defense Heads-Up Display (HUD). It evokes stealth, operational focus, intellectual rigor, and urgent technical clarity. 

### Visual Archetype
- **Tactical Cyberpunk & Terminal Brutalism:** Deep, noise-free abyssal backgrounds (`#0a0f14`, `#0d1117`), structured modular containers, fine-lined geometric telemetry grids, and phosphor glow highlights.
- **HUD Telemetry Accents:** Micro-corners, hash dividers, subtle scanlines, dynamic pulse beacons, and tactical telemetry data headers (`[SEC-OPS // LVL-04]`).
- **Precision Data Hierarchy:** High visual signal-to-noise ratio where neon matrix greens and laser cyans serve functional routing and status signaling, while high-alert crimson is reserved strictly for weaponized exploits, severe CVEs, and live attack vectors.

## Colors

The color palette is built on strict functional contrast within an ultra-dark spectrum. Neon luminances are calibrated against deep obsidian bases to prevent retinal fatigue while delivering high-contrast situational awareness.

### Role Allocations & Surfaces
- **Obsidian Abyssal Base (`#0a0f14`):** Canvas backdrop and outer frame. Sets an infinite depth void.
- **Console Surface (`#0d1117`):** Primary card, sidebar, and terminal window surfaces.
- **Elevated Chamber (`#161b22`):** Hovered states, nested command prompts, code blocks, and active pane backplates.
- **Border Trace (`#21262d` / `#30363d`):** Crisp, hairline perimeter dividers providing containment without visual weight.

### Signal Luminance
- **Primary / Matrix Emerald (`#00ff66` / `#10b981`):** Primary system readiness, terminal prompts (`user@threat-hub:~$`), active nodes, success metrics, and PortSwigger/HackTheBox operational lab passes.
- **Secondary / Tactical Cyan (`#00f0ff` / `#38bdf8`):** Network routes, mindmap interconnects, telemetry tags, API protocols, and interactive link elements.
- **Tertiary / Threat Crimson (`#ef4444` / `#f87171`):** Active vulnerabilities (RCE, SSRF, SQLi), critical CVSS tiers (9.0+), CTF flag objectives, and alert state notifications.
- **Text Primary (`#f0f6fc`):** Crisp off-white ensuring razor-sharp legibility against dark slate tiers.
- **Text Muted / Carbon (`#8b949e`):** Secondary metadata, path timestamps, sub-labels, and terminal comment tracks (`//`).

## Typography

The typography architecture uses a high-contrast dual-font strategy:
1. **JetBrains Mono (Console Layer):** Drives all operational structural points—headlines, code samples, terminal inputs, metric readouts, tag metadata, and HUD telemetry markers. Its ligature support, crisp rectangular proportions, and deliberate monospace layout convey raw command-line authority.
2. **Geist (Intel Reading Layer):** Powers long-form writeups, vulnerability descriptions, root-cause analyses, and documentation body text. Its clean, neutral, humanist-grotesque geometry ensures high endurance during prolonged reading sessions without competing with the tactical monospace elements.

### Rules of Engagement
- All primary category titles, CTF labels, and system status markers must be set in uppercase monospace with explicit tracking (`letter-spacing: 0.04em` to `0.08em`).
- Inline code tags and system commands must maintain a discrete background highlight (`rgba(0, 255, 102, 0.08)`) with a glowing green font hue.
- Avoid italicizing monospace headers; italic styles are strictly reserved for code comments (`// commentary`).

## Layout & Spacing

The layout operates on a 12-column adaptive cyberdeck grid, structured to accommodate dense technical data, terminal feeds, and interactive visualization surfaces (like mindmaps and attack graph topologies).

### Screen Adaptations & Layout Hierarchy
- **Desktop (1200px+):** Tri-pane architecture.
  - Left Rail (260px fixed): System index, collapsible module tree, live target stats.
  - Core Chamber (Fluid 8-columns): Writeups, laboratory directories, terminal logs, code snippets.
  - Right Radar/HUD Rail (280px fixed): Master interactive mindmap node preview, on-this-page anchors, vulnerability level indicators.
- **Tablet (768px – 1199px):** Dual-pane layout. The right HUD rail collapses into an on-demand drawer accessed via a top-bar radar trigger. The core chamber spans 12 columns with a `gutter` of `1rem`.
- **Mobile (< 768px):** Single-column command stream. Sidebars convert into sliding bottom command sheets. Gutter drops to `gutter-mobile` (`0.75rem`) and margin to `margin-mobile` (`1rem`).

### Grid Alignment
Cards, terminal wrappers, and badge chips align strictly to the 4px baseline rhythm. Margin distances between major section blocks leverage `space-xl` (`2.5rem`) to maintain tactical isolation between topic areas.

## Elevation & Depth

Visual hierarchy does not use soft natural shadows. Depth is achieved via **tonal layering**, **hairline cybernetic borders**, and **luminescent atmospheric glows**.

### Depth Layers
- **Floor Zero (Background Canvas):** Absolute dark `#0a0f14` overlaid with a fine-dot micro-matrix grid (SVG pattern at 24px intervals, 3% opacity).
- **Floor One (Base Module / Inactive Panes):** `#0d1117` with a 1px border of `#21262d`.
- **Floor Two (Active Terminal / Focused Card):** `#161b22` bounded by a 1px trace border of `#30363d` or an accent border of `rgba(0, 255, 102, 0.4)`.
- **Floor Three (HUD Overlays, Modals, Radar Popups):** Translucent obsidian (`#0d1117` at 92% alpha) backed by `backdrop-filter: blur(16px)` and an outer luminescent aura.

### Glow & Scanline Mechanics
- **Emerald Glow:** Active inputs, selected lab items, and successful exploits emit an atmospheric perimeter field: `box-shadow: 0 0 15px -3px rgba(0, 255, 102, 0.25), inset 0 0 8px rgba(0, 255, 102, 0.05)`.
- **Cyan Interconnect Glow:** Network routing nodes and mindmap wires emit: `filter: drop-shadow(0 0 6px rgba(0, 240, 255, 0.6))`.
- **Alert Pulse:** Vulnerability tags use a rhythmic keyframe animation pulsing between `rgba(239, 68, 68, 0.2)` and `rgba(239, 68, 68, 0.6)`.
- **Terminal CRT Scanline:** Code environments feature an optional horizontal scanline overlay generated via CSS linear-gradient repeating every 4px at 2% opacity.

## Shapes

The interface embraces a low-radius, industrial form factor (`roundedness: 1`). Soft pill aesthetics are discarded in favor of sharp, functional corners that reinforce the mechanical precision of military hardware and high-grade command consoles.

### Geometric Syntax
- **Base Components (Inputs, Buttons, Tags, Tooltips):** 0.25rem (`4px`) corner radius.
- **Structural Panes & Terminal Windows:** 0.5rem (`8px`) corner radius with inset top bars.
- **HUD Chamfers:** High-level tactical callouts, lab hero banners, and mindmap containers feature angled chamfer corners (clipped at 45-degree angles by 8px using `clip-path: polygon(...)`) to simulate tactical digital readouts.
- **Corner Tick Accents:** Selected cards feature pseudo-element bracket ticks (`+` or `L`-brackets) anchored on top-left and bottom-right corners using 1px primary accent borders.

## Components

### Terminal Windows & Lab Cards
- **Structure:** Encased in `#0d1117` with a 1px border of `#21262d`. The header features simulated Unix window controls (traffic light dots styled as muted neon or `#21262d`) alongside a monospace title path (e.g., `~/writeups/portswigger/sqli-lab-01.sh`).
- **Interactive State:** Hovering initiates a subtle border transition to `rgba(0, 255, 102, 0.5)` and translates the card -2px along the Y-axis with an emerald ambient glow.
- **Tech Corner Accents:** Top-right corner displays a subtle hexadecimal ID tag (e.g., `0x0A // ACTIVE`) set in `label-sm` font.

### Buttons & Action Triggers
- **Primary Cyber Button:** High-contrast `#00ff66` solid background with `#0a0f14` bold monospace typography. Hover triggers an intensive neon glow (`0 0 20px rgba(0, 255, 102, 0.5)`). Active click depresses by 1px.
- **Ghost Terminal Trigger:** Transparent background, 1px border in `#00f0ff`, text in `#00f0ff`. Hover state fills with `rgba(0, 240, 255, 0.1)` and produces a cyan perimeter flare.
- **Destructive / Exploit Trigger:** Border and text in `#ef4444`, background `rgba(239, 68, 68, 0.08)`.

### Badge Tags & Lab Category Markers
- **PortSwigger Academy:** Cyan hue `rgba(0, 240, 255, 0.1)`, text `#00f0ff`, border `1px solid rgba(0, 240, 255, 0.3)`. Prefixed with a globe glyph `[WEB]`.
- **TryHackMe / HackTheBox:** Emerald hue `rgba(0, 255, 102, 0.1)`, text `#00ff66`, border `1px solid rgba(0, 255, 102, 0.3)`. Prefixed with a flag glyph `[ROOT]`.
- **CVE / Critical Severity:** Threat Crimson `rgba(239, 68, 68, 0.12)`, text `#ef4444`, border `1px solid rgba(239, 68, 68, 0.4)`. Features a miniature pulsing green/red dot indicator.

### Input Fields & Search Shell
- Styled as a command-line interface prompt. The search bar includes a permanent neon green `>` prefix and a blinking terminal cursor block (`|` or `_`).
- Background sits at `#0d1117` with an inactive border of `#30363d`. Focus brings a crisp 1px cyan outline with zero default browser ring and an ambient cyan back-glow.

### Interactive Radar / Mindmap Widget
- **Aesthetic:** Embedded vector viewport on `#0a0f14` framed by hairline crosshairs and coordinate indicators (`GRID: 34.2 // -118.4`).
- **Node Connections:** Nodes are connected by thin cyan and green traces (`stroke-width: 1.5`, stroke-dasharray animations for active execution paths).
- **Controls:** Floating minimal control pod containing zoom, fullscreen terminal expansion, and category filtering toggles styled as miniature monospace icon pads.

### Code Blocks & Shell Snippets
- Encased in deep `#080c10` with a top header displaying the interpreter (e.g., `bash`, `python3`, `sql`). Line numbers are fixed on the left in `#484f58`. Code syntax highlights: strings in `#00ff66`, keywords in `#00f0ff`, constants/threats in `#ef4444`, and operators in `#f0f6fc`.