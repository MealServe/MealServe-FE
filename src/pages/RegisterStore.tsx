import React from 'react';
import styled from 'styled-components';

const RegisterStorePage = styled.div`
  background-color: ${(props) => props.theme.colors.bgColor};
  padding-top: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const RegisterForm = styled.form`
  height: clamp(360px, 50%, 400px);
  width: clamp(440px, 60%, 520px);
  border-radius: ${(props) => props.theme.border.borderRadius};
  border: 2px solid ${(props) => props.theme.colors.primaryColor};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 32px 0 24px 0;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }

  button {
    border: none;
    background-color: ${(props) => props.theme.colors.primaryColor};

    color: white;
    padding: 12px 24px;
    margin: 8px;
    font-size: 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;

    &:active {
      color: ${(props) => props.theme.colors.primaryColor};
      background-color: ${(props) => props.theme.colors.bgColor};
    }
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
    justify-self: start;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

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

  input[type='checkbox'] {
    height: 16px;
    width: 16px;
    margin: 8px;
    justify-self: flex-start;
  }
`;

const RegisterStore = () => {
  return (
    <>
      <RegisterStorePage>
        <RegisterForm>
          <h1>업장 등록하기</h1>
          <InputContainer>
            <input type="text" placeholder="업장 이름을 입력하세요" required />
            <input type="text" placeholder="주소를 입력하세요" required />
            <input
              type="text"
              placeholder="업장 전화번호를 입력하세요"
              required
            />
          </InputContainer>
          <button>등록</button>
        </RegisterForm>
      </RegisterStorePage>
    </>
  );
};

export default RegisterStore;
