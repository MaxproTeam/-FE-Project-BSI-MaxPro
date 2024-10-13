const dashboardPICPage = {
    getAccount: () => {
        if(window.isDashboardPIC) {
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
    setAttendance : async () => {
        if(window.isDashboardPIC) {
            try {
                const module = await import('../../fetch/picJS.js')
                const btnUserAttedance = document.getElementById('btn-attedance');
                
                btnUserAttedance.addEventListener('click', async (event) => {
                    let latitude, longitude;

                    if ("geolocation" in navigator) {
                        const getPosition = () => {
                            return new Promise((resolve, reject) => {
                                navigator.geolocation.getCurrentPosition(resolve, reject);
                            });
                        }
                
                        try {
                            const position = await getPosition();
                            latitude = position.coords.latitude;
                            longitude = position.coords.longitude;
                        } catch (error) {
                            console.error("Error getting geolocation: ", error);
                        }
                    } else {
                        console.error("Geolocation is not available");
                    }

                    const result = await module.setPICAttendance({ attedance : 'Hadir', latitude, longitude });

                    if (result.status_code === 201) {
                        const data = result.data;
                        
                        window.location.reload();
                    } else {
                        const errors = result.errors;
    
                        if (typeof errors === 'object' && errors !== null) {
                           console.log(errors)
                        } else if (typeof errors === 'string') {
                            console.log(errors)
                        }
                    }
                })
            } catch (err) {
                console.error('Error loading picJS:', err);
            }
        }
    },
    getWorkOrders : async () => {
        if(window.isDashboardPIC) {
            try {
                const module = await import('../../fetch/picJS.js')
                const containerWorkOrders = document.getElementById('container-work-orders');

                const result = await module.getWorkOrders({limit : 2, status: 3});

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
                    
                    data.work_orders.forEach((work_order, index) => {
                        containerWorkOrders.innerHTML += `
                        <div class="bg-white p-3 rounded-xl drop-shadow-lg flex items-center justify-between">
                            <div>
                                <p class="poppins bg-orange-30 text-white font-medium text-xs uppercase px-1.5 py-0.5 tracking-[0.1rem] rounded-md w-fit">JANITOR</p>
                                <p class="poppins text-black font-medium text-base mt-4">${work_order.name}</p>
                                <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-4">Supervisor : ${supervisor(work_order.company_id)}</p>
                            </div>
                            <button data-index="${index}" data-work_order="${work_order.id}" class="btn-done-work-order bg-green-10 text-white w-[147px] h-10 text-sm rounded-2xl font-bold sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">Tandai Selesai</button>
                        </div>
                        `
                        const btnDoneWorkOrder = document.querySelectorAll(`.btn-done-work-order[data-index='${index}']`);

                        btnDoneWorkOrder.forEach(btn => {
                            btn.addEventListener('click', async (event) => {
                                const id = event.currentTarget.dataset.work_order;

                                const isWorkOrderDone = await module.doneWorkOrder({id, done : true});

                                if(isWorkOrderDone.status_code === 201) { 
                                    window.location.reload();
                                }else {
                                    const errors = isWorkOrderDone.errors;
                                    
                                    if (typeof errors === 'object' && errors !== null) {
                                        console.log(errors)
                                    } else if (typeof errors === 'string') {
                                        console.log(errors)
                                    }
                                }

                            })
                        })

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
                console.error('Error loading picJS:', err);
            }
        }
    },
}

export default dashboardPICPage;