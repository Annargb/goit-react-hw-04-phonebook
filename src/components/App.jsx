import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm-component/ContactsForm';
import { ContactsList } from './ContactsList-component/ContactsList';
import { Filter } from './Filter-component/Filter';
import { GlobalStyle } from './GlobalStyle';
import {
  MainTitle,
  Section,
  ContactsTitle,
  Wrapper,
  AccentMainTitle,
} from './App.styled';
import { InfoMessage } from './InfoMessage-component/InfoMessage';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };

    const contactAlreadyExist = contacts.some(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    );

    contactAlreadyExist
      ? alert(`${newContact.name} is already in contacts!`)
      : setContacts(prevState => [...prevState, contact]);
  };

  const contactsFilter = searchContact => setFilter(searchContact);

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(item => item.id !== contactId));
  };

  useEffect(
    prevState => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    },
    [contacts]
  );

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const variantOfText = () => {
    if (!contacts.length) {
      return (
        <InfoMessage text="There are no contacts here 😲" $variant="primary" />
      );
    } else if (contacts.length && !visibleContacts.length) {
      return (
        <>
          <Filter filter={filter} onUpdateContacts={contactsFilter} />
          <InfoMessage
            text="Sorry, we didn't find any contacts for this request 😢"
            $variant="secondary"
          />
        </>
      );
    } else {
      return (
        <>
          <Filter filter={filter} onUpdateContacts={contactsFilter} />
          <ContactsList contacts={visibleContacts} onDelete={deleteContact} />
        </>
      );
    }
  };

  return (
    <Wrapper>
      <Section>
        <MainTitle>
          Phone<AccentMainTitle>book</AccentMainTitle>
        </MainTitle>
        <ContactsForm onAddContacts={addContact} />
      </Section>
      <Section>
        <ContactsTitle>Contacts</ContactsTitle>
        {variantOfText()}
      </Section>
      <GlobalStyle />
    </Wrapper>
  );
};
