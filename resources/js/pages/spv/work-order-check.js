import { getDate, getDay } from '../../utils/date.js';

const workOrderCheckSPVPage = {
    getWorkOrderById : async () => {
        if(window.isWorkOrderCheckSPV) {
            try {
                const module = await import('../../fetch/spvJS.js')

                const currentUrl = new URL(window.location.href);
                const id = currentUrl.pathname.split('/')[2];

                const workOrderName = document.getElementById('work-order-name');
                const picName = document.getElementById('pic-name');
                const workOrderDay = document.getElementById('work-order-day');
                const workOrderDate = document.getElementById('work-order-date');

                const btnChecknWorkOrder = document.getElementById('btn-check-work-order');

                const result = await module.getWorkOrderById({id});

                if(result.status_code === 201) {
                    const { work_order } = result.data;

                    workOrderName.textContent = work_order.name;
                    picName.textContent = work_order.pic ? work_order.pic : 'Tidak tersedia';
                    workOrderDay.textContent = getDay(work_order.start_work);
                    workOrderDate.textContent = getDate(work_order.start_work);
                }else {
                    const errors = result.errors;
                    
                    if (typeof errors === 'object' && errors !== null) {
                        console.log(errors)
                    } else if (typeof errors === 'string') {
                        console.log(errors)
                    }
                }

                btnChecknWorkOrder.addEventListener('click', async () => {
                    const inputRadios = document.querySelectorAll('input[type=radio]');
                    const notesInput = document.getElementById('notes');

                    const evaluations = {};

                    inputRadios.forEach(element => {
                        if(element.checked) {
                           evaluations[element.name] = element.value;
                        }
                    });

                    evaluations['notes'] = notesInput.value;

                    const assignWorkOrder = await module.checkWorkOrder({work_id: id, evaluations : evaluations})

                    if(assignWorkOrder.status_code === 201) {
                        window.location.href='/work-checklist-spv';
                    }else {
                        const errors = assignWorkOrder.errors;
                        
                        if (typeof errors === 'object' && errors !== null) {
                            console.log(errors)
                        } else if (typeof errors === 'string') {
                            console.log(errors)
                        }
                    }
                })
            } catch (err) {
                console.error('Error loading managerJS:', err);
            }
        }
    },
}

export default workOrderCheckSPVPage;