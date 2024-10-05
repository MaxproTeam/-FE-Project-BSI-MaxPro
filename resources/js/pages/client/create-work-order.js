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
                                if(document.querySelector(`input[name='${key}']`)) {
                                    document.querySelector(`input[name='${key}']`).classList.add('border-2', 'border-red-500');
                                }else{
                                    document.querySelector(`textarea[name='${key}']`).classList.add('border-2', 'border-red-500');
                                }
                                
                                document.getElementById(`${key}-error`).textContent = '*' + errors[key];
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