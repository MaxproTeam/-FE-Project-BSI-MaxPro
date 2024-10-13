<div class="px-4 mt-8">
    <p class="font-semibold text-xl text-black">WO ID</p>
    <p id="wo-id" class="font-medium text-xl text-grey mt-2"></p>

    <p class="font-semibold text-xl text-black mt-3">Judul</p>
    <p id="wo-name" class="font-medium text-xl text-grey mt-2"></p>

    <p class="font-semibold text-xl text-black mt-3">Estimasi Waktu Mulai</p>
    <p id="wo-start" class="font-medium text-xl text-grey mt-2"></p>

    <p class="font-semibold text-xl text-black mt-3">Estimasi Waktu Selesai</p>
    <p id="wo-end" class="font-medium text-xl text-grey mt-2"></p>

    <p class="font-semibold text-xl text-black mt-3">Detil Pekerjaan</p>
    <p id="wo-description" class="font-medium text-xl text-grey mt-2"></p>

    <p class="font-semibold text-xl text-black mt-3">Komentar / Catatan</p>
    <p id="wo-notes" class="font-medium text-xl text-grey mt-2"></p>

    <p class="font-semibold text-xl text-black mt-3">Approval</p>
    <select name = "approve-select" class="custom-select text-black text-[15px] pr-4 w-full text-xl py-2.5 px-2 bg-white drop-shadow-2xl rounded-lg mt-6">
        <option disabled selected value="">Status</option>
        <option value="Approved">Approve</option>
        <option value="Tolak">Tolak</option>
    </select>

    <button id="btn-save-approve-work-order" class="bg-green-10 w-full rounded-2xl h-[70px] mt-16 font-semibold text-white lg:hover:bg-green-700 sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">
        Simpan
    </button>
</div>