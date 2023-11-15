<script>
	import List from '../lib/List.svelte';
	import Pagination from '../lib/Pagination.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const pag = data.meta.pagination
	const numPage = Number(pag.page)
	const numPages = Number(pag.pages)
</script>

<List data={data.posts} title={'LATEST NEWS'} />
<Pagination pageCount={numPages} curPage={numPage} />
