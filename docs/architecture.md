# Frontend Architecture

## 1. Purpose

This document defines the architecture, folder structure, responsibilities,
boundaries, conventions, and engineering rules for the customer-facing
frontend application.

The frontend is a separately deployable application within the platform.

The frontend is responsible for:

- User interface
- User experience
- Navigation
- SEO
- Accessibility
- Client-side interaction
- Form handling
- API consumption
- Server-side rendering
- Static generation where appropriate
- Client-side data synchronization
- Authentication state presentation
- Responsive design
- Progressive enhancement
- 3D/visual experiences where required

The frontend is NOT responsible for:

- Core business logic
- Payment authorization
- Wallet accounting
- Booking state transitions
- Astrology calculation authority
- Authorization decisions
- Database access
- Background jobs
- Queues
- Workers
- Scheduled processing
- Cross-service orchestration

Business-critical decisions belong to the backend.

---

# 2. Application Architecture

The platform consists of separately deployable applications:

```text
apps/
├── frontend/
├── admin/
└── backend/
```

The customer frontend is:

```text
apps/frontend/
```

The frontend communicates with the backend through defined API contracts.

High-level architecture:

```text
                        ┌───────────────────────┐
                        │       Browser         │
                        │                       │
                        │  Customer Frontend    │
                        │     Next.js           │
                        └───────────┬───────────┘
                                    │
                                    │ HTTPS
                                    ▼
                        ┌───────────────────────┐
                        │      API Boundary     │
                        │                       │
                        │   Backend / Gateway   │
                        └───────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌────────────┐        ┌────────────┐       ┌────────────┐
       │ User/Auth  │        │ Astrologer │       │  Booking   │
       │  Service   │        │  Service   │       │  Service   │
       └────────────┘        └────────────┘       └────────────┘
              │                     │                     │
              ▼                     ▼                     ▼
       ┌────────────┐        ┌────────────┐       ┌────────────┐
       │  Payment   │        │ Horoscope  │       │ Notification│
       │  Service   │        │  Service   │       │  Service   │
       └────────────┘        └────────────┘       └────────────┘
```

The browser must never communicate directly with individual service
databases.

The browser must not know internal service topology.

---

# 3. Technology Stack

## Core

- Next.js
- React
- TypeScript
- App Router
- Node.js runtime where required by Next.js
- SCSS
- SCSS Modules

## Data Fetching

- TanStack Query

## Forms

- React Hook Form
- Zod

## Styling

- SCSS
- SCSS Modules
- CSS custom properties
- Design tokens

Tailwind CSS is NOT used in the customer frontend.

## 3D

Where required:

- Three.js
- React Three Fiber
- Drei where justified

3D must always be treated as progressive enhancement.

---

# 4. Core Architectural Principles

The frontend follows these principles:

1. Feature-oriented architecture
2. Clear dependency boundaries
3. Server Components by default
4. Client Components only when required
5. API-driven business data
6. SEO-first rendering
7. Accessibility by default
8. Mobile-first responsive design
9. Progressive enhancement
10. Minimal global state
11. Predictable data fetching
12. Strong TypeScript contracts
13. No business-critical logic in UI
14. No direct database access
15. No duplicated backend business rules
16. No unnecessary abstractions
17. No premature global state
18. No unnecessary client-side JavaScript
19. Performance is an architectural concern
20. Every feature should remain independently understandable

---

# 5. Directory Structure

The frontend follows this structure:

```text
src/
├── app/
├── features/
├── components/
├── lib/
├── hooks/
├── providers/
├── config/
├── types/
└── styles/
```

Detailed structure:

