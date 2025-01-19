import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Typography } from '@mui/material';
import ShowList from '../components/ShowList';
import Loading from '../components/Loading';
import ErrorAPI from '../components/ErrorAPI';
import { ShowType } from '../data/Shows.types';

interface IShowsProps {
  title: string;
  path: string;
}

function formatDate(inputDate: string) {
  const date = new Date(`${inputDate}T00:00:00`);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function removeQuotes(inputString: string) {
  return inputString.replace(/['"]+/g, '');
}

function Shows({ title, path }: IShowsProps) {
  const [shows, setShows] = useState<ShowType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/shows.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (result: { data: ShowType[]; }) => {
            const formattedData = result.data.map((show: ShowType) => ({
              ...show,
              date: formatDate(show.date),
              location: removeQuotes(show.location),
            }));
            setShows(formattedData);
            setLoading(false);
          },
          error: () => {
            setError(true);
            setLoading(false);
          },
        });
      })
      .catch(() => {
        setError(true);
        setLoading(false);
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
      <ShowList shows={shows} includeLink={path === 'upcoming'} />
    </div>
  );
}

export default Shows;
