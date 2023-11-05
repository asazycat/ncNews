import { createContext } from 'react';
import { useState } from 'react';

export const SpecificLoginContext = createContext();


export const SpecificLoginProvider = ({ children }) => {
    const [user, setUser] = useState({});
  
    return (
      <SpecificLoginContext.Provider value={{ user, setUser }}>
        {children}
      </SpecificLoginContext.Provider>
    );
  };