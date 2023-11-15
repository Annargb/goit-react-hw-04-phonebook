import {
  ContactItem,
  DeleteButton,
  ContactOfPeople,
  PhoneNumber,
  ContactWrapper,
  ContactIcon,
} from './ContactListItem.styled';

export const ContactListItem = ({
  contactId,
  contactName,
  contactNumber,
  onDelete,
}) => (
  <ContactItem>
    <ContactWrapper>
      <ContactIcon />
      <ContactOfPeople>
        {contactName}: <PhoneNumber>{contactNumber}</PhoneNumber>
      </ContactOfPeople>
    </ContactWrapper>
    <DeleteButton type="button" onClick={() => onDelete(contactId)}>
      Delete
    </DeleteButton>
  </ContactItem>
);
