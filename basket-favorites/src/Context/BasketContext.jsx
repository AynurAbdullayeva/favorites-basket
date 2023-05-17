import { createContext, useState} from "react";
export const dataContext = createContext(null)
export const DataProvider = ({ children }) => {
   
    const [basket,setBasket]=useState([])
    const values = {
      basket,
      setBasket
    }


    return <dataContext.Provider value={values}>{children}</dataContext.Provider>
}