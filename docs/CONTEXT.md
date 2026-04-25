# Project Context & Architecture

This document provides a high-level overview of the Saikia Codes portfolio and job portal system for future agents and developers.

## 🚀 Overview
Saikia Codes is a premium digital agency portfolio built with **Gatsby.js**, featuring a dynamic job board and a secure administrative dashboard ("Command Center").

## 🏗 Architecture
- **Frontend**: Gatsby.js (React)
- **Styling**: SCSS with Neumorphic Design System (`src/styles/sass/global.scss`)
- **Backend**: Firebase
  - **Firestore**: Live data for job listings and candidate applications. See [API Schema](./api-schema.md) for details.
  - **Authentication**: Google Sign-In with Role-Based Access Control (RBAC).
  - **Storage**: PDF resume uploads for job seekers.
  - **Cloud Functions**: Secure logic for setting administrative custom claims.
  - **Social Integration**: Candidates can now link WhatsApp, Instagram, and other social IDs.

## 🔐 Security & Access Control
- **Admin Access**: Restricted to users with the `admin: true` custom claim.
- **Claim Assignment**: Handled by the `checkAndSetAdmin` Cloud Function. It compares the user's UID against the server-side config `admin.uid`.
- **Subdomain Guard**: The `/admin` route is only accessible on `localhost` or the specific production subdomain `ankit.saikiacoode.online`.

## 📂 Key Directories
- `/src/pages`: Main site pages including `/careers` and `/admin`.
- `/src/components`: Reusable UI components.
- `/src/firebase.js`: Firebase SDK initialization and utility exports.
- `/functions`: Node.js Cloud Functions source code.
- `firestore.rules` & `storage.rules`: Backend security definitions.

## 🛠 Maintenance
- **Job Listings**: Managed via the Command Center at `/admin`.
- **Updating Admin UID**:
  1. Set `ADMIN_UID` in `functions/.env`.
  2. Deploy: `firebase deploy --only functions`

---
*Last Updated: April 2026*
