import React from "react";
import {Link, Typography} from "@mui/material";
import {shows} from '../data/Shows';

function ShowList() {
  return (
    <div className="show-list">
      {shows.map((data, key) => {
        const subHeader = data.linkIncluded ?
          <Typography variant="body1">{data.location + " | "}
            <Link variant="body1" color="inherit" href={data.link} target="_blank" rel="noreferrer">Tickets</Link>
          </Typography>
          :
          <Typography variant="body1">{data.location}</Typography>
        return (
          <div key={key}>
            <div className="show-item">
              <Typography variant="h4">{data.date + " | " + data.venue}</Typography>
              {subHeader}
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default ShowList;