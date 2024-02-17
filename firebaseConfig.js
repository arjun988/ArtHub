import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
 apiKey: 'AIzaSyCh0dYHV53xlOwGBrHHDKg52CK12IOrlW0',
 authDomain: 'arthub-4ca19.firebaseapp.com',
 projectId: 'arthub-4ca19',
 storageBucket: 'arthub-4ca19.appspot.com',
 messagingSenderId: '288965814650',
 appId: '1:288965814650:web:f9a617e771832872d10ec3',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export default app;