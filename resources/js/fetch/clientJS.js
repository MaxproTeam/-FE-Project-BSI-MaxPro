import Cookie from '../utils/cookie.js';

const getPICAttedances = async (data) => {
  try {
    const response = await axios.get(`https://700b-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/client/pic-attendances`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-requested-with': 'XMLHttpRequest'
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
    const response = await axios.get(`https://700b-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/client/spv-attendances`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-requested-with': 'XMLHttpRequest'
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
    const response = await axios.get(`https://700b-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/client/work-orders`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-requested-with': 'XMLHttpRequest'
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
    const response = await axios.post('https://700b-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/client/work-orders', data, {
    headers: {
        'Content-Type': 'application/json',
        'x-requested-with': 'XMLHttpRequest'
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