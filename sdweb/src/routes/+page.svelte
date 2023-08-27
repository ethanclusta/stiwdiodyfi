<script>
	import List from '../lib/List.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<List data={data.posts} title={'LATEST NEWS'} />
