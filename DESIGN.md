---
name: Ciphexo Pay Digital POS
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#d7c3ae'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#9f8e7a'
  outline-variant: '#524534'
  surface-tint: '#ffb955'
  primary: '#ffc880'
  on-primary: '#452b00'
  primary-container: '#f5a623'
  on-primary-container: '#644000'
  inverse-primary: '#835500'
  secondary: '#c6c4df'
  on-secondary: '#2f2e43'
  secondary-container: '#47475d'
  on-secondary-container: '#b8b6d0'
  tertiary: '#d0cff2'
  on-tertiary: '#2e2e49'
  tertiary-container: '#b5b3d5'
  on-tertiary-container: '#454561'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb4'
  primary-fixed-dim: '#ffb955'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#633f00'
  secondary-fixed: '#e2e0fc'
  secondary-fixed-dim: '#c6c4df'
  on-secondary-fixed: '#1a1a2e'
  on-secondary-fixed-variant: '#45455b'
  tertiary-fixed: '#e2dfff'
  tertiary-fixed-dim: '#c5c3e6'
  on-tertiary-fixed: '#191933'
  on-tertiary-fixed-variant: '#444461'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  h1:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  h2:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 20px
  gutter: 12px
---

## Brand & Style

The design system is engineered for the high-velocity environment of Ghanaian commerce, blending the reliability of a traditional financial institution with the "electric" energy of modern fintech. The brand personality is authoritative yet approachable, radiating a sense of high performance and technical precision.

The visual style is a hybrid of **Modern Corporate** and **Glassmorphism**, optimized for outdoor legibility and rapid interaction. It prioritizes a "high-polish" finish using deep space backgrounds contrasted with vibrant amber accents to ensure the UI feels premium and trustworthy. The aesthetic avoids unnecessary clutter, focusing on transaction clarity and merchant efficiency.

## Colors

The color strategy utilizes a "Deep Space" foundation to minimize eye strain during long shifts and to make the "Ciphexo Amber" primary color pop with high-energy vibrance.

- **Primary (Ciphexo Amber):** Used for primary actions, critical path highlights, and brand reinforcement.
- **Surface High:** A slightly lighter navy (#2A2A45) used for cards and elevated containers to create depth against the #1A1A2E background.
- **MoMo Integration:** Dedicated semantic colors for MTN and Telecel Cash are used sparingly in payment selection screens to provide instant visual recognition for merchants and customers.
- **Status Colors:** High-saturation greens and reds for success/failure states, maintaining the "electric" feel without sacrificing clarity.

## Typography

This design system employs a dual-font strategy. **Space Grotesk** is utilized for headlines, price displays, and technical data points, lending a futuristic, geometric quality to the interface. **Inter** is reserved for body copy and labels to ensure maximum legibility at small scales, particularly during fast-paced merchant-customer interactions.

Price displays (GHS) should always use the `price-display` token to command attention. `label-caps` is used for category headers and secondary metadata to create a structured, "data-rich" technical feel.

## Layout & Spacing

A **mobile-first fluid grid** is the standard. The layout relies on a 4-column system for handheld devices. 

Key principles:
- **Comfortable Tap Targets:** Buttons and interactive cards maintain a minimum height of 48px to accommodate rapid use.
- **Bottom-Heavy Ergonomics:** Critical actions (Checkout, Pay, Confirm) are placed within the natural thumb zone at the bottom of the screen.
- **Information Density:** While maintaining clean lines, the system allows for high density in list views (e.g., inventory or transaction history) using 12px gutters to maximize screen real estate.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Subtle Outlines** rather than heavy drop shadows. 

- **The Floor:** The base background is #1A1A2E.
- **The Card:** Elevated surfaces use #2A2A45 with a 1px solid border at 10% white opacity. This creates a "glass-like" edge that defines the shape without adding visual weight.
- **The Interaction:** Active states use a subtle outer glow of the Primary Amber (0px blur, 2px spread at 20% opacity) to signify focus.
- **Glassmorphism:** Overlays and modals use a backdrop blur (12px) with a semi-transparent dark tint to maintain context of the underlying transaction.

## Shapes

The shape language is **"Modern Rounded."** The 0.5rem (8px) base radius provides a professional and friendly feel that is not as aggressive as sharp corners nor as casual as full pill-shapes.

- **Primary Buttons:** Use `rounded-lg` (16px) to stand out as distinct interactive units.
- **Container Cards:** Use the base 8px radius for a structured, modular look.
- **Input Fields:** Match the 8px radius to maintain consistency across the form-heavy merchant experience.

## Components

### Buttons
- **Primary:** Ciphexo Amber background with Deep Space text. High-contrast, no shadow, bold weight.
- **Secondary:** Transparent background with a 1px Amber border.
- **MoMo Quick-Pay:** Wide-format buttons with branded icons (MTN/Telecel) for instant checkout.

### Cards
- **Transaction Cards:** Use the #2A2A45 surface with a thin stroke. Include a left-aligned status indicator (colored strip) for "Success," "Pending," or "Failed."

### Inputs
- **Numeric Keypad:** Custom large-format keypad for rapid amount entry. Buttons feature haptic feedback cues and high-contrast numerals in Space Grotesk.
- **Search:** Darker inset background with Inter placeholder text and a 20px leading icon.

### Iconography
- **MoMo-Friendly:** Custom icons for "Send Money," "Cash Out," and "QR Pay." Icons use 2pt stroke weights with slightly rounded terminals to match the font characteristics.

### Lists
- **Merchant Feed:** Tight vertical spacing (4px between items) with subtle separators to allow for high-volume transaction monitoring.