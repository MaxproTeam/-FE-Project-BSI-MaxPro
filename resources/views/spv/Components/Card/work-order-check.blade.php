<div class="px-4 mt-8">
    <div class="bg-white p-3 rounded-xl drop-shadow-lg flex items-end justify-between">
        <div>
            <p class="poppins bg-orange-30 text-white font-medium text-xs uppercase px-1.5 py-0.5 tracking-[0.1rem] rounded-md w-fit">JANITOR</p>
            <p id="work-order-name" class="poppins text-black font-medium text-base mt-4"></p>
        </div>
        <div>
            <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-4 flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="#FF914D" />
                    <path d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="#FF914D" />
                </svg>
                <span id="pic-name"></span>
            </p>
            <p class="poppins text-[#1E1E1E] text-opacity-80 font-medium text-xs mt-2 flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#FF914D" />
                </svg>
                <span id="work-order-day"></span>, <span id="work-order-date"></span>
            </p>
        </div>
    </div>

    <div class="mt-6">
        <p class="font-semibold text-black text-xl">Pilih PIC</p>
        <select id="select-pic" class="custom-select text-black text-[15px] pr-4 w-full text-xl py-2.5 px-2 bg-white drop-shadow-2xl rounded-lg mt-6">
            <option selected hidden value="null">Pilih PIC</option>
        </select>
        <p class="font-semibold text-black text-xl mt-6">Catatan</p>
        <textarea id="notes" type="text" autocomplete="off" rows="6" class="w-full bg-white px-4 py-2.5 rounded-lg drop-shadow-2xl mt-4"></textarea>
        <button id="btn-assign-work-order" class="bg-green-10 w-full rounded-2xl h-[70px] mt-16 font-semibold text-white lg:hover:bg-green-700 sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">
            Simpan
        </button>
    </div>
</div>