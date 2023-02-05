import React from "react";
import {Link, Typography} from "@mui/material";

function ShowList() {
  const shows = [
    {
      date: "Feb 5, 2023",
      venue: "Factory Luxe",
      location: "Seattle, WA",
      link: "https://www.thefactoryluxe.com/events/hockey-teeth-i90-fiasco-choly?fbclid=PAAaZVlXVZ-pjc-N1vANQXYW7J" +
            "2uZ5_kHd-ez2jwshJBpT_NvCLNsSnaKyIyE",
      linkIncluded: true
    },
    {
      date: "Feb 24, 2023",
      venue: "The Blue Room",
      location: "Bellingham, WA",
      link: "",
      linkIncluded: false
    }
  ];

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