import React from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

function App() {

  const Login = React.lazy(() => import('./pages/Login'));
  const SignUp = React.lazy(() => import('./pages/SignUp'));
  const Todo = React.lazy(() => import('./pages/Todo'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
