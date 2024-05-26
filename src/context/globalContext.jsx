import { createContext, useContext, useState } from 'react';
import db from '../db.json';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [historias, setHistorias] = useState(db.historias);
  const [dataHistoria, setDataHistoria] = useState();

  return (
    <GlobalContext.Provider value={{ historias, setHistorias, dataHistoria, setDataHistoria }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};