@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4 min-h-[60vh]">
    <div>
        <div class="flex items-center gap-2">
            <a href="/dashboard-pic" class="text-sm text-black">Dashboard</a>
            <p class="text-sm text-black">></p>
            <p class="text-sm font-bold text-black text-opacity-50">Work Order</p>
        </div>
        <p class="font-bold text-orange-30 mt-1" style="font-size: 24px;">Work Order</p>
    </div>
    @include('pic.Components.Card.task')
</div>

<script async>
    document.getElementById('sidebar-work-order').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-work-order').classList.remove('text-grey')
</script>

<script async>
    document.getElementById('title-tugas').classList.add('hidden')
</script>

@endsection