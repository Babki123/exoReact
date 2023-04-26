import {  createContext, useReducer } from "react";

const initialState = {
    contact: [
        'Billy','Michel','Andree',"Marianne","HENRY"
    ]
}
function contactReducer(state, action){
    switch(action.type){
        case "delete":
            let newList = state.contact;
            console.log(action.payload)
            newList = newList.filter( el=>el != action.payload)
            console.log(newList)
            return {...state, contact: newList}
        default :
            return state
    }
}
export const ContactContext = createContext([]);
const ContactProvider = ({children}) =>{
    const [state , dispatch] = useReducer(contactReducer, initialState);
    return (
        <ContactContext.Provider value={[state,dispatch]}>
            {children}
        </ContactContext.Provider>
    )
} 

export default ContactProvider;