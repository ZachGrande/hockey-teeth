import React from 'react';
import { Link, Typography } from '@mui/material';
import { ShowType } from '../data/Shows.types';

interface IShowListProps {
  shows: ShowType[];
  includeLink: boolean;
}

function ShowList({ shows, includeLink }: IShowListProps) {
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
      }) => {
        const subHeader = includeLink && link
          ? (
            <Typography variant="body1">
              {`${location} | `}
              <Link variant="body1" color="inherit" href={link} target="_blank" rel="noreferrer">Tickets</Link>
            </Typography>
          )
          : <Typography variant="body1">{location}</Typography>;
        return (
          <div key={date}>
            <div className="show-item">
              <Typography variant="h4">{`${date} | ${venue}`}</Typography>
              {subHeader}
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default ShowList;
