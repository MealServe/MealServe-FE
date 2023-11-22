import React, { useState } from 'react';
import styled from 'styled-components';
import StoreService from '../service/storeService';
import Banner from '../components/Banner';

const Wrapper = styled.div`
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
  ${(props) => props.theme.defaultForm};

  input {
    width: 360px;

    border: 1px solid ${(props) => props.theme.border.primaryBorder};
  }
  input:focus {
    outline-color: ${(props) => props.theme.colors.primaryColor};
  }

  input[type='checkbox'] {
    height: 16px;
    width: 16px;
    margin: 8px;
    justify-self: flex-start;
  }
`;

interface RegisterStoreProps {
  storeService: StoreService;
}

const RegisterStore: React.FC<RegisterStoreProps> = ({ storeService }) => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    storeService.addStore(name, address, tel).catch(setError);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'tel':
        setTel(value);
        break;
      default:
    }
  };

  const setError = (error: Error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  return (
    <>
      <Wrapper>
        <RegisterForm onSubmit={handleSubmit}>
          <h1>업장 등록하기</h1>
          <InputContainer>
            <label>
              <p>업장 이름: </p>
              <input
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="업장 이름을 입력하세요"
                required
              />
            </label>
            <label>
              <p>주소: </p>
              <input
                name="address"
                type="text"
                value={address}
                onChange={handleChange}
                placeholder="주소를 입력하세요"
                required
              />
            </label>
            <label>
              <p>업장 전화번호: </p>
              <input
                name="tel"
                type="text"
                value={tel}
                onChange={handleChange}
                placeholder="업장 전화번호를 입력하세요"
                required
              />
            </label>
          </InputContainer>
          <button>등록</button>
          <Banner text={text} isAlert={isAlert} />
        </RegisterForm>
      </Wrapper>
    </>
  );
};

export default RegisterStore;