```text
src/
├── app/
│   ├── (marketing)/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── astrologers/
│   ├── horoscope/
│   ├── kundli/
│   ├── compatibility/
│   ├── calculators/
│   ├── blog/
│   ├── profile/
│   ├── bookings/
│   ├── consultations/
│   ├── wallet/
│   ├── privacy/
│   ├── terms/
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── error.tsx
│   └── page.tsx
│
├── features/
│   ├── auth/
│   ├── astrologers/
│   ├── horoscope/
│   ├── kundli/
│   ├── compatibility/
│   ├── calculators/
│   ├── bookings/
│   ├── consultations/
│   ├── payments/
│   ├── wallet/
│   ├── profile/
│   ├── blog/
│   └── notifications/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── feedback/
│   ├── forms/
│   └── seo/
│
├── lib/
│   ├── api/
│   ├── auth/
│   ├── query/
│   ├── analytics/
│   ├── seo/
│   ├── utils/
│   └── validation/
│
├── hooks/
│   ├── use-debounce.ts
│   ├── use-media-query.ts
│   └── ...
│
├── providers/
│   ├── query-provider.tsx
│   ├── auth-provider.tsx
│   └── ...
│
├── config/
│   ├── site.ts
│   ├── routes.ts
│   ├── environment.ts
│   └── constants.ts
│
├── types/
│   ├── api.ts
│   ├── common.ts
│   └── ...
│
└── styles/
    ├── globals.scss
    ├── variables.scss
    ├── mixins.scss
    ├── functions.scss
    ├── tokens.scss
    └── typography.scss
```

---

# 6. App Router Responsibility

The `app/` directory represents the application's routing and rendering
structure.

It should NOT become the location for feature business logic.

Example:

```text
app/astrologers/[slug]/page.tsx
```

The page should compose the feature:

```text
app
   ↓
feature
   ↓
components / services / hooks
   ↓
API
```

Example:

```text
app/astrologers/[slug]/page.tsx
        ↓
features/astrologers/
        ↓
AstrologerProfile
        ↓
astrologer API service
        ↓
Backend API
```

Pages should remain relatively thin.

---

# 7. Route Groups

Use Next.js route groups when different sections require different layouts
or rendering behavior.

Example:

```text
app/
├── (marketing)/
├── (auth)/
├── (dashboard)/
└── (public)/
```

Route groups should be used to organize application structure without
unnecessarily affecting public URLs.

---

# 8. Feature Architecture

Every significant business capability should be isolated inside `features/`.

Example:

```text
features/astrologers/
├── components/
│   ├── astrologer-card.tsx
│   ├── astrologer-grid.tsx
│   ├── astrologer-profile.tsx
│   └── astrologer-filters.tsx
│
├── hooks/
│   ├── use-astrologers.ts
│   └── use-astrologer.ts
│
├── services/
│   └── astrologer.service.ts
│
├── schemas/
│   └── astrologer.schema.ts
│
├── types/
│   └── astrologer.types.ts
│
├── utils/
│   └── astrologer.utils.ts
│
└── index.ts
```

A feature owns its:

- Components
- Hooks
- API service functions
- Validation schemas
- Types
- Feature-specific utilities

---

# 9. Feature Boundaries

Features must not become tightly coupled.

Preferred:

```text
app
 ↓
feature A
 ↓
shared components/lib
```

Avoid:

```text
feature A
 ↓
feature B internal component
 ↓
feature C internal hook
```

Internal implementation details of a feature should remain private.

If functionality is genuinely shared, move it into an appropriate shared
location.

Do not move code into `components/` simply because it is used twice.

Shared code should have a meaningful architectural reason to be shared.

---

# 10. Dependency Direction

The preferred dependency direction is:

```text
App Routes
    ↓
Features
    ↓
Shared Components / Libraries
    ↓
Platform APIs
```

More explicitly:

```text
app/
  ↓
features/
  ↓
components/
lib/
hooks/
providers/
config/
types/
```

Lower-level modules must not import higher-level application modules.

Avoid circular dependencies.

---

# 11. Server Components

React Server Components are the default.

Prefer Server Components for:

