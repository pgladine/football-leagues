import React, { useEffect, useState, createContext } from 'react';
import leaguesService from '../services/leagues';

export const LeaguesContext = createContext();

export default function leaguesContextProvider({ children }) {
  const [leagues, setLeagues] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    leaguesService.list()
      .then(setLeagues)
      .catch(setError)
  }, []);

  return (
    <LeaguesContext.Provider value={{ leagues, error }}>
      {children}
    </LeaguesContext.Provider>
  )
}
