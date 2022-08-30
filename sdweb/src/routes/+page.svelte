<script>
	import About from '../lib/About.svelte';
	import Cards from '../lib/Cards.svelte';
	import Hero from '../lib/Hero.svelte';

	let modal = false;
	let content = '';

	const toggleModal = (e) => {
		console.log(e.target.id);
		modal = !modal;
		if (e.target.id === 'hwb' || e.target.id === 'dx3') {
			content = e.target.id;
		} else {
			content = '';
		}
		return;
	};
</script>

<Hero />
<Cards on:click={toggleModal} />
<About />
{#if modal}
	<div
		on:click={toggleModal}
		class="fixed top-0 left-0 h-screen w-full bg-black/50 p-8 lg:p-32 flex place-content-center"
	>
		<div class="bg-zinc-100 flex flex-col gap-2 p-6 h-fit text-sm lg:text-base">
			{#if content === 'hwb'}
				<h1 class="font-beb text-3xl lg:text-5xl text-center text-teal-600">HWB FFASIWN DA</h1>
				<p>
					The fast fashion industry is amongst the biggest manufacturing polluters in the world. One
					cotton T-shirt requires 2,700 litres of water to be made and run off chemicals from
					factories have a devastating impact on human and non-human life. What makes this worse is
					that the this is happening in some of the poorest parts of the world with little or no
					support for those affected by the pollution.
				</p>
				<p>
					The issue is too big for any individual to fix alone, the only solution is a collective
					one. This is the driving mentality behind Hwb Ffasiwn Da, a community-driven fashion
					project based in Machynlleth, Wales. The hwb is about developing a local textiles industry
					where collective working is the game and collaborations are the style. This Calan Geaf is
					the hwb's first attempt at a runway show so make sure to check it out!
				</p>
				<p>
					Keep up to date with Hwb Ffasiwn Da and find out more about getting involved by signing up
					to our weekly email newsletter below.
				</p>
			{:else}
				<h1
					class="text-center font-bold text-3xl lg:text-5xl bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
				>
					DX3
				</h1>
				<p>
					What does community a community broadcast station look like? Well in Wales it looks like
					dx3.cymru… 
				</p>
				<p>
					Digidol Dyfi Digital or DX3 for short is an internet radio and TV station based
					in the Dyfi Biosphere, southern Snowdonia. It has grown out of the work of numerous
					individuals who have come together under the banner of DX3 to facilitate an audience
					facing outlet for audio visual artists in the Dyfi. To make the project accessible to all
					DX3 runs digital skills workshops and has an arsenal or camera, audio and computing
					equipment power that anyone can use once inducted by experienced practitioners. Stay tuned
					for the DX3 label on Bandcamp launching this Calan Geaf.
				</p>
				<p>
					Website coming soon...
				</p>
			{/if}
		</div>
	</div>
{/if}
