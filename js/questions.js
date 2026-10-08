export const questions = [
  {
    id: 1,
    mode: "single",
    prompt: "What is the OWASP Foundation?",
    choices: [
      { id: "a", label: "A foundation that develops cybersecurity and privacy standards, guidelines, best practices, and resources to meet the needs of U.S. industry, federal agencies, and the broader public." },
      { id: "b", label: "A nonprofit organization formed in 2007 to support the development of Linux and open-source software." },
      { id: "c", label: "The world's largest nonprofit foundation dedicated to improving software security through open-source collaboration, education, and innovation." },
      { id: "d", label: "An organization founded with the sole purpose of eradicating pests, specifically wasps." }
    ],
    correctIds: ["c"]
  },
  {
    id: 2,
    mode: "single",
    prompt: "What is the OWASP Top 10?",
    choices: [
      { id: "a", label: "The reference standard for the 10 most popular web application security risks." },
      { id: "b", label: "The reference standard for the 10 most critical web application security risks." },
      { id: "c", label: "The reference standard for the 10 most annoying web application security risks." },
      { id: "d", label: "The reference standard for the 10 least critical web application security risks." }
    ],
    correctIds: ["b"]
  },
  {
    id: 3,
    mode: "single",
    prompt: "True or False: OWASP Salt Lake City / Wasatch AppSec is a local chapter of the OWASP Foundation's global community that typically meets once a month (in person or virtually) to discuss all things OWASP, application security, or related topics.",
    choices: [{ id: "a", label: "True" }, { id: "b", label: "False" }],
    correctIds: ["a"]
  },
  {
    id: 4,
    mode: "multiple",
    prompt: "Who are OWASP Salt Lake City / Wasatch AppSec meetings open to?",
    choices: [
      { id: "a", label: "Software developers" },
      { id: "b", label: "Application security professionals" },
      { id: "c", label: "Security researchers" },
      { id: "d", label: "Application security enthusiasts" },
      { id: "e", label: "Students" }
    ],
    correctIds: ["a", "b", "c", "d", "e"]
  },
  {
    id: 5,
    mode: "multiple",
    prompt: "What are examples of topics that have been discussed at previous meetings?",
    choices: [
      { id: "a", label: "OWASP Top 10 for GenAI." },
      { id: "b", label: "Building an AppSec program in an AI world." },
      { id: "c", label: "A deep dive on passkeys." },
      { id: "d", label: "Balance Security & Scalability while enabling a high growth, fast paced business." }
    ],
    correctIds: ["a", "b", "c", "d"]
  },
  {
    id: 6,
    mode: "single",
    prompt: "When is our next meeting, and what is the topic?",
    choices: [
      { id: "a", label: "Date: November 18th, Topic: SAINTCON 2026 Recap, Location: TBD." },
      { id: "b", label: "The summer solstice." }
    ],
    correctIds: ["a"]
  },
  {
    id: 7,
    mode: "multiple",
    prompt: "Why should I attend a meeting?",
    choices: [
      { id: "a", label: "To network with other professionals." },
      { id: "b", label: "To brainstorm solutions to current issues facing our members." },
      { id: "c", label: "To learn something new." },
      { id: "d", label: "To share your own experiences on a topic." }
    ],
    correctIds: ["a", "b", "c", "d"]
  },
  {
    id: 8,
    mode: "single",
    prompt: "Do I need to pay for a membership to attend meetings?",
    choices: [
      { id: "a", label: "Yes, and you can only pay in cryptocurrency." },
      { id: "b", label: "No, it is free for everyone; no membership is required." }
    ],
    correctIds: ["b"]
  },
  {
    id: 9,
    mode: "single",
    prompt: "How do I get in contact and stay up to date with all things OWASP Salt Lake City / Wasatch AppSec?",
    choices: [
      { id: "a", label: "Slack", href: "https://join.slack.com/t/wasatchappsec/shared_invite/zt-1wgxnyqpt-FgwaUExorcc3o5gbdpFdhw" },
      { id: "b", label: "Carrier pigeon" },
      { id: "c", label: "myspace" },
      { id: "d", label: "Smoke signal" }
    ],
    correctIds: ["a"]
  },
  {
    id: 10,
    mode: "single",
    prompt: "True or False: I can learn more about the OWASP Foundation and its standards, including the OWASP Top 10, at https://owasp.org.",
    choices: [{ id: "a", label: "True" }, { id: "b", label: "False" }],
    correctIds: ["a"]
  }
];

export function normalizeAnswer(answer) {
  return [...new Set(Array.isArray(answer) ? answer : [])].sort();
}

export function gradeQuestion(question, answer) {
  const selected = normalizeAnswer(answer);
  const expected = normalizeAnswer(question.correctIds);
  return selected.length === expected.length && selected.every((id, index) => id === expected[index]);
}

export function gradeAssessment(answers) {
  const results = questions.map((question) => ({
    id: question.id,
    selectedIds: normalizeAnswer(answers?.[question.id]),
    correct: gradeQuestion(question, answers?.[question.id])
  }));
  return { results, score: results.filter((result) => result.correct).length, total: questions.length };
}

export function qualifiesForCtf(score, total, minimumPercent = 90) {
  if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return false;
  return (score / total) * 100 >= minimumPercent;
}
