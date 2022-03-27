import { useState } from 'react';
import Button from '../common/Button.js';
import signup from './SigninService.js';

function SigninPage() {
  
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    username: '',
    name: '',
  });
  const handleSubmit = async event => {
    event.preventDefault();
    console.log('Sign up: call to api', credentials);
    try {    
       await signup(credentials);      
    } catch (error) {
      console.log(error)
    }

    
};
  const handleChange = event => {
    setCredentials(credentials => ({
      ...credentials,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="SigninPage">
      <h1 className="SigninPage-title">Sign into Nodepop</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Escriba aquí su nombre de usuario</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        
        <label htmlFor='password'>Escriba aquí su contraseña</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        
        
        <label htmlFor='email'>Escriba aquí su email</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        
        <label htmlFor='name'>Escriba aquí su nombre</label>
         <input
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleChange}
          
        />
        <Button type="submit" variant="primary" disabled={!credentials.email||!credentials.name||!credentials.password||!credentials.username}>
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default SigninPage;