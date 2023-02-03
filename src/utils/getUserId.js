import Cookies from 'js-cookie';
import validateToken from './validateToken';

export default async function getUserId() {
  const token = Cookies.get('token');
  const data = await validateToken(token);
  const userId = data?.data?.user?.id;
  return userId;
}
