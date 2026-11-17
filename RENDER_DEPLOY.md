# Hosting "A Little World for Lily" on Render

This project is preconfigured for one-click deployment to [Render](https://render.com) using `render.yaml` and a Node + Express full-stack server (`server.ts`).

## 1. Before You Deploy (Optional Personalization)

- **Add Your Photograph**: Create a `private-assets` folder in the project root and place your photo inside it as `private-assets/photo.jpg` (also supports `.jpeg`, `.png`, or `.webp`). It is served strictly behind Lily's birthday-date authentication (`/api/media/photo`), never exposed publicly.
- **Add Your Soundtrack MP3s**: Optionally place `hard-for-me.mp3`, `beautiful.mp3`, and `watch-me-burn.mp3` inside `private-assets/audio/` so the player & cake-cutting moment stream your own audio files behind authentication (otherwise the built-in instrumental synthesizer plays cleanly).
- **Customize Your Letter**: Open `server/content.ts` if you want to tweak any of the 7 chapters in `letter.chapters` or any scrapbook notes.

## 2. Deploy on Render

1. Push this repository to GitHub or GitLab.
2. In your Render Dashboard, choose **New + → Blueprint** (if using `render.yaml`) or **New + → Web Service**:
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Health Check Path**: `/api/health`
3. Under **Environment Variables**, set:
   - `NODE_ENV` = `production`
   - `AUTH_SECRET` = a long random secret string (auto-generated if you use Blueprint `render.yaml`)
4. Click **Deploy Web Service**.

## 3. Privacy & Security Notes

- The birthday date (`18-11-2006`) is verified on the server via a salted `scrypt` hash (`server/auth.ts`) and never included in client-side JavaScript.
- Wrong attempts trigger a temporary server-side rate-limit cooldown.
- Search engine indexing is blocked via `<meta name="robots" content="noindex, nofollow" />`, `X-Robots-Tag`, and `/robots.txt`.
