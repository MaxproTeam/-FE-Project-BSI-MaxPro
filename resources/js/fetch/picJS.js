const getPICAttendance = async (data) => {
    try {
      const response = await axios.get('https://rockesroll.id/backend/api/v1/pic/attedances', {
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
      const currentDate = new Date();
      const hours = currentDate.getHours();

      const response = hours < 17 ? await axios.post('https://rockesroll.id/backend/api/v1/pic/attedances', data, {
      headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }) : await axios.put('https://rockesroll.id/backend/api/v1/pic/attedances', data, {
      headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
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
      const response = await axios.get(`https://rockesroll.id/backend/api/v1/pic/work-orders`, {
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
      const response = await axios.put(`https://rockesroll.id/backend/api/v1/pic/work-orders`, data, {
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