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

<div class="w-full flex flex-row justify-between px-3 pt-3">
	<a href="/">
		<img class="h-16 object-contain" src={Logo} alt="Stiwdio Dyfi" />
	</a>
	<div class="flex flex-row gap-x-3 md:gap-x-5 py-4 text-lg md:text-2xl">
		<div class="relative">
			<div on:click={toggleDrop} class="cursor-pointer hover:underline">PROJECTS</div>
			{#if drop}
				<Dropdown hideFunc={hideDrop} />
			{/if}
		</div>
		<a href="/about" class="cursor-pointer no-underline hover:underline">ABOUT</a>
		<a href="https://us14.list-manage.com/contact-form?u=c288709774c96731a04d21fa6&form_id=07bdec94bec06a1ccf2c0fd4575a9ae5" class="cursor-pointer no-underline hover:underline">CONTACT</a>
	</div>
	<img class="h-16 opacity-0 hidden md:block" src={Logo} alt="Stiwdio Dyfi" />
</div>