- SEO pages
- Static content
- Blog pages
- Public astrologer pages
- Marketing pages
- Server-renderable data
- Metadata generation
- Content-heavy pages

Do not add `"use client"` unless the component requires browser-side
behavior.

---

# 12. Client Components

Use Client Components when browser-side capabilities are actually required.

Examples:

- User interaction
- React state
- Event handlers
- Browser APIs
- Interactive forms
- WebSockets
- Real-time UI
- Animations requiring browser state
- Three.js
- React Three Fiber

Avoid making entire pages client-rendered merely because one small component
needs interactivity.

Prefer:

```text
Server Page
    ↓
Server Content
    ↓
Small Client Component
```

Instead of:

```text
Entire Page
    ↓
"use client"
```

---

# 13. Data Fetching

Data fetching must have a clear ownership model.

## Server-side data

Use Server Components when data can be fetched on the server and rendered
into the initial HTML.

Useful for:

- SEO content
- Public pages
- Initial page data
- Content pages

## Client-side data

Use TanStack Query when the UI requires:

- Client-side refetching
- Mutations
- Pagination
- Infinite queries
- Polling
- Cache synchronization
- Optimistic updates
- Interactive filtering

Choose the simplest correct mechanism.

---

# 14. TanStack Query

TanStack Query is the standard client-side server-state layer.

It should manage:

- API data
- Cache
- Loading states
- Error states
- Refetching
- Mutations
- Query invalidation
- Pagination
- Infinite scrolling

Example:

```text
Component
       ↓
useAstrologers()
       ↓
TanStack Query
       ↓
Astrologer Service
       ↓
API Client
       ↓
Backend
```

Do not use React Context as a replacement for TanStack Query.

Server state belongs in the server-state layer.

---

# 15. State Management

Use the following hierarchy:

```text
1. Local component state
2. URL/search parameters
3. TanStack Query
4. React Context
5. Zustand only when justified
```

Do not introduce global state automatically.

Examples:

### Local state

```text
Modal open/closed
Dropdown state
Temporary UI state
```

### URL state

```text
Search
Filters
Sort
Pagination
Selected category
```

### TanStack Query

```text
Astrologers
Bookings
User profile
Horoscope data
Blog data
```

### Context

Use for genuinely global application concerns such as:

```text
Theme
Authentication presentation
Global configuration
```

### Zustand

Only introduce when there is a clear requirement for client-side global
state that cannot be cleanly handled using the above mechanisms.

---

# 16. API Architecture

The frontend communicates with backend APIs through a centralized API layer.

Preferred structure:

```text
lib/api/
├── client.ts
├── errors.ts
├── types.ts
└── index.ts
```

Feature-specific API calls belong inside the feature:

```text
features/
└── astrologers/
    └── services/
        └── astrologer.service.ts
```

The service uses the shared API client.

Example:

```text
Astrologer Component
       ↓
useAstrologers()
       ↓
astrologer.service.ts
       ↓
lib/api/client.ts
       ↓
Backend API
```

Components should not contain raw `fetch()` calls.

---

# 17. API Boundary

The browser must treat the backend as the source of truth for business
operations.

The frontend may perform:

- Presentation logic
- Client validation
- Formatting
- UX calculations
- Temporary UI state

The frontend must not become the authority for:

- Price calculation
- Wallet balance
- Payment status
- Booking availability
- Booking state
- User permissions
- Astrologer availability authority
- Refund eligibility
- Financial calculations
- Security decisions

The backend must validate all business-critical operations again.

---

# 18. Authentication

Authentication presentation belongs to the frontend.

The frontend may:

- Display login state
- Use the approved authentication session mechanism
- Redirect unauthenticated users
- Display user-specific UI
- Attach authentication information through the approved API mechanism

The frontend must NOT assume that hiding a UI element is authorization.

Authorization is enforced by the backend.

---

# 19. Authorization

Frontend authorization is for UX.

Backend authorization is for security.

