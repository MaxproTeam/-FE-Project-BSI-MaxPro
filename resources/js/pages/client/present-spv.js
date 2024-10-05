import { formatDate } from '../../utils/date.js';

const presentSPVClientPage = {
    getSPVAttendances : async () => {
        if(window.isPresentSPVClient) {
            try {
                const module = await import('../../fetch/clientJS.js')
                const containerAttedances = document.getElementById('tbody-container');

                const result = await module.getSPVAttedances();

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

export default presentSPVClientPage;