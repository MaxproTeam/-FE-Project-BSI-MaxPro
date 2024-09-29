const loginAccount = async (data) => {
  try {
    const response = await axios.post('https://943a-180-251-181-15.ngrok-free.app/api/v1/auth/login', data, {
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