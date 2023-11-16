<script>
	import List from '../../lib/List.svelte';
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

	const urlPath = $page.url.pathname.slice(1);

    const tagData = data.posts[0].tags
	const titleTag = tagData.filter((tag) => tag.slug === urlPath)
    const titleName = titleTag[0].name
</script>

<List data={data.posts} title={titleName} />