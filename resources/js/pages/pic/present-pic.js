import { formatDate, getDateFormat2 } from '../../utils/date.js';

const presentPICPage = {
    setAttendance : async () => {
        if(window.isPresentPICPage) {
            try {
                const module = await import('../../fetch/picJS.js');

                const dataAttedances = await module.getPICAttendance({day : getDateFormat2()});

                const currentDate = new Date();
                const hours = currentDate.getHours();

                const btnUserAttedance = document.getElementById('btn-attedance');
                const tbodyPresent = document.getElementById('tbody-present');

                if(dataAttedances.data.attendances.length > 0) {
                    btnUserAttedance.textContent = "Absen Pulang";
                    
                    if (hours < 17) {
                        btnUserAttedance.classList.add('bg-grey');
                        btnUserAttedance.disabled = true;
                    } else {
                        btnUserAttedance.classList.add('bg-green-10');
                        btnUserAttedance.disabled = false;
                    }
                }

                btnUserAttedance.addEventListener('click', async (event) => {
                    const attedance = hours < 17 ? 'Hadir' : 'Pulang';
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

                    const result = await module.setPICAttendance({ attedance, latitude, longitude });

                    if (result.status_code === 201) {
                        const data = result.data;
                        const startAttedance = data.attendance.start_attedance ? formatDate(data.attendance.start_attedance) : 'Tidak tersedia';
                        const endAttedance = data.attendance.end_attedance ? formatDate(data.attendance.end_attedance) : 'Tidak tersedia';
                        const status = data.attendance.status ?  data.attendance.status : null;

                        if(Object.keys(data.attendance).length === 0) {
                            window.location.reload();
                        }else {
                            btnUserAttedance.textContent = "Absen Pulang";

                            btnUserAttedance.classList.add('bg-grey');
                            btnUserAttedance.disabled = true;
    
                            tbodyPresent.innerHTML += `
                            <tr>
                                <td class="text-center font-semibold text-grey text-sm pt-6">${startAttedance}</td>
                                <td class="text-center font-semibold text-grey text-sm pt-6">${endAttedance}</td>
                                <td class="text-center font-semibold text-grey text-sm pt-6">${status}</td>
                            </tr>`;
                        }
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
    getAttendance : async () => {
        if(window.isPresentPICPage) {
            try {
                const module = await import('../../fetch/picJS.js')
                const tbodyPresent = document.getElementById('tbody-present');
               
                const result = await module.getPICAttendance({page : 1, limit : 7});

                if (result.status_code === 201) {
                    const { attendances, pagination } = result.data;
        
                    tbodyPresent.innerHTML = '';
        
                    attendances.forEach(attendance => {
                        const startAttedance = formatDate(attendance.start_attedance);
                        const endAttedance = attendance.end_attedance ? formatDate(attendance.end_attedance) : 'Tidak tersedia';
                        const status = attendance.status;
        
                        const row = `
                            <tr>
                                <td class="text-center font-semibold text-grey text-sm pt-6">${startAttedance}</td>
                                <td class="text-center font-semibold text-grey text-sm pt-6">${endAttedance}</td>
                                <td class="text-center font-semibold text-grey text-sm pt-6">${status}</td>
                            </tr>`;
                        tbodyPresent.innerHTML += row;
                    });
                    
                    updatePaginationUI(pagination, 1);
                   
                } else {
                    const errors = result.errors;
                    if (typeof errors === 'object' && errors !== null) {
                        console.error('Validation Errors:', errors);
                    } else if (typeof errors === 'string') {
                        console.error('Error:', errors);
                    }
                }
            } catch (err) {
                console.error('Error loading picJS:', err);
            }
        }
    }
}

const updatedData = async (data) => {
    const { page } = data;
    try {
        const module = await import('../../fetch/picJS.js');
        const tbodyPresent = document.getElementById('tbody-present');
        
        const result = await module.getPICAttendance({ page, limit: 7 });

        if (result.status_code === 201) {
            const { attendances, pagination } = result.data;

            tbodyPresent.innerHTML = '';

            attendances.forEach(attendance => {
                const startAttedance = formatDate(attendance.start_attedance);
                const endAttedance = attendance.end_attedance ? formatDate(attendance.end_attedance) : 'Tidak tersedia';
                const status = attendance.status;

                const row = `
                    <tr>
                        <td class="text-center font-semibold text-grey text-sm pt-6">${startAttedance}</td>
                        <td class="text-center font-semibold text-grey text-sm pt-6">${endAttedance}</td>
                        <td class="text-center font-semibold text-grey text-sm pt-6">${status}</td>
                    </tr>`;
                tbodyPresent.innerHTML += row;
            });

            updatePaginationUI(pagination, page);

        } else {
            const errors = result.errors;
            if (typeof errors === 'object' && errors !== null) {
                console.error('Validation Errors:', errors);
            } else if (typeof errors === 'string') {
                console.error('Error:', errors);
            }
        }
    } catch (err) {
        console.error('Error loading picJS or fetching attendance data:', err);
    }
};

const updatePaginationUI = (pagination, currentPageIndex) => {
    const currentPage = document.getElementById('current-page');
    const prevPagination = document.getElementById('btn-prev-pagination');
    const nextPagination = document.getElementById('btn-next-pagination');

    currentPage.textContent = currentPageIndex;

    if (currentPageIndex >= pagination.totalPages) {
        nextPagination.querySelector('svg').classList.add('opacity-40');
        nextPagination.disabled = true;
    } else {
        nextPagination.querySelector('svg').classList.remove('opacity-40');
        nextPagination.disabled = false;
    }

    if (currentPageIndex <= 1) {
        prevPagination.querySelector('svg').classList.add('opacity-40');
        prevPagination.disabled = true;
    } else {
        prevPagination.querySelector('svg').classList.remove('opacity-40');
        prevPagination.disabled = false;
    }

    prevPagination.replaceWith(prevPagination.cloneNode(true));
    nextPagination.replaceWith(nextPagination.cloneNode(true));

    document.getElementById('btn-prev-pagination').addEventListener('click', async () => {
        if (currentPageIndex > 1) {
            await updatedData({ page: currentPageIndex - 1 });
        }
    });

    document.getElementById('btn-next-pagination').addEventListener('click', async () => {
        if (currentPageIndex < pagination.totalPages) {
            await updatedData({ page: currentPageIndex + 1 });
        }
    });
};

export default presentPICPage;