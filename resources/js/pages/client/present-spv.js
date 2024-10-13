import { formatDate, getDateFormat2 } from '../../utils/date.js';

const presentSPVClientPage = {
    getSPVAttendances : async () => {
        if(window.isPresentSPVClient) {
            try {
                const module = await import('../../fetch/clientJS.js')
                const containerAttedances = document.getElementById('tbody-container');

                const currentUrl = new URL(window.location.href);
                const params = currentUrl.searchParams;

                const result = await module.getSPVAttedances({day : params.get('day') ? params.get('day') : getDateFormat2()});

                if(result.status_code === 201) {
                    const data = result.data;
                    
                    data.attendances.forEach(attendance => {
                        containerAttedances.innerHTML += `
                        <tr>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${attendance.full_name}</td>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${formatDate(attendance.start_attedance)}</td>
                            <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${attendance.end_attedance ? formatDate(attendance.end_attedance) : 'Tidak tersedia'}</td>
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
                console.error('Error loading clientJS:', err);
            }
        }
    }
}

const updateData = async (filters) => {
    try {
        const { day } = filters;

        const module = await import('../../fetch/clientJS.js')
        const containerAttedances = document.getElementById('tbody-container');

        const result = await module.getSPVAttedances({day});

        if(result.status_code === 201) {
            const data = result.data;

            containerAttedances.innerHTML = ``;
            
            data.attendances.forEach(attendance => {
                containerAttedances.innerHTML += `
                <tr>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${attendance.full_name}</td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${formatDate(attendance.start_attedance)}</td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">${attendance.end_attedance ? formatDate(attendance.end_attedance) : 'Tidak tersedia'}</td>
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
        console.error('Error loading clientJS:', err);
    }
}

const calenderFeature = () => {
    if(window.isCalendarForSPVAttedancesClient) {
        const nextCalendar = document.getElementById('next-calendar');
        const prevCalendar = document.getElementById('prev-calendar');

        nextCalendar.addEventListener('click', () => { changeSlide(1) })
        prevCalendar.addEventListener('click', () => { changeSlide(-1) })

        const monthNames = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
        
        window.date = null;
        
        let currentDate = new Date();
        let selectedDate = null; // default null untuk tanggal yang dipilih
        let currentSlide = 0;
        
        function initCalendar() {
            populateMonthSelect();
            setTodaySlide(); // Menentukan slide di mana hari ini berada
            renderCalendarSlides();
            document.getElementById('calendarSlides').addEventListener('touchstart', handleTouchStart, false);
            document.getElementById('calendarSlides').addEventListener('touchmove', handleTouchMove, false);
        }
        
        function populateMonthSelect() {
            const select = document.getElementById('monthSelect');
            const currentDate = new Date();
        
            // Hapus opsi yang ada sebelumnya
            select.innerHTML = '';
        
            // Loop untuk menampilkan 12 bulan sebelumnya dan 12 bulan ke depan
            for (let i = -12; i < 12; i++) {
                let futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
                let month = monthNames[futureDate.getMonth()];
                let year = futureDate.getFullYear();
                let option = document.createElement('option');
                option.value = `${futureDate.getMonth()}-${year}`;
                option.text = `${month} ${year}`;
                select.appendChild(option);
            }
        
            // Set bulan dan tahun saat ini sebagai default yang dipilih
            select.value = `${currentDate.getMonth()}-${currentDate.getFullYear()}`;
        
            // Tambahkan event listener untuk menangani perubahan bulan
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
        
            // Periksa apakah bulan ini sama dengan bulan dari hari ini
            if (today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear()) {
                // Cari di slide ke berapa hari ini berada
                currentSlide = Math.floor((today.getDate() - 1) / 4);
            } else {
                // Jika bukan bulan ini, set ke slide 0
                currentSlide = 0;
            }
        }
        
        function renderCalendarSlides() {
            const slidesContainer = document.getElementById('calendarSlides');
            slidesContainer.innerHTML = ''; // Kosongkan kontainer slide
        
            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // Total hari dalam bulan ini
        
            let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1); // Mulai dari tanggal 1 bulan ini
        
            // Lewati hari sampai kita mencapai slide saat ini
            date.setDate(date.getDate() + currentSlide * 4);
        
            const slide = document.createElement('div');
            slide.className = 'slide flex items-center justify-between';
        
            for (let j = 0; j < 4; j++) {
                if (date.getMonth() !== currentDate.getMonth() || date.getDate() > daysInMonth) break; // Jangan tampilkan hari dari bulan berikutnya
                const dayButton = createDayButton(new Date(date)); // Buat instance baru untuk tiap tanggal
                slide.appendChild(dayButton);
                date.setDate(date.getDate() + 1); // Lanjut ke tanggal berikutnya
            }
        
            slidesContainer.appendChild(slide);
        }
        
        function createDayButton(date) {
            const button = document.createElement('button');
            button.className = 'day-button flex flex-col items-center mt-2';
            button.onclick = () => selectDate(date);
        
            const dayName = document.createElement('p');
            dayName.className = 'text-[15px] font-medium text-black';
            dayName.textContent = dayNames[date.getDay()];
        
            const dateCircle = document.createElement('div');
            // Tentukan kelas berdasarkan kondisi hari ini atau tanggal yang dipilih
            if (isSelectedDate(date)) {
                dateCircle.className = 'w-10 h-10 rounded-full relative mt-1 orange-circle';
            } else if (isToday(date)) {
                dateCircle.className = 'w-10 h-10 rounded-full relative mt-1 reduced-orange-circle'; // Oranye redup jika hari ini
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
        
        
            params.set('day', `${year}-${month}-${day}`)

            updateData({day: `${year}-${month}-${day}`})

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
            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // Dapatkan total hari dalam bulan
            currentSlide += direction;
        
            const maxSlide = Math.floor((daysInMonth - 1) / 4); // Hitung slide maksimal
            if (currentSlide < 0) {
                // Pindah ke bulan sebelumnya
                currentDate.setMonth(currentDate.getMonth() - 1);
                currentSlide = Math.floor(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() / 4); // Set ke slide terakhir bulan sebelumnya
                updateMonthSelect(); // Ubah pilihan bulan di dropdown
            } else if (currentSlide > maxSlide) {
                // Pindah ke bulan berikutnya
                currentDate.setMonth(currentDate.getMonth() + 1);
                currentSlide = 0; // Set ke slide pertama bulan berikutnya
                updateMonthSelect(); // Ubah pilihan bulan di dropdown
            }
        
            renderCalendarSlides(); // Render ulang slide kalender
        }
        
        function updateMonthSelect() {
            const select = document.getElementById('monthSelect');
            select.value = `${currentDate.getMonth()}-${currentDate.getFullYear()}`; // Set nilai bulan dan tahun di dropdown
        }
        
        let xDown = null;
        
        function handleTouchStart(evt) {
            xDown = evt.touches[0].clientX;
        }
        
        function handleTouchMove(evt) {
            if (!xDown) return;
            let xDiff = xDown - evt.touches[0].clientX;
            if (xDiff > 0) changeSlide(1); // Left swipe
            else changeSlide(-1); // Right swipe
            xDown = null;
        }
        
        window.onload = initCalendar;
    }
}

calenderFeature();

export default presentSPVClientPage;