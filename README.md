# ScribeHealth

## Phase 0

A health-data digitization platform.

### Setup

1. Copy `.env.example` to `.env`.
2. Install dependencies: `npm install`
3. Start the DB: `docker-compose -f infra/docker-compose.yml up -d`
4. Run migrations: `npm run dev -w packages/db` (or appropriate prisma commands).

### Run

`npm run dev`

### Test

Unit tests: `npm run test`
E2E tests: `npm run test:e2e -w web`
