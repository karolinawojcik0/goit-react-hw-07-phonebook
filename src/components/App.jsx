import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsTitle, Container, Title } from './App.css';
import {
  fetchContacts,
  addContact,
  removeContact,
} from '../redux/contactsThunks';
import { setFilter } from '../redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const status = useSelector(state => state.contacts.status);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <ContactList
        contacts={filteredContacts}
        removeContact={handleRemoveContact}
      />
    </Container>
  );
};
