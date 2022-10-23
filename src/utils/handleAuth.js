import axios from 'axios';

const ROOT_API = process.env.REACT_APP_PUBLIC_API;
const API_VERSION = 'api/v1';
const URL = 'auth/signin';

export default async function handleSignin(payload) {
  const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, payload);
  return response;
}
