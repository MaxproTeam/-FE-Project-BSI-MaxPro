import Cookie from '../utils/cookie.js';

const getPICAttedances = async (data) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/client/pic-attendances`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true,
      params: data,
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    }
    throw err;
  }
}

const getSPVAttedances = async (data) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/client/spv-attendances`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true,
      params: data
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    }
    throw err;
  }
}

const getWorkOrders = async (data) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/client/work-orders`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true,
      params: data
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    }
    throw err;
  }
}

const setWorkOrder = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/client/work-orders', data, {
    headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    }
    throw err;
  }
}
  
export { getPICAttedances, getSPVAttedances, setWorkOrder, getWorkOrders };