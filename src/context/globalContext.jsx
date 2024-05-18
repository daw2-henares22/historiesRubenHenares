import { createContext, useEffect, useState } from 'react';
import db from '../db.json'

export const GlobalContext = createContext();

export function GlobalProvider ({ children }) {
    
    const [historias, setHistorias]= useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            // const response = await fetch('../db.json');
            // const dataFetch = await response.json();
            // setDatos(dataFetch.historias);
            setHistorias(db.historias);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, []);

    return(
        <GlobalContext.Provider value={{ historias }}>
            {children}
        </GlobalContext.Provider>
    )
}