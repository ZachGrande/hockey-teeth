import { ShowType } from '../Shows.types';

// Local, in-memory stand-in for the Firebase `shows` node. Only loaded by `npm run dev:mock`.
const scenarioNames = ['default', 'one', 'door', 'none', 'error'] as const;
export type MockShowsScenario = typeof scenarioNames[number];

const MOCK_LATENCY_MS = 400;

// Dates are relative to today so fixtures never go stale.
function isoDaysFromToday(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

const ticketedShow = (days: number): ShowType => ({
  date: isoDaysFromToday(days),
  venue: 'The Mock Arcade',
  location: 'Seattle, WA',
  link: 'https://example.com/mock-tickets',
});

const atDoorShow = (days: number): ShowType => ({
  date: isoDaysFromToday(days),
  venue: 'Mock Door Tavern',
  location: 'Tacoma, WA',
  link: '',
});

const pastShows = (): ShowType[] => [
  {
    date: isoDaysFromToday(-14), venue: 'Mock Past Hall', location: 'Portland, OR', link: '',
  },
  {
    date: isoDaysFromToday(-60), venue: 'Mock Basement', location: 'Seattle, WA', link: '',
  },
];

const scenarios: Record<MockShowsScenario, () => ShowType[]> = {
  default: () => [ticketedShow(10), atDoorShow(24), ...pastShows()],
  one: () => [ticketedShow(10), ...pastShows()],
  door: () => [atDoorShow(10), ...pastShows()],
  none: () => pastShows(),
  error: () => {
    throw new Error('Mock shows request failed');
  },
};

const addedShows: ShowType[] = [];

function isScenario(value: string | null): value is MockShowsScenario {
  return scenarioNames.some((name) => name === value);
}

function currentScenario(): MockShowsScenario {
  const param = new URLSearchParams(window.location.search).get('mockShows');
  return isScenario(param) ? param : 'default';
}

export async function loadMockShows(): Promise<ShowType[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, MOCK_LATENCY_MS);
  });
  return [...scenarios[currentScenario()](), ...addedShows];
}

export async function addMockShow(show: ShowType): Promise<void> {
  addedShows.push(show);
}
