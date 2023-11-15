<script>
	export let article;
</script>

<div class="flex flex-col gap-3 relative w-full px-5 sm:px-20 md:px-32 lg:px-56 xl:px-80">
    <div class="w-full h-full">
        <img class="object-scale-down w-full" src={article.feature_image} alt="feature" />
    </div>
    <div class="flex flex-col gap-3 w-full">
        <!-- <div class="text-3xl">{article.title}</div> -->
        <div class="flex flex-col gap-y-3">{@html article.html}</div>
    </div>
</div>
