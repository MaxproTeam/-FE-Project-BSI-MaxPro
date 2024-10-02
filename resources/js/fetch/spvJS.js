import Cookie from '../utils/cookie.js';

const getSPVAttendance = async (data) => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/spv/attedances', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': Cookie.get('key-authorization')
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

  const setSPVAttendance = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/spv/attedances', data, {
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
  
  export { getSPVAttendance, setSPVAttendance };