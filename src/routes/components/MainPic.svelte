<script>
// @ts-nocheck

	export let url = "";
	export let title = "The most beautiful hiking places in Bosnia and Herzegovina"
</script>

<div style="background-image: url('/images{url}/naslovna.webp')" class="clipped md:bg-fixed bg-cover bg-center w-full h-[25rem] md:h-screen">

	<div class="flex justify-center items-center bg-gradient-to-t from-transparent md:from-10% from-45% dark:to-primary-700 to-primary-500 h-[90%] w-full">

		<h1 class="h2 p-5 mx-4
		dark:bg-tertiary-500/75 bg-secondary-200/75 rounded-lg text-center">
			{title}
		</h1>

	</div>
</div>
<style>
	.clipped{
		mask-image: url(/images/MainPicMask.png);
		-webkit-mask-image: url(/images/MainPicMask.png);
		mask-repeat: no-repeat;
		-webkit-mask-repeat: no-repeat;
		mask-size: 100% 100%;
	}
</style>