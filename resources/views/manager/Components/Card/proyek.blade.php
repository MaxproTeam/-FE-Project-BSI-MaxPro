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

<div class="mt-12 px-4">
    <p class="text-orange-30 font-bold text-lg">Proyek Berlangsung</p>
    <button class="border-2 font-medium mt-6 border-green-30 bg-white text-green-30 py-1.5 px-3 rounded-xl text-xs active:bg-green-30 active:text-white">
        Lihat Semua
    </button>

    <div class="flex flex-col gap-y-[30px] mt-[18px]">
        <div class="bg-white p-3 pb-5 rounded-xl drop-shadow-lg border-gradient">
            <p class="poppins text-black font-bold text-base mt-2">PT. Krama Yudha Tiga Belas</p>
            <div class="flex items-end justify-between mt-8">
                <div>
                    <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="#FF914D" />
                            <path d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="#FF914D" />
                        </svg>
                        13 PIC
                    </p>
                    <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                        Supervisor : Andi
                    </p>
                </div>
                <button class="bg-green-10 text-white w-[147px] h-10 text-sm rounded-2xl font-bold sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">Selengkapnya</button>
            </div>
        </div>

        <div class="bg-white p-3 pb-5 rounded-xl drop-shadow-lg border-gradient">
            <p class="poppins text-black font-bold text-base mt-2">PT. Krama Yudha Tiga Belas</p>
            <div class="flex items-end justify-between mt-8">
                <div>
                    <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="#FF914D" />
                            <path d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="#FF914D" />
                        </svg>
                        13 PIC
                    </p>
                    <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                        Supervisor : Andi
                    </p>
                </div>
                <button class="bg-green-10 text-white w-[147px] h-10 text-sm rounded-2xl font-bold sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">Selengkapnya</button>
            </div>
        </div>
    </div>
</div>