import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCLBVaIKKzi0efBT4dDdLuA89vhvqA0e8k',
  authDomain: 'hockey-teeth.firebaseapp.com',
  databaseURL: 'https://hockey-teeth-default-rtdb.firebaseio.com',
  projectId: 'hockey-teeth',
  storageBucket: 'hockey-teeth.firebasestorage.app',
  messagingSenderId: '976365262689',
  appId: '1:976365262689:web:c319d98a52c0761a2c9720',
  measurementId: 'G-WF8FSVNR5R',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
