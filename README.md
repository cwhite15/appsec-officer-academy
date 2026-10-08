# AppSec Communication Officer Academy

A self-contained, ten-question qualification assessment based on the supplied **Communication Officer Questions and Answers** PDF. The experience preserves the SAINTCON AppSec Academy's retro-futurist visual system while adding answer entry, review, scoring, and a detailed result ledger.

## Assessment behavior

- Questions 1, 2, 3, 6, 8, 9, and 10 accept one answer.
- Questions 4, 5, and 7 accept multiple answers and use exact-set scoring.
- Responses are saved to `sessionStorage` as they change and survive refreshes in the same browser tab.
- A review screen flags unanswered items and prevents submission until all ten are complete.
- Final results show score, percentage, submitted answers, and correct answers for missed questions.
- Scores of 90% or better reveal a copyable Hackers Challenge CTF token.
- Starting a new session or closing the browser tab clears the session result.

## Run it

With Node.js 20 or later:

```sh
npm start
```

Open <http://localhost:8080>.

With Docker:

```sh
docker compose up --build
```

Open <http://localhost:8087>.

There are no package dependencies, external APIs, accounts, or build steps.

## Test it

```sh
npm test
```

Tests validate question-bank integrity, the source PDF answer key, single-choice grading, exact multi-select grading, and aggregate scoring.

## Project map

```text
appsec-officer-academy/
|-- assets/             Academy artwork, fonts, and responsive styles
|-- js/app.js           Hash routing, session state, assessment UI, and results
|-- js/config.js        Event, branding, storage key, assets, and color theme
|-- js/questions.js     PDF-derived question bank and pure grading helpers
|-- test/               Node built-in tests
|-- Dockerfile          Production nginx image
|-- docker-compose.yml  One-command local deployment on port 8087
|-- FACILITATOR.md      Shared-station operation notes
`-- index.html          Application shell
```

## Content maintenance

The question copy and answer key are kept in `js/questions.js`. Question 6 intentionally preserves the PDF's time-sensitive November 18 / SAINTCON 2026 recap wording. Update that entry when the chapter announces a new meeting.
