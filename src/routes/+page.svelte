<script>
import Place from './components/Place.svelte';
import MainPic from './components/MainPic.svelte';

</script>
<MainPic/>

<p class="text-2xl text-center mx-5 mb-14 mt-5">Mountains to visit:</p>

<div class="grid md:grid-cols-[50%_50%] grid-cols-[100%]">
	<Place
		href = {'/zelengora'}
		title={'Zelengora'}
	/>
	<Place
		href = '/vrata'
		title = 'Hajducka Vrata'
	/>
	<Place
		className = 'md:col-span-2 col-span-1'
		href = '/prenj'
		title = 'Prenj'
	/>
</div>





	<!-- <div class="grid">
		<a href="/zelengora">
			<div class="image-links bg-[url('/images/zelengora/naslovna.jpg')]">
				<div class=" h-full w-full bg-black/20 flex justify-center items-center hover:bg-transparent ease-in-out duration-200">
					<p class="bg-tertiary-50/75 p-5 rounded-lg text-2xl font-medium">Zelengora</p>
				</div>
			</div>
		</a>
	</div>
		
	<div>
		<a href="/vrata">
			<div class="image-links bg-[url('/images/vrata/naslovna.jpg')]">
				<div class=" h-full w-full bg-black/20 flex justify-center items-center hover:bg-transparent ease-in-out duration-200">
					<p class="bg-tertiary-50/75 p-5 rounded-lg text-2xl font-medium">Hajducka vrata</p>
				</div>
			</div>
		</a>
	</div> -->

	<!-- <div class="md:col-span-2">
		<a href="/prenj">
			<div class="image-links bg-[url('/images/prenj/naslovna.jpg')]">
				<div class=" h-full w-full bg-black/20 flex justify-center items-center hover:bg-transparent ease-in-out duration-200">
					<p class="bg-tertiary-50/75 p-5 rounded-lg text-2xl font-medium">Prenj</p>
				</div>
			</div>
		</a>
	</div>  -->