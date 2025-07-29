export const typography = {
  desktop: {
    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
      '8xl': '96px',
      '9xl': '128px'
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeight: {
      leading3: '12px',
      leading4: '16px',
      leading5: '20px',
      leading6: '24px',
      leading7: '28px',
      leading8: '32px',
      leading9: '36px',
      leading10: '40px',
      leading11: '48px',
      leading12: '60px',
      leading13: '72px',
      leading14: '96px',
      leading15: '128px'
    },
    letterSpacing: {
      tighter: '-0.8px',
      tight: '-0.4px',
      normal: '0px',
      wide: '0.4px',
      wider: '0.8px',
      widest: '1.6px'
    }
  },
  
  mobile: {
    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '16px',      // Different from desktop (18px)
      xl: '18px',      // Different from desktop (20px)
      '2xl': '20px',   // Different from desktop (24px)
      '3xl': '24px',   // Different from desktop (30px)
      '4xl': '30px',   // Different from desktop (36px)
      '5xl': '36px',   // Different from desktop (48px)
      '6xl': '48px',   // Different from desktop (60px)
      '7xl': '60px',   // Different from desktop (72px)
      '8xl': '72px',   // Different from desktop (96px)
      '9xl': '96px'    // Different from desktop (128px)
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeight: {
      leading3: '12px',
      leading4: '16px',
      leading5: '20px',
      leading6: '24px',
      leading7: '24px',   // Different from desktop (28px)
      leading8: '28px',   // Different from desktop (32px)
      leading9: '32px',   // Different from desktop (36px)
      leading10: '36px',  // Different from desktop (40px)
      leading11: '40px',  // Different from desktop (48px)
      leading12: '48px',  // Different from desktop (60px)
      leading13: '60px',  // Different from desktop (72px)
      leading14: '72px',  // Different from desktop (96px)
      leading15: '96px'   // Different from desktop (128px)
    },
    letterSpacing: {
      tighter: '-0.8px',
      tight: '-0.4px',
      normal: '0px',
      wide: '0.4px',
      wider: '0.8px',
      widest: '1.6px'
    }
  },
  
  fontA: {
    headline: 'Inter',
    body: 'Inter',
    quote: 'Fraunces',
    code: 'JetBrains Mono'
  },
  
  fontB: {
    headline: 'Awesome Serif VAR',
    body: 'Awesome Serif VAR',
    quote: 'Fraunces',
    code: 'JetBrains Mono'
  },

  // Tailwind-compatible font families
  fontFamily: {
    'inter': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    'fraunces': ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
    'jetbrains': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    'awesome-serif': ['Awesome Serif VAR', 'ui-serif', 'Georgia', 'serif'],
    // Semantic font assignments
    'headline': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    'body': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    'quote': ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
    'code': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
  },

  // Export individual font sizes and weights for Tailwind
  fontSize: {
    xs: ['12px', { lineHeight: '16px' }],
    sm: ['14px', { lineHeight: '20px' }],
    base: ['16px', { lineHeight: '24px' }],
    lg: ['18px', { lineHeight: '28px' }],
    xl: ['20px', { lineHeight: '32px' }],
    '2xl': ['24px', { lineHeight: '36px' }],
    '3xl': ['30px', { lineHeight: '40px' }],
    '4xl': ['36px', { lineHeight: '48px' }],
    '5xl': ['48px', { lineHeight: '60px' }],
    '6xl': ['60px', { lineHeight: '72px' }],
    '7xl': ['72px', { lineHeight: '96px' }],
    '8xl': ['96px', { lineHeight: '128px' }],
    '9xl': ['128px', { lineHeight: '128px' }]
  },

  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },

  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },

  lineHeight: {
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  }
};

export default typography;
