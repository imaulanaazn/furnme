import axios from 'axios';

const ROOT_API = process.env.REACT_APP_PUBLIC_API;

export async function handleGoogleAuth(payload) {
  const result = await axios.post(`${ROOT_API}/auth/googleauth`, payload);
  return result;
}

export async function handleSignin(payload) {
  const result = await axios.post(`${ROOT_API}/auth/signin`, payload);
  return result;
}

export async function handleSignup(payload) {
  const result = await axios.post(`${ROOT_API}/auth/signup`, payload)
    .then((response) => response)
    .catch((err) => err);
  return result;
}
