import { formatDate } from '../../utils/date.js';

const presentPICPage = {
    setAttendance : async () => {
        if(window.isPresentPICPage) {
            try {
                const module = await import('../../fetch/picJS.js')
                const btnUserAttedance = document.getElementById('btn-attedance');
                const tbodyPresent = document.getElementById('tbody-present');

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
                        const startAttedance = formatDate(data.attendance.start_attedance);
                        const endAttedance = data.attendance.end_attedance ? formatDate(data.attendance.end_attedance) : 'Tidak tersedia';
                        const status = data.attendance.status 

                        tbodyPresent.innerHTML += `
                        <tr>
                            <td class="text-center font-semibold text-grey text-sm pt-6">${startAttedance}</td>
                            <td class="text-center font-semibold text-grey text-sm pt-6">${endAttedance}</td>
                            <td class="text-center font-semibold text-grey text-sm pt-6">${status}</td>
                        </tr>`;
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
                const prevPagination = document.getElementById('btn-prev-pagination');
                const nextPagination = document.getElementById('btn-next-pagination');

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
                    
                    let i = 1;

                    if (pagination.currentPage <= 1) {
                        prevPagination.querySelector('svg').classList.add('opacity-40');
                        prevPagination.disabled = true;
                    }

                    if (pagination.currentPage >= pagination.totalPages) {
                        nextPagination.querySelector('svg').classList.add('opacity-40');
                        nextPagination.disabled = true;
                    }

                    nextPagination.addEventListener('click', () => {
                        i++;
                        updatePaginationUI(pagination, i);
                    });
                    
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

    prevPagination.addEventListener('click', async () => {
        if (currentPageIndex > 1) {
            await updatedData({ page: currentPageIndex - 1 });
        }
    });

    nextPagination.addEventListener('click', async () => {
        if (currentPageIndex < pagination.totalPages) {
            await updatedData({ page: currentPageIndex + 1 });
        }
    });
};

export default presentPICPage;