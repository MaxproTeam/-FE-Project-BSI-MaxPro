const getPICAttendance = async (data) => {
    try {
      const response = await axios.get('https://88fc-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/pic/attedances', {
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

  const setPICAttendance = async (data) => {
    try {
      const response = await axios.post('https://88fc-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/pic/attedances', data, {
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

  const getWorkOrders = async (data) => {
    try {
      const response = await axios.get(`https://88fc-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/pic/work-orders`, {
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

  const doneWorkOrder = async (data) => {
    try {
      const response = await axios.put(`https://88fc-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/pic/work-orders`, data, {
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
  
  export { getPICAttendance, setPICAttendance, getWorkOrders, doneWorkOrder };