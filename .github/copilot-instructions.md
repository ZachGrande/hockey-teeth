# Copilot instructions

## UI (`ui/hockey-teeth`)

### Never test against the production Firebase database

The `shows` data lives in the production Firebase Realtime Database (`src/data/showsApi.ts`). Local testing and browser automation must use the local mock instead.

- Run the dev server with `npm run dev:mock` (from `ui/hockey-teeth`). This runs `vite --mode mock`, which loads `.env.mock` (`VITE_MOCK_SHOWS=true`).
- In mock mode, `fetchShows` and `addShow` use the in-memory fixtures in `src/data/mocks/showsMock.ts`. No requests go to Firebase's database hosts (`*.firebaseio.com` / `*.firebasedatabase.app`).
- Choose a scenario with the `mockShows` query param, e.g. `http://localhost:3000/home?mockShows=none`:
  - `default`: one ticketed upcoming show, one "at the door" upcoming show, and past shows
  - `one`: one ticketed upcoming show
  - `two`: two ticketed upcoming shows
  - `door`: one upcoming show without a ticket link
  - `none`: no upcoming shows (past shows only)
  - `error`: the request fails
- Need another state? Add a scenario to `showsMock.ts`. Don't put temporary mock data in components or pages.
- Keep fixture dates relative to today (`isoDaysFromToday`) so they never go stale.
- In mock mode, `addShow` only appends to memory, so the data is lost on reload. Don't sign in to `/admin` with real accounts to test writes.
- The mock is behind `import.meta.env.DEV` and imported dynamically, so production builds never include it. Keep new mock code behind the same guard. After changing it, run `npm run build` and confirm `grep -l "Mock shows request failed" build/assets/*` finds nothing (that string only exists in the mock module).
- When verifying in a browser, confirm the network log has no requests matching `firebaseio|firebasedatabase`.
- Firebase Auth, Firebase Analytics, and the Google Analytics tag still load in dev. None of them read from or write to the database.

### Validation

There is no test runner. Validate UI changes with `npm run lint` and `npm run build`.
