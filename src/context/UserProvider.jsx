// src/context/UserContext.js
import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user info from Firebase Auth or Firestore

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


