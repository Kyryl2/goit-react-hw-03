import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact
                contact={contact}
                handleDelete={handleDelete}
                id={contact.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
