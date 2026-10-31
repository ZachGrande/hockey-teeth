import React from 'react';
import { Link, Typography } from '@mui/material';
import { Show } from '../data/useShows';

interface IShowListProps {
  shows: Show[];
  includeLink: boolean;
}

function ShowList({ shows, includeLink }: IShowListProps) {
  const renderTicketInfo = (location: string, link?: string) => {
    if (!includeLink) {
      return location;
    }

    if (link) {
      return (
        <>
          {`${location} | `}
          <Link variant="body1" color="inherit" href={link} target="_blank" rel="noreferrer">
            Tickets
          </Link>
        </>
      );
    }

    return `${location} | Tickets at door`;
  };

  if (shows.length === 0) {
    return (
      <div>
        <Typography variant="h4">New shows coming soon!</Typography>
        <br />
      </div>
    );
  }

  return (
    <div>
      {shows.map(({
        location, link, date, displayDate, venue,
      }) => (
        <div key={`${date}-${venue}`}>
          <div className="show-item">
            <Typography variant="h4">{`${displayDate} | ${venue}`}</Typography>
            <Typography variant="body1">
              {renderTicketInfo(location, link)}
            </Typography>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default ShowList;
