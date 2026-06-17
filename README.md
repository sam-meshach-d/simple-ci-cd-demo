# Simple CI/CD Demo

This project is a tiny website for learning Git, GitHub, GitHub Actions, and Vercel deployment by doing the full flow.

## What You Are Building

- A static website in `index.html`, `styles.css`, and `src/app.js`.
- A small test in `tests/site.test.js`.
- A CI workflow in `.github/workflows/ci.yml`.
- A CD workflow in `.github/workflows/deploy.yml`.

## First Principles

Your computer is where you write the code.

Git is the local history system. It records snapshots of your files as commits.

GitHub is the remote place where your Git repository lives online.

GitHub Actions is an automation runner. When you push code to GitHub, it can start a fresh virtual machine and run commands from a YAML file.

CI means Continuous Integration. It checks whether new code still works. In this project, CI runs:

```bash
npm ci
npm test
```

CD means Continuous Deployment. After code passes checks, CD ships it somewhere users can reach. In this project, CD deploys the site to Vercel.

Vercel is the hosting platform. It receives your site files, builds them if needed, and gives you a public URL.

## Local Commands

Install Node.js first from <https://nodejs.org/>. Then you can run the same commands GitHub Actions will run.

Install from the lockfile:

```bash
npm ci
```

Run the test:

```bash
npm test
```

Start the website locally:

```bash
npm run dev
```

## Git Flow

Create the first commit:

```bash
git init
git add .
git commit -m "Add simple CI/CD demo site"
```

After creating a GitHub repository, connect your local repo to GitHub:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/simple-ci-cd-demo.git
git push -u origin main
```

When the code reaches GitHub, the CI workflow runs automatically.

## GitHub Actions Flow

The CI workflow lives at:

```text
.github/workflows/ci.yml
```

It runs on:

- pushes to `main`
- pull requests

The deployment workflow lives at:

```text
.github/workflows/deploy.yml
```

It runs on:

- pushes to `main`

It tests first. If tests pass, it deploys to Vercel.

## Vercel Secrets Needed

Add these in GitHub:

```text
Repository Settings -> Secrets and variables -> Actions -> New repository secret
```

Required secrets:

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

What they mean:

- `VERCEL_TOKEN`: lets GitHub Actions deploy using your Vercel account.
- `VERCEL_ORG_ID`: tells Vercel which account/team owns the project.
- `VERCEL_PROJECT_ID`: tells Vercel which project to deploy.

## How To Get Vercel Values

Install and log in to the Vercel CLI:

```bash
npm i -g vercel
vercel login
```

Link this folder to a Vercel project:

```bash
vercel link
```

This creates a `.vercel/project.json` file locally. Do not commit the `.vercel` folder.

Inside `.vercel/project.json`, you can find:

```json
{
  "orgId": "your_org_id",
  "projectId": "your_project_id"
}
```

Use those values for:

```text
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

Create `VERCEL_TOKEN` from:

```text
Vercel Dashboard -> Account Settings -> Tokens
```

## The Whole Pipeline

```text
Edit code locally
  -> git add .
  -> git commit
  -> git push
  -> GitHub Actions CI runs tests
  -> if tests pass, GitHub Actions CD deploys to Vercel
  -> Vercel gives you a public website URL
```
