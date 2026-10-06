---
name: aura-calculator-creation
description: Strict guidelines and architectural constraints for building new calculators in the Aura Celestial platform.
---

# Calculator Creation Skill & Constraints (Aura Celestial)

When generating new calculators for the Aura Celestial platform, you MUST strictly adhere to the following architectural, structural, and stylistic constraints.

## 1. Architectural Structure
Every calculator feature must be completely encapsulated within `src/features/calculators/<calculator-name>` and exposed via a Next.js App Router page in `src/app/(marketing)/calculators/<calculator-name>`.

### Required Directory Pattern
```
src/features/calculators/<calculator-name>/
├── schemas/
│   └── <calculator>.schema.ts        // Zod validation schemas for forms
├── types/
│   └── <calculator>.types.ts         // TypeScript interfaces and types
├── data/
│   └── <calculator>.data.ts          // Mock or initial telemetry data payloads
├── hooks/
│   └── use<Calculator>.ts            // TanStack Query (useMutation/useQuery)
└── components/
    ├── <Calculator>Form/             // The input collection form (React Hook Form)
    ├── <Calculator>Orchestrator/     // The main parent component tying form + visualizers
    └── ...[SubComponents]/           // Modular UI sections based on the design
```

## 2. State & Data Fetching (TanStack Query)
- **NEVER** use `useState` or `useEffect` to manually orchestrate API calls or mock timeouts.
- **ALWAYS** use `@tanstack/react-query`.
- For form submissions that trigger calculations, use `useMutation`.
- Return `mutate` (aliased to `calculate`), `data`, and `isPending` (aliased to `isLoading`).

```typescript
// Example Hook
export function use<Calculator>Telemetry(options?: { onSuccess?: (data: TelemetryData) => void }) {
  return useMutation({
    mutationFn: calculateDataMatrix, // Async function that returns data
    onSuccess: options?.onSuccess,
  });
}
```

## 3. Styling Constraints (CRITICAL)
- **NO INLINE STYLES:** Do not use `style={{...}}` anywhere in the JSX.
- **NO TAILWIND CSS:** The platform strictly uses SCSS Modules.
- **SCSS MODULES ONLY:** Every component must have a corresponding `<component>.module.scss`.

### Importing Design Tokens
Every SCSS file must start with:
```scss
@use "@/styles/_variables" as *;
@use "@/styles/_mixins" as *;
```

### Strict Token Usage
Never hardcode colors, spacing, or typography. You must map the design to existing variables:
- **Typography:** `$ui-xs`, `$ui-sm`, `$heading-sm`, `$heading-md`, `$font-mono`, `$font-inter`, `$font-playfair`
- **Colors:** `$color-gold-primary`, `$color-cyan-primary`, `$color-text-primary`, `$color-text-secondary`, `$color-surface`, `$color-background`
- **Spacing/Radii:** `$spacing-xs`, `$spacing-sm`, `$spacing-md`, `$spacing-lg`, `$radius-sm`
- **Containers:** Apply `@include glass-card;` to panels and main containers to ensure the consistent semi-transparent premium look.

## 4. Next.js Routing
The entry point for the calculator must be:
`src/app/(marketing)/calculators/<calculator-name>/page.tsx`

It must utilize the shared `CalculatorHeader` component:
```tsx
import { CalculatorHeader } from "@/features/calculators/components/shared";

export default function CalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader 
        eyebrow="CATEGORY / SUB-CATEGORY"
        title="Calculator Title"
        description="Description of the calculator."
      />
      <CalculatorOrchestrator />
    </main>
  );
}
```

## 5. Forms
- Use `react-hook-form` paired with `@hookform/resolvers/zod`.
- Ensure all form inputs have accessible labels, error handling spans (`$color-error`), and interactive states (hover/focus mapping to `$color-gold-primary` or `$color-cyan-primary`).

## 6. Icons
- Use `lucide-react` for all UI icons.

---
**Summary Checklist before completing a calculator:**
- [ ] Are there ANY inline styles? (If yes, move them to `.module.scss`)
- [ ] Are all colors/fonts utilizing SCSS variables?
- [ ] Is the data calculation using TanStack Query `useMutation`?
- [ ] Is the layout broken down into modular components?
- [ ] Did you implement `glass-card` for the containers?
