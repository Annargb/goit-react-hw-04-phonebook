import { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };

    const contactAlreadyExist = this.state.contacts.some(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    );

    contactAlreadyExist
      ? alert(`${newContact.name} is already in contacts!`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, contact],
          };
        });
  };

  contactsFilter = searchContact => {
    this.setState({ filter: searchContact });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );

    const variantOfText = () => {
      if (!contacts.length) {
        return (
          <InfoMessage
            text="There are no contacts here 😲"
            $variant="primary"
          />
        );
      } else if (contacts.length && !visibleContacts.length) {
        return (
          <>
            <Filter filter={filter} onUpdateContacts={this.contactsFilter} />
            <InfoMessage
              text="Sorry, we didn't find any contacts for this request 😢"
              $variant="secondary"
            />
          </>
        );
      } else {
        return (
          <>
            <Filter filter={filter} onUpdateContacts={this.contactsFilter} />
            <ContactsList
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
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
          <ContactsForm onAddContacts={this.addContact} />
        </Section>
        <Section>
          <ContactsTitle>Contacts</ContactsTitle>
          {variantOfText()}
        </Section>
        <GlobalStyle />
      </Wrapper>
    );
  }
}
