import { getDate, getDay } from '../../utils/date.js';

const dashboardClientPage = {
    getAccount: () => {
        if(window.isDashboardClient) {
            const userFullname = document.getElementById('user-fullname');
            const userCompany = document.getElementById('user-company');
            const userRole = document.getElementById('user-role');

            if(localStorage.getItem('user')) {
                const data = JSON.parse(localStorage.getItem('user'));
                
                userFullname.textContent=data.full_name,
                userCompany.textContent=data.company,
                userRole.textContent=data.role
            }
        }
    },
    getWorkOrders : async () => {
        if(window.isDashboardClient) {
            try {
                const module = await import('../../fetch/clientJS.js')
                const picHeader = document.getElementById('count-pic')
                const supervisorHeader = document.getElementById('supervisor')
                const containerWorkOrders = document.getElementById('container-work-orders');

                const result = await module.getWorkOrders({limit : 2});

                if(result.status_code === 201) {
                    const data = result.data;
                    
                    const supervisor = (company_id) => {
                        let spv;
                        data.supervisor.forEach(count => {
                            const { company, full_name} = count;

                            if(company_id === company) {
                                spv = full_name;
                            }
                        })

                        return spv;
                    }

                    const countPIC = (company_id) => {
                        let total;
                        data.pic.total.forEach(count => {
                            const { company, pic} = count;

                            if(company_id === company) {
                                total = pic;
                            }
                        })

                        return total;
                    }

                    data.work_orders.forEach(work_order => {
                        picHeader.textContent = countPIC(work_order.company_id);
                        supervisorHeader.textContent = supervisor(work_order.company_id);

                        containerWorkOrders.innerHTML += `
                        <div class="bg-white p-3 rounded-xl drop-shadow-lg flex items-center justify-between">
                            <div>
                                <p class="poppins bg-orange-30 text-white font-medium text-xs uppercase px-1.5 py-0.5 tracking-[0.1rem] rounded-md w-fit">JANITOR</p>
                                <p class="poppins text-black font-medium text-base mt-4">${work_order.name}</p>
                                <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-4">Supervisor : ${supervisor(work_order.company_id)}</p>
                            </div>
                            <button onclick="window.location.href='/approval-manager/${work_order.id}'" class="bg-green-10 text-white w-[147px] h-10 text-sm rounded-2xl font-bold sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">Cek Status</button>
                        </div>`
                    })
                    
                }else {
                    const errors = result.errors;
                    
                    if (typeof errors === 'object' && errors !== null) {
                        console.log(errors)
                    } else if (typeof errors === 'string') {
                        console.log(errors)
                    }
                }
            } catch (err) {
                console.error('Error loading clientJS:', err);
            }
        }
    }
}

export default dashboardClientPage;