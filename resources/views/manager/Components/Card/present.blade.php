<style>
    .custom-select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><path d="M0 0.5L8.66025 0.5L4.33013 8L0 0.5Z" fill="%23ABABAB"/></svg>') no-repeat right center;
        background-position: right 0px center;
    }

    .border-gradient {
        position: relative;
        padding: 18px;
        border-radius: 15px;
        background: white;
        z-index: 1;
    }

    .border-gradient::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(to top, #7ED957, #FF914D);
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        z-index: -1;
    }
</style>

<div onclick="dataPresent()" class="border-gradient flex items-center gap-2.5 justify-center py-5">
    <p class="text-lg font-bold text-black">Data Absensi</p>
    <svg id="arrow-present" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 9.5L12.5 16.5L5.5 9.5" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</div>

<div id="data-present" class="hidden">
    <div class="px-4">
        <div class="bg-white w-full rounded-t-[20px] pt-[10px] pb-3 px-5" style="box-shadow: 0px 0px 4px 0px #00000040;">
            <div class="flex items-center justify-between">
                <select class="custom-select font-semibold text-black text-[15px] pr-4" id="monthSelect">
                </select>
                <div class="flex items-center gap-7">
                    <button id="prev-calendar">
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.63678 1.53193L2.87904 5.96859L7.3157 10.7263L5.8677 12.0766L0.0807504 5.87087L6.28649 0.0839236L7.63678 1.53193Z" fill="#3A3A3A" />
                        </svg>
                    </button>
                    <button id="next-calendar">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.734558 1.53193L5.49229 5.96859L1.05563 10.7263L2.50364 12.0766L8.29059 5.87087L2.08485 0.0839236L0.734558 1.53193Z" fill="#3A3A3A" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-between mt-2">
                <button class="flex flex-col items-center mt-2">
                    <p id="day" class="text-[15px] font-medium text-black">Jum</p>
                    <div id="bg-date" class="bg-orange-30 w-10 h-10 rounded-full relative mt-1">
                        <p id="date" class="text-[15px] font-medium text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">11</p>
                    </div>
                </button>
                <button class="flex flex-col items-center mt-2">
                    <p id="day" class="text-[15px] font-medium text-black">Sab</p>
                    <div id="bg-date" class="w-10 h-10 rounded-full relative mt-1">
                        <p id="date" class="text-[15px] font-medium text-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">12</p>
                    </div>
                </button>
                <button class="flex flex-col items-center mt-2">
                    <p id="day" class="text-[15px] font-medium text-black">Min</p>
                    <div id="bg-date" class="w-10 h-10 rounded-full relative mt-1">
                        <p id="date" class="text-[15px] font-medium text-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">13</p>
                    </div>
                </button>
                <button class="flex flex-col items-center mt-2">
                    <p id="day" class="text-[15px] font-medium text-black">Sen</p>
                    <div id="bg-date" class="w-10 h-10 rounded-full relative mt-1">
                        <p id="date" class="text-[15px] font-medium text-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">14</p>
                    </div>
                </button>
            </div>
        </div>
    </div>

    <div class="mt-8 relative overflow-x-auto mx-4">
        <table class="table-auto w-full mt-4">
            <thead>
                <tr>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">EDIT</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">NAMA PIC</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">ABSEN MASUK</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">ABSEN PULANG</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">STATUS</th>
                </tr>
            </thead>
            <tbody id = "tbody-attendance-container"></tbody>
        </table>
    </div>

    @include('manager.Components.Download.job-recap')
</div>

<script async>
    const monthNames1 = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const select1 = document.getElementById('monthSelect');
    const currentDate1 = new Date();

    for (let i = 0; i < 5; i++) {
        let futureDate = new Date(currentDate1.getFullYear(), currentDate1.getMonth() + i, 1);
        let month = monthNames1[futureDate.getMonth()];
        let year = futureDate.getFullYear();
        let option = document.createElement('option');
        option.value = month.toLowerCase() + '-' + year;
        option.text = `${month} ${year}`;
        select1.appendChild(option);
    }
</script>

<script async>
    function dataPresent() {
        document.getElementById('data-present').classList.toggle('hidden')
        document.getElementById('arrow-present').classList.toggle('-rotate-90')
    }
</script>