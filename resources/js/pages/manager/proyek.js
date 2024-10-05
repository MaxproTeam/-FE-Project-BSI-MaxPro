const proyekManagerPage = {
    getCompanies : async () => {
        if(window.isProyekManager) {
            try {
                const module = await import('../../fetch/managerJS.js')
                const containerProyek = document.getElementById('container-proyek-dashboard');
               
                const result = await module.getCompanies({page: 1, limit: 4});

                if(result.status_code === 201) {
                    const data = result.data;
                    const pagination = data.pagination;

                    const supervisor = (company_id) => {
                        let spv;
                        data.supervisor.forEach(count => {
                            const { company, full_name } = count;

                            if(company_id === company) {
                                spv = full_name;
                            }
                        })

                        return spv;
                    }

                    const countPIC = (company_id) => {
                        let countPIC;
                        data.pic.total.forEach(count => {
                            const { company, pic} = count;

                            if(company_id === company) {
                                countPIC = pic;
                            }
                        })

                        return countPIC;
                    }
                    
                    data.companies.forEach(companies => {
                        containerProyek.innerHTML += `
                        <div class="bg-white p-3 pb-5 rounded-xl drop-shadow-lg border-gradient">
                            <p class="poppins text-black font-bold text-base mt-2">${companies.name}</p>
                            <div class="flex items-end justify-between mt-8">
                                <div>
                                    <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="#FF914D" />
                                            <path d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="#FF914D" />
                                        </svg>
                                        ${countPIC(companies.id) ? countPIC(companies.id) : 0} PIC
                                    </p>
                                    <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                                        Supervisor : ${supervisor(companies.id)}
                                    </p>
                                </div>
                                <button onclick="window.location.href='/detail-proyek-manager/${companies.id}'" class="bg-green-10 text-white w-[147px] h-10 text-sm rounded-2xl font-bold sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">Selengkapnya</button>
                            </div>
                        </div>`
                    });

                    updatePaginationUI(pagination, 1);
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

const updatedData = async (data) => {
    const { page } = data;
    try {
        const module = await import('../../fetch/managerJS.js')
        const containerProyek = document.getElementById('container-proyek-dashboard');

        const result = await module.getCompanies({page, limit: 4});

        if(result.status_code === 201) {
            const data = result.data;
            const pagination = data.pagination;

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
                let countPIC;
                data.pic.total.forEach(count => {
                    const { company, pic} = count;

                    if(company_id === company) {
                        countPIC = pic;
                    }
                })

                return countPIC;
            }
            
            containerProyek.innerHTML = '';

            data.companies.forEach(companies => {
                containerProyek.innerHTML += `
                <div class="bg-white p-3 pb-5 rounded-xl drop-shadow-lg border-gradient">
                    <p class="poppins text-black font-bold text-base mt-2">${companies.name}</p>
                    <div class="flex items-end justify-between mt-8">
                        <div>
                            <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="#FF914D" />
                                    <path d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="#FF914D" />
                                </svg>
                                ${countPIC(companies.id) ? countPIC(companies.id) : 0} PIC
                            </p>
                            <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                                Supervisor : ${supervisor(companies.id)}
                            </p>
                        </div>
                        <button onclick="window.location.href='/detail-proyek-manager/${companies.id}'" class="bg-green-10 text-white w-[147px] h-10 text-sm rounded-2xl font-bold sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">Selengkapnya</button>
                    </div>
                </div>`
            });

            updatePaginationUI(pagination, page);
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

export default proyekManagerPage;