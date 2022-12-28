import { createContext } from "react";

// ! create context

export const GlobalContext = createContext();

// ! provider components

export const GlobalProvider = (props) => {
    return (
        <GlobalContext.Provider value={{sadiq: 'Developer'}}>
            {props.children}
        </GlobalContext.Provider>
    )
}