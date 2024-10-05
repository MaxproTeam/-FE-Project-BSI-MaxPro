@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    <div class="px-4">
        <div class="flex items-center gap-2">
            <a href="/dashboard-manager" class="text-sm text-black">Dashboard</a>
            <p class="text-sm text-black">></p>
            <p class="text-sm text-black">Proyek</p>
            <p class="text-sm text-black">></p>
            <p id = "nama-proyek" class="text-sm font-bold text-black text-opacity-50"></p>
        </div>
        <p id = "headline-nama-proyek" class="font-bold text-orange-30 mt-1 text-2xl"></p>

        <div class="flex items-center gap-1 mt-6">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="#FF914D" />
                <path d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="#FF914D" />
            </svg>
            <p class="text-xs font-medium text-black"><span id = "jumlah-pic"></span> PIC</p>
        </div>
        <p class="text-xs font-medium text-black">Supervisor : <span id = "nama-spv"></span></p>

        <div class="w-full border-t-2 mt-7 border-black opacity-10"></div>
    </div>

    <div class="flex flex-col gap-y-10 mt-8">
        @include('manager.Components.Card.present')
        @include('manager.Components.Card.check-work')
        @include('manager.Components.Card.work-order')
    </div>
</div>

<script>
    window.isDetailProyekManager= {{ Request::is('detail-proyek-manager/*') ? true : false }};
</script>

<script>
    document.getElementById('sidebar-proyek-manager').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-proyek-manager').classList.remove('text-grey')
    document.getElementById('sidebar-manager').classList.remove('hidden')
</script>

<script async>
    document.title = "Proyek | Maxpro";
</script>

@endsection