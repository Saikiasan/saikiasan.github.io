const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require("firebase-admin");

admin.initializeApp();

// Set global options for all functions
setGlobalOptions({ maxInstances: 10 });

/**
 * Cloud Function to verify and set admin claims.
 * This function checks the caller's UID against a secure server-side config.
 */
exports.checkAndSetAdmin = onCall(async (request) => {
  // Check if user is authenticated
  if (!request.auth) {
    throw new HttpsError(
      "unauthenticated",
      "Request must be authenticated."
    );
  }

  // Get the UID from the secure environment config
  // Set this in functions/.env for local/deploy or use Secret Manager
  const finalAdminUid = process.env.ADMIN_UID;

  if (!finalAdminUid) {
    throw new HttpsError(
      "failed-precondition",
      "Admin UID is not configured on the server."
    );
  }

  // Check if the caller matches the admin UID
  if (request.auth.uid === finalAdminUid) {
    try {
      await admin.auth().setCustomUserClaims(request.auth.uid, { admin: true });
      return { isAdmin: true, message: "Admin privileges granted." };
    } catch (error) {
      throw new HttpsError("internal", error.message);
    }
  }

  return { isAdmin: false, message: "User does not have admin privileges." };
});
