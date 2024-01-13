<script>
import Place from './components/Place.svelte';
import MainPic from './components/MainPic.svelte';

export let data;
let className = 'md:col-span-2 col-span-1'
</script>
<MainPic/>

<p class="text-2xl text-center mx-5 mb-14 mt-5">Mountains to visit:</p>

<div class="grid md:grid-cols-[50%_50%] grid-cols-[100%]">
	{#each data.summaries as {slug, title}, index}
		{#if index == (data.summaries.length - 1) && index % 2 == 0}			
			<Place
				{className}
				{slug}
				{title}
			/>
		{:else}
			<Place
				{slug}
				{title}
			/>
		{/if}
	{/each}
</div>