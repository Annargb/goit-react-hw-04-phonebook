import { ContactListItem } from './ContactListItem-component/ContactListItem';
import { ListOfContacts } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => (
  <ListOfContacts>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        contactId={id}
        contactName={name}
        contactNumber={number}
        onDelete={onDelete}
      />
    ))}
  </ListOfContacts>
);
