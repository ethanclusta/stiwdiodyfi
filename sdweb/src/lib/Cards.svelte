<script>
	import Card from './Card.svelte';
</script>

<div class="flex flex-col place-content-center lg:flex-row gap-3 px-5">
	<Card>
		<div class="text-5xl font-bold w-full text-center">
			<span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
				>DX3</span
			>
		</div>
		<div class="text-lg w-full text-center">Internet radio and TV station</div>
	</Card>
	<Card>
		<div class="text-5xl text-red-500 font-sos font-bold w-full text-center">Sôs Coch Sinema</div>
		<div class="text-lg w-full text-center">Community cinema in Machynlleth</div>
	</Card>
	<Card>
		<div class="text-5xl text-teal-600 font-bold font-beb w-full text-center">Dyfi Fashion Show</div>
		<div class="text-lg w-full text-center">The sewing, fashion, up-cycling collective</div>
	</Card>
</div>
