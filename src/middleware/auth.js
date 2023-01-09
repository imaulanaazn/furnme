/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import validateToken from '../utils/validateToken';
import { setIsLogin } from '../redux/slices/auth';

export default function AuthorizeUser({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function authorization() {
      const token = Cookies.get('token');
      if (token) {
        await validateToken(token)
          .then((res) => {
            if (res.data.isTokenValid) {
              dispatch(setIsLogin({ isLogin: true }));
            } else {
              dispatch(setIsLogin({ isLogin: false }));
            }
          })
          .catch((err) => console.log(err));
      }
    }
    authorization();
  }, []);
  return children;
}
