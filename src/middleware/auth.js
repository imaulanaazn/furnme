/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function AuthorizeUser({ children }) {
  const token = Cookies.get('token');

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
