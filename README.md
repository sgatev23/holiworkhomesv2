# Nomadica Homes Admin Dashboard

This project includes a basic admin dashboard powered by Supabase.

## Setup

1. Copy `.env` and provide your Supabase credentials. Example:

```dotenv
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_ADMIN_EMAIL=simeon@nomadica.homes
VITE_ADMIN_PASSWORD=Simeon123
```

2. Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

The admin login page is available at `/adminlogin`. By default the login form is prefilled with the credentials from `VITE_ADMIN_EMAIL` and `VITE_ADMIN_PASSWORD`.

## Linting

Run `npm run lint` to check the code style. If dependencies are missing in your environment the command may fail.
