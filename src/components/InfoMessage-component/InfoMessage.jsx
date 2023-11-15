import { InfoMessageText } from './InfoMessage.styled';

export const InfoMessage = ({ text, $variant }) => (
  <InfoMessageText $variant={$variant}>{text}</InfoMessageText>
);
