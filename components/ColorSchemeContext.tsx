'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export const SCHEMES = [
  { name: 'Frost', value: '#fbfbfd' },
  { name: 'Starlight',  value: '#f8f4f0' },
];

interface ColorSchemeContextValue {
  scheme: string;
  setScheme: (color: string) => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextValue>({
  scheme: '#fbfbfd',
  setScheme: () => {},
});

export function ColorSchemeProvider({ children }: { children: React.ReactNode }) {
  const [scheme, setSchemeState] = useState('#fbfbfd');

  useEffect(() => {
    const stored = localStorage.getItem('color-scheme');
    if (stored) setSchemeState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--scheme-bg', scheme);
    document.body.style.backgroundColor = scheme;
    localStorage.setItem('color-scheme', scheme);
  }, [scheme]);

  const setScheme = (color: string) => setSchemeState(color);

  return (
    <ColorSchemeContext.Provider value={{ scheme, setScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export function useColorScheme() {
  return useContext(ColorSchemeContext);
}
