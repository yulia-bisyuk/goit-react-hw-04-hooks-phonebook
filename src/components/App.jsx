import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid'

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = {
      name,
      number,
      id: nanoid(),
    }

  // this.state.contacts.map((contact) => {
  //         if (contact && contact.name === newContact.name) {
  //       alert(`${newContact.name} is already in contacts`)
  //        } else {
  //         this.setState(({ contacts }) => (
    
  //     { contacts: [...contacts, newContact] }
  //   ))
  //         }
      
  //   })
      
    
  
    this.setState(({ contacts }) => (
    
      { contacts: [...contacts, newContact] }
    ))

    this.state.contacts.map((contact) => {
      if (contact.name === name)
        alert(`${name} is already in contacts`)
    })
         
    console.log(this.state);
    form.reset();
  
    
  }

  handleFilterChange = (e) => {
    const { name, value } = e.currentTarget;
  
    this.setState(
      {[name]: value}
    )
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
          onSubmit={this.handleSubmit}

        />
        
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.handleFilterChange}
        />
        <ContactList
          contacts={filteredContacts}
        />

        </>
    )
  }
};
