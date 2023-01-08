import axios from 'axios';

const ROOT_API = process.env.REACT_APP_PUBLIC_API;
export default async function validateToken(token) {
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await axiosInstance.post(`${ROOT_API}/validate`)

    .then((res) => res)
    .catch((err) => err);

  return result;
}
