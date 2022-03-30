import React from 'react';
import PropTypes from 'prop-types';
// import { IconContext } from "react-icons";
import { ListItem, List, DeleteButton } from './ContactList.styled';
// import { ImCancelCircle } from 'react-icons/im';

const ContactList = ({contacts, onDeleteContact}) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <ListItem
                key={id}
                name={name}
                number={number}
                onClick={()=>onDeleteContact(id)}
            ></ListItem>
        )

        // (<ListItem key={id}>
        //     {name}: {number}
        //     <IconContext.Provider value={{ color: "#bc2525", size: "18px" }}>
        //         <DeleteButton type='button'
        //         onClick={()=>onDeleteContact(id)}>
        //         <ImCancelCircle/>
        //         </DeleteButton>
        //     </IconContext.Provider>
        // </ListItem>
                
        // )
        )}
        </List>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;