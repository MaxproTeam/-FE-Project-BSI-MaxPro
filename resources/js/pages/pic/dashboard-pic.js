import { formatDate } from '../../utils/date.js';

const dashboardPICPage = {
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

                    const result = await module.setPICAttedance({ attedance : 'Hadir', latitude, longitude });

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
    }
}

export default dashboardPICPage;