# Daniel Rodrigues Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Development

Install dependencies with Yarn, then run:

```sh
yarn dev
```

## Content

- Edit profile details and social URLs in `src/data/profile.ts`.
- Update technology groups in `src/data/stack.ts` and place replacement icons in `src/assets/stack/`.
- Maintain experience, education, and certificates in `src/data/resume.ts`.
- Add or update projects in `src/data/projects.ts`; project images live in `src/assets/projects/`.
- Replace `src/assets/profile/myphoto.jpeg` with Daniel’s preferred portrait when needed.

## Checks

```sh
yarn build
yarn lint
yarn format:check
```

The Vercel rewrite serves the client application for the `/resume` and `/portfolio` routes on direct visits.
