import React from 'react';


const Filter = ({filter, onChange}) => (
     <label>
          Find contacts by name
          <input
              type="text"
              name="filter"  
              value={filter}
              onChange={onChange}            
              required
          />
        </label>
)

export default Filter;

