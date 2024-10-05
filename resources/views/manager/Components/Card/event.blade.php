<div class="mt-7 px-4">
    <div class="hidden" id="dashboard-event">
        <p class="text-orange-30 font-bold text-lg">Work Order</p>

        <div class="flex items-center justify-between mt-6">
            <button onclick="window.location.href='/work-order-manager'"  class="border-2 font-medium border-green-30 bg-white text-green-30 py-1.5 px-3 rounded-xl text-xs active:bg-green-30 active:text-white">
                Lihat Semua
            </button>

            <button class="border-[1px] border-orange-30 py-1.5 px-3 rounded-xl">
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
        </div>
    </div>

    <div class="flex flex-col gap-y-[18px] mt-[18px]" id = "container-work-orders"></div>
</div>