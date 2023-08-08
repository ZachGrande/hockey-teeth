import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme/Theme';
import SiteRouter from './routers/SiteRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/*" element={<SiteRouter />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
