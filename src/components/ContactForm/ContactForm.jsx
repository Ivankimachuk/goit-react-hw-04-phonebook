import React, { useState } from "react";
import PropTypes from "prop-types";
import Notiflix from 'notiflix';
import { Button, Form, Label, Input } from 'components/Emotion.styled';

const DEFAULT__DATA = {
    name: '',
    number: ''
}

const ContactForm = ({ contacts, addContact }) => {
    const [ formData, setFormData] = useState(DEFAULT__DATA);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = formData;
        // ПОРІВНЯННЯ КОНТАКТУ НА ДУБЛЮВАННЯ
        const comparisonOfContact = contacts.some( contact => contact.name === name );
        
        
        if (comparisonOfContact) {
           Notiflix.Notify.info(`The contact number ${name} you are trying to record already exists!!!`);
        } else {
            addContact(name, number);
            setFormData(DEFAULT__DATA);
        }
    };

    
        const { name, number } = formData;
        return (
            <Form onSubmit={handleSubmit}>
            <Label>
                Name:
                <Input
                    value={name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    
                />
            </Label>
            <Label >
                Number:
                <Input
                    value={number}
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    
                />
            </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        )
    
};

export default ContactForm;
   
ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ).isRequired,
    addContact: PropTypes.func.isRequired
  };

