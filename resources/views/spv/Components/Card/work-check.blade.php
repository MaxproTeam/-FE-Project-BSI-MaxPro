<style>
    input[type="radio"]:checked+label span {
        background-color: blue;
        box-shadow: 0px 0px 0px 2px white inset;
        border: 1px solid blue;
    }

    input[type="radio"]:checked+label {
        color: black;
    }
</style>

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

    <div class="mt-8">
        <p class="font-semibold text-xl text-black">Bau</p>
        <div class="flex items-center gap-14">
            <div class="flex items-center mr-4 mt-5">
                <input required id="ya-bau" type="radio" value="bau" name="bau" class="hidden" />
                <label for="ya-bau" class="flex items-center cursor-pointer text-xl font-medium select-none">
                    <span class="bau-radio w-5 h-5 inline-block mr-[10px] rounded-full border border-[#d3d3d3] flex-no-shrink"></span>
                    Ya
                </label>
            </div>
            <div class="flex items-center mr-4 mt-5">
                <input required id="tidak-bau" type="radio" value="tidak-bau" name="bau" class="hidden" />
                <label for="tidak-bau" class="flex items-center cursor-pointer text-xl font-medium select-none">
                    <span class="bau-radio w-5 h-5 inline-block mr-[10px] rounded-full border border-[#d3d3d3] flex-no-shrink"></span>
                    Tidak
                </label>
            </div>
        </div>

        <p class="font-semibold text-xl text-black mt-5">Lantai</p>
        <div class="flex items-center gap-14">
            <div class="flex items-center mr-4 mt-5">
                <input required id="ya-lantai" type="radio" value="lantai" name="lantai" class="hidden" />
                <label for="ya-lantai" class="flex items-center cursor-pointer text-xl font-medium select-none">
                    <span class="lantai-radio w-5 h-5 inline-block mr-[10px] rounded-full border border-[#d3d3d3] flex-no-shrink"></span>
                    Ya
                </label>
            </div>
            <div class="flex items-center mr-4 mt-5">
                <input required id="tidak-lantai" type="radio" value="tidak-lantai" name="lantai" class="hidden" />
                <label for="tidak-lantai" class="flex items-center cursor-pointer text-xl font-medium select-none">
                    <span class="lantai-radio w-5 h-5 inline-block mr-[10px] rounded-full border border-[#d3d3d3] flex-no-shrink"></span>
                    Tidak
                </label>
            </div>
        </div>

        <p class="font-semibold text-xl text-black mt-5">Dinding</p>
        <div class="flex items-center gap-14">
            <div class="flex items-center mr-4 mt-5">
                <input required id="ya-dinding" type="radio" value="dinding" name="dinding" class="hidden" />
                <label for="ya-dinding" class="flex items-center cursor-pointer text-xl font-medium select-none">
                    <span class="dinding-radio w-5 h-5 inline-block mr-[10px] rounded-full border border-[#d3d3d3] flex-no-shrink"></span>
                    Ya
                </label>
            </div>
            <div class="flex items-center mr-4 mt-5">
                <input required id="tidak-dinding" type="radio" value="tidak-dinding" name="dinding" class="hidden" />
                <label for="tidak-dinding" class="flex items-center cursor-pointer text-xl font-medium select-none">
                    <span class="dinding-radio w-5 h-5 inline-block mr-[10px] rounded-full border border-[#d3d3d3] flex-no-shrink"></span>
                    Tidak
                </label>
            </div>
        </div>

        <p class="font-semibold text-xl text-black mt-5">Tempat Sampah</p>
        <div class="flex items-center gap-14">
            <div class="flex items-center mr-4 mt-5">
                <input required id="ya-tempat-sampah" type="radio" value="tempat-sampah" name="tempat-sampah" class="hidden" />
                <label for="ya-tempat-sampah" class="flex items-center cursor-pointer text-xl font-medium select-none">
                    <span class="tempat-sampah-radio w-5 h-5 inline-block mr-[10px] rounded-full border border-[#d3d3d3] flex-no-shrink"></span>
                    Ya
                </label>
            </div>
            <div class="flex items-center mr-4 mt-5">
                <input required id="tidak-tempat-sampah" type="radio" value="tidak-tempat-sampah" name="tempat-sampah" class="hidden" />
                <label for="tidak-tempat-sampah" class="flex items-center cursor-pointer text-xl font-medium select-none">
                    <span class="tempat-sampah-radio w-5 h-5 inline-block mr-[10px] rounded-full border border-[#d3d3d3] flex-no-shrink"></span>
                    Tidak
                </label>
            </div>
        </div>

        <p class="font-semibold text-xl text-black mt-5">Catatan</p>
        <input type="text" id="notes" name="notes" autocomplete="off" class="w-full bg-white px-4 py-2.5 rounded-lg drop-shadow-xl mt-4">

        <button id="btn-check-work-order" class="bg-green-10 w-full rounded-2xl h-[70px] mt-16 font-semibold text-white lg:hover:bg-green-700 sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">
            Simpan
        </button>
    </div>
</div>