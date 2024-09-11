@extends('Layout.global-layout')
@section('content')

<div class="mt-32 px-4">
    @include('pic.Components.Present.present')
    @include('pic.Components.Table.present')
    @include('pic.Components.Download.job-recap')
</div>

<script>
    document.getElementById('sidebar-present').classList.add('text-black', 'font-semibold', 'bg-green-30', 'bg-opacity-20')
    document.getElementById('sidebar-present').classList.remove('text-grey')
</script>

@endsection