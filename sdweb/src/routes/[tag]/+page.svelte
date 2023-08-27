<script>
	import List from '../../lib/List.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

    const tagData = data.posts[0].tags[0]
    const titleName = tagData.name;
</script>

<List data={data.posts} title={titleName} />