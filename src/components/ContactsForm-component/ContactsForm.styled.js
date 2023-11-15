import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 550px;
  margin-right: auto;
  margin-left: auto;
`;

export const Field = styled(FormikField)`
  padding: 12px;
  font-size: inherit;
  border-radius: 25px;
  border: 1px solid #bdbdbd;
  outline: none;

  &:focus {
    border: 1px solid #0047ab;
  }
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  margin-top: 10px;
  font-size: 14px;
  color: #fc0335;
`;

export const AddContactButton = styled.button`
  width: 200px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  border-radius: 25px;
  background-color: #fff;
  border: 2px solid #0047ab;
  color: #0047ab;
  padding: 10px;
  margin-right: auto;
  margin-left: auto;

  &:hover,
  &:focus {
    background-color: #0047ab;
    color: #fff;
  }
`;

export const LabelText = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 5px;
  color: #0047ab;
`;
