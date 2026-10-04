# Aura Celestial - Folder Structure

This document defines the frontend source-code structure for Aura Celestial.

It follows a strict SDE-3-level Feature-Based Architecture for a large-scale
Next.js App Router application.

Core principles:

- `app/` is responsible for routing, layouts, rendering, and Next.js conventions.
- Business and product capabilities belong inside `features/`.
- Pages must remain thin.
- Features own their components, schemas, services, types, data, and utilities.
- Shared UI belongs only in the appropriate shared boundary.
- Sub-features are allowed when they form a coherent bounded domain.
- Do not create top-level features merely because a capability has a route.
- No business logic should live inside `app/`.
- Customer frontend uses Next.js, TypeScript, SCSS/SCSS Modules, TanStack Query,
  React Hook Form, and Zod.
- Tailwind is not used in the customer frontend.

---

## `src/` Directory Tree

```text
C:\FREELANCING\AURA-CELESTIAL\SRC
+---app
|   |   error.tsx
|   |   favicon.ico
|   |   globals.scss
|   |   layout.module.scss
|   |   layout.tsx
|   |   loading.tsx
|   |   not-found.tsx
|   |   page.module.scss
|   |   page.tsx
|   |
|   +---(auth)
|   |   +---login
|   |   |       page.tsx
|   |   |
|   |   \---register
|   |           page.tsx
|   |
|   +---(dashboard)
|   |   +---dashboard
|   |           page.tsx
|   |
|   +---(marketing)
|   |   |   page.module.scss
|   |   |   page.tsx
|   |   |
|   |   +---about
|   |   |       page.tsx
|   |   |
|   |   +---astrologers
|   |   |       page.tsx
|   |   |
|   |   +---blog
|   |   |   |   page.tsx
|   |   |   \---[slug]
|   |   |           page.tsx
|   |   |
|   |   \---calculators
|   |       +---love-compatibility
|   |       |       page.tsx
|   |       +---numerology
|   |       |       page.tsx
|   |       +---rising-sign
|   |       |       page.tsx
|   |       +---dasha
|   |       |       page.tsx
|   |       +---mangal-dosha
|   |       |       page.tsx
|   |       +---moon-phase
|   |       |       page.tsx
|   |       +---flames
|   |       |       page.tsx
|   |       +---friendship
|   |       |       page.tsx
|   |       +---ishta-devata
|   |       |       page.tsx
|   |       +---transit-chart
|   |       |       page.tsx
|   |       +---atmakaraka-darakaraka
|   |       |       page.tsx
|   |       +---sun-sign
|   |       |       page.tsx
|   |       +---rashi
|   |       |       page.tsx
|   |       +---nakshatra
|   |       |       page.tsx
|   |       +---shani-sade-sati
|   |       |       page.tsx
|   |       +---birth-chart
|   |       |       page.tsx
|   |       +---lucky-vehicle-number
|   |       |       page.tsx
|   |       +---kaal-sarp-dosh
|   |       |       page.tsx
|   |       +---lo-shu-grid
|   |       |       page.tsx
|   |       +---name-compatibility
|   |       |       page.tsx
|   |       +---mulank
|   |       |       page.tsx
|   |       +---destiny-number
|   |       |       page.tsx
|   |       +---age
|   |       |       page.tsx
|   |       +---mobile-number
|   |       |       page.tsx
|   |       \---name-numerology
|   |               page.tsx
|   |
|   +---astrologers
|   +---blog
|   +---bookings
|   +---calculators
|   +---compatibility
|   +---consultations
|   +---horoscope
|   +---kundli
|   +---privacy
|   +---profile
|   +---terms
|   \---wallet
|
+---components
|   +---feedback
|   +---forms
|   +---layout
|   |   +---Footer
|   |   +---Header
|   |   |       Header.module.scss
|   |   |       Header.tsx
|   |   |       HeaderActions.module.scss
|   |   |       HeaderActions.tsx
|   |   |       index.ts
|   |   |
|   |   \---TopBar
|   |           index.ts
|   |           TopBar.module.scss
|   |           TopBar.tsx
|   |
|   +---navigation
|   |       index.ts
|   |       Navigation.module.scss
|   |       Navigation.tsx
|   |
|   +---seo
|   \---ui
|       +---Badge
|       |       Badge.module.scss
|       |       Badge.tsx
|       |       index.ts
|       |
|       +---Button
|       |       Button.module.scss
|       |       Button.tsx
|       |       index.ts
|       |
|       \---Logo
|               index.ts
|               Logo.module.scss
|               Logo.tsx
|
+---config
|       navigation.ts
|
+---features
|   +---astrologers
|   +---auth
|   +---blog
|   +---bookings
|   |
|   +---calculators
|   |   |   index.ts
|   |   |
|   |   +---components
|   |   |   +---CalculatorCard
|   |   |   +---CalculatorsSection
|   |   |   \---shared
|   |   |       +---CalculatorHeader
|   |   |       +---IngressPanel
|   |   |       \---RelatedCalculators
|   |   |
|   |   +---data
|   |   |       calculatorsData.ts
|   |   |       calculator-categories.ts
|   |   |
|   |   +---types
|   |   |       calculator.types.ts
|   |   |       calculator-category.types.ts
|   |   |
|   |   +---love-compatibility
|   |   |   +---components
|   |   |   |   \---LoveCompatibilityForm
|   |   |   +---schemas
|   |   |   |       love-compatibility.schema.ts
|   |   |   +---types
|   |   |   |       love-compatibility.types.ts
|   |   |   \---index.ts
|   |   |
|   |   +---numerology
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---data
|   |   |   \---index.ts
|   |   |
|   |   +---rising-sign
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---dasha
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---mangal-dosha
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---moon-phase
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---flames
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---friendship
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---ishta-devata
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---transit-chart
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---atmakaraka-darakaraka
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---sun-sign
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---rashi
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---nakshatra
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---data
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---shani-sade-sati
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---birth-chart
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---lucky-vehicle-number
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---kaal-sarp-dosh
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---lo-shu-grid
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---name-compatibility
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---mulank
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---destiny-number
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---age
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   +---mobile-number
|   |   |   +---components
|   |   |   +---schemas
|   |   |   +---types
|   |   |   +---utils
|   |   |   \---index.ts
|   |   |
|   |   \---name-numerology
|   |       +---components
|   |       +---schemas
|   |       +---types
|   |       +---utils
|   |       \---index.ts
|   |
|   +---compatibility
|   +---consultations
|   +---copyright
|   +---cta
|   +---hero
|   +---horoscope
|   +---kundli
|   +---matchmaking
|   +---notifications
|   +---payments
|   +---profile
|   +---reviews
|   +---services
|   +---tarot
|   +---telemetry
|   +---trust
|   +---user-profile
|   \---wallet
|
+---hooks
|
+---lib
|   +---analytics
|   +---api
|   +---auth
|   +---query
|   +---seo
|   +---utils
|   \---validation
|
+---providers
|       QueryProvider.tsx
|
+---styles
|   |   globals.scss
|   |   _functions.scss
|   |   _mixins.scss
|   |   _tokens.scss
|   |   _typography.scss
|   |   _variables.scss
|   |
|   +---abstracts
|   +---base
|   +---components
|   +---layout
|   \---utilities
|
\---types
```

