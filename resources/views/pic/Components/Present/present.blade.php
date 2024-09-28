<div class="px-4 mt-10">
    <p id="current-time" class="text-sm font-bold text-black"></p>
    <button id = "btn-attedance" class="bg-green-10 w-full text-xl rounded-2xl h-[70px] mt-3 font-semibold text-white lg:hover:bg-green-700 sm:active:bg-gray-700 active:scale-95 transition-all duration-100 ease-in-out">Absen Masuk</button>
</div>

<script>
    function updateTime() {
        const currentTimeElement = document.getElementById('current-time');
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const day = String(now.getDate()).padStart(2, '0');
        const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        const month = monthNames[now.getMonth()];
        const year = now.getFullYear();

        const formattedTime = `Senin, ${day} ${month} ${year} | ${hours}:${minutes}:${seconds}`;

        currentTimeElement.textContent = formattedTime;
    }

    setInterval(updateTime, 1000);

    updateTime();
</script>