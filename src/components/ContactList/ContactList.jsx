import React from 'react';
import PropTypes from 'prop-types';
import LiItem from '../ListItem';
import { List} from './ContactList.styled';

const ContactList = ({contacts, onDeleteContact}) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <LiItem
                key={id}
                id={id}
                name={name}
                number={number}
                handleDelete={onDeleteContact}
            ></LiItem>
        ))}
    </List>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;