<script>
	import { onMount } from 'svelte';
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
			content = 'survey';
		}
		return;
	};

	onMount(() => {
		modal = true;
		content = 'survey';
	});
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
					Hwb Ffasiwn Da present the Sioe Calan Gaeaf. Dyfi's first industry event for fashion. The
					aim of the show is to bring together the many talented textiles industry workers in the
					Dyfi for a single evening of serious fashion fun.
				</p>
				<p class="font-bold">Sioe Calan Gaeaf: Thu 27th Oct</p>
				<p class="font-bold">Vane Tempest Room, Y Plas, Machynlleth, SY208ER</p>
				<p class="italic">
					'Invitation Only' event (enquiries stiwdiodyfi@gmail.com) (a video recording of the show
					will be made available on Youtube following the event)
				</p>
				<!-- <p>
					The issue is too big for any individual to fix alone, the only solution is a collective
					one. This is the driving mentality behind Hwb Ffasiwn Da, a community-driven fashion
					project based in Machynlleth, Wales. The hwb is about developing a local textiles industry
					where collective working is the game and collaborations are the style. This Calan Geaf is
					the hwb's first attempt at a runway show so make sure to check it out!
				</p> -->
				<!-- <div class="flex place-content-center">
					<a
						class="bg-teal-600 text-white w-fit text-center p-3"
						href="https://us14.list-manage.com/survey?u=c288709774c96731a04d21fa6&id=191e3d522e&e=0e0db13506"
						target="_blank"
					>
						Sign up for Hwb Ffasiwn Da's workshops
					</a>
				</div> -->
			{:else if content === 'dx3'}
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
					Digidol Dyfi Digital or DX3 for short is an internet radio and TV station based in the
					Dyfi Biosphere, southern Snowdonia. It has grown out of the work of numerous individuals
					who have come together under the banner of DX3 to facilitate an audience facing outlet for
					audio visual artists in the Dyfi. To make the project accessible to all DX3 runs digital
					skills workshops and has an arsenal or camera, audio and computing equipment power that
					anyone can use once inducted by experienced practitioners. Stay tuned for the DX3 label on
					Bandcamp launching this Calan Geaf.
				</p>
				<p>Website coming soon...</p>
			{:else}
				<div
					class="bg-[#D32D7D] w-full h-full flex flex-col gap-2 p-6 text-sm lg:text-base text-white"
				>
					<h1 class="text-center font-bold text-xl lg:text-xl">
						Be in the draw to win 4 x cinema tickets with complimentary drinks + a £25 gift voucher
						to Dyfi Wholefoods.
					</h1>
					<h1 class="text-center font-bold text-xl lg:text-xl">
						Bod yn yr cystadleuaeth i ennill 4 x tocunnau sinema hefo diodydd + tocyn anrheg i Dyfi
						Wholewoods gweth £25.
					</h1>
					<p class="text-center ">We'd welcome your thoughts on local arts provision</p>
					<p class="text-center ">Byddwn yn croesawu eich barn ar meddyliau ar celf lleol</p>
					<div class="flex place-content-center">
						<a
							href="https://us14.list-manage.com/survey?u=c288709774c96731a04d21fa6&id=5a087b5638&attribution=false"
							target="_blank"
							class="p-3 bg-zinc-100 text-black font-bold">Complete our survey</a
						>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
