@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    <div class="px-4">
        <div class="flex items-center gap-2">
            <a href="/dashboard-spv" class="text-sm text-black">Dashboard</a>
            <p class="text-sm text-black">></p>
            <p class="text-sm text-black">Absensi</p>
            <p class="text-sm text-black">></p>
            <p class="text-sm font-bold text-black text-opacity-50">Absensi PIC</p>
        </div>
        <p class="font-bold text-orange-30 mt-1 text-2xl">Absensi PIC</p>
    </div>
    @include('spv.Components.Calendar.calendar')
    @include('spv.Components.Table.present-pic')
    @include('spv.Components.Download.job-recap')
</div>

<script>
    window.isPresentPICSPVPage = {{ Request::is('present-pic-spv') ? true : false }};
</script>

<script>
    document.getElementById('sidebar-present-pic-spv').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-present-pic-spv').classList.remove('text-grey')
    document.getElementById('sidebar-spv').classList.remove('hidden')
</script>

<script async>
    document.title = "Absensi PIC | Maxpro";
</script>

@endsection