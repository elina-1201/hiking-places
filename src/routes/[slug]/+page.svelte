<script>
	import MainPic from "../components/MainPic.svelte";

	export let data;
	let place = data.place;
	let alt = place.title + " Mountain"
	let widthMob = "w-[70%]";
	let widthPC = "w-[40em]";

	$:outerWidth = 0;
	if(place.slug === "cvrsnica") {
		widthMob = "w-full";
		widthPC = "w-full"
	}

</script>

<svelte:window bind:outerWidth />

<MainPic title={place.title} url='/{place.slug}'/>

<div class="2xl:mx-28 ld:p-10 p-5 mt-10">
	<div class="grid lg:grid-cols-2 grid-cols-1">
		<div class="image-container">
			<img class="page-image w-full" src="/images/{place.slug}/1.webp" {alt}/>
		</div>

		<div class="text-container">
			<div>
				{@html place.content.first}
			</div>
		</div>
	</div>

	<div class="grid lg:grid-cols-2 grid-cols-1">
		{#if outerWidth < 1024}
			<div class="image-container w-[100%]">
				<img class="page-image {widthMob}" src="/images/{place.slug}/2.webp" {alt}/>
			</div>
		{/if}        
		<div class="text-container">
			<div>
				{@html place.content.second}
			</div>
		</div>

		{#if outerWidth >= 1024}
			<div class="image-container">
				<img class="page-image  md:{widthPC}" src="/images/{place.slug}/2.webp" {alt}/>
			</div>
		{/if}
	</div>

	<div class="grid lg:grid-cols-2 grid-cols-1">
		<div class="image-container">
			<img class="page-image" src="/images/{place.slug}/3.webp" {alt}/>
		</div>

		<div class="text-container">
			<div>
				{@html place.content.third}
			</div>
		</div>
	</div>
</div>

<style>
	.page-image {
		filter: drop-shadow(3px 5px 15px #000000);
		margin: 2em 0;
		/* margin: 5% 2%; */
	}
	.text-container, .image-container{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: large;
	}
	@media (min-width: 768px){
		.text-container {
			padding: 5% 10%;
			text-align: justify;
		}
	}

</style>