import styled from 'styled-components';

const List = styled.ul`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
`

const ListItem = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.darkGray};
    
    &:not(:last-child) {
 margin-bottom: 8px;
    }
`

const DeleteButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export { ListItem, List, DeleteButton };