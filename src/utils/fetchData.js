import axios from 'axios';

const ROOT_URL = process.env.REACT_APP_PUBLIC_API;

async function getCategories() {
  try {
    const res = await axios.get(`${ROOT_URL}/categories`);
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
  try {
    const res = await axios.get(`${ROOT_URL}/products`, { headers: { discount: true, limit: 10 } });
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

async function getTrendingProducts() {
  try {
    const res = await axios.get(`${ROOT_URL}/products/trending`);
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

async function getRecommendedProducts(userId) {
  try {
    const res = (await axios.get(`${ROOT_URL}/products/recommended`, {
      headers: { userid: userId },
    }));
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

async function getAllProducts(filter) {
  try {
    const res = (await axios.get(`${ROOT_URL}/products`, { headers: filter }));
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

export {
  getCategories,
  getSpecialDiscount,
  getTrendingProducts,
  getRecommendedProducts,
  getAllProducts,
};
