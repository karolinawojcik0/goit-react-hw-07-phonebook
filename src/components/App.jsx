import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsTitle, Container, Title } from './App.css';
import { addContact, removeContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const handleFilterChange = filterValue => {
    dispatch(setFilter(filterValue));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addContact={handleAddContact} />
      <ContactsTitle>Contacts list:</ContactsTitle>
      <Filter filter={filter} setFilter={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        removeContact={handleRemoveContact}
      />
    </Container>
  );
};
