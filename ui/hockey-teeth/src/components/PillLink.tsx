import { styled } from '@mui/material/styles';
import { colors, fonts, retroStep } from '../theme/tokens';

export interface IPillLinkStyleProps {
  block?: boolean;
  tone?: 'blue' | 'pink';
}

const PillLink = styled('a', {
  shouldForwardProp: (prop) => prop !== 'block' && prop !== 'tone',
})<IPillLinkStyleProps>(({ block = false, tone = 'blue' }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  boxSizing: 'border-box',
  width: block ? '100%' : 'auto',
  minHeight: block ? 48 : 36,
  padding: block ? '10px 18px' : '6px 12px',
  borderRadius: 10,
  background: tone === 'blue' ? colors.blue : colors.pink,
  color: tone === 'blue' ? colors.white : colors.ink,
  boxShadow: '0 2px 0 rgba(21, 21, 21, 0.18)',
  fontFamily: fonts.body,
  fontWeight: 700,
  fontSize: block ? 15 : 13,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  cursor: 'pointer',
  transition: `transform 120ms ${retroStep}, box-shadow 120ms ${retroStep}`,
  '&:hover': { transform: 'translateY(-1px)', boxShadow: '0 3px 0 rgba(21, 21, 21, 0.18)' },
  '&:active': { transform: 'translateY(2px)', boxShadow: 'none' },
  '&:focus-visible': { outline: `2px solid ${colors.ink}`, outlineOffset: 2 },
}));

export default PillLink;
