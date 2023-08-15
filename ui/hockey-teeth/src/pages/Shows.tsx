import React, { useEffect, useState } from 'react';
import {
  Box, CircularProgress, Typography, useTheme,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import axios from 'axios';
import ShowList from '../components/ShowList';
import { ShowType } from '../data/Shows.types';
import config from '../config';

interface IShowsProps {
  title: string;
  path: string;
}

function Shows({ title, path }: IShowsProps) {
  const [shows, setShows] = useState<ShowType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    axios.get(`${config.api.apiUrl}/shows/${path}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Error fetching top tracks');
        }
        setShows(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress style={{ color: theme.palette.text.primary }} />;
  }

  if (error) {
    return (
      <Box>
        <ErrorIcon color="error" />
        <Typography variant="body1" color="error">
          API is not available
        </Typography>
      </Box>
    );
  }

  return (
    <div>
      <Typography variant="h1">{title}</Typography>
      <br />
      <ShowList shows={shows} />
    </div>
  );
}

export default Shows;
