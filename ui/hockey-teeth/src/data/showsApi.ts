import { get, getDatabase, ref } from 'firebase/database';
import { app } from '../firebase';
import { ShowType } from './Shows.types';

const database = getDatabase(app);

let showsPromise: Promise<ShowType[]> | null = null;

async function loadShows(): Promise<ShowType[]> {
  const snapshot = await get(ref(database, 'shows'));
  const value: Record<string, Partial<ShowType>> = snapshot.val() ?? {};
  return Object.values(value).map((show) => ({
    date: show.date ?? '',
    venue: show.venue ?? '',
    link: show.link ?? '',
    location: show.location ?? '',
  }));
}

function fetchShows(): Promise<ShowType[]> {
  if (!showsPromise) {
    showsPromise = loadShows().catch((error) => {
      showsPromise = null;
      throw error;
    });
  }
  return showsPromise;
}

export default fetchShows;
