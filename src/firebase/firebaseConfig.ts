
import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';
const firebaseConfig = {
  apiKey: "AIzaSyBRmeicrc8SDcokD4O6EZnFUWnSCfm3xZw",
  authDomain: "namazreminder-1affd.firebaseapp.com",
  projectId: "namazreminder-1affd",
  storageBucket: "namazreminder-1affd.appspot.com",
  messagingSenderId: "454414456954",
  appId: "1:454414456954:web:7efe90f916638a4fee43c3"
};




const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
// const messaging = getMessaging(app);

// export const getFCMToken = async () => {
//   try {
//     const token = await getToken(messaging);
//     console.log('FCM token:', token);
//     // Save the token to your backend or Firebase Realtime Database for sending notifications later
//   } catch (error) {
//     console.error('Error retrieving FCM token:', error);
//   }
// };
// getFCMToken();

// onMessage(messaging, (payload) => {
//   console.log('Received message:', payload);
//   // Handle the incoming message (e.g., display a notification, update UI, etc.)
// });