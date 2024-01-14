<script context="module">
	// @ts-nocheck
	import DropList from "./components/DropList.svelte";
</script>

<body>
	<div class="flex min-h-[90vh] w-full flex-col items-center justify-center">
		<div
			class="clipped mx-8 mb-6 mt-4 w-[95%] bg-primary-500 bg-fixed
		text-secondary-300 dark:bg-secondary-300 dark:text-primary-900 sm:mt-20 lg:w-[70%]"
		>
			<p class="mx-6 mb-4 mt-10 px-6 py-28 text-justify text-lg sm:px-20">
				This minimalist project is a heartfelt attempt to showcase Bosnia and Herzegovina's rich
				natural beauty, encouraging people to explore its captivating landscapes. The goal is to
				inspire individuals to escape the demands of urban life and immerse themselves in the
				tranquility of our majestic mountains.
			</p>
		</div>

		<div
			class="my-6 flex w-[95%]
		flex-col items-center justify-center
		rounded-2xl border-2 border-primary-500 dark:border-secondary-300 sm:my-24
		sm:w-[70%] sm:border-4 lg:w-[50%] xl:w-[35%]"
		>
			<p
				class="mb-11 ml-[-30%] mt-16 flex border-b-2 border-primary-900 pb-1 text-4xl font-semibold dark:border-secondary-200"
			>
				Contact
			</p>

			<form
				class="w-[97%] sm:w-[90%]"
				name="contact"
				method="POST"
				netlify-honeypot="bot-field"
				netlify
			>
				<input type="hidden" name="form-name" value="contact" />

				<div class="field">
					<label for="name">Name</label>
					<input class="w-full p-2 dark:text-primary-900" type="text" name="name" />
				</div>

				<div class="field">
					<label for="email">E-mail</label>
					<input class="w-full p-2 dark:text-primary-900" type="email" name="email" />
				</div>

				<div class="field">
					<label for="message">Message</label>
					<textarea class="w-[100%] p-2 dark:text-primary-900" cols="30" rows="10" name="message"
					></textarea>
				</div>

				<div class="flex items-center justify-center">
					<button
						id="button"
						type="submit"
						class="mb-8 mt-2 w-52 cursor-pointer rounded-md bg-success-400 p-2 duration-100 ease-in-out hover:bg-success-300 dark:hover:bg-success-500"
					>
						SEND
					</button>
				</div>
			</form>
		</div>

		<DropList/>
	</div>
</body>

<style>
	label {
		margin: 0.5em 0;
	}
	.field {
		margin: 1.5em 1em;
	}
	textarea:focus,
	input:focus {
		outline-style: solid;
		outline-color: #10827f;
	}
	textarea,
	input {
		border: solid 1px #10827f;
	}

	.clipped {
		mask-repeat: no-repeat;
		-webkit-mask-repeat: no-repeat;
		mask-size: 100% 100%;
	}
	.clipped {
		mask-image: url(/images/aboutMask.png);
		-webkit-mask-image: url(/images/aboutMask.png);
	}

</style>
