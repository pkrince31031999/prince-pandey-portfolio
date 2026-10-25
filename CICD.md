# Automatic deploy

After this setup, a push to GitHub updates the live site. You do not run the deploy command again.

Vercel is already hosting the site. GitHub becomes the place the code lives. Vercel watches the `main` branch. Each push builds the site and publishes it.

## What is already done

- The site is live at https://prince-pandey-portfolio.vercel.app
- Vercel project: `prince-pandey-portfolio` (team `we-can-do`)
- Dashboard: https://vercel.com/we-can-do/prince-pandey-portfolio
- Domain setup is in `SETUP.md`

## 1. Install Git

If PowerShell says `git` is not recognized, install Git from https://git-scm.com/download/win. Close PowerShell and open it again.

## 2. Create the GitHub repository

1. Open https://github.com/new
2. Name it `prince-pandey-portfolio`
3. Leave it empty. Do not add a README, a `.gitignore`, or a license. This project already has those files.
4. Click **Create repository**
5. Copy the HTTPS address. It looks like `https://github.com/YOUR-USERNAME/prince-pandey-portfolio.git`

## 3. Put this project on GitHub

In PowerShell:

```powershell
cd c:\Users\acer\prince-pandey-portfolio
git init
git add .
git status
git commit -m "Add Prince Pandey portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/prince-pandey-portfolio.git
git push -u origin main
```

Replace the `origin` address with the one you copied.

`git status` should not list `node_modules`, `.next`, or `.env`. Those are ignored. Do not commit a real `RESEND_API_KEY`.

When the browser opens, sign in to GitHub and approve the upload. GitHub does not accept your account password for this step.

## 4. Connect GitHub to the existing Vercel project

Use the project that is already live. Do not click **Add New Project**. That would create a second site.

1. Open https://vercel.com/we-can-do/prince-pandey-portfolio/settings/git
2. Click **Connect Git Repository**
3. Choose **GitHub**
4. Approve the Vercel GitHub app if GitHub asks
5. Select `prince-pandey-portfolio`
6. Set the production branch to `main`

Vercel then deploys the code that is on `main`.

## 5. Site address on Vercel

This is already saved:

| Name | Value | Environment |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://princepandey.in` | Production, Preview |

You can see it at https://vercel.com/we-can-do/prince-pandey-portfolio/settings/environment-variables

Leave `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` empty until email sending is ready. The contact form opens an email draft until those exist.

## 6. How to publish a change

1. Edit the site.
2. Save the files.
3. Run:

```powershell
cd c:\Users\acer\prince-pandey-portfolio
git add .
git commit -m "Describe the change"
git push
```

4. Open https://vercel.com/we-can-do/prince-pandey-portfolio
5. A new row appears under **Deployments**
6. When it says **Ready**, refresh the website

A push to `main` updates:

- https://prince-pandey-portfolio.vercel.app
- https://princepandey.in and https://www.princepandey.in, after the GoDaddy records in `SETUP.md` are saved

A different branch, or a pull request, gets its own preview address. That preview does not replace the live site.

## 7. If a deploy fails

1. Open the failed deployment in Vercel
2. Read the build log
3. Fix the code on your computer
4. Commit and push again

The usual causes are a type error, a missing file, or a bad environment variable. The new push replaces the failed one. You do not delete the failed deployment.

## What you do not need

- A GitHub Actions file. Vercel builds the project when GitHub receives the push.
- Another upload to GoDaddy. GoDaddy only holds the domain records from `SETUP.md`.