Never rely on client-side role checks as the security boundary.

The API must enforce authorization.

---

# 20. Forms

Forms use:

- React Hook Form
- Zod

Preferred architecture:

```text
Form
 ↓
React Hook Form
 ↓
Zod validation
 ↓
Feature service
 ↓
API
```

Client-side validation improves UX.

It does not replace backend validation.

---

# 21. Loading States

Every asynchronous feature must define its loading behavior.

Examples:

```text
Initial loading
Skeleton
Inline loading
Button loading
Pagination loading
Infinite-scroll loading
```

Avoid generic full-screen spinners when a localized loading state is
possible.

Prefer skeletons for content-heavy pages.

---

# 22. Error States

Every data-driven feature must define:

- Loading state
- Empty state
- Error state
- Success state

Example:

```text
Loading
   ↓
Success ─────→ Empty
   │
   └──────────→ Error
```

Errors must be understandable to users.

Technical details should be logged, not exposed unnecessarily.

---

# 23. Empty States

Empty results are not errors.

Examples:

```text
No astrologers found
No bookings yet
No consultations yet
No search results
No blog posts available
```

Provide useful next actions where appropriate.

---

# 24. Styling Architecture

The customer frontend uses SCSS.

Preferred:

```text
Component
    ↓
Component.module.scss
```

Example:

```text
astrologer-card.tsx
astrologer-card.module.scss
```

Global styles should remain limited.

Use global SCSS for:

- Reset
- Typography
- Tokens
- Global utility behavior
- Base document styles

Do not build the application from one enormous global stylesheet.

---

# 25. Design Tokens

Centralize design decisions.

Examples:

```text
Colors
Typography
Spacing
Border radius
Shadows
Z-index
Breakpoints
Transitions
```

Components should consume design tokens instead of repeatedly defining
arbitrary values.

---

# 26. Responsive Design

The frontend is mobile-first.

The primary breakpoints should be defined centrally rather than scattered
throughout the codebase.

Design for:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Do not assume desktop is the default experience.

Every important page must be tested across supported viewport sizes.

---

# 27. SEO Architecture

SEO is a first-class architectural concern.

Public pages should prioritize:

- Server rendering
- Semantic HTML
- Metadata
- Open Graph
- Twitter/social metadata where appropriate
- Canonical URLs
- Structured data where appropriate
- Sitemap
- Robots configuration
- Clean URLs
- Internal linking
- Crawlable content
- Fast initial rendering

SEO-critical content should not depend entirely on client-side JavaScript.

---

# 28. Dynamic Metadata

Use Next.js metadata capabilities.

Metadata should be generated from page context where appropriate.

Examples:

```text
Astrologer profile
Blog article
Horoscope page
Calculator page
Compatibility page
```

Avoid duplicate metadata across dynamic pages.

---

# 29. Semantic HTML

Prefer semantic HTML:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

over unnecessary nested `div` elements.

Headings must follow a meaningful hierarchy.

Do not use headings purely for styling.

---

# 30. Accessibility

Accessibility is mandatory.

Requirements include:

- Keyboard navigation
- Visible focus states
- Semantic HTML
- Proper labels
- Accessible forms
- Alt text
- ARIA only where necessary
- Sufficient contrast
- Reduced-motion support
- Screen-reader compatibility
- Accessible dialogs
- Accessible navigation

Never rely only on color, icons, animation, or position to communicate
important information.

---

# 31. 3D Architecture

The website may use a 3D solar-system experience in the hero section.

3D is treated as progressive enhancement.

Architecture:

```text
Hero Section
    │
    ├── Semantic Content
    │
    ├── CTA
    │
    └── 3D Background
```

The 3D layer must never become the only way users understand the page.

Important content must remain accessible without 3D.

The experience must degrade gracefully on:

- Low-end devices
- Mobile devices
- Reduced-motion preferences
- Unsupported WebGL
- High CPU/GPU usage

---

