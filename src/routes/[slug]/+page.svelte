<script>
    import MainPic from "../components/MainPic.svelte";

    export let data;
    let place = data.place;
    let alt = place.title + " Mountain"
    $:outerWidth = 0;
</script>

<svelte:window bind:outerWidth />

<MainPic title={place.title} url='/{place.slug}'/>

<div class="2xl:mx-28 ld:p-10 p-5">
    <div class="grid lg:grid-cols-2 grid-cols-1">
        <div class="image-container">
            <img class="page-image w-full" src="/images/{place.slug}/1.png" {alt}/>
        </div>

        <div class="text-container">
            <p>
                {place.content.first}
            </p>
        </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1">
        {#if outerWidth < 1024}
            <div class="image-container w-[100%]">
                <img class="page-image w-[70%]" src="/images/{place.slug}/2.png" {alt}/>
            </div>
        {/if}        
        <div class="text-container">
            <p>
                {place.content.second}
            </p>
        </div>

        {#if outerWidth >= 1024}
            <div class="image-container">
                <img class="page-image  md:w-[40em]" src="/images/{place.slug}/2.png" {alt}/>
            </div>
        {/if}
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1">
        <div class="image-container">
            <img class="page-image" src="/images/{place.slug}/3.png" {alt}/>
        </div>

        <div class="text-container">
            <p>
                {place.content.third}
            </p>
        </div>
    </div>
</div>

<style>
    .page-image {
        margin: 5% 2%;
    }
    .text-container, .image-container{
        display: flex;
        justify-content: center;
        align-items: center;        
    }
    @media (min-width: 768px){
        .text-container {
            padding: 5% 10%;
            text-align: justify;
        }
    }

</style>