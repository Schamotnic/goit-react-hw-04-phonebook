import {useEffect, useState} from 'react';

const LocalStorageHoks = (key, defaultValue) => {
   const [state, setState] = useState(() => {
     const jsonLocaleStorage = window.localStorage.getItem(key);
 
     if (!jsonLocaleStorage) {
       return defaultValue;
     }
 
     return JSON.parse(window.localStorage.getItem(key));
   });
 
   useEffect(() => {
     window.localStorage.setItem(key, JSON.stringify(state));
   }, [key, state]);
   return [state, setState];
 };

export default LocalStorageHoks ;