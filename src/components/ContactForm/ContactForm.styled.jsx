import styled from 'styled-components';

const Form = styled.form`
    /* display: flex;
    flex-direction: column; */
`
const FormLabel = styled.label`
    display: block;
    text-align: center;
`
const FormInput = styled.input`
    display: block;
    width: 100%;
    height: 24px;
     margin-bottom: 24px;
     margin-top: 8px;
    border: 2px solid grey;
    border-radius: 5px;
`
const AddContactBtn = styled.button`
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 148px;
    height: 40px;
    border-style: solid;
    border-radius: 5px;
    border-width: 2px;
    border-color: rgb(217, 100, 82);
    background-color: white;
    color: rgb(217, 100, 82);
    font-size: 16px;
    cursor: pointer;
`

export { Form, FormLabel, FormInput, AddContactBtn };