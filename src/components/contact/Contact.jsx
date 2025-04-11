import css from './Contact.module.css';
import { HiUser } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
 

function Contact({contact}) {

 const dispatch = useDispatch();

 const handledelete = () => {
    dispatch(deleteContact(contact.id))
 }
    
 return(
    <div className={css.itemBox}>
        <ul>
            <li><p><HiUser className={css.icon}/>{contact.name}</p></li>
            <li><p><FaPhoneAlt className={css.icon}/>{contact.number}</p></li>
        </ul>
        <button className={css.btn} onClick={handledelete}>Delete</button>
    </div>
 )    

}

export default Contact;
