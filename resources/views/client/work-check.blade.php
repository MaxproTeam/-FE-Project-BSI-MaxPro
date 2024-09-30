@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    <div class="px-4">
        <div class="flex items-center gap-2">
            <a href="/dashboard-client" class="text-sm text-black">Dashboard</a>
            <p class="text-sm text-black">></p>
            <p class="text-sm font-bold text-black text-opacity-50">Ceklis Pekerjaan</p>
        </div>
        <p class="font-bold text-orange-30 mt-1 text-2xl">Ceklis Pekerjaan</p>
    </div>

    @include('client.Components.Filter.work-check')
    @include('client.Components.Table.work-check')
    @include('client.Components.Download.job-recap')
</div>

<script>
    document.getElementById('sidebar-work-check-client').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-work-check-client').classList.remove('text-grey')
    document.getElementById('sidebar-client').classList.remove('hidden')
</script>

<script async>
    document.title = "Dashboard | Maxpro";
</script>

@endsection