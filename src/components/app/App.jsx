import css from "./App.module.css";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";

const App = () =>{

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
    
  return(
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      {loading && <p>Loading contacts, please wait...</p>}
      {error && <p>Oopp! There was an error! Try again!</p>}
      {<ContactList/>}
    </div>
  )
}

export default App;
