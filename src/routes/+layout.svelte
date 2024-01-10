<script>
	import '../app.pcss';
</script>

<div id="body">
	<nav class="bg-primary-800 text-primary-100 p-3">
		<a href="/"  class="hover:bg-primary-900 py-2 px-4">Home</a>
		<a href="/about" class="hover:bg-primary-900 py-2 px-4">About</a>
	</nav>
	
	<slot />
</div>

<footer class="bg-primary-800 text-primary-100 flex items-center">

	<p class="block mr-auto ml-auto ">Made by Elina M.</p>

	<a class="absolute right-0" target="_blank" href="https://github.com/elina-1201/hiking-places">
		<img class="mr-2 h-[2em] invert hover:invert-0 ease-in-out duration-300" src="/images/github.png" alt="github icon">
	</a>
	
</footer>


<style>
	footer {
		/* height: 50px; */
		height: 3rem;
	}
	#body {
		min-height: 95vh;
	}
</style>