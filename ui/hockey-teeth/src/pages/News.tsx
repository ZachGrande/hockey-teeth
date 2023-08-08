import React from 'react';
import { Link, Typography } from '@mui/material';
import { articles } from '../data/Articles';

function News() {
  return (
    <div>
      <Typography variant="h1">In The News</Typography>
      <br />
      {articles.map((data, key) => (
        <div key={key}>
          <div className="show-item">
            <Link variant="h4" color="inherit" href={data.link} target="_blank" rel="noreferrer">{data.title}</Link>
            <Typography variant="body1">{data.author}</Typography>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default News;
