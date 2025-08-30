import React from 'react';
import { Link, Typography } from '@mui/material';
import { ShowType } from '../data/Shows.types';

interface IShowListProps {
  shows: ShowType[];
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
        location, link, date, venue,
      }) => (
        <div key={date}>
          <div className="show-item">
            <Typography variant="h4">{`${date} | ${venue}`}</Typography>
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
