import React from 'react';
import PropTypes from 'prop-types';
import { ImCancelCircle } from 'react-icons/im';
import { IconContext } from "react-icons";

const ListItem = ({ id, name, number, handleDelete }) => (
    <ListItem key={id}>
            {name}: {number}
            <IconContext.Provider value={{ color: "#bc2525", size: "18px" }}>
                <DeleteButton type='button'
                onClick={handleDelete}>
                <ImCancelCircle/>
                </DeleteButton>
            </IconContext.Provider>
        </ListItem>
)