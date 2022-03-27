import { useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import NewAdd from './components/NewAdd/NewAdd.js'
import AddDetail from './components/AddDetail/AddDetail.js'
import AddsPage from './components/AddsPage/AddsPage.js'
import LoginPage from './components/Login/LoginPage.js';
import RequireAuth from './components/auth/RequireAuth.js';
import AuthContext, { AuthContextProvider } from './components/auth/context.js';

import './App.css';
import Layout from './components/layout/Layout.js';

function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
      
      const handleLogin = () => {
        setIsLogged(true);
      };
      const handleLogout = () => {
        setIsLogged(false);
      }
    return (
      <div className="App">
        <AuthContextProvider value={{isLogged, handleLogin, handleLogout}}>
        <Routes>
          <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/" element={<Navigate to="/adverts" />} />
          <Route
            path="/adverts"
            element={<Layout />}
          >
            <Route index element={
            <RequireAuth>

            <AddsPage onLogin={handleLogin}
            />
            </RequireAuth>}/>
            <Route
              path=":addId"
              element={
                <RequireAuth isLogged={isLogged}>
                  <AddDetail
                    onLogin={handleLogin}
                    end
                  />
                </RequireAuth>
              }
            />
            
            <Route
              path=":addTag"
              element={
                <RequireAuth isLogged={isLogged}>
                  <AddsPage
                    isLogged={isLogged}
                    onLogin={handleLogin}
                    onLogout={handleLogout}
                    end
                  />
                </RequireAuth>
              }
            />
            <Route
              path="/adverts/new"
              element={
                <RequireAuth isLogged={isLogged}>
                  <NewAdd isLogged={isLogged} onLogout={handleLogout} />
                </RequireAuth>
              }
            />
          </Route>

          
          <Route path="/404" element={<div>404 | Not Found</div>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        </AuthContextProvider>
        
      </div>
    ); 
}

export default App;
