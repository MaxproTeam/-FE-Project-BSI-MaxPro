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
    .day-button {
        transition: all 0.3s ease;
    }
    .day-button:hover {
        transform: scale(1.05);
    }
    .orange-circle {
        background-color: #FFA500;
    }
    .reduced-orange-circle {
        background-color: rgba(255, 165, 0, 0.5); /* Oranye redup */
    }
</style>

<div onclick="dataWorkOrder()" class="border-gradient flex items-center gap-2.5 justify-center py-5">
    <p class="text-lg font-bold text-black">Work Order</p>
    <svg id="arrow-work-order" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 9.5L12.5 16.5L5.5 9.5" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</div>

<div id="data-work-order" class="hidden">
    <div class="px-4">
        <div class="bg-white w-full rounded-t-[20px] pt-[10px] pb-3 px-5" style="box-shadow: 0px 0px 4px 0px #00000040;">
            <div class="flex items-center justify-between">
                <select class="custom-select font-semibold text-black text-[15px] pr-4" id="monthSelect-workorders">
                </select>
                <div class="flex items-center gap-7">
                    <button id="prev-calendar-workorders">
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.63678 1.53193L2.87904 5.96859L7.3157 10.7263L5.8677 12.0766L0.0807504 5.87087L6.28649 0.0839236L7.63678 1.53193Z" fill="#3A3A3A" />
                        </svg>
                    </button>
                    <button id="next-calendar-workorders">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.734558 1.53193L5.49229 5.96859L1.05563 10.7263L2.50364 12.0766L8.29059 5.87087L2.08485 0.0839236L0.734558 1.53193Z" fill="#3A3A3A" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="calendarSlides-workorders" class="mt-2">
            </div>
        </div>
    </div>

    <div class="mt-8 relative overflow-x-auto mx-4">
        <table class="table-auto w-full mt-4">
            <thead>
                <tr>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">APPROVAL</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">WORK ORDER</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">TGL PENGAJUAN</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">ESTIMASI MULAI</th>
                    <th class="uppercase font-bold text-grey text-sm tracking-tight">ESTIMASI SELESAI</th>
                </tr>
            </thead>
            <tbody id="tbody-work-order-container"></tbody>
        </table>
    </div>

    @include('manager.Components.Download.job-recap')
</div>

<script>
    window.isCalendarForWorkOrders = true;
</script>

<script async>
    function dataWorkOrder() {
        document.getElementById('data-work-order').classList.toggle('hidden')
        document.getElementById('arrow-work-order').classList.toggle('-rotate-90')
    }
</script>