import React from 'react';
import { Box } from '@mui/material';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import { Show } from '../data/useShows';
import trackTicketClick, { TicketClickSource } from '../utils/analytics';
import PillLink from './PillLink';

const iconOnlyOnMobileSx = {
  width: { xs: 44, sm: 'auto' },
  minHeight: 44,
  p: { xs: 0, sm: '6px 14px' },
};

interface ITicketButtonProps {
  show: Show;
  source: TicketClickSource;
  label?: string;
  block?: boolean;
  iconOnlyOnMobile?: boolean;
}

function TicketButton({
  show, source, label = 'Get Tickets', block = false, iconOnlyOnMobile = false,
}: ITicketButtonProps) {
  return (
    <PillLink
      block={block}
      href={show.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for ${show.venue} on ${show.displayDate}`}
      onClick={() => trackTicketClick(show.venue, source)}
      sx={iconOnlyOnMobile ? iconOnlyOnMobileSx : undefined}
    >
      <ConfirmationNumberRoundedIcon sx={{ fontSize: block || iconOnlyOnMobile ? 20 : 17 }} />
      {iconOnlyOnMobile ? (
        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>{label}</Box>
      ) : label}
    </PillLink>
  );
}

export default TicketButton;
