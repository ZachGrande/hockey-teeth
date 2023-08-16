import React, { useState } from 'react';
import axios from 'axios';
import {
  Alert, Button, Container, Grid, Stack, TextField, Typography,
} from '@mui/material';
import config from '../config';

function ShowForm() {
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setSuccess('');
    setError('');

    const data = {
      date, venue, location, link,
    };

    try {
      const response = await axios.post(`${config.api.apiUrl}/shows/add`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setSuccess('Show added successfully!');
      } else {
        setError('An error occurred while adding the show.');
      }
    } catch (e) {
      setError('An error occurred while adding the show.');
    }
  };

  return (
    <Container>
      <Typography variant="h3" sx={{ mb: 2 }}>Add Show</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                required
                label="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                required
                label="Venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                required
                label="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                required
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
            {error && (
              <Grid item xs={12} sm={8} md={6}>
                <Alert severity="error">
                  {error}
                </Alert>
              </Grid>
            )}
            {success && (
              <Grid item xs={12} sm={8} md={6}>
                <Alert severity="success">
                  {success}
                </Alert>
              </Grid>
            )}
          </Grid>
        </Stack>
      </form>
    </Container>
  );
}

export default ShowForm;
