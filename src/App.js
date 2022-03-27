import { useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import NewAdd from './components/NewAdd/NewAdd.js'
import AddDetail from './components/AddDetail/AddDetail.js'
import AddsPage from './components/AddsPage/AddsPage.js'
import LoginPage from './components/Login/LoginPage.js';
import RequireAuth from './components/auth/RequireAuth.js';

import './App.css';

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
        <Routes>
          <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/" element={<Navigate to="/adverts" /> } />
          <Route path="/adverts" element={

          <RequireAuth isLogged={isLogged}>
          <AddsPage isLogged={isLogged} onLogin={handleLogin} onLogout={handleLogout} end
          />
        </RequireAuth>}  />
        <Route path="/adverts/:addId" element={

        <RequireAuth isLogged={isLogged}>
        <AddDetail isLogged={isLogged} onLogin={handleLogin} onLogout={handleLogout} end
        />
        </RequireAuth>}  />

          <Route path="/adverts/new" element={
          <RequireAuth isLogged={isLogged}>
              <NewAdd isLogged={isLogged} onLogout={handleLogout} />
            </RequireAuth>} />
          <Route path="/404" element={<div>404 | Not Found</div>}/>
          <Route path="*" element={<Navigate to="/404"/>} />
        </Routes>
        {/**
         *{isLogged ? <AddsPage isLogged={isLogged} onLogout={handleLogout}/> : <LoginPage onLogin={handleLogin}/>}
         *    <NewAdd />
         */}
       
      </div>
    ); 
}

export default App;
