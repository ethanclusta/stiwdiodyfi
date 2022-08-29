<script>
	import '../app.css';
</script>

<body style="background: #D32D7D;">
	<div class="relative h-full w-full">
		<div class="bg-[#D32D7D] p-8 lg:p-12">
			<div class="bg-white w-full flex flex-col gap-y-5 pb-5">
				<slot />
			</div>
		</div>
		<div class="absolute bottom-2 right-2 text-sm text-white text-right">
			Website made by <a href="https://clusta.live" class="underline" target="_blank">Clusta.</a>
		</div>
	</div>
</body>
