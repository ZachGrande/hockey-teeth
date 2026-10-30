import React from 'react';
import { Typography } from '@mui/material';
import { colors, fonts } from '../theme/tokens';

interface ISectionTitleProps {
  children: React.ReactNode;
  id?: string;
  eyebrow?: string;
}

function SectionTitle({ children, id = undefined, eyebrow = undefined }: ISectionTitleProps) {
  return (
    <>
      {eyebrow && (
        <Typography
          component="p"
          sx={{
            mb: 1,
            color: colors.coral,
            fontFamily: fonts.body,
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h2"
        id={id}
        sx={{
          mb: 5,
          color: colors.ink,
          fontWeight: 700,
          fontSize: 'clamp(1.6rem, 7vw, 2.25rem)',
          lineHeight: 1.15,
        }}
      >
        {children}
      </Typography>
    </>
  );
}

export default SectionTitle;