---

## Architectural Rules

### 1. `app/` is the routing layer

The App Router must remain thin.

Allowed:

- Route definitions
- `page.tsx`
- `layout.tsx`
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`
- Metadata
- Route-level composition

Not allowed:

- Business logic
- Domain calculations
- Database access
- Complex API orchestration
- Feature-specific validation logic
- Large reusable components

Preferred:

```text
app route
    ↓
feature public API
    ↓
feature implementation
```

### 2. Feature domains

Top-level folders inside `features/` represent meaningful product domains.

Examples:

```text
features/
├── astrologers/
├── bookings/
├── consultations/
├── horoscope/
├── kundli/
├── numerology/
├── payments/
├── profile/
├── tarot/
└── calculators/
```

Do not create a top-level feature merely because something has its own URL.

### 3. Calculator domain

`features/calculators/` is a bounded feature domain for calculator
experiences.

It contains:

```text
features/calculators/
├── shared calculator UI
├── calculator catalogue data
├── calculator types
└── calculator sub-features
```

Each calculator is an isolated sub-feature.

Examples:

```text
features/calculators/
├── love-compatibility/
├── numerology/
├── rising-sign/
├── dasha/
└── ...
```

### 4. Calculator sub-feature boundaries

Each calculator owns its implementation.

Example:

```text
features/calculators/love-compatibility/
├── components/
├── schemas/
├── types/
└── index.ts
```

As complexity grows, a sub-feature may add:

```text
services/
data/
utils/
hooks/
```

Do not create empty directories simply to satisfy a template.

### 5. Shared calculator components

Components genuinely shared by multiple calculators belong at:

```text
features/calculators/components/shared/
```

Examples:

```text
CalculatorHeader
CalculatorLayout
CalculatorResult
IngressPanel
RelatedCalculators
```

Do not put calculator-specific components here.

### 6. Data ownership

Data shared by the calculator domain belongs in:

```text
features/calculators/data/
```

Data specific to one calculator belongs inside that calculator:

```text
features/calculators/numerology/data/
```

Data genuinely shared across unrelated platform domains may eventually belong
in a platform-level `src/data/` directory.

Do not move feature-specific data into global data merely for convenience.

### 7. Feature public APIs

Each substantial feature/sub-feature should expose a deliberate public API
through `index.ts`.

Prefer:

```text
@/features/calculators/love-compatibility
```

instead of importing private implementation paths.

### 8. Feature-to-feature dependencies

A feature must not depend on another feature's private implementation.

If functionality is genuinely shared, move it to the nearest correct shared
boundary.

### 9. Do not flatten the calculator domain

Do not use:

```text
features/
├── love-calculator/
├── numerology-calculator/
├── rising-sign-calculator/
└── ...
```

merely because each calculator has a route.

Prefer:

```text
features/
└── calculators/
    ├── love-compatibility/
    ├── numerology/
    ├── rising-sign/
    └── dasha/
