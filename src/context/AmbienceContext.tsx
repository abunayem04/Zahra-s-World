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
    const saved = localStorage.getItem("zahra_ambience_night");
    if (saved === "true") {
      setIsNight(true);
      document.documentElement.classList.add("dark", "ambience-cozy-night");
    }
  }, []);

  const toggleNight = () => {
    const next = !isNight;
    setIsNight(next);
    localStorage.setItem("zahra_ambience_night", String(next));
    if (next) {
      document.documentElement.classList.add("dark", "ambience-cozy-night");
    } else {
      document.documentElement.classList.remove("dark", "ambience-cozy-night");
    }
  };

  return (
    <AmbienceContext.Provider value={{ isNight: mounted ? isNight : false, toggleNight }}>
      {children}
    </AmbienceContext.Provider>
  );
};

export const useAmbience = () => useContext(AmbienceContext);
