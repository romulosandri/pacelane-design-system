import { colors } from './primitive-colors.js';

// Helper function to map CSS variable names to primitive color values
const mapColor = (cssVar) => {
  // Remove var() wrapper and -- prefix
  const colorPath = cssVar.replace('var(--', '').replace(')', '');
  
  // Handle different naming patterns
  const colorMappings = {
    // Gray mappings (handle both gray-00 and gray-0 formats)
    'gray-00': colors.gray[0],
    'gray-50': colors.gray[50],
    'gray-100': colors.gray[100],
    'gray-200': colors.gray[200],
    'gray-300': colors.gray[300],
    'gray-400': colors.gray[400],
    'gray-500': colors.gray[500],
    'gray-600': colors.gray[600],
    'gray-700': colors.gray[700],
    'gray-800': colors.gray[800],
    'gray-900': colors.gray[900],
    'gray-950': colors.gray[950],
    'gray-1000': colors.gray[1000],
    
    // Color mappings
    'red-100': colors.red[100],
    'red-200': colors.red[200],
    'red-300': colors.red[300],
    'red-400': colors.red[400],
    'red-500': colors.red[500],
    'red-600': colors.red[600],
    'red-700': colors.red[700],
    'red-900': colors.red[900],
    
    'orange-100': colors.orange[100],
    'orange-400': colors.orange[400],
    'orange-500': colors.orange[500],
    'orange-600': colors.orange[600],
    'orange-700': colors.orange[700],
    'orange-900': colors.orange[900],
    
    'green-100': colors.green[100],
    'green-200': colors.green[200],
    'green-300': colors.green[300],
    'green-400': colors.green[400],
    'green-500': colors.green[500],
    'green-600': colors.green[600],
    'green-700': colors.green[700],
    'green-900': colors.green[900],
    
    'emerald-100': colors.emerald[100],
    'emerald-500': colors.emerald[500],
    'emerald-700': colors.emerald[700],
    'emerald-900': colors.emerald[900],
    
    'teal-100': colors.teal[100],
    'teal-400': colors.teal[400],
    'teal-500': colors.teal[500],
    'teal-700': colors.teal[700],
    'teal-900': colors.teal[900],
    
    'cyan-100': colors.cyan[100],
    'cyan-500': colors.cyan[500],
    'cyan-700': colors.cyan[700],
    'cyan-900': colors.cyan[900],
    
    'blue-100': colors.blue[100],
    'blue-300': colors.blue[300],
    'blue-400': colors.blue[400],
    'blue-500': colors.blue[500],
    'blue-600': colors.blue[600],
    'blue-700': colors.blue[700],
    'blue-900': colors.blue[900],
    
    'indigo-100': colors.indigo[100],
    'indigo-500': colors.indigo[500],
    'indigo-700': colors.indigo[700],
    'indigo-900': colors.indigo[900],
    
    'violet-100': colors.violet[100],
    'violet-500': colors.violet[500],
    'violet-700': colors.violet[700],
    'violet-900': colors.violet[900],
    
    'rose-100': colors.rose[100],
    'rose-500': colors.rose[500],
    'rose-700': colors.rose[700],
    'rose-900': colors.rose[900],
    
    // Transparent color mappings
    'transparent-dark-00': colors.transparentDark[0],
    'transparent-dark-2': colors.transparentDark[2],
    'transparent-dark-4': colors.transparentDark[4],
    'transparent-dark-6': colors.transparentDark[6],
    'transparent-dark-8': colors.transparentDark[8],
    'transparent-dark-10': colors.transparentDark[10],
    'transparent-dark-15': colors.transparentDark[15],
    'transparent-dark-20': colors.transparentDark[20],
    'transparent-dark-25': colors.transparentDark[25],
    'transparent-dark-30': colors.transparentDark[30],
    'transparent-dark-35': colors.transparentDark[35],
    'transparent-dark-40': colors.transparentDark[40],
    'transparent-dark-65': colors.transparentDark[65],
    
    'transparent-light-00': colors.transparentLight[0],
    'transparent-light-4': colors.transparentLight[4],
    'transparent-light-6': colors.transparentLight[6],
    'transparent-light-8': colors.transparentLight[8],
    'transparent-light-10': colors.transparentLight[10],
    'transparent-light-15': colors.transparentLight[15],
    'transparent-light-20': colors.transparentLight[20],
    'transparent-light-25': colors.transparentLight[25],
    'transparent-light-30': colors.transparentLight[30],
    'transparent-light-40': colors.transparentLight[40],
    'transparent-light-45': colors.transparentLight[45],
    'transparent-light-50': colors.transparentLight[50],
    'transparent-light-65': colors.transparentLight[65],
    'transparent-light-70': colors.transparentLight[70],
    
    // Transparent colored variants
    'transparent-red-10': colors.transparentRed[10],
    'transparent-red-20': colors.transparentRed[20],
    'transparent-red-40': colors.transparentRed[40],
    
    'transparent-orange-10': colors.transparentOrange[10],
    'transparent-orange-20': colors.transparentOrange[20],
    
    'transparent-green-10': colors.transparentGreen[10],
    'transparent-green-20': colors.transparentGreen[20],
    
    'transparent-emerald-10': colors.transparentEmerald[10],
    'transparent-emerald-20': colors.transparentEmerald[20],
    
    'transparent-teal-10': colors.transparentTeal[10],
    'transparent-teal-20': colors.transparentTeal[20],
    'transparent-teal-30': colors.transparentTeal[30],
    'transparent-teal-50': colors.transparentTeal[50],
    
    'transparent-cyan-10': colors.transparentCyan[10],
    'transparent-cyan-20': colors.transparentCyan[20],
    
    'transparent-blue-10': colors.transparentBlue[10],
    'transparent-blue-20': colors.transparentBlue[20],
    'transparent-blue-40': colors.transparentBlue[40],
    
    'transparent-indigo-10': colors.transparentIndigo[10],
    'transparent-indigo-20': colors.transparentIndigo[20],
    
    'transparent-violet-10': colors.transparentViolet[10],
    'transparent-violet-20': colors.transparentViolet[20],
    
    'transparent-rose-10': colors.transparentRose[10],
    'transparent-rose-20': colors.transparentRose[20],
  };
  
  return colorMappings[colorPath] || cssVar;
};

