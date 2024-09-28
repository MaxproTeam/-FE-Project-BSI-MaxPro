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

                    const result = await module.setPICAttedance({ attedance : 'Hadir', latitude, longitude });

                    if (result.status_code === 201) {
                        const data = result.data;
                        const startAttedance = formatDate(data.attedance.start_attedance);
                        const endAttedance = data.attedance.end_attedance ? formatDate(data.attedance.end_attedance) : 'Tidak tersedia';
                        const status = data.attedance.status 

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
                
                const result = await module.getPICAttedance();

                if (result.status_code === 201) {
                    const data = result.data;

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
            } catch (err) {
                console.error('Error loading picJS:', err);
            }
        }
    }
}

export default presentPICPage;