import {
  get, getDatabase, push, ref,
} from 'firebase/database';
import { app } from '../firebase';
import { ShowType } from './Shows.types';

const database = getDatabase(app);
const showsRef = ref(database, 'shows');

let showsPromise: Promise<ShowType[]> | null = null;

async function loadShows(): Promise<ShowType[]> {
  const snapshot = await get(showsRef);
  const value: Record<string, Partial<ShowType>> = snapshot.val() ?? {};
  return Object.values(value).map((show) => ({
    date: show.date ?? '',
    venue: show.venue ?? '',
    link: show.link ?? '',
    location: show.location ?? '',
  }));
}

export function fetchShows(): Promise<ShowType[]> {
  if (!showsPromise) {
    showsPromise = loadShows().catch((error) => {
      showsPromise = null;
      throw error;
    });
  }
  return showsPromise;
}

export async function addShow(show: ShowType): Promise<void> {
  const newShow: ShowType = {
    date: show.date.trim(),
    venue: show.venue.trim(),
    location: show.location.trim(),
    link: show.link.trim(),
  };
  await push(showsRef, newShow);
  showsPromise = null;
}
