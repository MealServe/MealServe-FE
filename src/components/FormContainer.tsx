import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
  }

  input {
    height: 40px;
    width: 400px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.border.primaryBorder};
    padding: 0 8px;
    margin: 4px;

    &:focus {
      outline-color: ${(props) => props.theme.colors.primaryColor};
    }
  }
`;

const FormContainer = () => {
  return <Container></Container>;
};

export default FormContainer;
