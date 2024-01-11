<script>
// @ts-nocheck

	import '../app.pcss';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	let navBar;
	let scrollY;

	$: {
		if(scrollY > 30) {
			navBar.classList.add("fixed");
		}
		else if(scrollY == 0) {
			navBar.classList.remove("fixed");
		}
	}
</script>

<svelte:window bind:scrollY />

<body>
	<nav bind:this={navBar} class="dark:bg-primary-700 bg-primary-500 text-primary-100 p-3 flex justify-between items-center w-full md:h-[60px]">
		<div>
			<a href="/" class="hover:bg-primary-700 dark:hover:bg-primary-900 py-2 px-4">Home</a>
			<a href="/about" class="hover:bg-primary-700 dark:hover:bg-primary-900 py-2 px-4">About</a>
		</div>

		<LightSwitch />
	</nav>
	
	<slot />
</body>

<footer class="dark:bg-primary-700 bg-primary-500 text-primary-100 flex items-center">

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
	body {
		min-height: 95vh;
	}
	:global(.fixed) {
		display: fixed;
		top: 0;
		z-index: 10;
	}
</style>