# 32. 3D Performance

Do not render unnecessary objects.

Rules:

- Reuse geometries
- Reuse materials
- Minimize draw calls
- Limit particle counts
- Avoid unnecessarily large textures
- Compress assets
- Lazy-load heavy 3D dependencies
- Avoid blocking initial rendering
- Pause or reduce animation when not visible
- Respect reduced-motion preferences
- Avoid excessive post-processing

The 3D scene must not compromise the primary page experience.

---

# 33. Component Architecture

Components should have a clear responsibility.

Good examples:

```text
AstrologerCard
AstrologerFilters
BookingForm
PriceDisplay
RatingSummary
```

Avoid giant components such as:

```text
AstrologerPageEverything.tsx
```

If a component contains multiple independent responsibilities, split it.

---

# 34. Shared Components

Use:

```text
components/ui/
```

for genuinely reusable primitives.

Examples:

```text
Button
Input
Modal
Dialog
Card
Badge
Avatar
Tabs
Skeleton
Tooltip
```

Use:

```text
components/layout/
```

for application-wide layout components.

Examples:

```text
Header
Footer
MobileNavigation
Container
PageShell
```

Business-specific components belong inside their feature.

---

# 35. Utilities

Utilities should remain small and generic.

Examples:

```text
formatCurrency()
formatDate()
debounce()
cn()
```

Do not put business workflows into generic utility files.

Avoid files such as:

```text
utils/everything.ts
helpers.ts
common.ts
```

with hundreds of unrelated functions.

---

# 36. TypeScript

TypeScript strict mode is required.

Avoid `any` unless there is a documented and unavoidable reason.

Prefer `unknown` when the type is genuinely unknown.

API response types should be explicit.

Avoid duplicating the same domain type in multiple locations.

---

# 37. API Types

API contracts should have a predictable representation.

Example:

```ts
interface ApiSuccess<T> {
  success: true;
  data: T;
  message?: string;
}

interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}
```

The frontend should handle both success and failure contracts consistently.

---

# 38. URL State

Use URL parameters for state that should be:

- Shareable
- Bookmarkable
- Refresh-safe
- SEO-relevant

Examples:

```text
/search?q=...
/astrologers?expertise=...
/blog?category=...
/calculators?type=...
```

Avoid storing URL-worthy state exclusively in React state.

---

# 39. Pagination

Choose pagination based on the user experience.

Possible strategies:

```text
Page-based pagination
Cursor pagination
Infinite scrolling
Load more
```

The frontend must follow the backend contract.

For large datasets, cursor pagination should be considered where appropriate.

---

# 40. Optimistic Updates

Optimistic UI is allowed only when rollback behavior is well-defined.

Good candidates:

```text
Like
Follow
Simple preference
```

Use caution with:

```text
Booking
Payment
Wallet
Refund
Financial operation
```

Financial operations should wait for authoritative backend confirmation.

---

# 41. Booking UI

Booking is a business-critical flow.

Frontend responsibilities:

```text
Select astrologer
Select service
Select time
Display pricing
Collect required information
Submit booking request
Display backend result
```

Backend responsibilities:

```text
Availability authority
Pricing authority
Booking state
Concurrency
Payment requirements
Booking confirmation
```

Never trust the frontend for availability or final price.

---

# 42. Payment UI

Payment state must come from the backend/payment provider integration.

The frontend must not assume:

```text
Payment initiated = Payment successful
```

Possible states may include:

```text
Created
Pending
Processing
Succeeded
Failed
Cancelled
Refunded
```

The UI must correctly represent backend state.

Never expose secrets in frontend code.

---

# 43. Wallet UI

Wallet balance displayed to the user must come from an authoritative
backend source.

Do not calculate the authoritative balance entirely in the frontend.

Frontend calculations are display-only.

Financial values must use safe representations.

Do not use JavaScript floating-point arithmetic as the authority for money.

---

