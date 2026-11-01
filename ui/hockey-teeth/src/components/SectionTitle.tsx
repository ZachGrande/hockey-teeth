import React from 'react';
import { Typography } from '@mui/material';
import { colors } from '../theme/tokens';

interface ISectionTitleProps {
  children: React.ReactNode;
  id?: string;
  eyebrow?: string;
}

function SectionTitle({ children, id = undefined, eyebrow = undefined }: ISectionTitleProps) {
  return (
    <>
      {eyebrow && (
        <Typography variant="overline" sx={{ mb: 1, color: colors.coral }}>
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h2" id={id} sx={{ mb: 5 }}>
        {children}
      </Typography>
    </>
  );
}

export default SectionTitle;
