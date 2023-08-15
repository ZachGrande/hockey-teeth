import { CircularProgress, useTheme } from '@mui/material';
import React from 'react';

function Loading() {
  const theme = useTheme();
  return <CircularProgress style={{ color: theme.palette.text.primary }} />;
}

export default Loading;
