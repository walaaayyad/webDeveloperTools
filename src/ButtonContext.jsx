import React, { createContext, useState, useContext } from "react";

// Create the context
const ButtonContext = createContext();

// Create a provider to wrap the application and manage the shared state
export const ButtonProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <ButtonContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </ButtonContext.Provider>
  );
};

// Custom hook to access the context
export const useButtonContext = () => useContext(ButtonContext);
