<script>
	import SubDropdown from './SubDropdown.svelte';

	export let hideFunc;

	let option = '';

	const toggleExtra = (e) => {
        if (e.target.id === option) {
            option = '';
        } else if (e.target.id === 'arch') {
			option = 'arch';
		} else if (e.target.id === 'live') {
			option = 'live';
		}
	};

	const liveProjs = [
		{
			title: 'RADIO DYFI',
			tag: 'radiodyfi'
		},
		{
			title: 'DIGIDOL DYFI DIGITAL',
			tag: 'digidoldyfidigital'
		},
		{
			title: 'SÔS COCH SINEMA',
			tag: 'soscochsinema'
		},
		{
			title: 'SWN DYFI SOUND',
			tag: 'swndyfisound'
		},
		{
			title: 'CONSULTATION',
			tag: 'consultation'
		},
		{
			title: 'CLWB FIDEO',
			tag: 'clwb-fideo'
		},
		{
			title: 'SCREEN NETWORK',
			tag: 'screen-network'
		},
	]

	const archProjs = [
		{
			title: 'HWB FFASIWN DA',
			tag: 'hwbffasiwnda'
		},
		{
			title: 'MACHYNLLETH YOUTH CLUB',
			tag: 'machynlleth-youth-club'
		},
		{
			title: 'DYFI FILM YSGOL',
			tag: 'dyfifilmysgol'
		},
		{
			title: 'POWYS LOCALITIES INITIATIVE',
			tag: 'powyslocalitiesinitiative'
		},
	]
</script>

<div
	class="absolute left-0 z-10 mt-2 w-56 origin-top-right bg-white ring-1 ring-black focus:outline-none divide-y divide-gray-100"
	role="menu"
	aria-orientation="vertical"
	aria-labelledby="menu-button"
	tabindex="-1"
>
	<div class="py-1" role="none">
		<div
			on:click={toggleExtra}
			id="live"
			class="cursor-pointer hover:underline block px-4 py-2 text-sm"
		>
			CURRENT
		</div>
		{#if option === 'live'}
			<SubDropdown items={liveProjs} hideFunc={hideFunc} />
		{/if}
		<div
			on:click={toggleExtra}
			id="arch"
			class="cursor-pointer hover:underline block px-4 py-2 text-sm"
		>
			ARCHIVE
		</div>
		{#if option === 'arch'}
			<SubDropdown items={archProjs} hideFunc={hideFunc} />
		{/if}
	</div>
</div>
