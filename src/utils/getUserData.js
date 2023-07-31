import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export default function getUserData() {
  const token = Cookies.get('token');
  const decodedToken = token ? atob(token) : '';
  if (decodedToken) {
    return jwtDecode(decodedToken);
  }
  return {};
}
