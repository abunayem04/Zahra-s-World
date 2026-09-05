"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface AmbienceContextType {
  isNight: boolean;
  toggleNight: () => void;
}

const AmbienceContext = createContext<AmbienceContextType>({
  isNight: false,
  toggleNight: () => {},
});

export const AmbienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isNight, setIsNight] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Dark mode removed per boutique design specifications: ensure document stays in pristine daylight mode
    document.documentElement.classList.remove("dark", "ambience-cozy-night");
    try {
      localStorage.removeItem("zahra_ambience_night");
    } catch {
      // ignore
    }
  }, []);

  const toggleNight = () => {
    // Dark mode disabled
  };

  return (
    <AmbienceContext.Provider value={{ isNight: mounted ? isNight : false, toggleNight }}>
      {children}
    </AmbienceContext.Provider>
  );
};

export const useAmbience = () => useContext(AmbienceContext);
