import Cookie from '../utils/cookie.js';

const getPICAttedance = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/pic/attedances', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Cookie.get('key-authorization')
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

  const setPICAttedance = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/pic/attedances', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Cookie.get('key-authorization')
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
  
  export { getPICAttedance, setPICAttedance };