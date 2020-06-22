import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import SingIn from './pages/SignIn';
import SingUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <SingUp />
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
s;
export default App;
