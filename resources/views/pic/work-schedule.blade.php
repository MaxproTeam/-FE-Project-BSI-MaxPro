@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    @include('pic.Components.Calendar.work-schedule')
    @include('pic.Components.Card.task')
</div>

<script>
    window.isWorkSchedulePIC = {{ Request::is('work-schedule-pic') ? true : false }};
</script>

<script>
    document.getElementById('sidebar-work-schedule').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-work-schedule').classList.remove('text-grey')
    document.getElementById('sidebar-pic').classList.remove('hidden')
</script>

<script async>
    document.title = "Jadwal Pekerjaan | Maxpro";
</script>

@endsection