<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div
	class="my-5 rounded-lg bg-primary-400 text-primary-50 dark:bg-secondary-300 dark:text-primary-900 sm:mx-10"
>
	<Accordion>
		<AccordionItem>
			<svelte:fragment slot="lead">
				<div
					class="labeled h-10 w-10
						bg-primary-50 dark:bg-primary-900
						"
				></div>
			</svelte:fragment>

			<svelte:fragment slot="summary">
				The content on this website has been adapted and modified, drawing inspiration from the
				following sources for informational purposes.
			</svelte:fragment>

			<svelte:fragment slot="content">
				<div class="sm:px-10 py-5">
					<ul class="list-disc">
						<li>
							<a
								href="https://furaj.ba/top-5-najljepsih-destinacija-za-planinarenje-u-bosni-i-hercegovini/"
								target="_blank"
							>
								TOP 5 najljepših destinacija za planinarenje u Bosni i Hercegovini
							</a>
						</li>

						<li>
							<a
								href="https://balkans.aljazeera.net/blogs/2022/8/19/preporuka-za-planinarski-vikend-zelengora-prostranstvo-jezera-i-zelenih-livada"
								target="_blank"
							>
								Preporuka za planinarski vikend: Zelengora, prostranstvo jezera i livada
							</a>
						</li>

						<li>
							<a href="https://www.dinarskogorje.com/zelengora.html" target="_blank">
								Planina Zelengora
							</a>
						</li>

						<li>
							<a href="https://welcometokonjic.ba/prenj-planina/" target="_blank">
								Planina Prenj
							</a>
						</li>

						<li>
							<a
								href="https://furaj.ba/hajducka-vrata-na-cvrsnici-najljepsi-vidikovac-na-planinama-u-bih/"
								target="_blank"
							>
								Hajdučka vrata na Čvrsnici – najljepši vidikovac na planinama u BiH
							</a>
						</li>

						<li>
							<a href="https://www.instagram.com/dzenad_dzino/" target="_blank">
								Instagram of the photograph
							</a>
						</li>
					</ul>
				</div>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
<style>
	.labeled {
		mask-repeat: no-repeat;
		-webkit-mask-repeat: no-repeat;
		mask-size: 100% 100%;
    }
	.labeled {
		mask-image: url(/images/labelMask.png);
		-webkit-mask-image: url(/images/labelMask.png);
	}
	li{
		margin: 0.5em;
		text-decoration: underline;
	}
	li:hover{
		color: #10827F;
	}    
</style>