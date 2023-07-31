import axios from 'axios';
import Cookies from 'js-cookie';
import getUserData from './getUserData';

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

async function getRecommendedProducts() {
  const userData = getUserData();
  try {
    const res = (await axios.get(`${ROOT_URL}/products/recommended`, {
      headers: { userid: userData.id },
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

async function getNewArrivalProducts() {
  try {
    const res = (await axios.get(`${ROOT_URL}/products/new`));
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

async function getProductById(productId) {
  try {
    const res = await axios.get(`${ROOT_URL}/products/${productId}`);
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

async function getUserCarts() {
  const token = Cookies.get('token');
  const decodedToken = atob(token);
  try {
    const res = await axios.get(`${ROOT_URL}/carts`, {
      headers: {
        Authorization: `Bearer ${decodedToken}`,
      },
    });
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

async function updateUserCarts(payload) {
  const token = Cookies.get('token');
  const decodedToken = atob(token);
  try {
    const res = await axios.post(`${ROOT_URL}/carts`, payload, {
      headers: {
        Authorization: `Bearer ${decodedToken}`,
      },
    });
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

async function deleteUserCarts(payload) {
  const token = Cookies.get('token');
  const decodedToken = atob(token);
  try {
    const res = await axios.delete(`${ROOT_URL}/carts?userId=${payload.userId}&productId=${payload.productId}`, {
      headers: {
        Authorization: `Bearer ${decodedToken}`,
      },
    });
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

async function getRecentlyViewedProd() {
  const userData = getUserData();

  try {
    const res = await axios.get(`${ROOT_URL}/users/${userData.id}/recently-viewed`);
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
  getRecentlyViewedProd,
  getNewArrivalProducts,
  getAllProducts,
  getProductById,
  getUserCarts,
  updateUserCarts,
  deleteUserCarts,
};
