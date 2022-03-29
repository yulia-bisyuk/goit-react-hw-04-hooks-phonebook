import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 50px 0px;
    width: fit-content;
    margin: 100px auto;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 5px;
`
const PhonebookTitle = styled.h1`
    margin-top: 0px;
    margin-bottom: 30px;
    font-size: 28px;
    text-align: center;
`
const ContactsTitle = styled.h1`
    margin-top: 0px;
    margin-bottom: 30px;
    font-size: 20px;
    text-align: center;
`
const Section = styled.div`
    padding: 0px 50px 0px 50px;
  &:not(:last-child) {
    margin-bottom: 48px;
  }
`
const Note = styled.p`
    text-align: center;
    color: rgb(120, 118, 117);
`

export { Wrapper, PhonebookTitle, ContactsTitle, Section, Note };