<script>

    export let items;

</script>

<div class="mx-4 py-1 flex flex-col p-2 border-l border-black gap-y-1">
    {#each items as item}
    <a href="/{item.tag}" class="text-sm cursor-pointer hover:underline">{item.title}</a>
    {/each}
</div>