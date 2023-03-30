import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYn_w6wgnbkFFFIHsNBXd_35SWbwkNbFM',
  authDomain: 'proxymarket-backend.firebaseapp.com',
  projectId: 'proxymarket-backend',
  storageBucket: 'proxymarket-backend.appspot.com',
  messagingSenderId: '528006668831',
  appId: '1:528006668831:web:a235498cfd0ecd60d5eb2a',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
