<script>
	import ListPerson from '../../lib/ListPerson.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
    data = data.posts
    data = data.reverse()
</script>

<div class="py-0">
	<div class="text-4xl md:text-6xl font-bold text-white bg-black xl:px-16 py-1 text-center">
		OUR TEAM
	</div>
</div>
<div class="px-6 sm:px-12 lg:px-20 xl:px-24 flex flex-col gap-5 mb-5">
	{#each data as item (item.id)}
		<ListPerson item={item} />
	{/each}
</div>