# 44. Real-Time Features

Real-time features may use:

```text
WebSocket
SSE
Polling
```

based on requirements.

Examples:

```text
Consultation status
Astrologer availability
Chat
Call state
Notifications
Payment status
```

The frontend must handle:

- Reconnection
- Duplicate events
- Stale events
- Connection loss
- Out-of-order events
- Authentication expiry

The backend remains authoritative.

---

# 45. Caching

Caching must have an explicit strategy.

For client-side caching, TanStack Query is preferred.

Every cache should consider:

```text
Cache key
TTL/staleness
Invalidation
Mutation effects
Freshness requirements
Memory usage
```

Do not cache sensitive information carelessly.

---

# 46. Performance Architecture

Performance priorities:

```text
HTML delivery
        ↓
Critical CSS
        ↓
Critical content
        ↓
Progressive enhancement
        ↓
Interactive features
        ↓
Heavy JavaScript / 3D
```

Avoid shipping large JavaScript bundles for content that can be rendered
server-side.

Prefer:

- Dynamic imports
- Lazy loading
- Image optimization
- Font optimization
- Code splitting
- Server Components
- Streaming where useful
- Efficient caching

---

# 47. Images

Images must be optimized.

Prefer Next.js image optimization where appropriate.

Requirements:

- Correct dimensions
- Responsive sizes
- Lazy loading where appropriate
- Priority only for genuinely critical images
- Modern formats where supported
- Meaningful alt text

Do not mark every image as priority.

---

# 48. Fonts

Fonts should be loaded intentionally.

Avoid loading unnecessary font families and weights.

Typography should be part of the design-token system.

---

# 49. Error Boundaries

The application should have appropriate error boundaries.

Use Next.js error handling for:

```text
Route-level failures
Feature-level failures
Unexpected rendering errors
```

Errors should provide:

- User-friendly message
- Recovery action
- Logging/observability information

Do not expose stack traces to users.

---

# 50. Not Found Handling

Use Next.js `not-found.tsx` where appropriate.

A missing resource should produce a meaningful 404 experience.

Do not return generic application errors for normal resource absence.

---

# 51. Environment Configuration

Environment variables must be accessed through a centralized configuration
layer.

Separate:

```text
Development
Staging
Production
```

Never commit secrets.

Public browser variables must be explicitly treated as public.

Private backend secrets must never be exposed to the browser.

---

# 52. Analytics

Analytics should be isolated behind an abstraction.

Components should not directly depend on a specific analytics vendor whenever
possible.

Preferred:

```text
Component
   ↓
Analytics abstraction
   ↓
Analytics provider
```

Analytics must not block critical rendering.

---

# 53. Logging

Do not use uncontrolled `console.log()` statements in production code.

Logs should be:

- Intentional
- Structured where possible
- Free of secrets
- Free of unnecessary personal information

Do not log passwords, tokens, payment secrets, or sensitive authentication
data.

---

# 54. Security

Frontend security requirements include:

- No secrets in client bundles
- Safe handling of authentication state
- XSS prevention
- Safe HTML rendering
- Secure redirects
- Input validation
- Dependency updates
- CSP where appropriate
- Safe third-party integrations

Never trust client-side validation as a security boundary.

---

# 55. Dangerous HTML

Avoid:

```tsx
dangerouslySetInnerHTML
```

unless there is a controlled and justified use case.

If HTML must be rendered:

```text
Validate
Sanitize
Restrict source
```

Never render arbitrary user-provided HTML directly.

---

# 56. External Links

External URLs must be treated carefully.

Do not construct unsafe redirects from arbitrary user input.

Validate redirect destinations where redirect functionality exists.

---

# 57. SEO vs Client Interactivity

When SEO and interactivity conflict:

Prefer a server-rendered SEO foundation and isolate interactive behavior.

Example:

```text
SEO Content
    ↓
Server Component

Interactive Calculator
    ↓
Client Component
```

