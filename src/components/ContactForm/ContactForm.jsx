import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormLabel, FormInput, AddContactBtn } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');

  const nameLabelId = nanoid();
  const numberLabelId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'userNumber':
        setUserNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(userName, userNumber);
    reset();
  };

  const reset = () => {
    setUserName('');
    setUserNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel htmlFor={nameLabelId}>
        Name
        <FormInput
          type="text"
          name="userName"
          value={userName}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel htmlFor={numberLabelId}>
        Number
        <FormInput
          type="tel"
          name="userNumber"
          value={userNumber}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
