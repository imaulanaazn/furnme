/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import validateToken from '../utils/validateToken';
import { setIsLogin } from '../redux/slices/auth';

export default function AuthorizeUser({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function authorization() {
      await validateToken()
        .then((res) => {
          dispatch(setIsLogin({ isLogin: !!res.tokenValid }));
        })
        .catch((err) => console.log(err));
    }

    authorization();
  }, []);
  return children;
}
