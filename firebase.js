const firebaseConfig = {
  apiKey: "AIzaSyAs_73B2tBhSzB0h2kkJ43Qgl5k7FZ9u3M",
  authDomain: "clone-two-fc2cc.firebaseapp.com",
  projectId: "clone-two-fc2cc",
  storageBucket: "clone-two-fc2cc.appspot.com",
  messagingSenderId: "148972692039",
  appId: "1:148972692039:web:8d2dc51e0eebbe274d8762",
  measurementId: "G-HVHJK5BKNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
