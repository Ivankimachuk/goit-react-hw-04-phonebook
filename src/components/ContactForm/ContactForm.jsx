import React, {Component} from "react";
import PropTypes from "prop-types";
import Notiflix from 'notiflix';
import { Button, Form, Label, Input } from 'components/Emotion.styled';

const DEFAULT__DATA = {
    name: '',
    number: ''
}

class ContactForm extends Component {
    state = {
        ...DEFAULT__DATA
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        // ПОРІВНЯННЯ КОНТАКТУ НА ДУБЛЮВАННЯ
        const comparisonOfContact = this.props.contacts.some(
            (contact) => contact.name === name 
        );
        
        comparisonOfContact 
        ? Notiflix.Notify.info(`The contact number ${name} you are trying to record already exists!!!`)
        : this.props.addContact( name,number );
        // ОЧИЩЕННЯ ПОЛІВ
        this.setState({...DEFAULT__DATA});
    }

    render() {
        const { name, number } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
            <Label>
                Name:
                <Input
                    value={name}
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
    }
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

