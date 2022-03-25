<!DOCTYPE html>
<html lang="ru">

<head>

	<meta charset="utf-8">

	<title>@yield('page-title') - {{ settings('app_name') }}</title>
	<meta name="description" content="HTML template">

	<meta name="viewport" content="width=device-width">

	<link rel="icon" href="/frontend/Amatic/img/favicon.png" >

	<link rel="stylesheet" href="../frontend/Amatic/css/slick.css">
	<link rel="stylesheet" href="../frontend/Amatic/css/grid.css">
	<link rel="stylesheet" href="../frontend/Amatic/css/styles.min.css">
	<link rel="stylesheet" href="../frontend/Amatic/css/normalize.css">
	<link rel="stylesheet" href="../frontend/Amatic/css/kzr-dd-tronic.css">
	<link rel="stylesheet" href="../frontend/Amatic/css/components.css">
	
	<script src="/frontend/Amatic/js/jquery-3.4.1.min.js"></script>

</head>

<body>

		@yield('content')

	<!-- SCRIPTS -->

</body>
</html>