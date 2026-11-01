import {
  get, getDatabase, push, ref,
} from 'firebase/database';
import { app } from '../firebase';
import { ShowType } from './Shows.types';

// Dev-only switch (`npm run dev:mock`). `import.meta.env.DEV` is false in production builds,
// so the mock module is never bundled or used there.
const useMockShows = import.meta.env.DEV && import.meta.env.VITE_MOCK_SHOWS === 'true';

const getShowsRef = () => ref(getDatabase(app), 'shows');

let showsPromise: Promise<ShowType[]> | null = null;

async function loadShows(): Promise<ShowType[]> {
  if (useMockShows) {
    const { loadMockShows } = await import('./mocks/showsMock');
    return loadMockShows();
  }

  const snapshot = await get(getShowsRef());
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

  if (useMockShows) {
    const { addMockShow } = await import('./mocks/showsMock');
    await addMockShow(newShow);
  } else {
    await push(getShowsRef(), newShow);
  }
  showsPromise = null;
}
