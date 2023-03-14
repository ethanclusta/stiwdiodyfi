<script>
	import ListItem from "./ListItem.svelte";

	export let data;
    export let title;
</script>

<div class="xl:px-12 flex flex-col gap-5 my-5">
    <div class="text-6xl font-bold text-white bg-black">{title}</div>
	{#each data as item (item.id)}
		<ListItem item={item} />
	{/each}
</div>
