import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  gap: 15px;

  & label {
    width: 100%;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 11px 16px;
  outline: none;
  background: #f4f4f4;
  border: 1px solid #c5c5c5;
  border-radius: 6px;

  &:focus {
    border: 1px solid #4cc6f5;
    background-color: #ffffff;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.16px;
    color: #a8a8a8;
  }
`;

const Label = styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #7f8e9d;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;

  color: #ffffff;
  background: #4cc6f5;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #29abdd;
  }
`;

export { Input, Button, Form, Label };
