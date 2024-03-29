import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Paper, Typography, useTheme } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import Loading from './Loading';
import ErrorAPI from './ErrorAPI';
import config from '../config';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

interface TopTrack {
  name: string;
  popularity: number;
}

function TopTracksChart() {
  const [topTracks, setTopTracks] = useState<TopTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    axios.get(`${config.api.apiUrl}/spotify/top-tracks`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Error fetching top tracks');
        }
        setTopTracks(response.data.tracks);
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

  const data = {
    labels: topTracks.map((track) => track.name),
    datasets: [
      {
        label: 'Popularity',
        data: topTracks.map((track) => track.popularity),
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h5">Top Tracks</Typography>
      <Bar data={data} />
    </Paper>
  );
}

export default TopTracksChart;
