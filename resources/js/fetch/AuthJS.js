const loginAccount = async (data) => {
  try {
    const response = await axios.post('https://700b-2001-448a-2020-5ace-e0e6-d412-2525-a3f4.ngrok-free.app/api/v1/auth/login', data, {
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

export { loginAccount };