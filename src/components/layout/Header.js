import Button from "../common/Button.js";
import {logout} from "../Login/LoginService.js"
import {NavLink} from "react-router-dom"
import AuthButton from '../auth/AuthButton.js'

function Header({isLogged, onLogout}){
    const handleLogoutClick = async () => {
        await logout();
        onLogout();
      };
    return (
        <header>
            <div></div>
            <nav>
                <NavLink to="/adverts" style={({ isActive }) => (isActive ? { color: 'green' } : null)}
          end> Home </NavLink>
                <NavLink to="/adverts/new" style={({ isActive }) => (isActive ? { color: 'green' } : null)}> Nuevo anuncio</NavLink>

                {isLogged ?(
                    <Button onClick={handleLogoutClick}>Log out</Button>
                ):(
                    
                <Button variant="primary">Log in</Button>
                )}
                </nav>
        </header>
    )
}

export default Header;