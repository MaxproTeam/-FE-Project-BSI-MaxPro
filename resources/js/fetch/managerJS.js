import Cookie from '../utils/cookie.js';

const getCompanies = async (data) => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/manager/companies', {
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

  const getCompaniesById = async (data) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/manager/companies/${data.id}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
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

  const getPICAttedancesCompany = async (data) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/manager/company/pic-attendances/${data.id}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
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

  const getWorkOrdersCompany = async (data) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/manager/company/work-orders/${data.id}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
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

  const getWorkOrders = async (data) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/manager/work-orders`, {
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

  const getWorkOrderById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/manager/work-orders/${id}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
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

  const approveWorkOrder = async (data) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/manager/work-orders`, data, {
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
  
  export { getCompanies, getCompaniesById, getPICAttedancesCompany, getWorkOrdersCompany, getWorkOrders, getWorkOrderById, approveWorkOrder };