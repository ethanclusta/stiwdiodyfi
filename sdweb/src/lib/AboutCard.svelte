<script>
    export let text;
    export let navTo;
    let hover = false;
    const noHover = "bg-black border-2 border-black cursor-pointer text-white font-bold text-2xl text-center w-full lg:w-1/2 p-12";
    const yesHover = "bg-white border-2 border-black cursor-pointer text-black font-bold text-2xl text-center w-full lg:w-1/2 p-12"

    const onHover = () => {
        hover = !hover;
    }
</script>

<a href={navTo} on:mouseenter={onHover} on:mouseleave={onHover} class={hover ? yesHover : noHover}>
    {text}
</a>