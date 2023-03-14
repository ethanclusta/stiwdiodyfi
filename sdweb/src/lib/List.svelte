<script>
	import ListItem from "./ListItem.svelte";

	export let data;
    export let title;
</script>

<div class="xl:px-12">
	<div class="text-6xl font-bold text-white bg-black p-1">{title}</div>
</div>
<div class="xl:px-12 flex flex-col gap-5 mb-5 divide-y divide-black">
	{#each data as item (item.id)}
		<ListItem item={item} />
	{/each}
</div>
