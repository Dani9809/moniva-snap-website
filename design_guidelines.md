# Moniva Snap - Design Guidelines

## Design Approach
**Reference-Based**: Inspired by modern web development agencies like Vercel and Linear, known for clean layouts, strategic dark/light contrasts, and professional showcases.

## Typography System
- **Headings**: 'Lora' serif (elegant, professional)
- **Body Text**: 'Space Grotesk' sans-serif (modern, readable)
- **UI Elements**: 'Geist' sans-serif (clean, functional)

**Hierarchy**:
- Hero Headlines: text-5xl to text-7xl font-bold
- Section Headers: text-3xl to text-4xl font-semibold
- Subheadings: text-xl to text-2xl font-medium
- Body: text-base to text-lg
- Captions/Small: text-sm

## Color Palette
- **Primary Gold**: hsl(38.23, 87.6%, 74.71%) - CTAs, accents, highlights
- **Dark Brown**: hsl(39.27, 43.31%, 24.9%) - text, borders
- **Cream Background**: hsl(45, 100%, 96.86%) - light sections
- **Light Cream Cards**: hsl(47.14, 87.5%, 96.86%) - card backgrounds
- **Charcoal**: hsl(228, 9.8%, 10%) - dark sections, footer
- **Gradients**: Warm gold to primary transitions for CTA sections

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-6
- Component spacing: gap-8 to gap-12
- Card padding: p-6 to p-8

**Border Radius**: 0.875rem (rounded-xl equivalent) for all cards and components

## Component Library

### Header (Global)
Minimalist navigation bar with Moniva Snap logo left-aligned, nav links center/right, sticky positioning, backdrop blur on scroll

### Hero Section (Homepage)
Full-width split layout: Left side with headline, subheading, dual CTA buttons (primary gold, secondary outline). Right side with code editor screenshot/image. Background: cream with subtle gradient overlay

### Toolset/Technology Grid
3-4 column responsive grid (grid-cols-1 md:grid-cols-3 lg:grid-cols-4), each tool card with icon (use Font Awesome), technology name, hover lift effect

### Services Accordion
Expandable service items with clean headers, smooth expand/collapse animations, detailed descriptions inside, alternating light/dark backgrounds per section

### Featured Projects Showcase
Dark charcoal section, 2-column grid cards with project images, project name, tech stack tags, brief description, "View Project" link

### Feature Benefits
3-column grid on light cream background, icon + title + description format, generous spacing between items

### Testimonials
Light section with 2-3 column testimonial cards, client quote, name, role, optional photo, subtle card elevation

### About Page - Team Introduction
Full-width text section on gradient background, team story and mission statement, centered max-w-4xl

### Team Member Grid
3-4 column grid, professional team photos (circular or rounded), name, role, brief bio beneath each photo

### "Let's Talk!" CTA Section
Full-width gradient background (gold gradient), centered headline and CTA button, py-20 spacing

### Footer (Global)
Dark charcoal multi-column footer: Column 1 - Services list, Column 2 - Contact info (address, email, phone), Column 3 - Newsletter signup form with input and button, social media icons row, copyright text

## Images
**Hero Image**: Large code editor screenshot or modern development workspace - positioned right side of hero split layout (50% width on desktop)

**Project Showcase**: 3-4 project screenshots showing web development work, modern UI designs, positioned as card backgrounds or featured images

**Team Photos**: 6-8 professional headshots of team members, circular or rounded-xl format, consistent styling

**CTA Sections**: Subtle gradient backgrounds only, no images needed

## Multi-Column Strategy
- Hero: 2-column split (text left, image right)
- Toolset: 4 columns desktop, 2 tablet, 1 mobile
- Services: Single column accordion
- Projects: 2 columns desktop, 1 mobile
- Features: 3 columns desktop, 2 tablet, 1 mobile
- Testimonials: 3 columns desktop, 2 tablet, 1 mobile
- Team Grid: 4 columns desktop, 2 tablet, 1 mobile
- Footer: 3 columns desktop, stacked mobile

## Interactions
- Smooth scroll between sections
- Card hover: subtle lift (transform translateY(-4px)) and shadow increase
- Button hover: slight scale and brightness adjustment
- Accordion expand/collapse: smooth height transitions
- Navigation: active page indicator
- Minimal animations: fade-in on scroll for sections

## Responsive Breakpoints
- Mobile: Base styles
- Tablet: md: (768px+)
- Desktop: lg: (1024px+)
- Large Desktop: xl: (1280px+)

## Section Theming Pattern
Alternate between light cream, dark charcoal, and gradient sections for visual rhythm:
1. Hero (Light + gradient)
2. Toolset (Light cream)
3. Services (Dark charcoal)
4. Projects (Dark charcoal)
5. Features (Light cream)
6. Testimonials (Light cream)
7. CTA (Gradient)
8. Footer (Dark charcoal)