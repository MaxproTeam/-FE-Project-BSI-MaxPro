const loginAccount = async (data) => {
  try {
    const response = await axios.post('https://rockesroll.id/backend/api/v1/auth/login', data, {
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

export { loginAccount };