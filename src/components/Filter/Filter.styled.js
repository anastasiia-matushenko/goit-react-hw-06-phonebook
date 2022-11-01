import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  width: 288px;
  padding: 11px 16px;
  outline: none;
  background: #f4f4f4;
  border: 1px solid #c5c5c5;
  border-radius: 6px;

  &:focus {
    border: 1px solid #4cc6f5;
    background-color: #ffffff;
  }
`;

const Label = styled.label`
  display: block;
  padding: 11px 0;
`;

export { Input, Label };
