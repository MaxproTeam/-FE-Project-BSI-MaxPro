@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    <div class="px-4">
        <div class="flex items-center gap-2">
            <a href="/dashboard-manager" class="text-sm text-black">Dashboard</a>
            <p class="text-sm text-black">></p>
            <p class="text-sm font-bold text-black text-opacity-50">Work Order</p>
        </div>
        <p class="font-bold text-orange-30 mt-1 text-2xl">Work Order</p>
    </div>
    @include('manager.Components.Filter.work-order')
    @include('manager.Components.Card.event')
    @include('manager.Components.Download.job-recap')
</div>

<script>
    window.isWorkOrdersManager= {{ Request::is('work-order-manager') ? true : false }};
</script>

<script>
    document.getElementById('sidebar-work-order-manager').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-work-order-manager').classList.remove('text-grey')
    document.getElementById('sidebar-manager').classList.remove('hidden')
</script>

<script async>
    document.title = "Work Order | Maxpro";
</script>

@endsection