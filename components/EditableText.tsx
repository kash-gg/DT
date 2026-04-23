'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useEditMode } from './EditModeContext';
import { updateContent } from '@/app/actions';

interface EditableTextProps {
  id: string;
  defaultText: string;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}

export default function EditableText({ id, defaultText, as: Component = 'span', className = '', style }: EditableTextProps) {
  const { isEditMode, content, setContent } = useEditMode();
  
  // Use content from JSON if available, otherwise defaultText
  const [text, setText] = useState(content[id] || defaultText);
  const textRef = useRef<HTMLElement>(null);

  // Sync state if context content changes globally
  useEffect(() => {
    if (content[id] !== undefined) {
      setText(content[id]);
    }
  }, [content, id]);

  const handleBlur = async () => {
    if (!textRef.current) return;
    const newText = textRef.current.innerText.trim();
    
    // Only update if text has changed
    if (newText !== text) {
      setText(newText);
      setContent(prev => ({ ...prev, [id]: newText }));
      
      try {
        await updateContent(id, newText);
      } catch (err) {
        console.error('Failed to save text', err);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Prevent new lines in inline elements
    if (e.key === 'Enter' && Component !== 'p' && Component !== 'div') { 
      e.preventDefault();
      textRef.current?.blur();
    }
  };

  const editClasses = isEditMode
    ? 'outline outline-2 outline-dashed outline-blue-400 bg-blue-50/10 cursor-text hover:bg-blue-100/20 px-2 -mx-2 rounded transition-colors relative z-10'
    : '';

  return (
    <Component
      ref={textRef}
      contentEditable={isEditMode}
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`${className} ${editClasses}`}
      style={style}
    >
      {text}
    </Component>
  );
}
