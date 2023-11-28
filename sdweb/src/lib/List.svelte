<script>
	import ListItem from "./ListItem.svelte";

	export let data;
    export let title;
</script>

<div class="py-0">
	<h1 class="text-4xl md:text-6xl font-bold text-white bg-black xl:px-16 py-1 text-center">{title}</h1>
</div>
<div class="xl:px-12 flex flex-col gap-5 divide-y divide-black">
	{#each data as item (item.id)}
		<ListItem item={item} />
	{/each}
</div>
