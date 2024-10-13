@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    <div class="px-4">
        <div class="flex items-center gap-2">
            <a href="/dashboard-spv" class="text-sm text-black">Dashboard</a>
            <p class="text-sm text-black">></p>
            <p class="text-sm font-bold text-black text-opacity-50">Work Order</p>
        </div>
        <p class="font-bold text-orange-30 mt-1 text-2xl">Work Order</p>
    </div>
    @include('spv.Components.Filter.filter-work-order')
    @include('spv.Components.Card.work-order')
    @include('spv.Components.Download.job-recap')
</div>

<script>
    window.isWorkOrderSPV = {{ Request::is('work-order-spv') ? true : false }};
</script>

<script>
    document.getElementById('sidebar-work-order-spv').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-work-order-spv').classList.remove('text-grey')
    document.getElementById('sidebar-spv').classList.remove('hidden')
    document.getElementById('title-work-order').classList.add('hidden')
</script>

<script async>
    document.title = "Work Order | Maxpro";
</script>

@endsection