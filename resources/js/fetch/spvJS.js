  const getPICAttedances = async (data) => {
    try {
      const response = await axios.get(`https://a584-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/spv/pic-attendances`, {
        headers: {
          'Content-Type': 'application/json',
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

  const getSPVAttendance = async (data) => {
    try {
      const response = await axios.get('https://a584-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/spv/attedances', {
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

  const setSPVAttendance = async (data) => {
    try {
      const response = await axios.post('https://a584-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/spv/attedances', data, {
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

  const getPIC = async () => {
    try {
      const response = await axios.get(`https://a584-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/spv/users-pic/`, {
        headers: {
          'Content-Type': 'application/json',
          'x-requested-with': 'XMLHttpRequest'
        },
        withCredentials: true,
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
      const response = await axios.get(`https://a584-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/spv/work-orders`, {
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

  const getWorkOrderById = async (data) => {
    try {
      const response = await axios.get(`https://a584-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/spv/work-orders/${data.id}`, {
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-requested-with': 'XMLHttpRequest'
        },
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      if (err.response) {
        return err.response.data;
      }
      throw err;
    }
  }

  const assignWorkOrder = async (data) => {
    try {
      const response = await axios.put(`https://a584-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/spv/work-orders/`, data, {
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

  const checkWorkOrder = async (data) => {
    try {
      const response = await axios.post(`https://a584-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/spv/work-checklists/`, data, {
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
  
  export { getPICAttedances, getSPVAttendance, setSPVAttendance, getPIC, getWorkOrders, getWorkOrderById, assignWorkOrder, checkWorkOrder };