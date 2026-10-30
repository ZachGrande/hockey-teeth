import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { domAnimation, LazyMotion, MotionConfig } from 'motion/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme/Theme';
import SiteRouter from './routers/SiteRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <Router>
            <Routes>
              <Route path="/*" element={<SiteRouter />} />
            </Routes>
          </Router>
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;
