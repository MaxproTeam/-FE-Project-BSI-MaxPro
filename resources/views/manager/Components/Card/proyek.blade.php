<style>
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

<div id="card-proyek" class="mt-12 px-4">
    <div id="dashboard-identity" class="hidden">
        <p class="text-orange-30 font-bold text-lg">Proyek Berlangsung</p>
        <button onclick = "window.location.href='/proyek-manager'"class="border-2 font-medium mt-6 border-green-30 bg-white text-green-30 py-1.5 px-3 rounded-xl text-xs active:bg-green-30 active:text-white">
            Lihat Semua
        </button>
    </div>

    <div id="proyek-identity" class="hidden flex items-center justify-between">
        <button onclick="openCalender()" class="border-[1px] border-orange-30 py-1.5 px-3 rounded-xl">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_639_687)">
                    <path d="M2.66675 14V9.33337" stroke="#264653" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.66675 6.66667V2" stroke="#264653" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 14V8" stroke="#264653" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 5.33333V2" stroke="#264653" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.3333 14V10.6666" stroke="#264653" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.3333 8V2" stroke="#264653" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M0.666748 9.33337H4.66675" stroke="#264653" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 5.33337H10" stroke="#264653" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.3333 10.6666H15.3333" stroke="#264653" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_639_687">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </button>
        <div class="flex items-center gap-4 justify-center">
            <button id = "btn-prev-pagination">
                <svg class="text-[#374151] opacity-40" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

    <div class="fixed top-0 left-0 z-40">
        <div id="calender" class="relative hidden">
            <div onclick="closeCalender()" id="overlay-calender" class="h-screen w-screen bg-black opacity-15"></div>
            <div id="main-calender" class="absolute px-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white h-[50vh] w-full max-w-[300px] rounded-xl py-7 duration-500" style="box-shadow:-10px 4px 22.7px 0px #00000040;">
                <p class="text-black text-lg font-bold">Pilih rentang waktu</p>
                <div class="mt-6">
                    <p class="text-black text-sm font-semibold">Tanggal dimulai</p>
                    <input id="input-start_work" type="date" class="border-2 border-gray-200 px-5 py-2.5 w-full mt-3">
                    <p class="text-black text-sm font-semibold mt-6">Tanggal selesai</p>
                    <input id="input-end_work" type="date" class="border-2 border-gray-200 px-5 py-2.5 w-full mt-3">
                    <button id="btn-save-date-filter" class="bg-green-10 w-full rounded-2xl h-[70px] mt-16 font-semibold text-white lg:hover:bg-green-700 sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <div id = "container-proyek-dashboard" class="flex flex-col gap-y-[30px] mt-[18px]"></div>
</div>

<script async>
    let modalCalender = document.getElementById('calender')
    let mainCalender = document.getElementById('main-calender')

    function openCalender() {
        modalCalender.classList.remove('hidden')
        mainCalender.classList.remove('translate-x-full')
    }

    function closeCalender() {
        modalCalender.classList.add('hidden')
        mainCalender.classList.add('translate-x-full')
    }
</script>