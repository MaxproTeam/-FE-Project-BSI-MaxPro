import { getDate, getDay } from '../../utils/date.js';

const workOrderAssignSPVPage = {
    getWorkOrderById : async () => {
        if(window.isWorkOrderAssignSPV) {
            try {
                const module = await import('../../fetch/spvJS.js')

                const currentUrl = new URL(window.location.href);
                const id = currentUrl.pathname.split('/')[2];

                const workOrderName = document.getElementById('work-order-name');
                const picName = document.getElementById('pic-name');
                const workOrderDay = document.getElementById('work-order-day');
                const workOrderDate = document.getElementById('work-order-date');

                const selectPIC = document.getElementById('select-pic');
                const notesInput = document.getElementById('notes');
                const btnAssignWorkOrder = document.getElementById('btn-assign-work-order');

                const result = await module.getWorkOrderById({id});

                if(result.status_code === 201) {
                    const { work_order } = result.data;

                    workOrderName.textContent = work_order.name;
                    picName.textContent = work_order.pic ? work_order.pic : 'Tidak tersedia';
                    workOrderDay.textContent = getDay(work_order.start_work);
                    workOrderDate.textContent = getDate(work_order.start_work);
                    
                    notesInput.value = work_order.notes === '' ? null : work_order.notes;
                    
                    if(work_order.pic) {

                        btnAssignWorkOrder.classList.add('hidden');
                    }
                }else {
                    const errors = result.errors;
                    
                    if (typeof errors === 'object' && errors !== null) {
                        console.log(errors)
                    } else if (typeof errors === 'string') {
                        console.log(errors)
                    }
                }

                const resultPIC = await module.getPIC();

                if(resultPIC.status_code === 201) {
                    const { pic } = resultPIC.data;
                        
                    pic.forEach((value, index) => {
                        if(value.company === result.data.work_order.company_id) {
                            selectPIC.innerHTML += `<option value="${index}">${value.full_name}</option>`
                        }
                    });

                    Array.from(selectPIC.options).forEach(element => {
                        if(element.textContent === result.data.work_order.pic){
                            element.selected = true;
                        }
                    })

                }else {
                    const errors = resultPIC.errors;
                    
                    if (typeof errors === 'object' && errors !== null) {
                        console.log(errors)
                    } else if (typeof errors === 'string') {
                        console.log(errors)
                    }
                }


                btnAssignWorkOrder.addEventListener('click', async () => {
                    const picValue = document.querySelector(`select[id='select-pic'] option:checked`);

                    const assignWorkOrder = await module.assignWorkOrder({id, pic : picValue.value === 'null' ? null : picValue.value , notes: notesInput.value})

                    if(assignWorkOrder.status_code === 201) {
                        window.location.href='/work-order-spv';
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

export default workOrderAssignSPVPage;