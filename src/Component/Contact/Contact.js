import {useContext} from "react";
import { ContactContext } from "../../context/ContactContext";


const  Contact = () => {

    const [state,dispatch ] = useContext(ContactContext);
    return(
        <div className="contact-list">
        <ul>
            {state.contact.map((el,i)=> <li key={i}> {el} <button onClick={()=>{dispatch({type:"delete",payload:el})}}> X </button></li>)}
        </ul>
        </div>

    )
}

export default Contact;