<script>
	import Tech from '../cards/Tech.svelte';
</script>

<section
	class="h-max mt-[64px] md:mt-[80px] flex flex-col w-full justify-center items-center gap-10"
>
	<div
		class="bg-gradient-to-r from-secondary-left to-indigo-700 text-transparent bg-clip-text text-4xl md:text-5xl uppercase"
	>
		<span>&lt;&nbsp;&nbsp;Skills&nbsp;&nbsp;/&gt;</span>
	</div>

	<div class="text-center w-11/12 md:w-6/12 md:py-8">
		<p class="text-base text-primary-text">
			In this ever-evolving and dynamic landscape of work and technology, having a diverse skill set
			is paramount. My journey has been marked by a commitment to continuous learning and the
			cultivation of various competencies that allow me to thrive in diverse environments and
			contribute meaningfully to projects.
		</p>
	</div>

	<div class="flex justify-items-center w-full px-4 md:px-12">
		<Tech />
	</div>
</section>

<style>
</style>
