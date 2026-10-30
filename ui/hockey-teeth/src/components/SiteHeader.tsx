import React, { useState } from 'react';
import { Box, Container, IconButton } from '@mui/material';
import {
  AnimatePresence, m, useMotionValueEvent, useScroll,
} from 'motion/react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import useShows, { findTicketedShow } from '../data/useShows';
import { iconButtonSx, shadows } from '../theme/tokens';
import MenuOverlay from './MenuOverlay';
import TicketButton from './TicketButton';

// The logo is ~5.74:1. Size it so logo + menu button always fit on one row, even on narrow phones.
const EXPANDED_LOGO_HEIGHT = 'min(56px, calc((100vw - 96px) / 5.74))';
const COLLAPSED_LOGO_HEIGHT = 'min(30px, calc((100vw - 220px) / 5.74))';
const EXPANDED_PADDING_Y = 12;
const COLLAPSE_AT = 40;
const EXPAND_AT = 8;

function SiteHeader() {
  const { scrollY } = useScroll();
  const [collapsed, setCollapsed] = useState(() => window.scrollY > COLLAPSE_AT);
  const [menuOpen, setMenuOpen] = useState(false);
  const { shows } = useShows(true);
  const ticketedShow = findTicketedShow(shows);

  // Different thresholds for collapsing/expanding prevent flicker around a single boundary.
  useMotionValueEvent(scrollY, 'change', (y) => {
    setCollapsed((previous) => (previous ? y > EXPAND_AT : y > COLLAPSE_AT));
  });

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'appBar',
          bgcolor: collapsed ? 'rgba(255, 247, 212, 0.92)' : 'transparent',
          backdropFilter: collapsed ? 'blur(10px)' : 'none',
          boxShadow: collapsed ? shadows.low : 'none',
          transition: 'background-color 250ms ease, box-shadow 250ms ease',
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            px: { xs: 4, sm: 6 },
            py: collapsed ? '6px' : `${EXPANDED_PADDING_Y}px`,
            transition: 'padding 250ms ease',
          }}
        >
          <RouterLink to="/home" style={{ display: 'flex', borderRadius: 8 }}>
            <m.img
              src={logo}
              alt="Hockey Teeth"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'block',
                height: collapsed ? COLLAPSED_LOGO_HEIGHT : EXPANDED_LOGO_HEIGHT,
                width: 'auto',
                transition: 'height 250ms ease',
              }}
            />
          </RouterLink>
          <Box sx={{ flex: 1 }} />
          <AnimatePresence>
            {collapsed && ticketedShow && (
              <m.div
                key="header-tickets"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <TicketButton show={ticketedShow} source="header" label="Tickets" />
              </m.div>
            )}
          </AnimatePresence>
          <IconButton
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen(true)}
            sx={iconButtonSx}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Container>
      </Box>
      <Box
        aria-hidden
        sx={{ height: `calc(max(44px, ${EXPANDED_LOGO_HEIGHT}) + ${EXPANDED_PADDING_Y * 2}px)` }}
      />
      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        ticketedShow={ticketedShow}
      />
    </>
  );
}

export default SiteHeader;
