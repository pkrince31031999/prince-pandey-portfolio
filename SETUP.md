# Setup guide

How this portfolio was put online, and how `princepandey.in` is connected to it.

The site is a Next.js app. It runs on Vercel. The domain stays at the registrar (GoDaddy). Vercel is the house. The domain is the street address. DNS is the sign that points the address to the house.

## What is already done

- The project is deployed on Vercel.
- Live site: https://prince-pandey-portfolio.vercel.app
- Vercel project: `prince-pandey-portfolio` (team `we-can-do`)
- Dashboard: https://vercel.com/we-can-do/prince-pandey-portfolio
- `princepandey.in` and `www.princepandey.in` are added to that project.
- The public site address is set to `https://princepandey.in`.

The domain will not open the site until the DNS records in step 6 are saved.

## 1. What you need

- A Vercel account. This deploy is signed in as `pkrince31031999`.
- The domain `princepandey.in`.
- Access to the domain’s DNS page (GoDaddy).
- Node.js 18.18 or newer, only if you deploy again from this computer.

## 2. Run the site on your computer

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 3. Set the public site address

The file `.env.production` holds the address visitors should see:

```
NEXT_PUBLIC_SITE_URL=https://princepandey.in
```

Leave `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` empty until a verified sender exists. The contact form then opens an email draft instead of sending mail by itself.

Do not commit real API keys.

## 4. Deploy to Vercel

From this project folder, after `vercel login`:

```bash
vercel deploy --yes --prod --create-if-missing --project prince-pandey-portfolio --build-env NEXT_PUBLIC_SITE_URL=https://princepandey.in --env NEXT_PUBLIC_SITE_URL=https://princepandey.in
```

Vercel detects Next.js, runs `npm run build`, and publishes the site.

When it finishes, the production address is:

https://prince-pandey-portfolio.vercel.app

The first deploy used that command. Later changes should go through GitHub. The steps are in `CICD.md`. A push to `main` builds and publishes the site automatically.

## 5. Add the domain on Vercel

This is already done. The commands were:

```bash
vercel domains add princepandey.in prince-pandey-portfolio --scope we-can-do
vercel domains add www.princepandey.in prince-pandey-portfolio --scope we-can-do
```

You can also do it in the browser:

1. Open https://vercel.com/we-can-do/prince-pandey-portfolio/settings/domains
2. Add `princepandey.in`.
3. Add `www.princepandey.in`.

## 6. Point the domain at Vercel (GoDaddy)

1. Open https://godaddy.com and sign in.
2. Click **My Products**.
3. Find **princepandey.in**.
4. Click **DNS** or **Manage DNS**.
5. If the nameservers are `ns1.registry.in` through `ns4.registry.in`, switch them to **GoDaddy nameservers** and save. Then open the DNS page again.
6. Add these records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `216.198.79.1` |
| A | `@` | `64.29.17.1` |
| CNAME | `www` | `04b0a1945cc8cb45.vercel-dns-017.com` |

7. Delete any other **A** or **CNAME** rows for `@` or `www`. Those would send people to the old place.
8. Leave **MX** rows alone. Those are for email.
9. Save.

`@` means `princepandey.in`. `www` means `www.princepandey.in`.

## 7. Wait, then check

DNS can update in a few minutes. It can also take up to 48 hours.

Then open:

- https://princepandey.in
- https://www.princepandey.in

Both should show the portfolio. Vercel turns on HTTPS by itself after the records are correct.

To check from this computer:

```bash
vercel domains verify princepandey.in --scope we-can-do
vercel domains verify www.princepandey.in --scope we-can-do
```

A good result says the domain is configured. Until the GoDaddy records are saved, the check says the DNS configuration is invalid. That is expected.

## Contact form

The form on the live site opens the visitor’s email app until Resend is set up.

When a sender on `princepandey.in` is verified in Resend, add these in the Vercel project under **Settings → Environment Variables**, then deploy again:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` — example: `Prince Pandey <hello@princepandey.in>`
- `CONTACT_TO_EMAIL` — optional. If empty, mail goes to the address in the portfolio.

## Do not do this

- Do not upload this project into GoDaddy `public_html`. GoDaddy shared hosting cannot run this Next.js app.
- Do not change nameservers to Vercel and also add the A and CNAME records. Use one method. This guide uses GoDaddy DNS plus the three records above.