export const themes = {
  light: {
    text: {
      accent: mapColor('var(--teal-900)'),
      default: mapColor('var(--gray-950)'),
      subtle: mapColor('var(--gray-600)'),
      muted: mapColor('var(--gray-500)'),
      hint: mapColor('var(--transparent-dark-30)'),
      destructive: mapColor('var(--red-600)'),
      success: mapColor('var(--green-600)'),
      warning: mapColor('var(--orange-600)'),
      informative: mapColor('var(--blue-600)'),
      inverted: {
        default: mapColor('var(--gray-00)'),
        subtle: mapColor('var(--transparent-light-70)'),
        muted: mapColor('var(--transparent-light-50)'),
        hint: mapColor('var(--transparent-light-30)')
      },
      white: {
        default: mapColor('var(--gray-00)'),
        subtle: mapColor('var(--transparent-light-70)'),
        muted: mapColor('var(--transparent-light-50)'),
        hint: mapColor('var(--transparent-light-30)')
      },
      dark: {
        default: mapColor('var(--gray-950)'),
        subtle: mapColor('var(--gray-600)'),
        muted: mapColor('var(--gray-500)'),
        hint: mapColor('var(--transparent-dark-35)')
      }
    },
    
    bg: {
      default: mapColor('var(--gray-00)'),
      subtle: mapColor('var(--gray-50)'),
      muted: mapColor('var(--gray-100)'),
      inverted: mapColor('var(--gray-900)'),
      overlay: mapColor('var(--transparent-dark-6)'),
      card: {
        default: mapColor('var(--gray-00)'),
        subtle: mapColor('var(--gray-50)'),
        inverted: mapColor('var(--gray-800)')
      },
      sidebar: {
        default: mapColor('var(--gray-00)'),
        subtle: mapColor('var(--gray-50)')
      },
      input: {
        default: mapColor('var(--gray-00)'),
        soft: mapColor('var(--transparent-dark-6)'),
        disabled: mapColor('var(--transparent-dark-6)')
      },
      state: {
        primary: mapColor('var(--blue-500)'),
        primaryHover: mapColor('var(--blue-400)'),
        primaryPress: mapColor('var(--blue-500)'),
        primaryLoading: mapColor('var(--blue-300)'),
        
        secondary: mapColor('var(--gray-00)'),
        secondaryHover: mapColor('var(--gray-50)'),
        secondaryPress: mapColor('var(--gray-100)'),
        secondaryLoading: mapColor('var(--gray-00)'),
        
        soft: mapColor('var(--transparent-dark-6)'),
        softHover: mapColor('var(--transparent-dark-8)'),
        softPress: mapColor('var(--transparent-dark-10)'),
        softLoading: mapColor('var(--transparent-dark-6)'),
        
        ghost: mapColor('var(--transparent-dark-00)'),
        ghostHover: mapColor('var(--transparent-dark-6)'),
        ghostPress: mapColor('var(--transparent-dark-8)'),
        ghostLoading: mapColor('var(--transparent-dark-6)'),
        
        ghostInverted: mapColor('var(--transparent-light-00)'),
        ghostHoverInverted: mapColor('var(--transparent-light-8)'),
        ghostPressInverted: mapColor('var(--transparent-light-15)'),
        ghostLoadingInverted: mapColor('var(--transparent-light-8)'),
        
        menuItem: mapColor('var(--transparent-dark-00)'),
        menuItemHover: mapColor('var(--transparent-dark-6)'),
        menuItemActive: mapColor('var(--transparent-teal-10)'),
        
        destructive: mapColor('var(--red-500)'),
        destructiveHover: mapColor('var(--red-400)'),
        destructivePress: mapColor('var(--red-500)'),
        destructiveLoading: mapColor('var(--red-300)'),
        
        brand: mapColor('var(--blue-500)'),
        brandHover: mapColor('var(--blue-400)'),
        brandPress: mapColor('var(--blue-500)'),
        brandLoading: mapColor('var(--blue-300)'),
        
        gray: mapColor('var(--gray-950)'),
        disabled: mapColor('var(--transparent-dark-8)')
      },
      checkbox: {
        default: mapColor('var(--gray-00)'),
        active: mapColor('var(--blue-500)'),
        activeHover: mapColor('var(--blue-400)'),
        disabled: mapColor('var(--transparent-dark-6)')
      },
      switch: {
        default: mapColor('var(--gray-200)'),
        defaultHover: mapColor('var(--gray-300)'),
        disabled: mapColor('var(--gray-100)'),
        default2: mapColor('var(--gray-950)'),
        active: mapColor('var(--green-500)'),
        activeHover: mapColor('var(--green-600)'),
        activeDisabled: mapColor('var(--green-200)'),
        handle: mapColor('var(--gray-00)'),
        handleDisabled: mapColor('var(--gray-50)')
      },
      badge: {
        default: mapColor('var(--gray-00)'),
        inverted: mapColor('var(--gray-950)'),
        gray: mapColor('var(--transparent-dark-6)'),
        white: mapColor('var(--transparent-light-10)'),
        red: mapColor('var(--transparent-red-10)'),
        orange: mapColor('var(--transparent-orange-10)'),
        green: mapColor('var(--transparent-green-10)'),
        emerald: mapColor('var(--transparent-emerald-10)'),
        teal: mapColor('var(--transparent-teal-10)'),
        cyan: mapColor('var(--transparent-cyan-10)'),
        blue: mapColor('var(--transparent-blue-10)'),
        indigo: mapColor('var(--transparent-indigo-10)'),
        violet: mapColor('var(--transparent-violet-10)'),
        rose: mapColor('var(--transparent-rose-10)')
      },
      basic: {
        gray: {
          subtle: mapColor('var(--gray-100)'),
          accent: mapColor('var(--gray-500)'),
          strong: mapColor('var(--gray-700)'),
          contrast: mapColor('var(--gray-900)'),
          alpha2: mapColor('var(--transparent-dark-2)'),
          alpha4: mapColor('var(--transparent-dark-4)'),
          alpha10: mapColor('var(--transparent-dark-10)'),
          alpha15: mapColor('var(--transparent-dark-15)')
        },
        red: {
          subtle: mapColor('var(--red-100)'),
          accent: mapColor('var(--red-500)'),
          strong: mapColor('var(--red-700)'),
          contrast: mapColor('var(--red-900)')
        },
        orange: {
          subtle: mapColor('var(--orange-100)'),
          accent: mapColor('var(--orange-500)'),
          strong: mapColor('var(--orange-700)'),
          contrast: mapColor('var(--orange-900)')
        },
        green: {
          subtle: mapColor('var(--green-100)'),
          accent: mapColor('var(--green-500)'),
          strong: mapColor('var(--green-700)'),
          contrast: mapColor('var(--green-900)')
        },
        emerald: {
          subtle: mapColor('var(--emerald-100)'),
          accent: mapColor('var(--emerald-500)'),
          strong: mapColor('var(--emerald-700)'),
          contrast: mapColor('var(--emerald-900)')
        },
        teal: {
          subtle: mapColor('var(--teal-100)'),
          accent: mapColor('var(--teal-500)'),
          strong: mapColor('var(--teal-700)'),
          contrast: mapColor('var(--teal-900)')
        },
        cyan: {
          subtle: mapColor('var(--cyan-100)'),
          accent: mapColor('var(--cyan-500)'),
          strong: mapColor('var(--cyan-700)'),
          contrast: mapColor('var(--cyan-900)')
        },
        blue: {
          subtle: mapColor('var(--blue-100)'),
          accent: mapColor('var(--blue-500)'),
          strong: mapColor('var(--blue-700)'),
          contrast: mapColor('var(--blue-900)')
        },
        indigo: {
          subtle: mapColor('var(--indigo-100)'),
          accent: mapColor('var(--indigo-500)'),
          strong: mapColor('var(--indigo-700)'),
          contrast: mapColor('var(--indigo-900)')
        },
        violet: {
          subtle: mapColor('var(--violet-100)'),
          accent: mapColor('var(--violet-500)'),
          strong: mapColor('var(--violet-700)'),
          contrast: mapColor('var(--violet-900)')
        },
        rose: {
          subtle: mapColor('var(--rose-100)'),
          accent: mapColor('var(--rose-500)'),
          strong: mapColor('var(--rose-700)'),
          contrast: mapColor('var(--rose-900)')
        }
      }
    },
    
    border: {
      default: mapColor('var(--transparent-dark-10)'),
      darker: mapColor('var(--transparent-dark-15)'),
      strong: mapColor('var(--transparent-dark-25)'),
      inverted: mapColor('var(--transparent-light-20)'),
      accent: mapColor('var(--gray-950)'),
      accentInverted: mapColor('var(--gray-00)'),
      destructive: mapColor('var(--red-500)'),
      informative: mapColor('var(--blue-500)'),
      success: mapColor('var(--green-500)'),
      warning: mapColor('var(--orange-500)'),
      highlight: mapColor('var(--transparent-blue-40)'),
      highlightDestructive: mapColor('var(--transparent-red-40)'),
      inputHighlight: mapColor('var(--transparent-dark-40)'),
      menuItem: mapColor('var(--transparent-teal-50)'),
      white: mapColor('var(--transparent-light-20)'),
      red: mapColor('var(--transparent-red-20)'),
      orange: mapColor('var(--transparent-orange-20)'),
      green: mapColor('var(--transparent-green-20)'),
      emerald: mapColor('var(--transparent-emerald-20)'),
      teal: mapColor('var(--transparent-teal-20)'),
      cyan: mapColor('var(--transparent-cyan-20)'),
      blue: mapColor('var(--transparent-blue-20)'),
      indigo: mapColor('var(--transparent-indigo-20)'),
      violet: mapColor('var(--transparent-violet-20)'),
      rose: mapColor('var(--transparent-rose-20)')
    },
    
    icon: {
      default: mapColor('var(--gray-950)'),
      subtle: mapColor('var(--gray-600)'),
      muted: mapColor('var(--gray-500)'),
      disabled: mapColor('var(--transparent-dark-25)'),
      destructive: mapColor('var(--red-500)'),
      informative: mapColor('var(--blue-500)'),
      success: mapColor('var(--green-500)'),
      warning: mapColor('var(--orange-500)'),
      inverted: {
        default: mapColor('var(--gray-00)'),
        subtle: mapColor('var(--transparent-light-65)'),
        muted: mapColor('var(--transparent-light-50)'),
        disabled: mapColor('var(--transparent-light-35)')
      },
      white: {
        default: mapColor('var(--gray-00)'),
        subtle: mapColor('var(--transparent-light-65)'),
        muted: mapColor('var(--transparent-light-50)'),
        disabled: mapColor('var(--transparent-light-35)')
      },
      black: {
        default: mapColor('var(--gray-950)'),
        subtle: mapColor('var(--gray-600)'),
        muted: mapColor('var(--gray-500)'),
        disabled: mapColor('var(--transparent-dark-35)')
      }
    }
  },
  
  dark: {
    text: {
      accent: mapColor('var(--teal-400)'),
      default: mapColor('var(--gray-00)'),
      subtle: mapColor('var(--transparent-light-70)'),
      muted: mapColor('var(--transparent-light-50)'),
      hint: mapColor('var(--transparent-light-30)'),
      destructive: mapColor('var(--red-400)'),
      success: mapColor('var(--green-400)'),
      warning: mapColor('var(--orange-400)'),
      informative: mapColor('var(--blue-400)'),
      inverted: {
        default: mapColor('var(--gray-950)'),
        subtle: mapColor('var(--gray-600)'),
        muted: mapColor('var(--gray-500)'),
        hint: mapColor('var(--transparent-dark-35)')
      },
      white: {
        default: mapColor('var(--gray-00)'),
        subtle: mapColor('var(--transparent-light-70)'),
        muted: mapColor('var(--transparent-light-50)'),
        hint: mapColor('var(--transparent-light-30)')
      },
      dark: {
        default: mapColor('var(--gray-950)'),
        subtle: mapColor('var(--gray-600)'),
        muted: mapColor('var(--gray-500)'),
        hint: mapColor('var(--transparent-dark-35)')
      }
    },
    
    bg: {
      default: mapColor('var(--gray-900)'),
      subtle: mapColor('var(--gray-950)'),
      muted: mapColor('var(--gray-1000)'),
      inverted: mapColor('var(--gray-00)'),
      overlay: mapColor('var(--transparent-dark-65)'),
      card: {
        default: mapColor('var(--gray-800)'),
        subtle: mapColor('var(--gray-700)'),
        inverted: mapColor('var(--gray-00)')
      },
      sidebar: {
        default: mapColor('var(--gray-900)'),
        subtle: mapColor('var(--gray-900)')
      },
      input: {
        default: mapColor('var(--transparent-light-6)'),
        soft: mapColor('var(--transparent-light-8)'),
        disabled: mapColor('var(--transparent-light-15)')
      },
      state: {
        primary: mapColor('var(--blue-600)'),
        primaryHover: mapColor('var(--blue-500)'),
        primaryPress: mapColor('var(--blue-600)'),
        primaryLoading: mapColor('var(--blue-300)'),
        
        secondary: mapColor('var(--transparent-light-4)'),
        secondaryHover: mapColor('var(--transparent-light-8)'),
        secondaryPress: mapColor('var(--transparent-light-10)'),
        secondaryLoading: mapColor('var(--transparent-light-4)'),
        
        soft: mapColor('var(--transparent-light-8)'),
        softHover: mapColor('var(--transparent-light-10)'),
        softPress: mapColor('var(--transparent-light-15)'),
        softLoading: mapColor('var(--transparent-light-8)'),
        
        ghost: mapColor('var(--transparent-light-00)'),
        ghostHover: mapColor('var(--transparent-light-8)'),
        ghostPress: mapColor('var(--transparent-light-15)'),
        ghostLoading: mapColor('var(--transparent-light-8)'),
        
        ghostInverted: mapColor('var(--transparent-dark-00)'),
        ghostHoverInverted: mapColor('var(--transparent-dark-4)'),
        ghostPressInverted: mapColor('var(--transparent-dark-8)'),
        ghostLoadingInverted: mapColor('var(--transparent-dark-4)'),
        
        menuItem: mapColor('var(--transparent-light-00)'),
        menuItemHover: mapColor('var(--transparent-light-8)'),
        menuItemActive: mapColor('var(--transparent-teal-30)'),
        
        destructive: mapColor('var(--red-500)'),
        destructiveHover: mapColor('var(--red-400)'),
        destructivePress: mapColor('var(--red-500)'),
        destructiveLoading: mapColor('var(--red-300)'),
        
        brand: mapColor('var(--blue-500)'),
        brandHover: mapColor('var(--blue-400)'),
        brandPress: mapColor('var(--blue-500)'),
        brandLoading: mapColor('var(--blue-300)'),
        
        gray: mapColor('var(--gray-00)'),
        disabled: mapColor('var(--transparent-light-8)')
      },
      checkbox: {
        default: mapColor('var(--transparent-light-6)'),
        active: mapColor('var(--blue-500)'),
        activeHover: mapColor('var(--blue-400)'),
        disabled: mapColor('var(--transparent-light-6)')
      },
      switch: {
        default: mapColor('var(--gray-600)'),
        defaultHover: mapColor('var(--gray-500)'),
        disabled: mapColor('var(--gray-300)'),
        default2: mapColor('var(--gray-00)'),
        active: mapColor('var(--green-500)'),
        activeHover: mapColor('var(--green-400)'),
        activeDisabled: mapColor('var(--green-200)'),
        handle: mapColor('var(--gray-00)'),
        handleDisabled: mapColor('var(--gray-50)')
      },
      badge: {
        default: mapColor('var(--transparent-light-10)'),
        inverted: mapColor('var(--gray-00)'),
        gray: mapColor('var(--transparent-light-10)'),
        white: mapColor('var(--transparent-light-10)'),
        red: mapColor('var(--transparent-red-10)'),
        orange: mapColor('var(--transparent-orange-10)'),
        green: mapColor('var(--transparent-green-10)'),
        emerald: mapColor('var(--transparent-emerald-10)'),
        teal: mapColor('var(--transparent-teal-10)'),
        cyan: mapColor('var(--transparent-cyan-10)'),
        blue: mapColor('var(--transparent-blue-10)'),
        indigo: mapColor('var(--transparent-indigo-10)'),
        violet: mapColor('var(--transparent-violet-10)'),
        rose: mapColor('var(--transparent-rose-10)')
      },
      basic: {
        gray: {
          subtle: mapColor('var(--gray-900)'),
          accent: mapColor('var(--gray-500)'),
          strong: mapColor('var(--gray-400)'),
          contrast: mapColor('var(--gray-100)'),
          alpha2: mapColor('var(--transparent-light-4)'),
          alpha4: mapColor('var(--transparent-light-8)'),
          alpha10: mapColor('var(--transparent-light-15)'),
          alpha15: mapColor('var(--transparent-light-20)')
        },
        red: {
          subtle: mapColor('var(--red-900)'),
          accent: mapColor('var(--red-500)'),
          strong: mapColor('var(--red-400)'),
          contrast: mapColor('var(--red-100)')
        },
        orange: {
          subtle: mapColor('var(--orange-900)'),
          accent: mapColor('var(--orange-500)'),
          strong: mapColor('var(--orange-400)'),
          contrast: mapColor('var(--orange-100)')
        },
        green: {
          subtle: mapColor('var(--green-900)'),
          accent: mapColor('var(--green-500)'),
          strong: mapColor('var(--green-400)'),
          contrast: mapColor('var(--green-100)')
        },
        emerald: {
          subtle: mapColor('var(--emerald-900)'),
          accent: mapColor('var(--emerald-500)'),
          strong: mapColor('var(--emerald-400)'),
          contrast: mapColor('var(--emerald-100)')
        },
        teal: {
          subtle: mapColor('var(--teal-900)'),
          accent: mapColor('var(--teal-500)'),
          strong: mapColor('var(--teal-400)'),
          contrast: mapColor('var(--teal-100)')
        },
        cyan: {
          subtle: mapColor('var(--cyan-900)'),
          accent: mapColor('var(--cyan-500)'),
          strong: mapColor('var(--cyan-400)'),
          contrast: mapColor('var(--cyan-100)')
        },
        blue: {
          subtle: mapColor('var(--blue-900)'),
          accent: mapColor('var(--blue-500)'),
          strong: mapColor('var(--blue-400)'),
          contrast: mapColor('var(--blue-100)')
        },
        indigo: {
          subtle: mapColor('var(--indigo-900)'),
          accent: mapColor('var(--indigo-500)'),
          strong: mapColor('var(--indigo-400)'),
          contrast: mapColor('var(--indigo-100)')
        },
        violet: {
          subtle: mapColor('var(--violet-900)'),
          accent: mapColor('var(--violet-500)'),
          strong: mapColor('var(--violet-400)'),
          contrast: mapColor('var(--violet-100)')
        },
        rose: {
          subtle: mapColor('var(--rose-900)'),
          accent: mapColor('var(--rose-500)'),
          strong: mapColor('var(--rose-400)'),
          contrast: mapColor('var(--rose-100)')
        }
      }
    },
    
    border: {
      default: mapColor('var(--transparent-light-10)'),
      darker: mapColor('var(--transparent-light-15)'),
      strong: mapColor('var(--transparent-light-25)'),
      inverted: mapColor('var(--transparent-dark-10)'),
      accent: mapColor('var(--gray-00)'),
      accentInverted: mapColor('var(--gray-950)'),
      destructive: mapColor('var(--red-400)'),
      informative: mapColor('var(--blue-400)'),
      success: mapColor('var(--green-400)'),
      warning: mapColor('var(--orange-400)'),
      highlight: mapColor('var(--transparent-blue-40)'),
      highlightDestructive: mapColor('var(--transparent-red-40)'),
      inputHighlight: mapColor('var(--transparent-light-45)'),
      menuItem: mapColor('var(--transparent-teal-20)'),
      white: mapColor('var(--transparent-light-20)'),
      red: mapColor('var(--transparent-red-20)'),
      orange: mapColor('var(--transparent-orange-20)'),
      green: mapColor('var(--transparent-green-20)'),
      emerald: mapColor('var(--transparent-emerald-20)'),
      teal: mapColor('var(--transparent-teal-20)'),
      cyan: mapColor('var(--transparent-cyan-20)'),
      blue: mapColor('var(--transparent-blue-20)'),
      indigo: mapColor('var(--transparent-indigo-20)'),
      violet: mapColor('var(--transparent-violet-20)'),
      rose: mapColor('var(--transparent-rose-20)')
    },
    
    icon: {
      default: mapColor('var(--gray-00)'),
      subtle: mapColor('var(--transparent-light-70)'),
      muted: mapColor('var(--transparent-light-50)'),
      disabled: mapColor('var(--transparent-light-25)'),
      destructive: mapColor('var(--red-300)'),
      informative: mapColor('var(--blue-300)'),
      success: mapColor('var(--green-300)'),
      warning: mapColor('var(--orange-300)'),
      inverted: {
        default: mapColor('var(--gray-950)'),
        subtle: mapColor('var(--gray-600)'),
        muted: mapColor('var(--gray-400)'),
        disabled: mapColor('var(--transparent-dark-35)')
      },
      white: {
        default: mapColor('var(--gray-00)'),
        subtle: mapColor('var(--transparent-light-70)'),
        muted: mapColor('var(--transparent-light-50)'),
        disabled: mapColor('var(--transparent-light-40)')
      },
      black: {
        default: mapColor('var(--gray-950)'),
        subtle: mapColor('var(--gray-600)'),
        muted: mapColor('var(--gray-500)'),
        disabled: mapColor('var(--transparent-dark-35)')
      }
    }
  }
};

export default themes; 