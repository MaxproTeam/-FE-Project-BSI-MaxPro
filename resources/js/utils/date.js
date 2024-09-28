const formatDate = (date, locale = 'id-ID', options = {}) => {
    const dateObject = new Date(date);

    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = dateObject.getFullYear();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
}

export {formatDate};