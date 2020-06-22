import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import SingIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <SingIn />
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
