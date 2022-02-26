import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAkhkh4lnXaelDUuah7Brndf3Q2Y3yFbJk',
  authDomain: 'shopping-cart-83926.firebaseapp.com',
  projectId: 'shopping-cart-83926',
  storageBucket: 'shopping-cart-83926.appspot.com',
  messagingSenderId: '804706987943',
  appId: '1:804706987943:web:bd7737f669c6c936245082',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
