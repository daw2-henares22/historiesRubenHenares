import { createContext, useEffect, useState } from 'react';
import db from '../db.json'

export const GlobalContext = createContext();

export function GlobalProvider ({ children }) {
    
    const [historias, setHistorias]= useState([])
    const [dataHistoria, setDataHistoria]= useState([])

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

      const editarHistoria = (nuevaHistoria) => {
        setDataHistoria((prevHistoria)=> {
          return prevHistoria.map((historia)=>
          historia.id === nuevaHistoria.id ? nuevaHistoria : historia
        )
          
        });
        setDataHistoria(nuevaHistoria);
      }

    return(
        <GlobalContext.Provider value={{ historias, dataHistoria, setDataHistoria, editarHistoria }}>
            {children}
        </GlobalContext.Provider>
    )
}