import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container } from 'components/Emotion.styled';

const LS_KEY = 'contacts-data-user';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_KEY);
    if(savedContacts) {
      this.setState({ contacts: JSON.parse( savedContacts )});
    }
  };

  componentDidUpdate( _, prevState) {
    const { contacts } = this.state;
    if(prevState.contacts !== contacts ) {
      localStorage.setItem( LS_KEY, JSON.stringify( contacts ) );
    }
  };


  addContact = ( name, number ) => {
    const newContact = {id: nanoid(), name, number };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    })); 
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id)
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value});
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact}/>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList  contacts={filteredContacts} deleteContact={this.deleteContact}/>
      </Container>
    );
  };
};

export default App;


