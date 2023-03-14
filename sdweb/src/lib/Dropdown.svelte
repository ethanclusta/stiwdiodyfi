<script>
	import SubDropdown from './SubDropdown.svelte';

	let option = '';

	const toggleExtra = (e) => {
        if (e.target.id === option) {
            option = '';
        } else if (e.target.id === 'arch') {
			option = 'arch';
		} else if (e.target.id === 'indev') {
			option = 'indev';
		} else if (e.target.id === 'live') {
			option = 'live';
		}
	};
</script>

<div
	class="absolute left-0 z-10 mt-2 w-56 origin-top-right bg-white ring-1 ring-black focus:outline-none divide-y divide-gray-100"
	role="menu"
	aria-orientation="vertical"
	aria-labelledby="menu-button"
	tabindex="-1"
>
	<div class="py-1" role="none">
		<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
		<div
			on:click={toggleExtra}
			id="live"
			class="cursor-pointer hover:underline block px-4 py-2 text-sm"
		>
			LIVE
		</div>
		{#if option === 'live'}
			<SubDropdown items={['DIGIDOL DYFI DIGITAL', 'DYFI FILM SCHOOL']} />
		{/if}
		<div
			on:click={toggleExtra}
			id="indev"
			class="cursor-pointer hover:underline block px-4 py-2 text-sm"
		>
			IN DEVELOPMENT
		</div>
		{#if option === 'indev'}
			<SubDropdown items={['DIGIDOL DYFI DIGITAL', 'DYFI FILM SCHOOL']} />
		{/if}
		<div
			on:click={toggleExtra}
			id="arch"
			class="cursor-pointer hover:underline block px-4 py-2 text-sm"
		>
			ARCHIVE
		</div>
		{#if option === 'arch'}
			<SubDropdown items={['DIGIDOL DYFI DIGITAL', 'DYFI FILM SCHOOL']} />
		{/if}
	</div>
</div>
