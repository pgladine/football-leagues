import React, { useEffect, useState, createContext } from 'react';
import leaguesService from '../services/leagues';

export const LeaguesContext = createContext();

export default function leaguesContextProvider({ children }) {
  const [leagues, setLeagues] = useState(null)
  useEffect(() => {
    leaguesService.list()
      .then(setLeagues)
      .catch(console.error)
  }, []);

  return (
    <LeaguesContext.Provider value={{ leagues }}>
      {children}
    </LeaguesContext.Provider>
  )
}