Do not turn the entire route into a Client Component unnecessarily.

---

# 58. Testing Architecture

Testing should exist at multiple levels.

## Unit Tests

Test:

- Utilities
- Formatters
- Validation
- Pure frontend logic

## Component Tests

Test:

- User interactions
- Form behavior
- Loading states
- Error states
- Accessibility behavior

## Integration Tests

Test:

- Feature + API interactions
- Authentication flows
- Important user journeys

## End-to-End Tests

Prioritize critical journeys:

```text
Registration
Login
Astrologer discovery
Astrologer profile
Booking
Payment initiation
Consultation flow
Profile management
Calculator usage
Blog navigation
```

---

# 59. Accessibility Testing

Accessibility should be tested during development, not only before release.

Check:

```text
Keyboard navigation
Focus management
Labels
ARIA
Color contrast
Screen readers
Responsive behavior
Reduced motion
```

---

# 60. Production Observability

The frontend should provide enough observability to diagnose production
problems.

Important signals include:

```text
JavaScript errors
API failures
Slow page loads
Failed mutations
Authentication failures
Client-side exceptions
Core user journey failures
```

When possible, correlate frontend errors with backend request IDs or
correlation IDs.

---

# 61. Correlation IDs

Requests should support correlation/request IDs where the backend provides
them.

Preferred flow:

```text
Browser
  ↓
Request ID
  ↓
API
  ↓
Backend Service
  ↓
Queue
  ↓
Worker
  ↓
External Provider
```

This allows a production issue to be traced across system boundaries.

---

# 62. Deployment

The frontend is independently deployable.

Deployment must support:

```text
Build
Test
Typecheck
Lint
Security checks
Environment configuration
Deployment
Smoke test
Rollback
```

A frontend deployment must not require simultaneous deployment of every
backend service unless an API contract change explicitly requires coordinated
compatibility.

---

# 63. API Compatibility

Frontend and backend must support safe evolution.

When backend APIs change, the currently deployed frontend should remain
functional during the deployment transition where required.

Avoid breaking changes without a migration strategy.

Prefer:

```text
Add
Migrate
Remove
```

over:

```text
Break everything
```

---

# 64. Graceful Degradation

The application should remain usable when non-critical functionality fails.

Examples:

```text
Analytics unavailable
    ↓
Application continues

3D unavailable
    ↓
Hero content remains usable

Recommendation API fails
    ↓
Primary content remains usable

Notification service unavailable
    ↓
Core booking UI remains functional
```

Critical dependencies must be identified explicitly.

---

# 65. Mobile Considerations

The platform is expected to have significant mobile usage.

Mobile must be treated as a first-class experience.

Consider:

- Touch targets
- Slow networks
- Low-memory devices
- Battery usage
- Reduced CPU/GPU
- Smaller screens
- Virtual keyboards
- Mobile navigation
- Mobile payment flows

Do not simply shrink desktop layouts.

---

# 66. Accessibility and Motion

Respect:

```text
prefers-reduced-motion
```

Animations must not be required to understand content.

For the 3D solar-system hero:

```text
Normal:
Animated 3D experience

Reduced motion:
Reduced/static experience

Unsupported WebGL:
Static visual fallback
```

---

# 67. Internationalization

The architecture should remain capable of supporting localization.

Do not hard-code user-facing strings into deeply nested components if
internationalization is expected.

Dates, times, numbers, and currencies should be formatted through a
consistent abstraction.

---

# 68. Time and Date Handling

Never make assumptions about timezone.

User-facing times should be rendered according to the appropriate timezone.

Backend timestamps should have an explicit representation.

Avoid manually manipulating date strings throughout components.

Centralize date formatting.

---

# 69. Feature Creation Checklist

When creating a new feature:

