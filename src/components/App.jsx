import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid'

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = ({name, number}) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    }

      this.setState(({ contacts }) => {
      if (contacts.some((contact) =>
        contact.name === name)) { return alert(`${name} is already in contacts`) }
          
      else { return { contacts: [...contacts, newContact] } }
      
    })
  }

  deleteContact = (id) => {
    this.setState(({contacts}) => 
    ({contacts: contacts.filter(contact => contact.id !== id)})
    )
  }
  
  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));

  }
  
  

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
        />
        
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        {filteredContacts.length === 0 ? <p>No contacts here</p> : <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />}
        

        </>
    )
  }
};
