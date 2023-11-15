<script>
	import brodyfi from '$lib/assets/partnerLogos/brodyfi.png';
	import Ceredigion from '$lib/assets/partnerLogos/Ceredigion.png';
	import Random from '$lib/assets/partnerLogos/download.jpeg';
	import GreenGoal from '$lib/assets/partnerLogos/GreenGoal.png';
	import LevellingUp from '$lib/assets/partnerLogos/LevellingUp.png';
	import lottery from '$lib/assets/partnerLogos/lottery.png';
	import Pavo from '$lib/assets/partnerLogos/Pavo.jpg';
	import Powys from '$lib/assets/partnerLogos/Powys.png';
	import UKGov from '$lib/assets/partnerLogos/UKG.jpg';

	const imgStyle = 'h-8 h-full';
</script>

<div class="relative px-2 flex flex-row bg-black">
    <!-- <div>
		<img class="h-53" src={GreenGoal} alt="Green Goal" />
	</div> -->
	<div>
		<div class="p-2 bg-white flex flex-row flex-wrap gap-1">
            <img class={imgStyle} src={Powys} alt="Powys Council" />
            <img class={imgStyle} src={Ceredigion} alt="Ceredigion Council" />
            <img class={imgStyle} src={LevellingUp} alt="UK Government Levelling Up" />
            <img class={imgStyle} src={Pavo} alt="Powys Association for Voluntary Organisations" />
            <img class={imgStyle} src={lottery} alt="National Lottery Community Fund" />
            <img class={imgStyle} src={UKGov} alt="UK Government" />
			<img class={imgStyle} src={brodyfi} alt="Bro Dyfi" />
			<img class={imgStyle} src={Random} alt="Funder" />
		</div>
	</div>
</div>
