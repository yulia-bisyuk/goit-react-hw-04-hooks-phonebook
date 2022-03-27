import React, { Component } from 'react';
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  }

  handleChange = (e) => {

    const { name, value } = e.currentTarget;
  
    this.setState(
      {[name]: value}
    )
  }

  resetForm = () => {
    this.setState({name: '', number: ''})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    }
  
    this.setState(({ contacts }) => (
      { contacts: [...contacts, newContact] }
    ))
    console.log(this.state);
    this.resetForm();
  }
  
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
           Name
          <input
              type="text"
              name="name"  
              value={this.state.name}
              onChange={this.handleChange}            
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
/>
          </label>
          <label>
           Number
          <input
              type="tel"
              name="number"
               value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
/>
          </label>
          <button type="submit">
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
          type="text"
              name="filter"  
              value={this.state.filter}
              onChange={this.handleChange}            
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
          />
        
        </label>
        <ul>
          {this.state.contacts.map((contact) => (
            <li  key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
        </>
    )
  }
};
