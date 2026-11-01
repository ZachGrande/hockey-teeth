import { ShowType } from '../Shows.types';

// Local, in-memory stand-in for the Firebase `shows` node. Only loaded by `npm run dev:mock`.

const MOCK_LATENCY_MS = 400;

// Dates are relative to today so fixtures never go stale.
function isoDaysFromToday(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

const ticketedShow = (
  days: number,
  venue = 'Climate Pledge Arena',
  location = 'Seattle, WA',
): ShowType => ({
  date: isoDaysFromToday(days),
  venue,
  location,
  link: 'https://example.com/mock-tickets',
});

const atDoorShow = (days: number): ShowType => ({
  date: isoDaysFromToday(days),
  venue: 'Sunset Tavern',
  location: 'Seattle, WA',
  link: '',
});

const pastShows = (): ShowType[] => [
  {
    date: isoDaysFromToday(-14), venue: 'The Blue Room', location: 'Bellingham, WA', link: '',
  },
  {
    date: isoDaysFromToday(-60), venue: 'Neumos', location: 'Seattle, WA', link: '',
  },
];

type Scenario = () => ShowType[];

const defaultScenario: Scenario = () => [ticketedShow(10), atDoorShow(24), ...pastShows()];

const scenarios = new Map<string, Scenario>([
  ['default', defaultScenario],
  ['one', () => [ticketedShow(10), ...pastShows()]],
  ['two', () => [
    ticketedShow(10),
    ticketedShow(24, 'Wrigley Field', 'Chicago, IL'),
    ...pastShows(),
  ]],
  ['door', () => [atDoorShow(10), ...pastShows()]],
  ['none', () => pastShows()],
  ['error', () => {
    throw new Error('Mock shows request failed');
  }],
]);

const addedShows: ShowType[] = [];

const SCENARIO_PARAM = 'mockshows';

function currentScenario(): Scenario {
  const entry = Array.from(new URLSearchParams(window.location.search))
    .find(([key]) => key.toLowerCase() === SCENARIO_PARAM);
  return (entry && scenarios.get(entry[1].toLowerCase())) || defaultScenario;
}

export async function loadMockShows(): Promise<ShowType[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, MOCK_LATENCY_MS);
  });
  return [...currentScenario()(), ...addedShows];
}

export async function addMockShow(show: ShowType): Promise<void> {
  addedShows.push(show);
}
