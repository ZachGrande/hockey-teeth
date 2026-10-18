import React, { useEffect, useState } from 'react';
import {
  Alert, Button, Container, Grid, Stack, TextField, Typography,
} from '@mui/material';
import { useFormik, FormikErrors } from 'formik';
import * as yup from 'yup';
import {
  GoogleAuthProvider, User, onAuthStateChanged, signInWithPopup, signOut,
} from 'firebase/auth';
import { auth } from '../firebase';
import { addShow } from '../data/showsApi';

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

function getErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);
  if (message.includes('PERMISSION_DENIED')) {
    return 'This Google account is not allowed to add shows.';
  }
  return 'An error occurred while adding the show.';
}

function ShowForm() {
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [authError, setAuthError] = useState('');

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  const handleSignIn = async () => {
    setAuthError('');
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (e) {
      const code = (e as { code?: string }).code ?? '';
      if (code !== 'auth/popup-closed-by-user' && code !== 'auth/cancelled-popup-request') {
        console.error('Firebase sign-in failed', e);
        setAuthError('Google sign-in failed. Please try again.');
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      date: '',
      venue: '',
      location: '',
      link: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setSuccess(false);
      try {
        await addShow(values);
        setSuccess(true);
        formik.resetForm();
      } catch (e) {
        console.error('Failed to add show', e);
        setErrors({ submit: getErrorMessage(e) } as ExtendedErrors);
      }

      setSubmitting(false);
    },
  });

  const formErrors = formik.errors as ExtendedErrors;

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Add Show</Typography>
      <Stack spacing={1} alignItems="center" sx={{ mb: 3 }}>
        {user ? (
          <Typography variant="body2">
            {`Signed in to Firebase as ${user.email ?? user.uid} `}
            <Button size="small" onClick={() => signOut(auth)}>Sign out</Button>
          </Typography>
        ) : (
          <Button variant="outlined" onClick={handleSignIn}>
            Sign in with Google to add shows
          </Button>
        )}
        {authError && <Alert severity="error">{authError}</Alert>}
      </Stack>
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!user || formik.isSubmitting}
              >
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
