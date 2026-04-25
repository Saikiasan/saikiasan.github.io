# Development Workflow

This document outlines the standard workflow for developing and maintaining the Saikia Codes project.

## 🛠 Local Development

### 1. Environment Setup
Ensure you have the following environment files in the root directory:
- `.env.development`: Used by `gatsby develop`.
- `.env.production`: Used by `gatsby build`.

Both files should contain the following keys (prefixed with `GATSBY_` to be accessible in the browser):
```bash
GATSBY_FIREBASE_API_KEY="..."
GATSBY_FIREBASE_AUTH_DOMAIN="..."
GATSBY_FIREBASE_PROJECT_ID="saikiacode"
GATSBY_FIREBASE_STORAGE_BUCKET="..."
GATSBY_FIREBASE_MESSAGING_SENDER_ID="..."
GATSBY_FIREBASE_APP_ID="..."
```

### 2. Running the Site
```bash
npm run develop
```
The site will be available at `http://localhost:8000`.

### 3. Running Cloud Functions Emulators (Optional)
If you need to test functions locally:
```bash
cd functions
npm run serve
```

## 📦 Deployment Process

### 1. Build the Frontend
```bash
npm run build
```

### 2. Deploy to Firebase
You can deploy everything or specific parts:
```bash
# Deploy everything
firebase deploy

# Deploy only specific parts
firebase deploy --only functions
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
firebase deploy --only hosting
```

## 🧪 Testing the Admin Flow
1. Start the site locally.
2. Navigate to `http://localhost:8000/admin`.
3. Sign in with Google.
4. If it's your first time and you are the configured admin, the site will call the `checkAndSetAdmin` function.
5. You may need to refresh the page after the claim is set to see the dashboard.

## 🧹 Code Quality
- **Prettier**: Run `npx prettier --write .` to format code.
- **SCSS**: Global styles are in `src/styles/sass/global.scss`. Use the `.neu-*` classes for consistency.

---
*Last Updated: April 2026*
