import React, { Component } from 'react';
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ name: e.target.value })
    console.log(this.state);

  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const contact = {
    //   name: this.state.name,
    //   id: nanoid(),
    // }
    // console.log(this.state);
    this.setState(prevState =>
    
      prevState.contacts.push({
      name: this.state.name,
      id: nanoid(),
      })
    )
  console.log(this.state);
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
              onChange={this.handleChange}            
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
/>
          </label>
          <button type="submit">
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map((contact) => (
            <li  key={contact.id}>
              {contact.name}
            </li>
          ))}
        </ul>
        </>
    )
  }
};
