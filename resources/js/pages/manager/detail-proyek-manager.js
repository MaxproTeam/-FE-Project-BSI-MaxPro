import { formatDate, getDateFormat2 } from '../../utils/date.js';

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
                const params = currentUrl.searchParams;
                const id = currentUrl.pathname.split('/')[2]; 

                const tbodyAttendanceContainer = document.getElementById('tbody-attendance-container');

                const result = await module.getPICAttedancesCompany({id: parseInt(id), day : params.get('day-attendances') ? params.get('day-attendances') : getDateFormat2()});

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
                const module = await import('../../fetch/managerJS.js');
                
                const currentUrl = new URL(window.location.href);
                const params = currentUrl.searchParams;
                const id = currentUrl.pathname.split('/')[2]; 

                const tbodyWorkOrderContainer = document.getElementById('tbody-work-order-container');

                const result = await module.getWorkOrdersCompany({id: parseInt(id), day : params.get('day-workorders') ? params.get('day-workorders') : getDateFormat2()});

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

const updateDataPICAttedances = async (filters) => {
    try {
        const { filterDay } = filters;

        const module = await import('../../fetch/managerJS.js')

        const currentUrl = new URL(window.location.href);
        const id = currentUrl.pathname.split('/')[2]; 

        const tbodyAttendanceContainer = document.getElementById('tbody-attendance-container');

        const result = await module.getPICAttedancesCompany({id: parseInt(id), day: filterDay});

        if(result.status_code === 201) {
            const data = result.data;

            tbodyAttendanceContainer.innerHTML = ``

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

const updateDataWorkOrders = async (filters) => {
    try {
        const { filterDay } = filters;

        const module = await import('../../fetch/managerJS.js')

        const currentUrl = new URL(window.location.href);
        const id = currentUrl.pathname.split('/')[2]; 

        const tbodyWorkOrderContainer = document.getElementById('tbody-work-order-container');

        const result = await module.getWorkOrdersCompany({id: parseInt(id), day: filterDay});

        if(result.status_code === 201) {
            const data = result.data;

            tbodyWorkOrderContainer.innerHTML = ``

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

const calendarFeature = (config) => {
    const { 
        isCalendarActive, 
        nextCalendarId, 
        prevCalendarId, 
        slidesContainerId, 
        monthSelectId, 
        dayParam, 
        updateDataFunction 
    } = config;

    if (isCalendarActive()) {
        const nextCalendar = document.getElementById(nextCalendarId);
        const prevCalendar = document.getElementById(prevCalendarId);

        nextCalendar.addEventListener('click', () => { changeSlide(1); });
        prevCalendar.addEventListener('click', () => { changeSlide(-1); });

        const monthNames = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

        let currentDate = new Date();
        let selectedDate = null;
        let currentSlide = 0;
        let elementCounter = 0;

        function initCalendar() {
            populateMonthSelect();
            setTodaySlide();
            renderCalendarSlides();
            document.getElementById(slidesContainerId).addEventListener('touchstart', handleTouchStart, false);
            document.getElementById(slidesContainerId).addEventListener('touchmove', handleTouchMove, false);
        }

        function populateMonthSelect() {
            const select = document.getElementById(monthSelectId);
            const currentDate = new Date();

            select.innerHTML = '';

            for (let i = -12; i < 12; i++) {
                let futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
                let month = monthNames[futureDate.getMonth()];
                let year = futureDate.getFullYear();
                let option = document.createElement('option');
                option.value = `${futureDate.getMonth()}-${year}`;
                option.text = `${month} ${year}`;
                select.appendChild(option);
            }

            select.value = `${currentDate.getMonth()}-${currentDate.getFullYear()}`;
            select.addEventListener('change', handleMonthChange);
        }

        function handleMonthChange(event) {
            const [month, year] = event.target.value.split('-');
            currentDate = new Date(parseInt(year), parseInt(month), 1);
            currentSlide = 0;
            renderCalendarSlides();
        }

        function setTodaySlide() {
            const today = new Date();
            if (today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear()) {
                currentSlide = Math.floor((today.getDate() - 1) / 4);
            } else {
                currentSlide = 0;
            }
        }

        function renderCalendarSlides() {
            const slidesContainer = document.getElementById(slidesContainerId);
            slidesContainer.innerHTML = '';

            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
            let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            date.setDate(date.getDate() + currentSlide * 4);

            const slide = document.createElement('div');
            slide.className = 'slide flex items-center justify-between';

            for (let j = 0; j < 4; j++) {
                if (date.getMonth() !== currentDate.getMonth() || date.getDate() > daysInMonth) break;
                const dayButton = createDayButton(new Date(date));
                slide.appendChild(dayButton);
                date.setDate(date.getDate() + 1);
            }

            slidesContainer.appendChild(slide);
        }

        function createDayButton(date) {
            const button = document.createElement('button');
            button.className = 'day-button flex flex-col items-center mt-2';
            button.setAttribute('data-unique-id', elementCounter++);
            button.onclick = () => selectDate(date);

            const dayName = document.createElement('p');
            dayName.className = 'text-[15px] font-medium text-black';
            dayName.textContent = dayNames[date.getDay()];

            const dateCircle = document.createElement('div');
            if (isSelectedDate(date)) {
                dateCircle.className = 'w-10 h-10 rounded-full relative mt-1 orange-circle';
            } else if (isToday(date)) {
                dateCircle.className = 'w-10 h-10 rounded-full relative mt-1 reduced-orange-circle';
            } else {
                dateCircle.className = 'w-10 h-10 rounded-full relative mt-1';
            }

            const dateText = document.createElement('p');
            dateText.className = 'text-[15px] font-medium absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' +
                (isToday(date) || isSelectedDate(date) ? ' text-white' : ' text-black');
            dateText.textContent = date.getDate();

            dateCircle.appendChild(dateText);
            button.appendChild(dayName);
            button.appendChild(dateCircle);

            return button;
        }

        function isToday(date) {
            const today = new Date();
            return date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear();
        }

        function selectDate(date) {
            const currentUrl = new URL(window.location.href);
            const params = currentUrl.searchParams;
            
            selectedDate = date;

            const year = selectedDate.getFullYear();
            const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
            const day = String(selectedDate.getDate()).padStart(2, '0');

            params.set(dayParam, `${year}-${month}-${day}`);
            updateDataFunction({ filterDay: `${year}-${month}-${day}` });

            window.history.replaceState({}, '', currentUrl.toString());

            renderCalendarSlides();
        }

        function isSelectedDate(date) {
            return selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();
        }

        function changeSlide(direction) {
            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
            currentSlide += direction;

            const maxSlide = Math.floor((daysInMonth - 1) / 4);
            if (currentSlide < 0) {
                currentDate.setMonth(currentDate.getMonth() - 1);
                currentSlide = Math.floor(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() / 4);
                updateMonthSelect();
            } else if (currentSlide > maxSlide) {
                currentDate.setMonth(currentDate.getMonth() + 1);
                currentSlide = 0;
                updateMonthSelect();
            }

            renderCalendarSlides();
        }

        function updateMonthSelect() {
            const select = document.getElementById(monthSelectId);
            select.value = `${currentDate.getMonth()}-${currentDate.getFullYear()}`;
        }

        let xDown = null;

        function handleTouchStart(evt) {
            xDown = evt.touches[0].clientX;
        }

        function handleTouchMove(evt) {
            if (!xDown) return;

            const xUp = evt.touches[0].clientX;
            const xDiff = xDown - xUp;

            if (Math.abs(xDiff) > 50) {
                changeSlide(xDiff > 0 ? 1 : -1);
            }
            xDown = null;
        }

        initCalendar();
    }
};

calendarFeature({
    isCalendarActive: () => window.isCalendarForPICAttendances,
    nextCalendarId: 'next-calendar-picattedances',
    prevCalendarId: 'prev-calendar-picattedances',
    slidesContainerId: 'calendarSlides-picattedances',
    monthSelectId: 'monthSelect-picattedances',
    dayParam: 'day-attendances',
    updateDataFunction: updateDataPICAttedances
});

calendarFeature({
    isCalendarActive: () => window.isCalendarForWorkOrders,
    nextCalendarId: 'next-calendar-workorders',
    prevCalendarId: 'prev-calendar-workorders',
    slidesContainerId: 'calendarSlides-workorders',
    monthSelectId: 'monthSelect-workorders',
    dayParam: 'day-workorders',
    updateDataFunction: updateDataWorkOrders
});


export default detailProyekManagerPage;