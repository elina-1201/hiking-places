<script>
    import MainPic from "../components/MainPic.svelte";

    let alt = "Zelengora mountain"
    $:outerWidth = 0;
</script>

<svelte:window bind:outerWidth />

<MainPic title="Zelengora" url='/zelengora'/>

<div class="p-10">
    <div class="grid lg:grid-cols-2 grid-cols-1">
        <div class="image-container">
            <img class="page-image" src="src/assets/images/zelengora/1.png" {alt}/>
        </div>

        <div class="text-container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam augue, lacinia et dui ac, consequat maximus elit. Fusce id interdum turpis. Quisque vulputate nibh eu imperdiet tristique. Aenean vitae auctor quam, quis porttitor dolor. Aenean metus ex, laoreet eleifend nisi eu, dictum eleifend eros. Aenean imperdiet vestibulum turpis eget tincidunt. Proin diam nulla, molestie id nisl eget, egestas ultricies leo. Cras fringilla odio in porta feugiat. Morbi nisl ipsum, tempor vel ligula ut, facilisis interdum velit. Sed diam dolor, consectetur fringilla leo vel, tempus imperdiet leo.

                Duis rutrum varius nibh nec sagittis. Nunc pulvinar eget lacus eu aliquet. Vivamus sagittis orci sed viverra maximus. Ut porttitor quis nisi at condimentum. In ac maximus lectus, dignissim laoreet augue. Ut volutpat ante a sollicitudin facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent feugiat vestibulum risus, quis luctus nisl aliquet ut. Nam ultricies lectus non arcu euismod, in luctus ex sodales. 
            </p>
        </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1">
        {#if outerWidth < 1000}
            <div class="image-container">
                <img class="page-image w-10" src="src/assets/images/zelengora/2.png" {alt}/>
            </div>
        {/if}        
        <div class="text-container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam augue, lacinia et dui ac, consequat maximus elit. Fusce id interdum turpis. Quisque vulputate nibh eu imperdiet tristique. Aenean vitae auctor quam, quis porttitor dolor. Aenean metus ex, laoreet eleifend nisi eu, dictum eleifend eros. Aenean imperdiet vestibulum turpis eget tincidunt. Proin diam nulla, molestie id nisl eget, egestas ultricies leo. Cras fringilla odio in porta feugiat. Morbi nisl ipsum, tempor vel ligula ut, facilisis interdum velit. Sed diam dolor, consectetur fringilla leo vel, tempus imperdiet leo.

                Duis rutrum varius nibh nec sagittis. Nunc pulvinar eget lacus eu aliquet. Vivamus sagittis orci sed viverra maximus. Ut porttitor quis nisi at condimentum. In ac maximus lectus, dignissim laoreet augue. Ut volutpat ante a sollicitudin facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent feugiat vestibulum risus, quis luctus nisl aliquet ut. Nam ultricies lectus non arcu euismod, in luctus ex sodales. 
            </p>
        </div>

        {#if outerWidth > 1000}
            <div class="image-container">
                <img class="page-image w-10" src="src/assets/images/zelengora/2.png" {alt}/>
            </div>
        {/if}
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1">
        <div class="image-container">
            <img class="page-image" src="src/assets/images/zelengora/3.png" {alt}/>
        </div>

        <div class="text-container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam augue, lacinia et dui ac, consequat maximus elit. Fusce id interdum turpis. Quisque vulputate nibh eu imperdiet tristique. Aenean vitae auctor quam, quis porttitor dolor. Aenean metus ex, laoreet eleifend nisi eu, dictum eleifend eros. Aenean imperdiet vestibulum turpis eget tincidunt. Proin diam nulla, molestie id nisl eget, egestas ultricies leo. Cras fringilla odio in porta feugiat. Morbi nisl ipsum, tempor vel ligula ut, facilisis interdum velit. Sed diam dolor, consectetur fringilla leo vel, tempus imperdiet leo.

                Duis rutrum varius nibh nec sagittis. Nunc pulvinar eget lacus eu aliquet. Vivamus sagittis orci sed viverra maximus. Ut porttitor quis nisi at condimentum. In ac maximus lectus, dignissim laoreet augue. Ut volutpat ante a sollicitudin facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent feugiat vestibulum risus, quis luctus nisl aliquet ut. Nam ultricies lectus non arcu euismod, in luctus ex sodales. 
            </p>
        </div>
    </div>

</div>

<style>
    .page-image {
        /* display: block; */
        width: 100%;
    }
    .text-container, .image-container{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: justify;
    }
    .text-container {
        padding: 5% 10%;
    }
</style>