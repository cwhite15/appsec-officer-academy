# Communication Officer Assessment Guide

## Before a session

1. Open the academy home screen.
2. Select **Reset session** if a previous attendee's answers are visible.
3. Confirm the header says **Assessment system online**.

## Assessment flow

Attendees answer ten questions about the OWASP Foundation and OWASP Salt Lake City / Wasatch AppSec. Responses save automatically within the current browser tab. They can move between questions in any order, review all selections, and submit only after all questions are answered.

Questions 4, 5, and 7 say **Select all that apply**. Those items receive credit only when every correct answer and no incorrect answer is selected.

After submission, the results screen shows the score and a question-by-question answer ledger. Missed questions include both the attendee's response and the correct response.

Attendees who score 90% or better also receive the Hackers Challenge token on the results screen. The copy button uses the same token presentation as the Cadet Academy.

## Shared stations

Use **Start new session** on the results screen, or **Reset session** in the header, between attendees. State is stored only in `sessionStorage`, so closing the tab also removes it. No response data leaves the browser.

## Content note

Question 6 reproduces the source PDF's dated meeting information: November 18, SAINTCON 2026 Recap, location TBD. Review and update `js/questions.js` when event details change.
