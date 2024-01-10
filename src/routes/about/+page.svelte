<body>
    <div class="w-full min-h-[90vh] flex justify-center items-center flex-col">
        <p class="flex self-start mx-[1.5em] pb-1 font-semibold text-2xl border-b-2 border-primary-900"> 
            Contact:
        </p>

        <form class="md:w-[50%] sm:w-[70%] w-[90%]" action="">
            <div class="field">
                <label for="">Name</label>
                <input type="text">
            </div>

            <div class="field">
                <label for="">Surname</label>
                <input type="text">
            </div>
    
            <div class="field">
                <label for="">Message</label>
                <textarea class="w-[100%]" id="" cols="30" rows="10"></textarea>
            </div>

            <input type="submit">
        </form>
    </div>
</body>

<style>
    label{
        margin: 0.5em 0;
    }
    input{
        width: 100%;
        padding: 0.5em 1em ;
    }
    .field {
        margin: 1em;
    }
</style>