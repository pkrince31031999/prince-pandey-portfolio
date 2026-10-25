# Prince Pandey — Portfolio

Personal portfolio for Prince Pandey, Software Engineer, Backend Developer, and DevOps Engineer. Content comes from the resume. Experience cards are employment summaries, not independently launched products.

## Run locally

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Resume

The downloadable file is `public/prince-pandey-resume.pdf`. Replace that file to update the download.

## Contact form

Direct email and phone links always work.

Automatic delivery uses [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — Resend API key. Server-side only.
- `CONTACT_FROM_EMAIL` — a sender on a domain verified in Resend, for example `Prince Pandey <hello@your-domain.com>`.
- `CONTACT_TO_EMAIL` — optional. Defaults to `princepandey31031999@yahoo.com`.
- `NEXT_PUBLIC_SITE_URL` — public site URL, used for canonical and Open Graph links. Example: `https://your-domain.com`.

If `RESEND_API_KEY` or `CONTACT_FROM_EMAIL` is missing, the form does not pretend the message was delivered. It returns a mailto draft the visitor can send from their own email app.

## Profile links

LinkedIn and GitHub were not on the resume, so those links are hidden. Add a full `https` URL in `data/resume.ts` under `profiles` to show one.

## Deploy on Hostinger

Use a Node.js web app, not a file upload into `public_html`. That option is on Business Web Hosting and the Cloud plans.

In hPanel: Websites → Create Website → Node.js web app. Import GitHub, or upload a zip of this project without `node_modules` and `.next`.

Build settings:

- Framework: Next.js
- Node.js: 22
- Build command: `npm run build`
- Output directory: `.next`
- Root directory: `/`

Set this environment variable before the first deploy, using the real site address with no trailing slash:

`NEXT_PUBLIC_SITE_URL=https://your-domain.com`

Leave `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` empty unless a verified sender is ready. The form then opens an email draft instead of failing.

Hostinger builds the app and starts the server. Do not set `output: "export"`.

A zip prepared for upload can be rebuilt locally by copying the project and leaving out `node_modules`, `.next`, and `.env` files.
