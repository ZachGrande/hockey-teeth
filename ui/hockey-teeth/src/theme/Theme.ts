import type { CSSProperties } from 'react';
import { createTheme } from '@mui/material';
import { colors, fonts } from './tokens';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    cardTitle: CSSProperties;
    meta: CSSProperties;
    cta: CSSProperties;
    menuItem: CSSProperties;
  }
  interface TypographyVariantsOptions {
    cardTitle?: CSSProperties;
    meta?: CSSProperties;
    cta?: CSSProperties;
    menuItem?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    cardTitle: true;
    meta: true;
    cta: true;
    menuItem: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.pink,
      light: `${colors.pink}99`,
    },
    secondary: {
      main: '#C1EFF7',
    },
    text: {
      primary: colors.coral,
      secondary: '#000000',
    },
  },
  spacing: 4,
  typography: {
    fontSize: 12,
    fontFamily: fonts.body,
    h1: {
      fontFamily: fonts.display,
      fontSize: 'clamp(2.25rem, 9vw, 3.125rem)',
    },
    // Section headings
    h2: {
      fontFamily: fonts.display,
      fontWeight: 700,
      fontSize: 'clamp(1.6rem, 7vw, 2.25rem)',
      lineHeight: 1.15,
      color: colors.ink,
    },
    h3: {
      fontFamily: fonts.display,
      fontSize: 'clamp(1.5rem, 6vw, 1.875rem)',
    },
    h4: {
      fontFamily: fonts.display,
      fontSize: 20,
    },
    h5: {
      fontFamily: fonts.display,
      fontSize: 20,
    },
    h6: {
      fontFamily: fonts.display,
      fontSize: 10,
    },
    // Small uppercase labels: section eyebrows, dates, "Tickets at the door"
    overline: {
      fontFamily: fonts.body,
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.14em',
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
    cardTitle: {
      fontFamily: fonts.display,
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.25,
      color: colors.ink,
    },
    // Secondary supporting text
    meta: {
      fontFamily: fonts.body,
      fontSize: 14,
      lineHeight: 1.5,
      color: colors.muted,
    },
    // Button/link labels
    cta: {
      fontFamily: fonts.body,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    },
    menuItem: {
      fontFamily: fonts.display,
      fontWeight: 700,
      fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
      lineHeight: 1.25,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          overline: 'p',
          cardTitle: 'h3',
          meta: 'p',
        },
      },
    },
  },
});

export default theme;
