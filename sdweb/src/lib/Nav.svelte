<script>
	import Logo from '$lib/assets/LOGOS7.png';
	import Dropdown from './Dropdown.svelte';

	let drop = false;

	const toggleDrop = () => {
		drop = !drop;
		return;
	};
</script>

<div class="w-full flex flex-row justify-between">
	<a href="/">
		<img class="h-16" src={Logo} alt="Stiwdio Dyfi" />
	</a>
	<div class="flex flex-row gap-x-5 p-4 text-2xl">
		<div class="relative">
			<div on:click={toggleDrop} class="cursor-pointer hover:underline">PROJECTS</div>
			{#if drop}
				<Dropdown />
			{/if}
		</div>
		<div class="cursor-pointer hover:underline">ABOUT</div>
		<div class="cursor-pointer hover:underline">CONTACT</div>
	</div>
	<img class="h-16 opacity-0" src={Logo} alt="Stiwdio Dyfi" />
</div>
