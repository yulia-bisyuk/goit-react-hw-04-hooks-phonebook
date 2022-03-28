import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({contacts, onDeleteContact}) => (
    <ul>
        {contacts.map(({id, name, number}) =>

              (  <li key={id}>
            {name}: {number}
            <button type='button'
            onClick={()=>onDeleteContact(id)}>
            Delete
            </button>
        </li>
        ))
                }
        </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;