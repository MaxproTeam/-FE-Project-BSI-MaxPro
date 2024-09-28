<div class="mt-8">
    <p class="text-lg font-bold text-orange-30 px-4">Histori Absensi</p>

    <table class="table-auto w-full mt-4">
        <thead>
            <tr>
                <th class="uppercase font-bold text-grey text-sm tracking-tight">ABSEN MASUK</th>
                <th class="uppercase font-bold text-grey text-sm tracking-tight">ABSEN PULANG</th>
                <th class="uppercase font-bold text-grey text-sm tracking-tight">STATUS</th>
            </tr>
        </thead>
        <tbody id = "tbody-present"></tbody>
    </table>
    <div class="flex items-center gap-4 justify-center mt-7">
        <button id = "btn-prev-pagination">
            <svg class="text-[#374151]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <p class="text-base text-black font-semibold" id = "current-page">1</p>
        <button id = "btn-next-pagination">
            <svg class="text-[#374151]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</div>