<script>
	import ListPerson from '../../lib/ListPerson.svelte';
	import Pagination from '../../lib/Pagination.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
    const posts = data.posts
	const pag = data.meta.pagination
	const numPage = Number(pag.page)
	const numPages = Number(pag.pages)
</script>

<div class="py-0 mb-5">
	<div class="text-4xl md:text-6xl font-bold text-white bg-black xl:px-16 py-1 text-center">
		ADVISORY PANEL
	</div>
</div>
<div class="px-6 sm:px-12 lg:px-20 xl:px-24 flex flex-col gap-5 mb-5">
	{#each posts as item (item.id)}
		<ListPerson item={item} />
	{/each}
	<Pagination pageCount={numPages} curPage={numPage} />
</div>