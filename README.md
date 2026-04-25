# Saikia Codes | Agency Portfolio & Command Center

A premium, high-performance digital agency portfolio and job management platform built with Gatsby and Firebase.

![Design Preview](https://img.shields.io/badge/Design-Neumorphic-blueviolet)
![Framework](https://img.shields.io/badge/Framework-Gatsby.js-663399)
![Backend](https://img.shields.io/badge/Backend-Firebase-FFCA28)

## ✨ Features

- **Premium Aesthetics**: Sleek Neumorphic design system with smooth micro-animations and dark-mode support.
- **Dynamic Job Board**: Live job listings fetched from Firestore.
- **Application System**: Integrated PDF resume upload and data submission for candidates.
- **Admin Command Center**: A secure dashboard for managing job listings and viewing applications.
- **RBAC Security**: Firebase Custom Claims ensuring only authorized UIDs can access sensitive data.
- **Subdomain Protection**: Admin dashboard locked to specific production hostnames.

## 🛠 Tech Stack

- **Frontend**: [Gatsby.js](https://www.gatsbyjs.com/)
- **Styling**: Vanilla SCSS (Neumorphic System)
- **Database**: Firebase Cloud Firestore
- **Storage**: Firebase Storage (Resumes)
- **Functions**: Firebase Cloud Functions (Admin Logic)
- **Auth**: Firebase Auth (Google Sign-In)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Firebase CLI (`npm install -g firebase-tools`)

### Development
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd functions && npm install && cd ..
   ```
3. Set up environment variables:
   Create `.env.development` with your Firebase config (see `src/firebase.js`).
4. Start Gatsby:
   ```bash
   npm run develop
   ```

### Deployment
1. Build the site: `npm run build`
2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## 🔐 Administration

Administrative tasks are handled via the `/admin` portal. 

**Setting the Admin UID:**
To grant a user administrative privileges, you must set their UID in the `functions/.env` file:
```
ADMIN_UID="USER_UID_HERE"
```

## 📖 Documentation

Detailed context and architecture notes can be found in the [docs/](docs/CONTEXT.md) directory.

---
© 2026 Saikia Codes. All Rights Reserved.
