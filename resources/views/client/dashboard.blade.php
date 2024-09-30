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
    @include('client.Components.Identity.identity')

    <div class="px-4 flex flex-col gap-y-7 mt-8">
        <div onclick="window.location.href=''" class="border-gradient flex items-center gap-2.5 justify-center py-5">
            <p class="text-lg font-bold text-black">Data Absensi</p>
        </div>
        <div onclick="window.location.href='/work-check-client'" class="border-gradient flex items-center gap-2.5 justify-center py-5">
            <p class="text-lg font-bold text-black">Ceklis Pekerjaan</p>
        </div>
    </div>

    @include('client.Components.Card.work-order')
    @include('client.Components.Download.job-recap')
</div>

<script>
    document.getElementById('sidebar-dahsboard-client').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-dahsboard-client').classList.remove('text-grey')
    document.getElementById('sidebar-client').classList.remove('hidden')
</script>

<script async>
    document.title = "Dashboard | Maxpro";
</script>

@endsection