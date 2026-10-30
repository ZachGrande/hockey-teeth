import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import useShows, { Show } from '../data/useShows';
import { mailingListUrl } from '../data/navigation';
import { cardSx, colors, fonts } from '../theme/tokens';
import ErrorAPI from './ErrorAPI';
import Loading from './Loading';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import TicketButton from './TicketButton';

const smallCaps = {
  fontFamily: fonts.body,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
} as const;

function ShowCard({ show, index }: { show: Show; index: number }) {
  const part = (options: Intl.DateTimeFormatOptions) => (
    show.day.toLocaleDateString('en-US', options)
  );

  return (
    <Reveal delay={index * 0.06}>
      <Box component="article" sx={{ ...cardSx, p: 4, textAlign: 'left' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Box
            component="time"
            dateTime={show.date}
            sx={{
              ...smallCaps,
              flexShrink: 0,
              width: 60,
              py: 1.5,
              bgcolor: colors.pink,
              borderRadius: '10px',
              color: colors.ink,
              textAlign: 'center',
              lineHeight: 1.15,
            }}
          >
            <Box sx={{ fontSize: 11 }}>{part({ weekday: 'short' })}</Box>
            <Box sx={{ fontSize: 26, fontWeight: 800, letterSpacing: 0 }}>
              {part({ day: 'numeric' })}
            </Box>
            <Box sx={{ fontSize: 11 }}>{part({ month: 'short' })}</Box>
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              component="h3"
              sx={{
                color: colors.ink,
                fontFamily: fonts.display,
                fontWeight: 700,
                fontSize: 19,
                lineHeight: 1.25,
                overflowWrap: 'anywhere',
              }}
            >
              {show.venue}
            </Typography>
            <Typography sx={{
              mt: 0.5, color: colors.muted, fontFamily: fonts.body, fontSize: 14,
            }}
            >
              {show.location}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          {show.link ? (
            <TicketButton show={show} source="card" block />
          ) : (
            <Typography sx={{
              ...smallCaps, py: 1.5, color: colors.muted, fontSize: 12, textAlign: 'center',
            }}
            >
              Tickets at the door
            </Typography>
          )}
        </Box>
      </Box>
    </Reveal>
  );
}

function UpcomingShows() {
  const { shows, loading, error } = useShows(true);

  const renderBody = () => {
    if (loading) return <Loading />;
    if (error) return <ErrorAPI />;
    if (shows.length === 0) {
      return (
        <Box sx={{ ...cardSx, p: 5 }}>
          <Typography sx={{
            color: colors.ink, fontFamily: fonts.display, fontWeight: 700, fontSize: 19,
          }}
          >
            New shows coming soon!
          </Typography>
          <Typography sx={{
            mt: 2, color: colors.muted, fontFamily: fonts.body, fontSize: 14,
          }}
          >
            <Link
              href={mailingListUrl}
              target="_blank"
              rel="noreferrer"
              color={colors.ink}
              fontWeight={700}
            >
              Join the mailing list
            </Link>
            {' '}
            to hear first.
          </Typography>
        </Box>
      );
    }
    return (
      <Box sx={{ display: 'grid', gap: 4 }}>
        {shows.map((show, index) => (
          <ShowCard key={`${show.date}-${show.venue}`} show={show} index={index} />
        ))}
      </Box>
    );
  };

  return (
    <Box
      component="section"
      aria-labelledby="shows-title"
      sx={{
        maxWidth: 480, mx: 'auto', mt: 3, mb: 12,
      }}
    >
      <SectionTitle id="shows-title">Upcoming Shows</SectionTitle>
      {renderBody()}
    </Box>
  );
}

export default UpcomingShows;
