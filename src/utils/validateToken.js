import axios from 'axios';
import Cookies from 'js-cookie';

const ROOT_API = process.env.REACT_APP_PUBLIC_API;

export default async function validateToken() {
  const token = Cookies.get('token');
  const decodedToken = atob(token);
  try {
    const result = await axios.post(`${ROOT_API}/users/validate`, {}, {
      headers: {
        Authorization: `Bearer ${decodedToken}`,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
