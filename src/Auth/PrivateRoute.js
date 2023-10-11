import { Route, Navigate } from 'react-router-dom';
import { useUser } from './useUser';

export const PrivateRoute = ({ ...props }) => {
  const user = useUser();

  if (!user) {
    // Use Navigate component for redirection
    return <Navigate to="/login" />;
  }

  // Use Route component as before
  return <Route {...props} />;
};


