import React, {createContext, useReducer } from "react";
import Reducer from "./Reducer";

//InitialState
const InitialState = {

    transactions: [
    ]
}

//Create context
export const GlobalContext = createContext(InitialState);

//provider component
export const GlobalProvider = ({ children}) => {

    const [state, dispatch] = useReducer(Reducer, InitialState);

    //actions
    function deleteTransaction(id){
        dispatch({
            type: "Delete_Transaction",
            payLoad:id
        });
    }

    function addTransaction(transaction)
    {
        dispatch({
            type:"Add_Transaction",
            payLoad: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}