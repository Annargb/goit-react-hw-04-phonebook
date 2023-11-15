import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const FilterField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 550px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
`;

export const FilterLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: #0047ab;
`;

export const FilterInput = styled.input`
  padding: 12px 40px 12px 12px;
  font-size: inherit;
  border-radius: 25px;
  border: 1px solid #bdbdbd;
  outline: none;
  width: 100%;

  &:focus {
    border: 1px solid #0047ab;
  }
`;

export const FilterWrapper = styled.div`
  position: relative;
`;

export const FilterIcon = styled(ImSearch)`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  fill: #0047ab;
`;
