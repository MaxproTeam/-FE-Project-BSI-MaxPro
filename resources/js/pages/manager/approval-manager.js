import { formatDate, getDate } from '../../utils/date.js';

const approvalManagerPage = {
    getWorkOrder : async () => {
        if(window.isApprovalManager) {
            try {
                const module = await import('../../fetch/managerJS.js')
                const user = JSON.parse(localStorage.getItem('user'));

                const currentUrl = new URL(window.location.href);
                const id = currentUrl.pathname.split('/')[2]; 

                const namaProyek = document.getElementById('nama-proyek');
                const headlineNamaProyek = document.getElementById('headline-nama-proyek');
                const jumlahPIC = document.getElementById('jumlah-pic');
                const namaSPV = document.getElementById('nama-spv');

                const woID = document.getElementById('wo-id');
                const woName = document.getElementById('wo-name');
                const woStart = document.getElementById('wo-start');
                const woEnd = document.getElementById('wo-end');
                const woDescription = document.getElementById('wo-description');
                const woNotes = document.getElementById('wo-notes');
                const approveSelect = document.querySelector('select[name="approve-select"] option:checked');
                const btnSaveApprove = document.getElementById('btn-save-approve-work-order');

                const result = await module.getWorkOrderById(id);

                if(result.status_code === 201) {
                    const data = result.data;

                    namaProyek.textContent = data.work_order.company_name;
                    headlineNamaProyek.textContent = data.work_order.company_name;
                    jumlahPIC.textContent = data.pic.total.picCount;
                    namaSPV.textContent = data.supervisor.full_name;

                    woID.textContent = data.work_order.id;
                    woName.textContent = data.work_order.name;
                    woStart.textContent = getDate(data.work_order.start_work);
                    woEnd.textContent = getDate(data.work_order.end_work);
                    woDescription.innerHTML = data.work_order.description.replace(/\n/g, '<br>');
                    woNotes.textContent = data.work_order.notes ? data.work_order.notes : 'Tidak ada catatan.';
                    
                    if(user.role !== 'Manager') {
                        btnSaveApprove.classList.add('hidden');
                    }
                    
                    if(data.work_order.status === 'Approved' || data.work_order.status === 'In Review'){
                        document.querySelector(`select[name="approve-select"] option[value='Approved']`).selected = true;
                        
                        btnSaveApprove.classList.add('hidden');
                    }

                    btnSaveApprove.addEventListener('click', async (event) => {
                        try {
                            const isApproved = await module.approveWorkOrder({id : data.work_order.id, approve : approveSelect.value})

                            if(isApproved.status_code === 201) {
                                window.location.href=`/detail-proyek-manager/${data.work_order.company_id}`;
                            }else{
                                const errors = isApproved.errors;
                        
                                if (typeof errors === 'object' && errors !== null) {
                                    console.log(errors)
                                } else if (typeof errors === 'string') {
                                    console.log(errors)
                                }
                            }
                        } catch (err) {
                            console.log(err.message)   
                        }
                        
                    });
                
                }else {
                    const errors = result.errors;
                    
                    if (typeof errors === 'object' && errors !== null) {
                        console.log(errors)
                    } else if (typeof errors === 'string') {
                        console.log(errors)
                    }
                }
            } catch (err) {
                console.error('Error loading managerJS:', err);
            }
        }
    }
}

export default approvalManagerPage;