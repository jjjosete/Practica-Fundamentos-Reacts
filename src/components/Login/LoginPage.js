import { useState } from 'react';
import Button from '../common/Button.js';
import login from './LoginService.js';

import { useLocation, useNavigate } from "react-router-dom";
function LoginPage({ onLogin }) {

  const navigate = useNavigate();
  const location = useLocation();
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        remember: false,
      });

      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
      const {email, password, remember} = credentials;

      const resetError = () => setError(null);

      const handleSubmit = async event => {
        event.preventDefault();
        try {
          resetError();
          setIsLoading(true);
          await login(credentials);
          setIsLoading(false);
          onLogin();
          const from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
        } catch (error) {
          setError(error);
          setIsLoading(false);
          console.log(error);
        }
      };
      const handleChange = event => {
        setCredentials((credentials) => ({
          ...credentials,
          [event.target.name]:
            event.target.type === "checkbox"
              ? event.target.checked
              : event.target.value,
        }));
      };
  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log into Nodepop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id='email'
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          checked={remember}
          id="rememberMe"
          onChange={handleChange}
        />
        <Button type="submit" variant="primary" disabled={!credentials.password||!credentials.email || isLoading}>

          Log in
        </Button>
      </form>
      
      {error && (
        <div onClick={resetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;