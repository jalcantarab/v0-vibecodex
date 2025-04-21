// Design tokens and utilities for our 2025 design system

// Color scale definitions (extend the default shadcn palette)
export const colors = {
  accent: {
    primary: "hsl(var(--accent-primary))",
    secondary: "hsl(var(--accent-secondary))",
    tertiary: "hsl(var(--accent-tertiary))",
  },
  surface: {
    glass: "hsl(var(--surface-glass))",
    frosted: "hsl(var(--surface-frosted))",
    elevated: "hsl(var(--surface-elevated))",
  },
  glow: {
    purple: "0 0 20px rgba(139, 92, 246, 0.5)",
    blue: "0 0 20px rgba(59, 130, 246, 0.5)",
    cyan: "0 0 20px rgba(34, 211, 238, 0.5)",
  },
}

// Animation presets
export const animations = {
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  slideDown: "animate-slide-down",
  slideLeft: "animate-slide-left",
  slideRight: "animate-slide-right",
  pulse: "animate-pulse",
  bounce: "animate-bounce",
  spin: "animate-spin",
  ping: "animate-ping",
  float: "animate-float",
  shimmer: "animate-shimmer",
}

// Spacing scale (for consistent spacing)
export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "4rem",
  "3xl": "6rem",
  "4xl": "8rem",
}

// Typography scale
export const typography = {
  display: "font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  heading1: "font-heading text-3xl md:text-4xl font-bold tracking-tight",
  heading2: "font-heading text-2xl md:text-3xl font-bold",
  heading3: "font-heading text-xl md:text-2xl font-semibold",
  body: "font-body text-base",
  small: "font-body text-sm",
  tiny: "font-body text-xs",
  mono: "font-mono text-sm",
}

// Border radius presets
export const radius = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
}

// Shadow presets
export const shadows = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  inner: "shadow-inner",
  none: "shadow-none",
  glow: "shadow-[0_0_15px_rgba(139,92,246,0.3)]",
}

// Common layout patterns
export const layouts = {
  container: "container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-12 md:py-24",
  grid: {
    auto: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
    cols2: "grid grid-cols-1 md:grid-cols-2 gap-6",
    cols3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
    cols4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
  },
  flex: {
    center: "flex items-center justify-center",
    between: "flex items-center justify-between",
    start: "flex items-start justify-start",
    column: "flex flex-col",
  },
}

// Glass effect presets
export const glass = {
  light: "bg-white/70 backdrop-blur-md border border-white/20",
  dark: "bg-black/20 backdrop-blur-md border border-white/10",
  frosted: "bg-white/10 backdrop-blur-lg border border-white/5",
}

// Gradient presets
export const gradients = {
  primary: "bg-gradient-to-r from-violet-600 to-indigo-600",
  secondary: "bg-gradient-to-r from-cyan-500 to-blue-500",
  accent: "bg-gradient-to-r from-fuchsia-500 to-purple-600",
  subtle: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
  glass: "bg-gradient-to-br from-white/50 to-white/30 dark:from-white/10 dark:to-white/5",
  text: {
    primary: "bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text",
    secondary: "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text",
    accent: "bg-gradient-to-r from-fuchsia-500 to-purple-600 text-transparent bg-clip-text",
  },
}

// Interactive states
export const interactive = {
  hover: {
    lift: "transition-transform hover:translate-y-[-2px]",
    glow: "transition-shadow hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]",
    scale: "transition-transform hover:scale-105",
    opacity: "transition-opacity hover:opacity-80",
  },
  active: {
    press: "active:translate-y-[1px]",
    flash: "active:bg-white/10",
  },
  focus: {
    outline: "focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2",
    glow: "focus:shadow-[0_0_0_2px_rgba(139,92,246,0.5)]",
  },
}
