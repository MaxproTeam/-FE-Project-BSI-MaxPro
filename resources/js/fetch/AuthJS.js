const inputUsername = document.getElementById('username-input');
const inputPassword = document.getElementById('password-input');
const btnSubmit = document.getElementById('btn-login');

const getDefault = () => {
  document.querySelectorAll('input').forEach(element => {
    element.classList.remove('border-2', 'border-red-500')
  });

  document.querySelectorAll('[id$="-error"]').forEach(element => {
    element.textContent = '';
  });
}

const loginAccount = async (data) => {
  axios.post('http://localhost:3000/api/v1/auth/login', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
          console.log(response)
    })
    .catch(function (err) {
      if (err.response) {
        console.log(err.response.data)

        const errors = err.response.data.errors;
        
        getDefault()

        if (typeof errors === 'object' && errors !== null) {
          Object.keys(errors).forEach(key => {
            document.querySelector(`input[name='${key}']`).classList.add('border-2', 'border-red-500')

            document.getElementById(`${key}-error`).textContent = '*' + errors[key];
          });
        } else if (typeof errors === 'string') {

          document.querySelectorAll('input').forEach(element => {
            element.classList.add('border-2', 'border-red-500')
          });

          document.getElementById('username-error').textContent = '*' + errors;
          document.getElementById('password-error').textContent = '*' + errors;
        }
      }
    });    
}

btnSubmit.addEventListener('click', (event) => {
    const username = inputUsername.value;
    const password = inputPassword.value;

    loginAccount({username, password});
})

