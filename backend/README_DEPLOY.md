Backend Deploy Helpers

This file contains quick instructions and files helpful for deploying the backend to Render.

Files added:
- `Procfile` - tells Render how to start the app: `web: node server.js`
- `render.yaml` - optional Render config file (you can import this when creating a service)
- `.env.example` - example environment variables (do NOT commit real secrets)

Quick deploy steps (Render)
1. Push code to GitHub (branch you will deploy from).
2. Go to https://render.com and sign in.
3. Create New → Web Service → Connect GitHub repo → Select branch (e.g., `render-setup`).
4. Set the build command to `npm install` and start command to `node server.js` (Procfile is optional but useful).
5. Add environment variables in Render dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
6. Create service and wait for build.

CORS reminder
- After deploying, update `server.js` CORS allowed origins to include your Vercel frontend URL (e.g., `https://yourapp.vercel.app`).

If you want, I can create a branch `render-setup` and push these files there for you to use when creating the Render service.
