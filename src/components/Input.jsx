import { useField } from 'formik';
import styled from 'styled-components';

const Control = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #8c8c8e;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const MyInput = styled.input`
  outline: none;
  padding: 8px;
  border: 1px solid #20202a;
  background-color: #20202a;
  border-radius: 4px;
  width: 100%;
  margin: 5px 0;
  color: #fff;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Control>
      <Label>{label}</Label>
      <MyInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </Control>
  );
};

export default Input;
