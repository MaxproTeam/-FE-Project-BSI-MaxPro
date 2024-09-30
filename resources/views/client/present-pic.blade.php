@extends('Layout.global-layout')
@section('content')

<style>
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
</style>

<div class="mt-32 px-4">
    <div class="px-4">
        <div class="flex items-center gap-2">
            <a href="/dashboard-manager" class="text-sm text-black">Dashboard</a>
            <p class="text-sm text-black">></p>
            <p class="text-sm text-black">Absensi</p>
            <p class="text-sm text-black">></p>
            <p class="text-sm font-bold text-black text-opacity-50">Absensi PIC</p>
        </div>
        <p class="font-bold text-orange-30 mt-1 text-2xl">Absensi PIC</p>
    </div>

    @include('client.Components.Calendar.calendar')
    @include('client.Components.Table.present-pic')
</div>

<script>
    document.getElementById('sidebar-present-pic-client').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-present-pic-client').classList.remove('text-grey')
    document.getElementById('sidebar-client').classList.remove('hidden')
</script>

<script async>
    document.title = "Dashboard | Maxpro";
</script>

@endsection