import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../contact/Contact"
import css from "./ContactList.module.css"
import { useSelector } from "react-redux"

const ContactList = () =>{

    const visibleContacts = useSelector(selectFilteredContacts);

    return(
        <div>
            <ul className={css.list}>
                {visibleContacts.map((contact) => 
                     (<li className={css.item} key={contact.id}>
                        <Contact contact={contact}/>
                     </li>)
                )}
               
            </ul>
        </div>
    )
}

export default ContactList;