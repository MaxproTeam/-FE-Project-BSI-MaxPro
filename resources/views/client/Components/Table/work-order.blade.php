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
            <tbody id="tbody-container"></tbody>
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