import axios from 'axios';

const ROOT_URL = process.env.REACT_APP_PUBLIC_API;

async function getCategories() {
  const url = '/categories';
  try {
    const res = await axios.get(ROOT_URL + url);
    const { data } = res;

    return {
      success: true,
      data,
      message: 'data retreived successfully',
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: 'failed to retreive data',
    };
  }
}

async function getSpecialDiscount() {
  return null;
}

export { getCategories, getSpecialDiscount };
