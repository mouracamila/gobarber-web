import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import SingIn from './pages/SignIn';
// import SingUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AuthProvider>
        <SingIn />
      </AuthProvider>

      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
export default App;
