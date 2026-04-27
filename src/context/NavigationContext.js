import React, { createContext, useContext, useState, useEffect } from 'react';
import { globalHistory } from '@reach/router';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH' || action === 'REPLACE') {
        setIsNavigating(true);
        // Hide loader after a short delay to allow transition
        const timer = setTimeout(() => {
          setIsNavigating(false);
        }, 1200);
        return () => clearTimeout(timer);
      }
    });
  }, []);

  return (
    <NavigationContext.Provider value={{ isNavigating, setIsNavigating }}>
      {children}
    </NavigationContext.Provider>
  );
};
