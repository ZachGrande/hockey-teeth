import React from "react";

export type ShowType = {
  data: {
    linkIncluded: any;
    location: string;
    link: string;
    date: string;
    venue: string;
  };
  key: React.Key | null | undefined;
}