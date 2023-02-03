import {Link, Typography} from "@mui/material";
import React from "react";

function ShowList() {
  return (
    <div className="show-list">
      <div className="show-item">
        <Typography variant="h4">Feb 5, 2023 | Factory Luxe</Typography>
        <Typography variant="body1">{"Seattle, WA | "}
          <Link variant="body1" color="inherit" href="https://www.thefactoryluxe.com/events/hockey-teeth-i90-fiasco-choly?fbclid=PAAaZVlXVZ-pjc-N1vANQXYW
                   7J2uZ5_kHd-ez2jwshJBpT_NvCLNsSnaKyIyE" target="_blank" rel="noreferrer">Tickets</Link>
        </Typography>
      </div>
      <br />
      <div className="show-item">
        <Typography variant="h4">Feb 24, 2023 | The Blue Room</Typography>
        <Typography variant="body1">Bellingham, WA</Typography>
      </div>
    </div>
  );
}

export default ShowList;