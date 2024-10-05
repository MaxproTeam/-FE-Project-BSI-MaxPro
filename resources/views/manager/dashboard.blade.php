@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    @include('manager.Components.Identity.identity')
    @include('manager.Components.Card.event')
    @include('manager.Components.Card.proyek')
</div>

<script>
    window.isDashboardManager= {{ Request::is('dashboard-manager') ? true : false }};
</script>

<script>
    document.getElementById('sidebar-dahsboard-manager').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-dahsboard-manager').classList.remove('text-grey')
    document.getElementById('sidebar-manager').classList.remove('hidden')
    document.getElementById('dashboard-identity').classList.remove('hidden')
    document.getElementById('dashboard-event').classList.remove('hidden')
</script>

<script async>
    document.title = "Dashboard | Maxpro";
</script>

@endsection