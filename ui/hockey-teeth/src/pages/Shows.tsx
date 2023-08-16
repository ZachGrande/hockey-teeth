import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import ShowList from '../components/ShowList';
import Loading from '../components/Loading';
import ErrorAPI from '../components/ErrorAPI';
import { ShowType } from '../data/Shows.types';
import config from '../config';

interface IShowsProps {
  title: string;
  path: string;
}

function formatDate(inputDate: string) {
  const date = new Date(`${inputDate}T00:00:00`);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function sortDates(formattedData: ShowType[], newestFirst: boolean) {
  return formattedData.sort((a: ShowType, b: ShowType) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (newestFirst) {
      return dateB.getTime() - dateA.getTime();
    }
    return dateA.getTime() - dateB.getTime();
  });
}

function Shows({ title, path }: IShowsProps) {
  const [shows, setShows] = useState<ShowType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`${config.api.apiUrl}/shows/${path}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Error fetching top tracks');
        }
        const formattedData = response.data.map((show: ShowType) => ({
          ...show,
          date: formatDate(show.date),
        }));

        const sortedData = sortDates(formattedData, path === 'past');
        setShows(sortedData);
        setLoading(false);
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