```

### 10. Domain evolution

The calculator hierarchy is allowed to evolve.

Some calculators may eventually become part of a larger domain.

For example:

```text
features/
└── kundli/
    ├── birth-chart/
    ├── rising-sign/
    ├── dasha/
    ├── mangal-dosha/
    └── ...
```

Likewise:

```text
features/
└── numerology/
    ├── mulank/
    ├── destiny-number/
    ├── name-numerology/
    ├── mobile-number/
    └── lo-shu-grid/
```

Do this only when the domain itself becomes a meaningful bounded capability.

Do not prematurely create complexity.

### 11. Shared components

Use `src/components/` only for components genuinely shared across multiple
feature domains.

Business-specific components belong in their feature.

### 12. `lib/`

`lib/` contains application infrastructure rather than product features.

Examples:

```text
lib/api/
lib/auth/
lib/query/
lib/analytics/
lib/seo/
lib/utils/
lib/validation/
```

Do not use `lib/` as a dumping ground for feature-specific business logic.

### 13. `config/`

`config/` contains application configuration such as:

```text
navigation.ts
routes.ts
environment.ts
```

Configuration is different from domain data.

### 14. Hooks

Use root-level `hooks/` for genuinely generic reusable hooks.

Feature-specific hooks belong inside their feature:

```text
features/astrologers/hooks/
features/calculators/numerology/hooks/
```

### 15. Types

Root `src/types/` is for genuinely shared application types.

Feature-specific types belong inside the feature.

Avoid duplicate type definitions.

### 16. Styling

Customer frontend styling uses SCSS and SCSS Modules.

Preferred:

```text
Component.tsx
Component.module.scss
```

Feature components should keep styles close to the component.

### 17. Naming conventions

Use:

```text
folders: kebab-case
files: kebab-case
components: PascalCase
types: *.types.ts
schemas: *.schema.ts
services: *.service.ts
hooks: use-*.ts
```

### 18. Dependency direction

The preferred dependency direction is:

```text
app/
  ↓
feature public API
  ↓
feature implementation
  ↓
shared UI / infrastructure
  ↓
external API
```

Avoid upward dependencies.

Features should not import from route implementations.

---

## Final Calculator Architecture

```text
src/
│
├── app/
│   └── (marketing)/
│       └── calculators/
│           ├── love-compatibility/
│           │   └── page.tsx
│           ├── numerology/
│           │   └── page.tsx
│           ├── rising-sign/
│           │   └── page.tsx
│           ├── dasha/
│           │   └── page.tsx
│           └── ...
│
└── features/
    └── calculators/
        │
        ├── components/
        │   └── shared/
        ├── data/
        ├── types/
        │
        ├── love-compatibility/
        ├── numerology/
        ├── rising-sign/
        ├── dasha/
        ├── mangal-dosha/
        ├── moon-phase/
        ├── flames/
        ├── friendship/
        ├── ishta-devata/
        ├── transit-chart/
        ├── atmakaraka-darakaraka/
        ├── sun-sign/
        ├── rashi/
        ├── nakshatra/
        ├── shani-sade-sati/
        ├── birth-chart/
        ├── lucky-vehicle-number/
        ├── kaal-sarp-dosh/
        ├── lo-shu-grid/
        ├── name-compatibility/
        ├── mulank/
        ├── destiny-number/
        ├── age/
        ├── mobile-number/
        └── name-numerology/
```

**Architecture rule:**

> Routes describe URLs. Features describe product capabilities. Sub-features
> describe cohesive capabilities within a feature domain. Shared components
> belong to the nearest common boundary.
