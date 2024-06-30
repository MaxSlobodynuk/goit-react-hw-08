import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  
    const handledDelete = () => {
      dispatch(deleteContact(contact.id));
    };

  return (
    <div className={css.container}>
      <div className={css.contactContainer}>
        <p className={css.name}>👤 {contact.name}</p>
        <span className={css.number}>📞 {contact.number}</span>
      </div>
      <button
        type="button"
        onClick={handledDelete}
        className={css.contactButton}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
