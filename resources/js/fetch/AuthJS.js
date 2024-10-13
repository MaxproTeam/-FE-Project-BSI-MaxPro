const loginAccount = async (data) => {
  try {
    const response = await axios.post('https://342e-2001-448a-2020-5ace-f131-c008-b0d7-379f.ngrok-free.app/api/v1/auth/login', data, {
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