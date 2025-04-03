// hooks/useLocalstorage.ts
import { useState, useEffect } from 'react';

export function useLocalstorage<T>(
  key: string, 
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return typeof initialValue === 'function' 
        ? (initialValue as () => T)() 
        : initialValue;
    }
    
    try {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue !== null) return JSON.parse(jsonValue);
      
      return typeof initialValue === 'function' 
        ? (initialValue as () => T)() 
        : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return typeof initialValue === 'function' 
        ? (initialValue as () => T)() 
        : initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, value]); // Fixed: Added dependencies

  return [value, setValue];
}