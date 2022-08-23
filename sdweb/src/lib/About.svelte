<script>
	import Lottery from '$lib/assets/partners/Lottery.png';
	import MTC from '$lib/assets/partners/MachCouncil.png';
	import PAVO from '$lib/assets/partners/PAVO.png';
	import Powys from '$lib/assets/partners/PowysCouncil.png';
	import UKGov from '$lib/assets/partners/UKGov.png';
</script>

<div class="px-5 flex flex-col lg:flex-row gap-3">
	<div class="bg-gray-100 p-3 w-full lg:w-1/2 flex flex-col gap-y-3 text-sm">
		<h1 class="text-[#D32D7D] font-bold text-3xl">About</h1>
		<p class="text-lg font-semibold">
			Stiwdio Dyfi represents the first small steps in a large ambition: to instigate and sustain a
			film and media industry in the Dyfi Biosphere.
		</p>
		<p>
			Stiwdio Dyfi CIC is a regeneration project operating within the UNESCO Dyfi Biosphere area in
			Mid-West Wales, with a studio facility at Y Plas, Machynlleth.
		</p>
		<p>
			We have an ethos of inclusion, accessibility and sustainability outlined in our CIC36
			manifesto.
		</p>
		<p>
			Stiwdio Dyfi was set up to give the local economy a boost through providing cultural spaces
			and outlets that complement existing infrastructure and enterprise.
		</p>
		<p>
			Our aim is to initiate and facilitate creative spaces and outlets to enhance creative economy
			opportunity in the Dyfi Biosphere.
		</p>
		<p>
			William Tremlett is the Project Manager and you can contact him here: stiwdiodyfi@gmail.com
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
			<div class="flex">
				<input
					type="text"
					placeholder="Your email"
					class="p-2 border w-2/3 lg:w-1/2 outline-none rounded-l-md border-[#D32D7D]"
				/>
				<button class="bg-[#D32D7D] text-white rounded-r-md p-2">Subscribe</button>
			</div>
		</div>
		<div class="bg-gray-100 p-3 w-full flex flex-col gap-y-3">
			<h1 class="text-[#D32D7D] font-bold text-3xl">Our partners</h1>
			<p>Stiwdio Dyfi has received funding and support from the following:</p>
			<div class="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-2 mt-2">
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
						<img class="h-full" alt="Lottery" src={UKGov} />
					</div>
					<div class="flex h-16">
						<img class="h-full" alt="Lottery" src={Powys} />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
