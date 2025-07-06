# Nomadica Homes Admin Dashboard

This project includes a basic admin dashboard powered by Supabase.

## Setup

1. Copy `.env` and provide your Supabase credentials. Example:

```dotenv
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```


2. Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

The admin dashboard is available at `/admindashboard` and currently does not require authentication.

## Linting

Run `npm run lint` to check the code style. If dependencies are missing in your environment the command may fail.
