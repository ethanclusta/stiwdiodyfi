<script>
    export let item;
    const date = new Date(item.created_at);
	const dateTimeFormat = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	const displayDate = dateTimeFormat.format(date);
</script>

<a href="/news/{item.id}" class="flex flex-col lg:flex-row gap-3 relative w-full p-5 no-underline">
    <div class="relative w-full lg:w-1/2 flex place-content-center">
        <img class="aspect-video object-cover max-h-72" src={item.feature_image} alt="feature" />
    </div>
    <div class="flex flex-col gap-3 w-full lg:w-1/2 justify-center">
        <!-- <div class="text-sm">{displayDate}</div> -->
        <h1 class="text-3xl">{item.title}</h1>
        <div class="text-sm text-gray-700">{displayDate}</div>
        <div class="overflow-hidden">{item.excerpt}...<span class="font-bold underline">read more</span></div>
    </div>
</a>