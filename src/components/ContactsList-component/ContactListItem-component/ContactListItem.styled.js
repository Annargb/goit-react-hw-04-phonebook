import styled from 'styled-components';
import { IoMdPerson } from 'react-icons/io';

export const ContactItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DeleteButton = styled.button`
  flex-shrink: 0;

  width: 100px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  border-radius: 25px;
  background-color: #fff;
  border: 2px solid #0047ab;
  color: #0047ab;
  padding: 6px;

  &:hover,
  &:focus {
    background-color: #0047ab;
    color: #fff;
  }
`;

export const ContactOfPeople = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  color: #0047ab;
`;

export const PhoneNumber = styled.span`
  color: #0e294b;
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ContactIcon = styled(IoMdPerson)`
  flex-shrink: 0;
  fill: #0e294b;
  width: 20px;
  height: 20px;
`;
