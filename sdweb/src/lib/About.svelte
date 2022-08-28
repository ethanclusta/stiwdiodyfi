<script>
	import Lottery from '$lib/assets/partners/Lottery.png';
	import MTC from '$lib/assets/partners/MachCouncil.png';
	import PAVO from '$lib/assets/partners/PAVO.png';
	import Powys from '$lib/assets/partners/PowysCouncil.png';
	import UKGov from '$lib/assets/partners/UKGov.png';
	import Vis from '$lib/assets/partners/VisImpact.png';
	import Vid from '$lib/assets/partners/Videndum.png';

	import { db } from '../config/firebase';
	import { doc, setDoc } from 'firebase/firestore';

	export let email = '';

	let loading = false;
	let success = false;

	const add = async () => {
		loading = true;
		await setDoc(doc(db, 'signups', email), {
			email: email,
			source: 'Stiwdio Dyfi',
			createDate: Date.now()
		}).then(() => {
			loading = false;
			success = true;
		});
	};

	const subscribe = () => {
		if (email.length > 0 && email.length < 50) {
			add();
		}
	};
</script>

<div class="px-5 flex flex-col lg:flex-row gap-3">
	<div class="bg-gray-100 p-3 w-full lg:w-1/2 flex flex-col gap-y-3 text-sm">
		<h1 class="text-[#D32D7D] font-bold text-3xl">About</h1>
		<p class="text-base font-semibold">
			Stiwdio Dyfi is a studio collective based in the the Dyfi area in mid-Wales.
		</p>
		<p>
			We are artists, writers, community workers, entrepreneurs, organisers, environmentalists,
			farmers, academics, craftspeople, engineers and much much more.
		</p>
		<p>
			We are a community interest company and are run by local people for the benefit of local
			people.
		</p>
		<p>How do I get involved?</p>
		<p>
			<span class="text-base font-semibold">Participate</span><br />
			Come to our events, workshops and tune into our online channels.
		</p>
		<p>
			<span class="text-base font-semibold">Volunteer</span><br />
			Get stuck in, meet new people, make new friends and learn new skills.
		</p>
		<p>
			<span class="text-base font-semibold">Work</span><br />
			Get paid to be a workshop leader, events organiser or facility/project manager + more
		</p>
		<p>
			<span class="text-base font-semibold">Join</span><br />
			As a member: Members play an important role in making sure the local communities are able to influence
			and help our directors make the right decisions. Members will be invited to our quarterly steering
			committee meetings.
		</p>
	</div>
	<div class="w-full lg:w-1/2 flex flex-col gap-y-3 text-sm">
		<div class="bg-gray-100 p-3 w-full flex flex-col gap-y-3">
			<h1 class="text-[#D32D7D] font-bold text-3xl">Connect with us</h1>
			<p>See our launch publication here.</p>
			<p>
				Find our stall at Machynlleth Market every Wednesday to pick up a flyer for the next 7 days.
				Hopefully we will see you there!
			</p>
			<p>Sign up for weekly updates here:</p>
			{#if !success}
				<div class="flex">
					<input
						type="text"
						bind:value={email}
						placeholder="Your email"
						class="p-2 border w-2/3 lg:w-1/2 outline-none rounded-l-md border-[#D32D7D]"
					/>
					{#if !loading}
						<button on:click={subscribe} class="bg-[#D32D7D] text-white rounded-r-md p-2"
							>Subscribe</button
						>
					{:else}
						<button class="bg-[#D32D7D] text-white rounded-r-md p-2">loading...</button>
					{/if}
				</div>
			{:else}
				<div>
					<span class="p-2 bg-[#D32D7D] text-white rounded-md">You're subscribed, thanks!</span>
				</div>
			{/if}
		</div>
		<div class="bg-gray-100 p-3 w-full flex flex-col gap-y-3">
			<h1 class="text-[#D32D7D] font-bold text-3xl">Our partners</h1>
			<p>Stiwdio Dyfi has received funding and support from the following:</p>
			<div class="flex flex-col md:flex-row lg:flex-col xl:flex-row flex-wrap gap-2 mt-2">
				<div class="flex gap-2">
					<div class="flex place-content-center h-16">
						<img class="h-full" alt="Lottery" src={UKGov} />
					</div>
					<div class="flex h-16">
						<img class="h-full" alt="Lottery" src={Powys} />
					</div>
				</div>
				<div class="flex gap-2">
					<div class="flex h-16 place-content-center">
						<img class="h-full" alt="Lottery" src={Lottery} />
					</div>
					<div class="flex place-content-center h-16">
						<img class="h-full" alt="Lottery" src={MTC} />
					</div>
					<div class="flex place-content-center h-16">
						<img class="h-full" alt="Lottery" src={PAVO} />
					</div>
				</div>
				<div class="flex gap-2">
					<div class="flex place-content-center h-16">
						<img class="h-full" alt="Lottery" src={Vis} />
					</div>
					<div class="flex h-16">
						<img class="h-full" alt="Lottery" src={Vid} />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
