<script>
import About from '../../lib/About.svelte';
	import AboutCard from '../../lib/AboutCard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>
<div class="py-0">
	<div class="text-4xl md:text-6xl font-bold text-white bg-black xl:px-16 py-1 text-center">{data.title}</div>
</div>

<About article={data} />

<div class="w-full flex flex-col lg:flex-row gap-3 px-5 sm:px-20 md:px-32 lg:px-56 xl:px-80 mt-3">
    <AboutCard text="OUR TEAM" navTo="/team" />
    <AboutCard text="ADVISORY PANEL" navTo="/advisory-panel" />
</div>