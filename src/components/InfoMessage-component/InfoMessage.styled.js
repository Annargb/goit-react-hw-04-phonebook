import styled from 'styled-components';

export const InfoMessageText = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return '#0047ab;';
      default:
        return '#fc0335';
    }
  }};
`;
