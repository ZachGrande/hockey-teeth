export const colors = {
  ink: '#151515',
  muted: 'rgba(21, 21, 21, 0.62)',
  cream: '#FFF7D4',
  coral: '#F65C5C', // from logo
  blue: '#1253f7', // from logo
  pink: '#F7CDF4',
  white: '#FFFFFF',
};

export const fonts = {
  body: 'Montserrat, sans-serif',
  display: 'Libre Baskerville, serif',
};

export const shadows = {
  low: '0 1px 2px rgba(21, 21, 21, 0.08), 0 2px 6px rgba(21, 21, 21, 0.06)',
  card: '0 1px 2px rgba(21, 21, 21, 0.05), 0 6px 18px rgba(21, 21, 21, 0.08)',
};

export const retroStep = 'steps(2, end)';

export const cardSx = {
  bgcolor: colors.white,
  borderRadius: '14px',
  boxShadow: shadows.card,
};

export const focusRing = {
  '&:focus-visible': { outline: `2px solid ${colors.blue}`, outlineOffset: 2 },
};

export const iconButtonSx = {
  width: 44,
  height: 44,
  flexShrink: 0,
  color: colors.ink,
  borderRadius: '10px',
  '&:hover': { bgcolor: 'rgba(21, 21, 21, 0.06)' },
  ...focusRing,
};
