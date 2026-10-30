import React, { useEffect } from 'react';
import {
  Box, Container, IconButton, Link, Modal,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import { AnimatePresence, m } from 'motion/react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import navigation from '../data/navigation';
import { Show } from '../data/useShows';
import { colors, fonts, iconButtonSx } from '../theme/tokens';
import TicketButton from './TicketButton';

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const linkSx = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 2,
  py: 1,
  color: colors.ink,
  fontFamily: fonts.display,
  fontWeight: 700,
  fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
  lineHeight: 1.25,
  textDecoration: 'none',
  outline: 'none',
  '&::before': {
    content: '"▶"',
    position: 'absolute',
    right: '100%',
    top: '50%',
    mr: 3,
    transform: 'translateY(-50%)',
    color: colors.coral,
    fontSize: '0.45em',
    opacity: 0,
  },
  '&:hover::before, &:focus-visible::before, &[aria-current="page"]::before': {
    opacity: 1,
    animation: `${blink} 1s infinite`,
    '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
  },
} as const;

const hideIdleCursor = 'a[aria-current="page"]:not(:hover):not(:focus-visible)::before';

const listSx = {
  listStyle: 'none',
  m: 0,
  p: 0,
  [`&:hover ${hideIdleCursor}, &:focus-within ${hideIdleCursor}`]: {
    opacity: 0,
    animation: 'none',
  },
} as const;

interface IMenuPanelProps {
  in: boolean;
  onEnter?: () => void;
  onExited?: () => void;
  ref?: React.Ref<HTMLDivElement>;
  onClose: () => void;
  ticketedShow?: Show;
}

function MenuPanel({
  in: open, onEnter = undefined, onExited = undefined, ref = undefined, onClose,
  ticketedShow = undefined,
}: IMenuPanelProps) {
  const location = useLocation();

  useEffect(() => {
    if (open) onEnter?.();
  }, [open, onEnter]);

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      id="site-menu"
      tabIndex={-1}
      style={{ outline: 'none' }}
    >
      <AnimatePresence onExitComplete={onExited}>
        {open && (
          <m.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              overflowY: 'auto',
              background: colors.cream,
              textAlign: 'center',
            }}
          >
            <Container
              maxWidth="md"
              sx={{
                display: 'flex', justifyContent: 'flex-end', px: { xs: 4, sm: 6 }, py: 3,
              }}
            >
              <IconButton aria-label="Close menu" onClick={onClose} sx={iconButtonSx}>
                <CloseRoundedIcon />
              </IconButton>
            </Container>
            <Box component="ul" sx={listSx}>
              {navigation.map((item, index) => (
                <m.li
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 + index * 0.04 }}
                >
                  {item.external ? (
                    <Link
                      href={item.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      sx={linkSx}
                    >
                      {item.title}
                      <NorthEastRoundedIcon sx={{ fontSize: '0.55em', color: colors.muted }} />
                    </Link>
                  ) : (
                    <Link
                      component={RouterLink}
                      to={item.route}
                      aria-current={location.pathname === item.route ? 'page' : undefined}
                      onClick={onClose}
                      sx={linkSx}
                    >
                      {item.title}
                    </Link>
                  )}
                </m.li>
              ))}
            </Box>
            {ticketedShow && (
              <Box sx={{
                maxWidth: 320, mx: 'auto', mt: 8, mb: 10, px: 4,
              }}
              >
                <TicketButton show={ticketedShow} source="menu" block />
              </Box>
            )}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface IMenuOverlayProps {
  open: boolean;
  onClose: () => void;
  ticketedShow?: Show;
}

function MenuOverlay({ open, onClose, ticketedShow = undefined }: IMenuOverlayProps) {
  return (
    <Modal open={open} onClose={onClose} hideBackdrop closeAfterTransition>
      <MenuPanel in={open} onClose={onClose} ticketedShow={ticketedShow} />
    </Modal>
  );
}

export default MenuOverlay;
