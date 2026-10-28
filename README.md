# AppSec Communication Officer Academy

A self-contained, ten-question qualification assessment based on the supplied **Communication Officer Questions and Answers** PDF. The experience preserves the SAINTCON AppSec Academy's retro-futurist visual system while adding answer entry, review, scoring, and a detailed result ledger.

## Assessment behavior

- Questions 1, 2, 3, 6, 8, 9, and 10 accept one answer.
- Questions 4, 5, and 7 accept multiple answers and use exact-set scoring.
- Responses are saved to `sessionStorage` as they change and survive refreshes in the same browser tab.
- A review screen flags unanswered items and prevents submission until all ten are complete.
- Final results show score, percentage, submitted answers, and correct answers for missed questions.
- Scores of 90% or better reveal a copyable Hackers Challenge CTF token.
- The home screen shows community QR codes for the Wasatch AppSec Slack and the AppSec Pro Bono Initiative; the results screen adds an OWASP Salt Lake City Meetup QR code. Each code prints its URL beneath it, and URLs, labels, and images live in `js/config.js` under `community`.
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

There are no package dependencies, accounts, or build steps. Anonymous question start/completion signals are sent to `https://appsec.community/api/activity`, including when the assessment runs on localhost; answers and scores are never transmitted.

**Reset session** clears assessment state plus the anonymous participant and browser-session identifiers, then reloads for the next attendee. Any queued, unsent events are retained for delivery.

## Test it

```sh
npm test
```

Tests validate question-bank integrity, the source PDF answer key, single-choice grading, exact multi-select grading, aggregate scoring, and the community QR links.

## Project map

```text
appsec-officer-academy/
|-- assets/             Academy artwork, fonts, and responsive styles
|-- js/app.js           Hash routing, session state, assessment UI, and results
|-- js/config.js        Event, branding, storage key, assets, community links, and color theme
|-- js/questions.js     PDF-derived question bank and pure grading helpers
|-- test/               Node built-in tests
|-- Dockerfile          Production nginx image
|-- docker-compose.yml  One-command local deployment on port 8087
|-- FACILITATOR.md      Shared-station operation notes
`-- index.html          Application shell
```

## Content maintenance

The question copy and answer key are kept in `js/questions.js`. Question 6 intentionally preserves the PDF's time-sensitive November 18 / SAINTCON 2026 recap wording. Update that entry when the chapter announces a new meeting.

The AppSec Pro Bono Initiative form is not published yet, so its tile shows a placeholder image and "Form link coming soon". When the form is live, set `community.proBono.url` in `js/config.js` and replace `assets/qr/pro-bono-form.svg` with the form's QR code.
