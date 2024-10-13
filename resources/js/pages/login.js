import Cookie from '../utils/cookie.js';

const getDefault = () => {
    document.querySelectorAll('input').forEach(element => {
      element.classList.remove('border-2', 'border-red-500')
    });
  
    document.querySelectorAll('[id$="-error"]').forEach(element => {
      element.textContent = '';
    });
}

const loginPage = async () => {
    if (window.isAuthPage) {
        try {
            const module = await import('../fetch/AuthJS.js');
            const inputUsername = document.getElementById('username-input');
            const inputPassword = document.getElementById('password-input');
            const btnSubmit = document.getElementById('btn-login');
        
            btnSubmit.addEventListener('click', async (event) => {
                getDefault();

                const username = inputUsername.value;
                const password = inputPassword.value;

                const result = await module.loginAccount({ username, password });

                if (result.status_code === 201) {
                    const data = result.data;

                    localStorage.setItem('user', JSON.stringify(data.user));
                    
                    switch (data.user.role) {
                        case 'PIC Cleaning':
                            window.location.href = "/dashboard-pic";
                            break;
                        case 'Supervisor Cleaning':
                            window.location.href = "/dashboard-spv";
                            break;
                        case 'Manager':
                            window.location.href = "/dashboard-manager";
                            break;
                        case 'Client':
                            window.location.href = "/dashboard-client";
                            break;
                        default:
                            console.log("Error to redirect page.")
                            break;
                    }
                } else {
                    const errors = result.errors;

                    if (typeof errors === 'object' && errors !== null) {
                        Object.keys(errors).forEach(key => {
                            document.querySelector(`input[name='${key}']`).classList.add('border-2', 'border-red-500');
                            document.getElementById(`${key}-error`).textContent = '*' + errors[key];
                        });
                    } else if (typeof errors === 'string') {
                        document.querySelectorAll('input').forEach(element => {
                            element.classList.add('border-2', 'border-red-500');
                        });

                        document.getElementById('username-error').textContent = '*' + errors;
                        document.getElementById('password-error').textContent = '*' + errors;
                    }
                }
            });
        } catch (err) {
            console.error('Error loading authJS:', err);
        }
    }
};

export default loginPage;