<script>
// @ts-nocheck

	export let title = 'Title';
	export let slug;
	export let className = '';

</script>
<div class="grid {className}">
	<a href="/{slug}">
		<div class="image-links md:h-[35rem] h-[25rem] bg-center bg-cover" style="background-image: url('/images/{slug}/naslovna.jpg')">
			<div class="h-full w-full lg:bg-black/10 flex justify-center items-center hover:bg-transparent ease-in-out duration-200">
				<p class="dark:bg-tertiary-500/75 bg-secondary-200/80 p-5 rounded-lg text-2xl font-medium">{title}</p>
			</div>
		</div>
	</a>
</div>