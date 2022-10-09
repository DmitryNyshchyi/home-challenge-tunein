# home-challenge-tunein

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Comments

I added comments in the code for change/improve if I had more time.
You can to found that by ```TODO to improve```.

---

Answers for questions:

- Be creative with tags. Can you help a user decide what to listen to based on tags?

I created a filter on [Home page] that uses tags, users can to found stations by tag and also users can see the [Similar stations] block on the [Station page].

In general, we can save tags from stations that users listened and to show similar stations at top of the results.

---

- What can the reliability and popularity information associated with a station be used for?

Popularity:
1. We could recommend popular stations by tag on the [Station page] (for example creating carousel of popular stations).
2. Create block of popular stations on the [Home page].
3. Add sorting by popularity.

Reliability:
1. We could recommend and promote reliable stations for users for stable, reliable, and trouble-free operation.
2. Put these station at the top of result.
3. Add sorting by reliability.

---
