@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    @include('pic.Components.Identity.identity')
    @include('pic.Components.Present.present')
    @include('pic.Components.Card.task')
    @include('pic.Components.Download.job-recap')
</div>

<script>
    document.getElementById('sidebar-dahsboard').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-dahsboard').classList.remove('text-grey')
    document.getElementById('sidebar-pic').classList.remove('hidden')
</script>

<script>
    window.isDashboardPIC = {{ Request::is('dashboard-pic') ? true : false }};
</script>

<script async>
    document.title = "Dashboard | Maxpro";
</script>

@endsection