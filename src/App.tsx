import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import SingIn from './pages/SignIn';
// import SingUp from './pages/SignUp';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AppProvider>
        <SingIn />
      </AppProvider>

      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
export default App;
