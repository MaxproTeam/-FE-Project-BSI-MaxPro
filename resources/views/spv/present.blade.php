@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    <div class="px-4">
        <div class="flex items-center gap-2">
            <a href="/dashboard-spv" class="text-sm text-black">Dashboard</a>
            <p class="text-sm text-black">></p>
            <p class="text-sm text-black">Absensi</p>
            <p class="text-sm text-black">></p>
            <p class="text-sm font-bold text-black text-opacity-50">Absensi Saya</p>
        </div>
        <p class="font-bold text-orange-30 mt-1 text-2xl">Absensi Saya</p>
    </div>
    @include('spv.Components.Present.present')
    @include('spv.Components.Table.present')
    @include('spv.Components.Download.job-recap')
</div>

<script>
    window.isPresentSPVPage = {{ Request::is('present-me-spv') ? true : false }};
</script>

<script>
    document.getElementById('sidebar-present-me-spv').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-present-me-spv').classList.remove('text-grey')
    document.getElementById('sidebar-spv').classList.remove('hidden')
</script>

<script async>
    document.title = "Absensi Saya | Maxpro";
</script>

@endsection