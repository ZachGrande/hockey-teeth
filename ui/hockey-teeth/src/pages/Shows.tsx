import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { csv } from 'd3';
import ShowList from '../components/ShowList';
import Loading from '../components/Loading';
import ErrorAPI from '../components/ErrorAPI';
import { ShowType } from '../data/Shows.types';
import showsCSV from '../data/shows.csv';

export interface IShowsProps {
  title: string;
  isUpcoming: boolean;
}

function formatDate(inputDate: string) {
  const date = new Date(`${inputDate}T00:00:00`);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function removeQuotes(inputString: string) {
  return inputString.replace(/['"]+/g, '');
}

function Shows({ title, isUpcoming }: IShowsProps) {
  const [shows, setShows] = useState<ShowType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    csv(showsCSV).then((data) => {
      const formattedData = data.map((show: any) => ({
        date: formatDate(show.date),
        venue: show.venue,
        link: show.link,
        location: removeQuotes(show.location),
      }));
      const filteredData = formattedData.filter((show: ShowType) => {
        const showDate = new Date(show.date);
        const today = new Date();
        // Offset by 1 day to adjust for the show date beginning at T00:00:00
        today.setDate(today.getDate() - 1);
        return isUpcoming ? showDate >= today : showDate < today;
      });

      const sortedData = filteredData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return isUpcoming
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      });

      setShows(sortedData);
      setLoading(false);
    }).catch(() => {
      setError(true);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ErrorAPI />
    );
  }

  return (
    <div>
      <Typography variant="h1">{title}</Typography>
      <br />
      <ShowList shows={shows} includeLink={isUpcoming} />
    </div>
  );
}

export default Shows;
