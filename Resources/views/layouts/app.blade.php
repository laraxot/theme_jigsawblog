<!DOCTYPE html>
<html lang="en">
@include('pub_theme::layouts.partials.htmlheader')

<body class="flex flex-col justify-between min-h-screen bg-gray-100 text-gray-800 leading-normal font-sans">

    @include('pub_theme::layouts.partials.headernav')
    <main role="main" class="flex-auto w-full container max-w-4xl mx-auto py-16 px-6">
        @yield('content')
    </main>

    @include('pub_theme::layouts.partials.footer')
    @include('pub_theme::layouts.partials.scripts')

</body>

</html>
