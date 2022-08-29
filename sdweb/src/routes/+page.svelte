<script>
	import About from '../lib/About.svelte';
	import Cards from '../lib/Cards.svelte';
	import Hero from '../lib/Hero.svelte';

	let modal = false;

    const toggleModal = () => {
        modal = !modal;
        return;
    };
</script>

<Hero />
<Cards on:click={toggleModal} />
<About />
{#if modal}
	<div on:click={toggleModal} class="fixed top-0 left-0 h-screen w-full bg-black/50 p-8 lg:p-32 flex place-content-center">
		<div class="bg-zinc-100 flex flex-col gap-2 p-6 h-fit">
			<h1 class="font-beb text-5xl text-center text-teal-600">HWB FFASIWN DA</h1>
			<p>
				The fast fashion industry is amongst the second biggest manufacturing polluter with one
				cotton T Shirt using 2,700 litres of water to make, and run off chemicals from factories
				having devastating impact on human and none human life. What makes this worse is that the
				this is happening in some of the poorest parts of the world with little or no support for
				those effected by the pollution.
			</p>
			<p>
				The issue is too big for any individual to fix, the only solution is a collective one. This
				is the driving mentality behind Hwb Ffasiwn Da which a community driven fashion project
				based in Machynlleth, Wales. The hwb is about developing a local textiles industry where
				collective working is the game and collaborations are the style. This Calan Geaf is the
				hwb's first attempt at a runway show so make sure to check it out!
			</p>
			<p>
				Keep up to date with Hwb Ffasiwn Da and find out more about getting involved by signing up
				to our weekly email newsletter below.
			</p>
		</div>
	</div>
{/if}
