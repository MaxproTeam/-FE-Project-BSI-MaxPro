const formatDate = (date, locale = 'id-ID', options = {}) => {
    const dateObject = new Date(date);

    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = dateObject.getFullYear();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
}

const getDate = (date, locale = 'id-ID', options = {}) => {
    const dateObject = new Date(date);

    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = dateObject.getFullYear();

    return `${day}/${month}/${year}`;
}

const getDateFormat2 = (locale = 'id-ID', options = {}) => {
    const dateObject = new Date();

    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); 
    const year = dateObject.getFullYear();

    return `${year}-${month}-${day}`;
}

const getHours = (date, locale = 'id-ID', options = {}) => {
    const dateObject = new Date(date);

    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
}

const getDay = (date, locale = 'id-ID', options = {}) => {
    const dateObject = new Date(date);

    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const dayName = days[dateObject.getDay()];

    return `${dayName}`;
}


export {formatDate, getDate, getDateFormat2, getHours, getDay};