// export const FB_API_KEY = 'AIzaSyD0GLT_6u0SjHNIWdty2E6O2BMcj_Grn2o';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0GLT_6u0SjHNIWdty2E6O2BMcj_Grn2o",
    authDomain: "sdnewsletter-26ea1.firebaseapp.com",
    databaseURL: "https://sdnewsletter-26ea1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sdnewsletter-26ea1",
    storageBucket: "sdnewsletter-26ea1.appspot.com",
    messagingSenderId: "691749954693",
    appId: "1:691749954693:web:f51c8397c40446df0975ec"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);