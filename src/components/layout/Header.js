import Button from "../common/Button.js";
import {logout} from "../Login/LoginService.js"
import {NavLink} from "react-router-dom"
import AuthButton from '../auth/AuthButton.js'

function Header(){
    
    return (
        <header>
            <div></div>
            <nav>
                <NavLink to="/adverts" style={({ isActive }) => (isActive ? { color: 'green' } : null)}
          end> Home </NavLink>
                <NavLink to="/adverts/new" style={({ isActive }) => (isActive ? { color: 'green' } : null)}> Nuevo anuncio</NavLink>
                <AuthButton/>
                </nav>
        </header>
    )
}

export default Header;