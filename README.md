# Codeemy Frontend 🎓

## 🚀 How to Install and Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase
Create or update `src/firebase.js` with your Firebase credentials:
```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

- **`npm run dev`** - Run development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run deploy`** - Deploy to GitHub Pages

---

## 🔥 Firebase Deployment

```bash
npm run build
firebase deploy
```


