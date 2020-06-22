import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1> Logon</h1>
          <input placeholder="Email"></input>
          <input type="password" placeholder="Password" />
          <button type="submit">Enter</button>
          <a href="login">Forgot my password</a>
        </form>
        <a href="create">
          <FiLogIn />
          Register
        </a>
      </Content>
      <Background></Background>
    </Container>
  );
};

export default SignIn;
