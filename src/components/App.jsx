import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import Notiflix from "notiflix";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Section from "./Section";
import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";

const PageTitle = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.text};
`;

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ??
    [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const matcheContactName = contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase());
    const newContact = { id: nanoid(), name, number };

    if (matcheContactName) {
      return Notiflix.Notify.failure(`Sorry, ${name} is already in your contacts`);
    } else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
    }
    e.target.reset();
  };
  
  const handleFilterSearch = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  const handleDeleteContact = id => {
    const filteredContactsById = contacts.filter(contact =>
      contact.id !== id);
    setContacts(filteredContactsById);
  };
  
  return (
    <Box as="main"
      maxWidth="600px"
      m="32px auto"
      p={4}
      borderRadius="8px"
      boxShadow="0px 5px 10px 2px rgba(45, 90, 124, 0.2)"
      backgroundColor="bgc"
    >
      <GlobalStyle />
      <PageTitle>Phonebook</PageTitle>
      <ContactForm onSubmit={handleSubmit} />
      <Section title="Contacts">
        <Filter filter={filter} handleChangeFilter={handleFilterSearch} />
        <ContactList contacts={filteredContacts} handleClick={handleDeleteContact} />
      </Section>
    </Box>
  );
};