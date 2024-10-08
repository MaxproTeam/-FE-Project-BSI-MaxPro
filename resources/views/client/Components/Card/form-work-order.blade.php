<div class="px-4">
    <p class="font-semibold text-xl text-black mt-4">Nama Pekerjaan</p>
    <input id="workOrder" name="workOrder" type="text" autocomplete="off" class="w-full bg-white px-4 py-2.5 rounded-lg drop-shadow-xl mt-4">
    <span class="text-red-500" id = "workOrder-error"></span>

    <p class="font-semibold text-xl text-black mt-4">Rincian Pekerjaan</p>
    <textarea id="description" name="description" type="text" autocomplete="off" rows="6" class="w-full bg-white px-4 py-2.5 rounded-lg drop-shadow-2xl mt-4"></textarea>
    <span class="text-red-500" id = "description-error"></span>

    <p class="font-semibold text-xl text-black mt-4">Estimasi Waktu Mulai</p>
    <input id="start_work" name="start_work" type="date" autocomplete="off" class="w-full bg-white px-4 py-2.5 rounded-lg drop-shadow-xl mt-4">
    <span class="text-red-500" id = "start_work-error"></span>

    <p class="font-semibold text-xl text-black mt-4">Estimasi Waktu Selesai</p>
    <input id="end_work" name="end_work" type="date" autocomplete="off" class="w-full bg-white px-4 py-2.5 rounded-lg drop-shadow-xl mt-4">
    <span class="text-red-500" id = "end_work-error"></span>

    <p class="font-semibold text-xl text-black mt-4">Komentar / Catatan</p>
    <textarea id="notes" name="notes" type="text" autocomplete="off" rows="6" class="w-full bg-white px-4 py-2.5 rounded-lg drop-shadow-2xl mt-4"></textarea>
    <span class="text-red-500" id = "notes-error"></span>

    <button id="btn-create-work-order" class="bg-green-10 w-full rounded-2xl h-[70px] mt-4 font-semibold text-white lg:hover:bg-green-700 sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">
        Simpan
    </button>
</div>