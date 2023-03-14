<script>
	import '../app.css';
	import Nav from '../lib/Nav.svelte';
	import Logo from '$lib/assets/LOGOS8.png';
</script>

<body class="bg-white">
	<div class="relative h-full w-full mb-12">
		<div class="p-4 pb-8">
			<div class="bg-white w-full flex flex-col gap-y-5">
				<Nav />
				<slot />
			</div>
		</div>
		<div class="absolute bottom-2 right-2 text-sm text-white text-right">
			Website made by <a href="https://clusta.live" class="underline" target="_blank">Clusta.</a>
		</div>
	</div>
	<div class="w-full flex flex-col-reverse md:flex-row p-5 justify-between bg-black">
		<div class="w-full md:w-1/2 flex flex-col place-content-center gap-y-3 mt-5 md:mt-0">
			<img class="object-contain w-1/3" src={Logo} alt="Stiwdio Dyfi" />
			<div class="text-white text-sm px-3">
				<div>Stiwdio Dyfi CIC</div>
				<div>Company No 13843739 registered in England and Wales</div>
				<div>205 Y Plas Aberystwyth Road Machynlleth Powys SY20 8ER United Kingdom</div>
				<div>stiwdiodyfi@gmail.com</div>
			</div>
		</div>
		<!-- Begin Mailchimp Signup Form -->
		<style type="text/css">
			#mc_embed_signup {
				clear: left;
				width: 100%;
			}
			/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
		</style>
		<div class="w-full md:w-1/2 flex flex-col gap-y-1 align-right">
			<div class="text-white text-xl font-bold">SIGN UP TO OUR NEWSLETTER</div>
			<div class="text-white border border-white" id="mc_embed_signup">
				<form
					action="https://mac.us14.list-manage.com/subscribe/post?u=c288709774c96731a04d21fa6&amp;id=9bbf480d78&amp;f_id=00ea71e3f0"
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					class="validate p-5"
					target="_blank"
					novalidate
				>
					<div class="flex flex-col gap-y-4" id="mc_embed_signup_scroll">
						<div class="indicates-required w-full text-right text-sm"><span class="asterisk text-red-500">*</span> indicates required</div>
						<div class="mc-field-group flex flex-col">
							<label for="mce-EMAIL">Email Address <span class="asterisk text-red-500">*</span> </label>
							<input
								type="email"
								value=""
								name="EMAIL"
								class="required email text-black p-2"
								id="mce-EMAIL"
								required
							/>
							<!-- <span id="mce-EMAIL-HELPERTEXT" class="helper_text" /> -->
						</div>
						<div id="mce-responses">
							<div class="response" id="mce-error-response" style="display:none" />
							<div id="mce-success-response" style="display:none" />
						</div>
						<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
						<div style="position: absolute; left: -5000px;" aria-hidden="true">
							<input
								type="text"
								name="b_c288709774c96731a04d21fa6_9bbf480d78"
								tabindex="-1"
								value=""
							/>
						</div>
						<div class="optionalParent">
							<div class="clear foot">
								<input
									type="submit"
									value="Subscribe"
									name="subscribe"
									id="mc-embedded-subscribe"
									class="button border border-white cursor-pointer hover:bg-white hover:text-black py-2 px-4 transition-all -mt-2"
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<script
			type="text/javascript"
			src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script
			type="text/javascript">
			(function ($) {
				window.fnames = new Array();
				window.ftypes = new Array();
				fnames[0] = 'EMAIL';
				ftypes[0] = 'email';
				fnames[1] = 'FNAME';
				ftypes[1] = 'text';
				fnames[2] = 'LNAME';
				ftypes[2] = 'text';
				fnames[5] = 'BIRTHDAY';
				ftypes[5] = 'birthday';
				fnames[3] = 'MMERGE3';
				ftypes[3] = 'text';
				fnames[4] = 'AGE';
				ftypes[4] = 'radio';
				fnames[6] = 'ADDRESS';
				ftypes[6] = 'address';
			})(jQuery);
			var $mcj = jQuery.noConflict(true);
		</script>
		<!--End mc_embed_signup-->
	</div>
</body>
