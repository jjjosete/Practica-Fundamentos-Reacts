import client from '../../API/client.js'


 const signup = ({credentials}) => {
    return client.post('api/auth/signup', credentials);
  };

export default signup;