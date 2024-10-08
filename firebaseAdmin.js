import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// initialize firebase admin SDK
const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

const adminApp = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com"
});

export const db = getFirestore(adminApp);