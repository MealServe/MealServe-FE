import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import HttpClient from '../network/http';
import AuthService from '../service/authService';


const baseURL: string = process.env.REACT_APP_BASE_URL as string;
const httpClient = new HttpClient(baseURL);
const authService = new AuthService(httpClient);

const LoginPage = styled.div`
  background-color: ${(props) => props.theme.colors.bgColor};
  padding-top: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const LoginForm = styled.form`
  height: clamp(300px, 50%, 320px);
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
`;

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [text, setText] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authService.login(email, password).catch(setError);
  };

  const setError = (error: Error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  return (
    <>
      <LoginPage>
        <LoginForm onSubmit={handleSubmit}>
          <h1>로그인</h1>

          <InputContainer>
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="이메일를 입력하세요"
              required
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </InputContainer>
          <button>로그인</button>
        </LoginForm>
      </LoginPage>
      <Banner text={text} isAlert={isAlert} />
    </>
  );
};

export default Login;
