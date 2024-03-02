<script>
	import Cards from '../cards/Cards.svelte';
</script>

<section class=" w-full flex flex-col justify-center items-center h-max mt-[64px] md:mt-[80px]">
	<div class="flex flex-col w-full justify-center items-center">
		<div>
			<span
				class="bg-gradient-to-r from-secondary-left to-indigo-700 text-transparent bg-clip-text text-4xl md:text-5xl uppercase"
			>
				<span> &lt;&nbsp;&nbsp;Projects&nbsp;&nbsp;/&gt;</span>
			</span>
		</div>
	</div>
	<div class="grid justify-items-center w-full px-8 w-11/12 lg:w-8/12 h-min">
		<Cards />
	</div>
</section>
