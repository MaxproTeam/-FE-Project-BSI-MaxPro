<div id="">
    @include('client.Components.Calendar.calendar')

    <div class="mt-8 relative overflow-x-auto mx-4">
        <table class="table-auto w-full mt-4">
            <thead>
                <tr>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">APPROVAL</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">Work Order</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">TGL PENGAJUAN</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">ABSEN PULANG</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-center font-semibold text-grey text-sm pt-6 w-16">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#00BF63" />
                                <path d="M14.0588 6.74568L16.5294 9.15732M12.4118 18H19M5.82353 14.7845L5 18L8.29412 17.1961L17.8355 7.88237C18.1443 7.58087 18.3178 7.172 18.3178 6.74568C18.3178 6.31936 18.1443 5.9105 17.8355 5.609L17.6939 5.47073C17.385 5.16932 16.9662 5 16.5294 5C16.0927 5 15.6738 5.16932 15.3649 5.47073L5.82353 14.7845Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">Event HUT RI - Setup Ruangan</td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">08:30 19/08/24</td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">04:30 19/08/24</td>
                </tr>
                <tr>
                    <td class="text-center font-semibold text-grey text-sm pt-6 w-16">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#00BF63" />
                                <path d="M14.0588 6.74568L16.5294 9.15732M12.4118 18H19M5.82353 14.7845L5 18L8.29412 17.1961L17.8355 7.88237C18.1443 7.58087 18.3178 7.172 18.3178 6.74568C18.3178 6.31936 18.1443 5.9105 17.8355 5.609L17.6939 5.47073C17.385 5.16932 16.9662 5 16.5294 5C16.0927 5 15.6738 5.16932 15.3649 5.47073L5.82353 14.7845Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">Event HUT RI - Setup Ruangan</td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">08:30 19/08/24</td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">04:30 19/08/24</td>
                </tr>
                <tr>
                    <td class="text-center font-semibold text-grey text-sm pt-6 w-16">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#00BF63" />
                                <path d="M14.0588 6.74568L16.5294 9.15732M12.4118 18H19M5.82353 14.7845L5 18L8.29412 17.1961L17.8355 7.88237C18.1443 7.58087 18.3178 7.172 18.3178 6.74568C18.3178 6.31936 18.1443 5.9105 17.8355 5.609L17.6939 5.47073C17.385 5.16932 16.9662 5 16.5294 5C16.0927 5 15.6738 5.16932 15.3649 5.47073L5.82353 14.7845Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">Event HUT RI - Setup Ruangan</td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">08:30 19/08/24</td>
                    <td class="text-center font-semibold text-grey text-sm pt-6 min-w-32 max-w-44">04:30 19/08/24</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<script async>
    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const select = document.getElementById('monthSelect');
    const currentDate = new Date();

    for (let i = 0; i < 5; i++) {
        let futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
        let month = monthNames[futureDate.getMonth()];
        let year = futureDate.getFullYear();
        let option = document.createElement('option');
        option.value = month.toLowerCase() + '-' + year;
        option.text = `${month} ${year}`;
        select.appendChild(option);
    }
</script>

<script async>
    document.getElementById('title-select-day').classList.add('hidden')
</script>