import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, FormInput } from '../ContactForm/ContactForm.styled';

const Filter = ({ value, onChange }) => (
  <FormLabel>
    Find contacts by name
    <FormInput
      autoComplete="off"
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      required
    />
  </FormLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
