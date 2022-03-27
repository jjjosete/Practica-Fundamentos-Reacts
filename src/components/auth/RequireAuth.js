import { Navigate, useLocation } from 'react-router-dom';
import { AuthContextConsumer } from './context';
const RequireAuth = ({ isLogged, children }) => {
  const location = useLocation();
  console.log(location);

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
const ConnectedRequireAuth= props =>(
  <AuthContextConsumer>
    {({isLogged}) => <RequireAuth isLogged={isLogged} {...props} />}
  </AuthContextConsumer>
)
export default ConnectedRequireAuth;