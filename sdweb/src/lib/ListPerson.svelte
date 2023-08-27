<script>
    export let item;
</script>

<div class="flex flex-col lg:flex-row gap-3 md:gap-10 relative w-full p-5 place-content-center">
    <div class="relative flex place-content-center sm:w-2/3 md:w-1/2 xl:w-1/3 max-w-6xl">
        <img class="object-cover aspect-square" src={item.feature_image} alt="feature"/>
        <div class="absolute -top-5 -right-5 bg-black font-bold text-white p-3 text-4xl">{item.title}</div>
    </div>
    <div class="flex flex-col gap-3 w-full lg:w-1/2 justify-center">
        <div>{@html item.html}</div>
    </div>
</div>