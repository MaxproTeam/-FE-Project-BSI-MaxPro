import Cookie from '../utils/cookie.js';

const picAbsent = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/pic/getPIC', {
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
  
  export { picAbsent };