<script>
	import Cards from '../cards/Cards.svelte';
</script>

<section class="h-full w-full pt-32 flex flex-col justify-center items-center">
	<div class="flex flex-col w-full justify-center items-center">
		<div class="w-full grid justify-items-end py-6">
			<hr class="border-2 border-indigo-300 w-1/2" />
		</div>
		<div>
			<span
				class="bg-gradient-to-r from-indigo-400 to-indigo-700 text-transparent bg-clip-text text-5xl uppercase"
			>
				lorem
			</span>
		</div>
		<div class="w-full grid justify-items-start py-6">
			<hr class="border-2 border-indigo-300 w-1/2" />
		</div>
	</div>
	<div
		class="grid grid-rows-3 justify-items-center divide-y-2 divide-indigo-300 w-full px-8 w-11/12 md:w-8/12"
	>
		<Cards />
	</div>
</section>
