import React, { useState } from 'react';
import axios from 'axios';
import {
  Alert, Button, Container, Grid, Stack, TextField, Typography,
} from '@mui/material';
import { useFormik, FormikErrors } from 'formik';
import * as yup from 'yup';
import config from '../config';

type FormValues = {
  date: string;
  venue: string;
  location: string;
  link: string;
};

type ExtendedErrors = FormikErrors<FormValues> & { submit?: string };

const validationSchema = yup.object({
  date: yup.string().required('Date is required').matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  venue: yup.string().required('Venue is required'),
  location: yup.string().required('Location is required'),
  link: yup.string().url('Enter a valid URL'),
});

function ShowForm() {
  const [success, setSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      date: '',
      venue: '',
      location: '',
      link: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post(`${config.api.apiUrl}/shows/add`, values, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status !== 201) {
          setErrors({ submit: 'An error occurred while adding the show.' } as ExtendedErrors);
        } else {
          setSuccess(true);
          formik.resetForm();
        }
      } catch (e) {
        setErrors({ submit: 'An error occurred while adding the show.' } as ExtendedErrors);
      }

      setSubmitting(false);
    },
  });

  const formErrors = formik.errors as ExtendedErrors;

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Add Show</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                label="Date (e.g. 2023-08-14)"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                label="Venue"
                name="venue"
                value={formik.values.venue}
                onChange={formik.handleChange}
                error={formik.touched.venue && Boolean(formik.errors.venue)}
                helperText={formik.touched.venue && formik.errors.venue}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                label="Link (Optional)"
                name="link"
                value={formik.values.link}
                onChange={formik.handleChange}
                error={formik.touched.link && Boolean(formik.errors.link)}
                helperText={formik.touched.link && formik.errors.link}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                label="Location"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              {formErrors.submit && (
              <Alert severity="error">
                {formErrors.submit}
              </Alert>
              )}
              {success && (
                <Alert severity="success">
                  Show added successfully!
                </Alert>
              )}
            </Grid>
          </Grid>
        </Stack>
      </form>
    </Container>
  );
}

export default ShowForm;
