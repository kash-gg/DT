'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface EditModeContextType {
  isEditMode: boolean;
  setIsEditMode: (v: boolean) => void;
  content: Record<string, string>;
  setContent: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

const EditModeContext = createContext<EditModeContextType>({
  isEditMode: false,
  setIsEditMode: () => {},
  content: {},
  setContent: () => {},
});

export function EditModeProvider({ children, initialContent }: { children: React.ReactNode, initialContent: Record<string, string> }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, string>>(initialContent || {});

  // For keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with Ctrl+E or Cmd+E
      if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        setIsEditMode(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <EditModeContext.Provider value={{ isEditMode, setIsEditMode, content, setContent }}>
      {children}
    </EditModeContext.Provider>
  );
}

export const useEditMode = () => useContext(EditModeContext);
