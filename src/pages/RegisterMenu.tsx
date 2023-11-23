import React, { useState } from 'react';
import styled from 'styled-components';
import StoreService from '../service/storeService';
import { useNavigate } from 'react-router-dom';
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
    border: 1px solid ${(props) => props.theme.border.primaryBorder};
  }
  input:focus {
    outline-color: ${(props) => props.theme.colors.primaryColor};
  }

  input[type='file'] {
    width: auto;
    height: auto;
    overflow: hidden;
    border: none;
  }
`;

interface RegisterMenuProps {
  storeService: StoreService;
}

const RegisterMenu: React.FC<RegisterMenuProps> = ({ storeService }) => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [file, setFile] = useState<File>();
  const [text, setText] = useState<string>('');
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    storeService
      .addMenu(name, price, file)
      .then((result) => {
        navigate('/');
      })
      .catch(setError);
  };

  const setError = (error: Error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'price':
        setPrice(Number(value));
        break;
      case 'file':
        if (files === null) {
          break;
        }
        setFile(files[0]);
        break;
      default:
    }
  };
  return (
    <>
      <Wrapper>
        <RegisterForm onSubmit={handleSubmit}>
          <h1>메뉴 등록하기</h1>
          <InputContainer>
            <label>
              <p>메뉴 이름:</p>
              <input
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="메뉴 이름을 입력하세요"
                required
              />
            </label>
            <label>
              <p>가격: </p>
              <input
                name="price"
                type="text"
                value={price}
                onChange={handleChange}
                placeholder="가격를 입력하세요"
                required
              />
            </label>
            <input
              name="file"
              type="file"
              onChange={handleChange}
              id="file"
              accept="image/*"
            />
          </InputContainer>
          <button>등록</button>
          <Banner text={text} isAlert={isAlert} />
        </RegisterForm>
      </Wrapper>
    </>
  );
};

export default RegisterMenu;
