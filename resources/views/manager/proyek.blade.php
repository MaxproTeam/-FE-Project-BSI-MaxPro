@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    <div class="px-4">
        <div class="flex items-center gap-2">
            <a href="/dashboard-manager" class="text-sm text-black">Dashboard</a>
            <p class="text-sm text-black">></p>
            <p class="text-sm font-bold text-black text-opacity-50">Proyek</p>
        </div>
        <p class="font-bold text-orange-30 mt-1 text-2xl">Proyek</p>
    </div>
    @include('manager.Components.Card.proyek')
</div>

<script>
    window.isProyekManager= {{ Request::is('proyek-manager') ? true : false }};
</script>

<script>
    document.getElementById('sidebar-proyek-manager').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-proyek-manager').classList.remove('text-grey')
    document.getElementById('sidebar-manager').classList.remove('hidden')
    document.getElementById('proyek-identity').classList.remove('hidden')
    document.getElementById('card-proyek').classList.add('mt-5')
    document.getElementById('card-proyek').classList.remove('mt-12')
</script>

<script async>
    document.title = "Proyek | Maxpro";
</script>

@endsection