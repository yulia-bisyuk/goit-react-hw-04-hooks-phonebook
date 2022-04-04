import React, { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(savedContacts);
    if (savedContacts) this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(({ contacts }) => {
      if (
        contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        return alert(`${name} is already in contacts`);
      } else {
        return { contacts: [newContact, ...contacts] };
      }
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Section>
            <PhonebookTitle>Phonebook</PhonebookTitle>
            <ContactForm onSubmit={this.addContact} />
          </Section>

          <Section>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            {filteredContacts.length === 0 ? (
              <Note>No contacts here</Note>
            ) : (
              <ContactList
                contacts={filteredContacts}
                onDeleteContact={this.deleteContact}
              />
            )}
          </Section>
        </Wrapper>
      </ThemeProvider>
    );
  }
}
