import React from "react";
import PropTypes from "prop-types";
import { ContactLists, Btn, ContactItem } from 'components/Emotion.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    // РЕНДЕР ТА ВИДАЛЕННЯ
    <ContactLists>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          {contact.name} : {contact.number}
          <Btn type='button' onClick={() => deleteContact(contact.id)}>
            Delete
          </Btn>
        </ContactItem>
      ))}
    </ContactLists>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

