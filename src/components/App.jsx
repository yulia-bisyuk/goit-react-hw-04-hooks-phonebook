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

    //     if(this.state.contacts.length !== 0) this.state.contacts.map((contact) => {
    //       if (contact.name === newContact.name) {
    //     alert(`${newContact.name} is already in contacts`)
    //      } else {
    //       this.setState(({ contacts }) => (
    
    //   { contacts: [...contacts, newContact] }
    // ))
    //       }
      
    // })
    
    this.setState(({ contacts }) => {
      if (contacts.some((contact) =>
        contact.name === name)) { return alert(`${name} is already in contacts`) }
          
      else { return { contacts: [...contacts, newContact] } }
      
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
  
  deleteContact = (id) => {
    this.setState(({contacts}) => 
    ({contacts: contacts.filter(contact => contact.id !== id)})
    )
  
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
        {filteredContacts.length === 0 ? <p>No contacts here</p> : <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />}
        

        </>
    )
  }
};
