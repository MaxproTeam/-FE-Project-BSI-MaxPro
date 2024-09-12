@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    @include('spv.Components.Identity.identity')
    @include('spv.Components.Present.present')
    @include('spv.Components.Card.task')
    @include('spv.Components.Card.work-order')
    @include('spv.Components.Download.job-recap')
</div>

<script>
    document.getElementById('sidebar-dahsboard-spv').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-dahsboard-spv').classList.remove('text-grey')
    document.getElementById('sidebar-spv').classList.remove('hidden')
</script>

<script async>
    document.title = "Dashboard | Maxpro";
</script>

@endsection