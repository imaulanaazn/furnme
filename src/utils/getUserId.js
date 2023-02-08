import Cookies from 'js-cookie';
import validateToken from './validateToken';

export default async function getUserId() {
  const token = Cookies.get('token');
  const decodedToken = atob(token);
  const data = await validateToken(decodedToken);
  const userId = data?.data?.user?.id;
  return userId;
}
