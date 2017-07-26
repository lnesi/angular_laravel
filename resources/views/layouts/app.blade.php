<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <base href="/#">
    <!-- Styles -->
   
</head>
<body>
    <div id="app">
        @yield('content')
    </div>

    <!-- Scripts -->
    
    <script type="text/javascript" src="{{ asset('ng-dist/inline.bundle.js') }}"></script>
    <script type="text/javascript" src="{{ asset('ng-dist/polyfills.bundle.js') }}"></script>
    <script type="text/javascript" src="{{ asset('ng-dist/styles.bundle.js') }}"></script>
    <script type="text/javascript" src="{{ asset('ng-dist/vendor.bundle.js') }}"></script>
    <script type="text/javascript" src="{{ asset('ng-dist/main.bundle.js') }}"></script>
</body>
</html>
