import { formatDate } from '../../utils/date.js';

const detailProyekManagerPage = {
    getCompany : async () => {
        if(window.isDetailProyekManager) {
            try {
                const module = await import('../../fetch/managerJS.js')

                const currentUrl = new URL(window.location.href);
                const id = currentUrl.pathname.split('/')[2]; 

                const namaProyek = document.getElementById('nama-proyek');
                const headlineNamaProyek = document.getElementById('headline-nama-proyek');
                const jumlahPIC = document.getElementById('jumlah-pic');
                const namaSPV = document.getElementById('nama-spv')

                const result = await module.getCompaniesById({id: parseInt(id)});

                if(result.status_code === 201) {
                    const data = result.data;

                    namaProyek.textContent = data.company.name;
                    headlineNamaProyek.textContent = data.company.name;
                    jumlahPIC.textContent = data.pic.total.picCount;
                    namaSPV.textContent = data.supervisor.full_name;
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
    },
    getPICAttendances : async () => {
        if(window.isDetailProyekManager) {
            try {
                const module = await import('../../fetch/managerJS.js')

                const currentUrl = new URL(window.location.href);
                const id = currentUrl.pathname.split('/')[2]; 

                const tbodyAttendanceContainer = document.getElementById('tbody-attendance-container');

                const result = await module.getPICAttedancesCompany({id: parseInt(id)});

                if(result.status_code === 201) {
                    const data = result.data;

                    data.pic_attedances.forEach(attendance => {
                        const endAttendance = attendance.end_attedance ? formatDate(attendance.end_attedance) : 'Tidak tersedia';

                        tbodyAttendanceContainer.innerHTML += `
                        <tr>
                            <td class="text-center font-semibold text-grey text-sm pt-6 w-16">
                                <button>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#00BF63" />
                                        <path d="M14.0588 6.74568L16.5294 9.15732M12.4118 18H19M5.82353 14.7845L5 18L8.29412 17.1961L17.8355 7.88237C18.1443 7.58087 18.3178 7.172 18.3178 6.74568C18.3178 6.31936 18.1443 5.9105 17.8355 5.609L17.6939 5.47073C17.385 5.16932 16.9662 5 16.5294 5C16.0927 5 15.6738 5.16932 15.3649 5.47073L5.82353 14.7845Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </td>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${attendance.full_name}</td>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${formatDate(attendance.start_attedance)}</td>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${endAttendance}</td>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${attendance.status}</td>
                        </tr>`
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
    },
    getWorkOrders : async () => {
        if(window.isDetailProyekManager) {
            try {
                const module = await import('../../fetch/managerJS.js')

                const currentUrl = new URL(window.location.href);
                const id = currentUrl.pathname.split('/')[2]; 

                const tbodyWorkOrderContainer = document.getElementById('tbody-work-order-container');

                const result = await module.getWorkOrdersCompany({id: parseInt(id)});

                if(result.status_code === 201) {
                    const data = result.data;
                    data.work_orders.forEach(work_order => {
                        tbodyWorkOrderContainer.innerHTML += `
                        <tr>
                            <td class="text-center font-semibold text-grey text-sm pt-6 w-16">
                                <button onclick="window.location.href='/approval-manager/${work_order.id}'">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#00BF63" />
                                        <path d="M14.0588 6.74568L16.5294 9.15732M12.4118 18H19M5.82353 14.7845L5 18L8.29412 17.1961L17.8355 7.88237C18.1443 7.58087 18.3178 7.172 18.3178 6.74568C18.3178 6.31936 18.1443 5.9105 17.8355 5.609L17.6939 5.47073C17.385 5.16932 16.9662 5 16.5294 5C16.0927 5 15.6738 5.16932 15.3649 5.47073L5.82353 14.7845Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </td>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${work_order.name}</td>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${formatDate(work_order.created_at)}</td>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${formatDate(work_order.start_work)}</td>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${formatDate(work_order.end_work)}</td>    
                        </tr>`
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
    },
}

export default detailProyekManagerPage;