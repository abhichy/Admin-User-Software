<link href="{{ asset('css/app.css') }}" rel="stylesheet">

<meta name="csrf-token"
content="{{ csrf_token() }}"> 

 <script src="{{ asset('js/app.js') }}" defer></script>

@extends('FrontEnd.master')
@section("contend")
<div id="example">
    < <div class="container-fluid">
        <h1 class="mt-4">New Task</h1>
        <ol class="breadcrumb mb-4">
            <Navli class="breadcrumb-item active">Dashboard</li>
        </ol>
    </div> >

@endsection 




