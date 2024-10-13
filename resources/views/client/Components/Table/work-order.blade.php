<div id="">
    @include('client.Components.Calendar.calendar')

    <div class="mt-8 relative overflow-x-auto mx-4">
        <table class="table-auto w-full mt-4">
            <thead>
                <tr>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">APPROVAL</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">Work Order</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">TGL PENGAJUAN</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">ESTIMASI DIMULAI</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">ESTIMASI SELESAI</th>
                </tr>
            </thead>
            <tbody id="tbody-container"></tbody>
        </table>
    </div>
</div>

<script async>
    document.getElementById('title-select-day').classList.add('hidden')
</script>