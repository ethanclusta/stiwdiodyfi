<script>
	import Logo from '$lib/assets/LOGOS7.png';
	import Dropdown from './Dropdown.svelte';

	let drop = false;

	const toggleDrop = () => {
		drop = !drop;
		return;
	};

	const hideDrop = () => {
		drop = false;
		return;
	}
</script>

<div class="w-full flex flex-row justify-between p-3">
	<a href="/">
		<img class="h-16 object-contain" src={Logo} alt="Stiwdio Dyfi" />
	</a>
	<div class="flex flex-row gap-x-5 py-4 text-xl md:text-2xl">
		<div class="relative">
			<div on:click={toggleDrop} class="cursor-pointer hover:underline">PROJECTS</div>
			{#if drop}
				<Dropdown hideFunc={hideDrop} />
			{/if}
		</div>
		<div class="cursor-pointer hover:underline">ABOUT</div>
		<a href="/contact" class="cursor-pointer hover:underline">CONTACT</a>
	</div>
	<img class="h-16 opacity-0 hidden md:block" src={Logo} alt="Stiwdio Dyfi" />
</div>
