import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Contact = ({ contact: { number, name, id }, handleDelete }) => {
  //   console.log(contact);
  return (
    <div>
      <p>
        <FaUser />
        {name}
      </p>
      <p>
        <FaPhoneAlt />
        {number}
      </p>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
