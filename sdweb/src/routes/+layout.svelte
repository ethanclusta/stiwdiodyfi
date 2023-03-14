<script>
	import '../app.css';
	import Nav from '../lib/Nav.svelte';
</script>

<body>
	<div class="relative h-full w-full">
		<div class="p-4 pb-8">
			<div class="bg-white w-full flex flex-col gap-y-5">
				<Nav />
				<slot />
			</div>
		</div>
		<div class="absolute bottom-2 right-2 text-sm text-white text-right">
			Website made by <a href="https://clusta.live" class="underline" target="_blank">Clusta.</a>
		</div>
	</div>
</body>
