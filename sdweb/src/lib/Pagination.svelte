<script>
	export let curPage;
	export let pageCount;
	import { page } from '$app/stores';

	const pagesLength = (pgCount) => {
		const resultArray = Array.from({ length: pgCount }, (_, index) => index + 1);
		return resultArray;
	};

	const arrayOfPages = pagesLength(pageCount);

	const selectedStyle = 'font-bold border border-black p-2';
	const normalStyle = 'font-regular p-2';

	const curPath = $page.url.pathname;
</script>

<div class="flex flex-row gap-1 w-full place-content-center">
	{#each arrayOfPages as page (page)}
		<a href={`${curPath}?page=${page}`} class={page === curPage ? selectedStyle : normalStyle}>
			{page}
        </a>
	{/each}
</div>
