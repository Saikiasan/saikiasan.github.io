# Security Architecture

This project uses a "Thin Client" architecture where sensitive logic is moved to the backend (Cloud Functions) and data access is strictly controlled via Firebase Security Rules.

## 🔑 Authentication & Authorization
The system uses **Firebase Authentication** (Google Sign-In) combined with **Custom User Claims** for Role-Based Access Control (RBAC).

### Admin Custom Claim
A user is considered an administrator if their ID token contains the `admin: true` claim.
- **Verification**: Frontend components check `user.getIdTokenResult()` for the `admin` property.
- **Enforcement**: Firestore and Storage rules check `request.auth.token.admin == true`.

### Setting Admin Privileges
The `checkAndSetAdmin` Cloud Function is responsible for assigning the `admin` claim.
1. User signs in on the `/admin` page.
2. The page calls `checkAndSetAdmin`.
3. The function verifies the user's UID against the server-side environment variable `admin.uid`.
4. If it matches, the function sets the `admin: true` custom claim.

## 📂 Firestore Rules
Located in `firestore.rules`.
- **`jobs` collection**:
  - `read`: Public.
  - `write`: Only users with `admin: true`.
- **`applications` collection**:
  - `create`: Public (authenticated).
  - `read/update/delete`: Only users with `admin: true`.

## 📦 Storage Rules
Located in `storage.rules`.
- **`/resumes/{allPaths=**}`**:
  - `write`: Public (authenticated) for `.pdf` files < 10MB.
  - `read/delete`: Only users with `admin: true`.

## 🛡 Subdomain Guard
The `/admin` page includes a runtime check on `window.location.hostname`. It only permits access if the hostname is `localhost` or `ankit.saikiacoode.online`. This prevents the admin dashboard from being exposed on unauthorized mirrors or the main domain if preferred.

---
*Last Updated: April 2026*
