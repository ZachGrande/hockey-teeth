import { useEffect, useState } from 'react';
import { ShowType } from './Shows.types';
import { fetchShows } from './showsApi';

export interface Show extends ShowType {
  day: Date;
  displayDate: string;
}

const displayFormat: Intl.DateTimeFormatOptions = {
  year: 'numeric', month: 'long', day: 'numeric',
};

function toShow(show: ShowType): Show {
  const day = new Date(`${show.date}T00:00:00`);
  return {
    ...show,
    day,
    displayDate: day.toLocaleDateString('en-US', displayFormat),
  };
}

export function findTicketedShow(shows: Show[]) {
  return shows.find((show) => Boolean(show.link));
}

export default function useShows(isUpcoming: boolean) {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetchShows()
      .then((data) => {
        if (cancelled) return;

        // Offset by 1 day to adjust for the show date beginning at T00:00:00
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - 1);

        const filtered = data
          .map(toShow)
          .filter(({ day }) => (isUpcoming ? day >= cutoff : day < cutoff))
          .sort((a, b) => (isUpcoming
            ? a.day.getTime() - b.day.getTime()
            : b.day.getTime() - a.day.getTime()));

        setShows(filtered);
        setError(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to load shows', err);
        setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isUpcoming]);

  return { shows, loading, error };
}
