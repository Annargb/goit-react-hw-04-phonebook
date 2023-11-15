import {
  FilterField,
  FilterLabel,
  FilterInput,
  FilterWrapper,
  FilterIcon,
} from './Filter.styled';

export const Filter = ({ filter, onUpdateContacts }) => (
  <FilterField>
    <FilterLabel>Find Contacts by name</FilterLabel>
    <FilterWrapper>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={event => onUpdateContacts(event.target.value)}
      ></FilterInput>
      <FilterIcon />
    </FilterWrapper>
  </FilterField>
);
