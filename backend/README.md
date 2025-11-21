# EasyPagar Backend

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/create-admin` - Create admin account (run once)
- `POST /api/auth/login` - Admin login

### Leads
- `POST /api/leads/submit` - Submit a new lead
- `GET /api/leads` - Get all leads (requires JWT)
- `GET /api/leads/stats` - Get lead statistics (requires JWT)
- `DELETE /api/leads/:id` - Delete a lead (requires JWT)

## Environment Variables
- `PORT` - Server port (default: 5000)
- MongoDB URI is hardcoded for now
- JWT Secret is hardcoded for now
