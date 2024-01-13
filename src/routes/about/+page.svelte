<body>
    <div class="w-full min-h-[90vh] flex justify-center items-center flex-col">

        <div class="xl:w-[35%] my-12
        lg:w-[50%] sm:w-[70%] w-[90%] 
        border-4 border-primary-500 dark:border-secondary-300 rounded-2xl
        flex justify-center items-center flex-col">

            <p class="flex pb-1 ml-[-30%] mb-11 mt-16 font-semibold text-4xl border-b-2 border-primary-900 dark:border-secondary-100"> 
                Contact
            </p>
    
            <form class="w-[90%]" name="contact" method="POST">
    
                <div class="field">
                    <label for="name">Name</label>
                    <input class="w-full dark:text-primary-900 p-2" type="text" name="name">
                </div>
    
                <div class="field">
                    <label for="email">E-mail</label>
                    <input class="w-full dark:text-primary-900 p-2" type="email" name="email">
                </div>
        
                <div class="field">
                    <label for="message">Message</label>
                    <textarea class="w-[100%] dark:text-primary-900 p-2" cols="30" rows="10" name="message"></textarea>
                </div>
    
                <div class="flex items-center justify-center ">
                    <button id="button" type="submit" class="p-2 mt-2 mb-8 w-52  cursor-pointer bg-success-400 dark:hover:bg-success-500 hover:bg-success-300  ease-in-out duration-100 rounded-md"> SEND </button>
                </div>
            </form>
        </div>
    </div>
</body>

<style>
    label{
        margin: 0.5em 0;
    }
    .field {
        margin: 1.5em 1em;
    }
    textarea:focus, input:focus {
        outline-style: solid;
        outline-color: #10827F;
    }
    textarea, input{
        border: solid 1px #10827F;
    } 
</style>