```text
1. Define the user-facing capability
2. Define the route
3. Define API contract
4. Define feature types
5. Define validation schemas
6. Define API service
7. Define hooks if client state is required
8. Build feature components
9. Define loading state
10. Define empty state
11. Define error state
12. Add SEO if public
13. Add accessibility
14. Add responsive behavior
15. Add tests
16. Verify performance
```

---

# 70. New Page Checklist

Before creating a new page:

```text
Is it public?
Is it SEO-critical?
Does it need Server Components?
Does it need Client Components?
Does it require TanStack Query?
Does state belong in the URL?
Does it need authentication?
Does it need authorization?
Does it need a new feature?
Can existing components be reused?
What happens on loading?
What happens when empty?
What happens on error?
What happens on mobile?
What happens without JavaScript?
```

---

# 71. Anti-Patterns

Do not introduce:

```text
Huge client components
Huge global stores
Random API calls inside UI components
Duplicated API clients
Duplicated domain types
Deep feature-to-feature dependencies
Business logic in presentation components
Secrets in client code
Global CSS for everything
Unnecessary Context providers
Unnecessary Zustand stores
Unnecessary dependencies
Unnecessary 3D
Unnecessary animations
```

Avoid `"use client"` at the top of an entire route unless the route
genuinely requires it.

---

# 72. Architecture Decision Rule

Before adding a new library, abstraction, provider, state manager, or
architecture pattern, answer:

```text
What problem does this solve?

Why does the current architecture not solve it?

What is the operational cost?

What is the maintenance cost?

Does it improve correctness?

Does it improve scalability?

Does it improve developer experience?

Can the problem be solved more simply?
```

If the answer is unclear, do not add it.

---

# 73. Definition of Done

A frontend feature is not complete merely because it renders.

It is complete when:

```text
[ ] Architecture follows feature boundaries
[ ] TypeScript passes
[ ] Lint passes
[ ] Tests pass
[ ] API contracts are respected
[ ] Loading state exists
[ ] Empty state exists
[ ] Error state exists
[ ] Responsive behavior works
[ ] Accessibility is considered
[ ] SEO is implemented where applicable
[ ] Performance is acceptable
[ ] Security concerns are addressed
[ ] No secrets are exposed
[ ] Observability exists where appropriate
[ ] Production configuration is correct
```

---

# 74. Engineering Standard

The frontend should be designed as a long-lived production system rather
than a collection of pages.

Every implementation should optimize for:

```text
Correctness
Maintainability
Scalability
Performance
Accessibility
SEO
Security
Observability
Developer Experience
Operational Simplicity
```

The frontend must remain:

```text
Feature-oriented
API-driven
SEO-first
Accessible
Responsive
Performant
Strongly typed
Progressively enhanced
Independently deployable
```

The frontend is responsible for delivering an excellent user experience.

The backend remains responsible for authoritative business behavior.

That separation must remain intact as the platform grows.

---

# 75. Architecture Summary

The frontend architecture can be summarized as:

```text
apps/frontend
│
├── app/                         # Routes, layouts, rendering
│
├── features/                   # Business capabilities
│   ├── auth/
│   ├── astrologers/
│   ├── horoscope/
│   ├── kundli/
│   ├── compatibility/
│   ├── calculators/
│   ├── bookings/
│   ├── consultations/
│   ├── payments/
│   ├── wallet/
│   ├── profile/
│   └── blog/
│
├── components/                 # Truly shared UI
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── feedback/
│   └── forms/
│
├── lib/                        # Infrastructure/client libraries
│   ├── api/
│   ├── auth/
│   ├── query/
│   ├── analytics/
│   └── seo/
│
├── hooks/                      # Generic reusable hooks
├── providers/                  # App-level providers
├── config/                     # Configuration
├── types/                      # Shared frontend types
└── styles/                     # SCSS + design system
```

The key architectural rule is:

**`app` handles routing, `features` handle product capabilities,
`components` handle genuinely shared UI, `lib` handles infrastructure,
and the backend remains the authority for business logic.**
