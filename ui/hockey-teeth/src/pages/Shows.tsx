import React from 'react';
import { Typography } from '@mui/material';
import ShowList from '../components/ShowList';
import Loading from '../components/Loading';
import ErrorAPI from '../components/ErrorAPI';
import useShows from '../data/useShows';

export interface IShowsProps {
  title: string;
  isUpcoming: boolean;
}

function Shows({ title, isUpcoming }: IShowsProps) {
  const { shows, loading, error } = useShows(isUpcoming);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorAPI />;
  }

  return (
    <>
      {isUpcoming && (
        <>
          <Typography variant="h1">{title}</Typography>
          <br />
        </>
      )}
      <ShowList shows={shows} includeLink={isUpcoming} />
    </>
  );
}

export default Shows;
