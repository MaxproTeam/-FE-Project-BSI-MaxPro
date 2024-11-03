const getDefault = () => {
    document.querySelectorAll('input').forEach(element => {
      element.classList.remove('border-2', 'border-red-500')
    });
  
    document.querySelectorAll('[id$="-error"]').forEach(element => {
      element.textContent = '';
    });
}

const createWorkOrderPage = {
    setWorkOrder : async () => {
        if(window.isCreateWorkOrder) {
            try {
                const module = await import('../../fetch/clientJS.js')
                const inputWorkOrder = document.getElementById('workOrder');
                const inputDescription = document.getElementById('description');
                const inputStartWork = document.getElementById('start_work');
                const inputEndWork = document.getElementById('end_work');
                const inputNotes = document.getElementById('notes');
                const btnCreateWorkOrder = document.getElementById('btn-create-work-order');

                btnCreateWorkOrder.addEventListener('click', async (event) => {
                    getDefault();

                    const result = await module.setWorkOrder({
                        workOrder: inputWorkOrder.value,
                        description: inputDescription.value,
                        start_work: inputStartWork.value,
                        end_work: inputEndWork.value,
                        notes: inputNotes.value
                    });

                    if (result.status_code === 201) {
                        window.location.href="/work-order-client"
                    } else {
                        const errors = result.errors;

                        if (typeof errors === 'object' && errors !== null) {
                            Object.keys(errors).forEach(key => {
                                const input = document.querySelector(`input[name='${key}']`);
                                const textarea = document.querySelector(`textarea[name='${key}']`);
                                const errorElement = document.getElementById(`${key}-error`);
                            
                                if (input) {
                                    input.classList.add('border-2', 'border-red-500');
                                } else if (textarea) {
                                    textarea.classList.add('border-2', 'border-red-500');
                                }
                            
                                if (errorElement) {
                                    errorElement.textContent = '*' + errors[key];
                                }
                            });
                            
                            document.querySelectorAll('input, textarea').forEach(element => {
                                if (!errors[element.name]) {
                                    element.classList.remove('border-2', 'border-red-500');
                                }
                            });
                        } else if (typeof errors === 'string') {
                            console.log(errors)
                        }
                    }
                })
            } catch (err) {
                console.error('Error loading clientJS:', err);
            }
        }
    }
}

export default createWorkOrderPage;