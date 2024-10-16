@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4 min-h-[60vh]">
    <div class="px-4">
        <div class="flex items-center gap-2">
            <a href="/dashboard-pic" class="text-sm text-black">Dashboard</a>
            <p class="text-sm text-black">></p>
            <p class="text-sm font-bold text-black text-opacity-50">Work Order</p>
        </div>
        <p class="font-bold text-orange-30 mt-1 text-2xl">Work Order</p>
    </div>
    @include('pic.Components.Card.task')
</div>

<script>
    window.isWorkOrdersPIC = {{ Request::is('work-order-pic') ? true : false }};
</script>

<script async>
    document.getElementById('sidebar-work-order').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-work-order').classList.remove('text-grey')
    document.getElementById('sidebar-pic').classList.remove('hidden')
</script>

<script async>
    document.title = "Work Order | Maxpro";
</script>

<script async>
    document.getElementById('title-tugas').classList.add('hidden')
</script>

@endsection