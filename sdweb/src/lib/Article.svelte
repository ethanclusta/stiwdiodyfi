<script>
	export let article;

	const date = new Date(article.created_at);
	const dateTimeFormat = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	const displayDate = dateTimeFormat.format(date);
</script>

<div class="flex flex-col gap-3 relative w-full px-5 sm:px-20 md:px-32 lg:px-56 xl:px-80">
    <div class="w-full h-full">
        <img class="object-scale-down" src={article.feature_image} alt="feature" />
    </div>
    <div class="flex flex-col gap-3 w-full">
        <div class="text-3xl">{article.title}</div>
        <div class="text-sm text-gray-700">{displayDate}</div>
        <div class="flex flex-col gap-y-3">{@html article.html}</div>
    </div>
</div>