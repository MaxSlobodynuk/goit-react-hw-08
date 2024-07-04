import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filterItems = useSelector(selectFilteredContacts);
  
  return (
    <ul className={css.container}>
      {filterItems.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
