import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

import { logout } from '../Login/LoginService.js';
import AuthContext from './context.js';

function AuthButton() {
  const { isLogged, handleLogout: onLogout } = useContext(AuthContext);

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return isLogged ?(
      <Button onClick={handleLogoutClick}>Log out</Button>
  ):(
      
  <Button variant="primary">Log in</Button>
  )
  
}

export default AuthButton;