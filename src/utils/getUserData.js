import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export default function getUserData() {
  const token = Cookies.get('token');
  const decodedToken = atob(token);
  const userData = jwtDecode(decodedToken);
  return userData;
}
