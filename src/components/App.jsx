import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container } from 'components/Emotion.styled';

const LS_KEY = 'contacts-data-user';

const App  = () => {
  const [ contacts, setContacts ] = useState(() => JSON.parse(window.localStorage.getItem(LS_KEY)) ?? []);
  const [ filter, setFilter ] = useState('');

  useEffect(() => {
    if(contacts.length === 0) return;
    localStorage.setItem( LS_KEY, JSON.stringify( contacts ));
  }, [ contacts])

  const addContact = ( name, number ) => {
    const newContact = { id: nanoid(), name, number };
    setContacts((prevContacts) => [ ...prevContacts, newContact ]); 
  };

  const deleteContact = (id) => {
    
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilter( e.target.value );
  };

  
   
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={addContact}/>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={handleFilterChange} />
        <ContactList  contacts={filteredContacts} deleteContact={deleteContact}/>
      </Container>
    );
  
};

export default App;