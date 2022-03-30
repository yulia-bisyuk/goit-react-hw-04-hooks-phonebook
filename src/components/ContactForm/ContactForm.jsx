import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormLabel, FormInput, AddContactBtn } from './ContactForm.styled';

class ContactForm extends Component {

  state = {
    name: '',
    number: '',
  }

  nameLabelId = () => nanoid();
  numberLabelId = () => nanoid();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
  
    this.setState(
      {[name]: value}
    )

  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  
    this.reset();
  
  }

  reset = () => {
  this.setState({name: '', number: ''})
}

  render() {
    return (
<form onSubmit={this.handleSubmit}>
        <FormLabel htmlFor={this.nameLabelId()}>
           Name
          <FormInput
              type="text"
              name="name"    
            value={this.state.name}
            onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
/>
          </FormLabel>
          <FormLabel htmlFor={this.numberLabelId()}>
           Number
            <FormInput
              type="tel"
              name="number"
            value={this.state.number}
            onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
/>
          </FormLabel>
          <AddContactBtn type="submit">
            Add contact
          </AddContactBtn>
        </form>

  )
}
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
    
export default ContactForm;