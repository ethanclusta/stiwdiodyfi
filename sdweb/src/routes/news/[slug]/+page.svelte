<script>
	import Article from '../../../lib/Article.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Article article={data} />