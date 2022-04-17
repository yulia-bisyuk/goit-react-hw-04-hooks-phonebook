import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';
import theme from '../constants/theme';
import {
  Wrapper,
  PhonebookTitle,
  ContactsTitle,
  Section,
  Note,
} from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    } else {
      setContacts(contacts => [newContact, ...contacts]);
    }
  };

  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Section>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm onSubmit={addContact} />
        </Section>

        <Section>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter value={filter} onChange={changeFilter} />
          {filteredContacts.length === 0 ? (
            <Note>No contacts here</Note>
          ) : (
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={deleteContact}
            />
          )}
        </Section>
      </Wrapper>
    </ThemeProvider>
  );
};
