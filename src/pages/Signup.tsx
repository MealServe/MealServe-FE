import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import AuthService from '../service/authService';
import { useNavigate } from 'react-router-dom';

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

const SignupForm = styled.form`
  height: clamp(400px, 50%, 480px);
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

  input[type='checkbox'] {
    height: 16px;
    width: 16px;
    margin: 8px;
    justify-self: flex-start;
  }
`;

interface SignupProps {
  authService: AuthService;
}

const Signup: React.FC<SignupProps> = ({ authService }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target as HTMLInputElement;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'isOwner':
        setIsOwner(checked);
        break;
      default:
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authService
      .signup(email, password, address, phone, isOwner)
      .then(() => {
        navigate('/login');
      })
      .catch((e) => {
        setError(e);
      });
  };

  const setError = (error: Error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  return (
    <>
      <Wrapper>
        <SignupForm onSubmit={handleSubmit}>
          <h1>회원가입</h1>

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
              <p>전화번호: </p>
              <input
                name="phone"
                type="text"
                value={phone}
                onChange={handleChange}
                placeholder="전화번호를 입력하세요"
                required
              />
            </label>
            <label>
              사장님으로 가입하기
              <input
                name="isOwner"
                type="checkbox"
                checked={isOwner}
                onChange={handleChange}
              />
            </label>
          </InputContainer>
          <button>회원가입</button>
          <Banner text={text} isAlert={isAlert} />
        </SignupForm>
      </Wrapper>
    </>
  );
};

export default Signup;
