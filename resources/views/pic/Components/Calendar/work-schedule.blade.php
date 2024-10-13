<style>
    .custom-select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><path d="M0 0.5L8.66025 0.5L4.33013 8L0 0.5Z" fill="%23ABABAB"/></svg>') no-repeat right center;
        background-position: right 0px center;
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

<div class="px-4 mt-6">
    <p id="title-select-day" class="text-lg font-bold text-black">Pilih Hari</p>

    <div class="bg-white w-full rounded-t-[20px] pt-[10px] pb-3 px-5 mt-3.5" style="box-shadow: 0px 0px 4px 0px #00000040;">
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
        <div id="calendarSlides" class="mt-2">
        </div>
    </div>
</div>

<script>
    window.isCalendarForWorkSchedule = true;
</script>