import React from 'react';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import { Show } from '../data/useShows';
import trackTicketClick, { TicketClickSource } from '../utils/analytics';
import PillLink from './PillLink';

interface ITicketButtonProps {
  show: Show;
  source: TicketClickSource;
  label?: string;
  block?: boolean;
}

function TicketButton({
  show, source, label = 'Get Tickets', block = false,
}: ITicketButtonProps) {
  return (
    <PillLink
      block={block}
      href={show.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for ${show.venue} on ${show.displayDate}`}
      onClick={() => trackTicketClick(show.venue, source)}
    >
      <ConfirmationNumberRoundedIcon sx={{ fontSize: block ? 20 : 17 }} />
      {label}
    </PillLink>
  );
}

export default TicketButton;
