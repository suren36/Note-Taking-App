import { useState, useEffect } from 'react';

export function useLocalstorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    }
    return initialValue;
  });

  useEffect(()=>{
localStorage.setItem( key , JSON.stringify(value))



  },[])

  return [value, setValue] as[T,typeof setValue];
}
