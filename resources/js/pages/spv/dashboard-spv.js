import { getDate, getDay } from '../../utils/date.js';

const dashboardSPVPage = {
    getAccount: () => {
        if(window.isDashboardSPV) {
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
        if(window.isDashboardSPV) {
            try {
                const module = await import('../../fetch/spvJS.js')
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

                    const result = await module.setSPVAttendance({ attedance : 'Hadir', latitude, longitude });

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
                console.error('Error loading spvJS:', err);
            }
        }
    },
    getWorkChecklists : async () => {
        if(window.isDashboardSPV) {
            try {
                const module = await import('../../fetch/spvJS.js')
                const containerWorkChecklists = document.getElementById('container-work-checklists');

                const result = await module.getWorkOrders({limit : 2, status: 4});

                if(result.status_code === 201) {
                    const data = result.data;
                    
                    data.work_orders.forEach(work_order => {
                        containerWorkChecklists.innerHTML += `
                        <div class="bg-white p-3 rounded-xl drop-shadow-lg flex items-end justify-between">
                            <div>
                                <p class="poppins bg-orange-30 text-white font-medium text-xs uppercase px-1.5 py-0.5 tracking-[0.1rem] rounded-md w-fit">JANITOR</p>
                                <p class="poppins text-black font-medium text-base mt-4">${work_order.name}</p>
                                <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-4 flex items-center gap-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="#FF914D" />
                                        <path d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="#FF914D" />
                                    </svg>
                                    ${work_order.pic ? work_order.pic : 'Tidak tersedia'}
                                </p>
                                <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#FF914D" />
                                    </svg>
                                    ${getDay(work_order.start_work)}, ${getDate(work_order.start_work)}
                                </p>
                            </div>
                            <button onclick="window.location.href='/work-check-spv/${work_order.id}'" class="bg-green-10 text-white w-[147px] h-10 text-sm rounded-2xl font-bold sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">Cek Pekerjaan</button>
                        </div>
                        `
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
                console.error('Error loading spvJS:', err);
            }
        }
    },
    getWorkOrders : async () => {
        if(window.isDashboardSPV) {
            try {
                const module = await import('../../fetch/spvJS.js')
                const containerWorkOrders = document.getElementById('container-work-orders');

                const result = await module.getWorkOrders({limit : 3});

                if(result.status_code === 201) {
                    const data = result.data;
                    
                    data.work_orders.forEach(work_order => {
                        containerWorkOrders.innerHTML += `
                        <div class="bg-white p-3 rounded-xl drop-shadow-lg flex items-end justify-between">
                            <div>
                                <p class="poppins bg-orange-30 text-white font-medium text-xs uppercase px-1.5 py-0.5 tracking-[0.1rem] rounded-md w-fit">JANITOR</p>
                                <p class="poppins text-black font-medium text-base mt-4">${work_order.name}</p>
                                <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-4 flex items-center gap-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="#FF914D" />
                                        <path d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="#FF914D" />
                                    </svg>
                                    ${work_order.pic ? work_order.pic : 'Tidak tersedia'}
                                </p>
                                <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#FF914D" />
                                    </svg>
                                    ${getDay(work_order.start_work)}, ${getDate(work_order.start_work)}
                                </p>
                            </div>
                            <button onclick="window.location.href='/work-order-check-spv/${work_order.id}'" class="bg-green-10 text-white w-[147px] h-10 text-sm rounded-2xl font-bold sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">${work_order.pic ? 'Selengkapnya' : 'Tugaskan'}</button>
                        </div>
                        `
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
                console.error('Error loading spvJS:', err);
            }
        }
    },
}

export default dashboardSPVPage;