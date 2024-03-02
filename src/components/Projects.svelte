<script>
	import Cards from '../cards/Cards.svelte';
</script>

<section class=" w-full flex flex-col justify-center items-center h-max">
	<div class="flex flex-col w-full justify-center items-center">
		<div class="w-full grid justify-items-end py-6">
			<!-- <hr class="border-2 border-indigo-300 w-1/2" /> -->
		</div>
		<div>
			<span
				class="bg-gradient-to-r from-secondary-left to-indigo-700 text-transparent bg-clip-text text-5xl uppercase"
			>
				<span> &lt;&nbsp;</span> Projects <span>&nbsp;/&gt;</span>
			</span>
		</div>
		<div class="w-full grid justify-items-start py-6">
			<!-- <hr class="border-2 border-indigo-300 w-1/2" /> -->
		</div>
	</div>
	<div class="grid justify-items-center w-full px-8 w-11/12 lg:w-8/12 h-min">
		<Cards />
	</div>
</section>
