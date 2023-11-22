import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import AuthService from '../service/authService';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userEmailState, userRoleState } from '../recoil/atoms';

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
  ${(props) => props.theme.defaultForm};

  input {
    border: 1px solid ${(props) => props.theme.border.primaryBorder};
  }
  input:focus {
    outline-color: ${(props) => props.theme.colors.primaryColor};
  }
`;

interface LoginProps {
  authService: AuthService;
}

const Login: React.FC<LoginProps> = ({ authService }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const navigate = useNavigate();
  const setUserRoleState = useSetRecoilState(userRoleState);
  const setUserEmailState = useSetRecoilState(userEmailState);

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
    authService
      .login(email, password)
      .then((result) => {
        setUserRoleState(result.role);
        setUserEmailState(result.email);
        navigate('/');
      })
      .catch(setError);
  };

  const setError = (error: Error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  return (
    <>
      <Wrapper>
        <LoginForm onSubmit={handleSubmit}>
          <h1>로그인</h1>

          <InputContainer>
            <label>
              <p>이메일: </p>
              <input
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="이메일를 입력하세요"
                required
              />
            </label>
            <label>
              <p>비밀번호: </p>
              <input
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="비밀번호를 입력하세요"
                required
              />
            </label>
          </InputContainer>
          <button>로그인</button>
          <Banner text={text} isAlert={isAlert} />
        </LoginForm>
      </Wrapper>
    </>
  );
};

export default Login;
