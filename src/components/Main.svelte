<script>
	import Projects from './Projects.svelte';
</script>

<main class="flex flex-1 flex-col justify-center items-center">
	<section class="grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-[calc(100vh-62px)]">
		<div class="flex flex-col justify-center text-center gap-4 font-semi-bold">
			<span class="text-4xl md:text-5xl">
				<span>
					Lorem ipsum dolor <span class="text-indigo-300">Lorem, ipsum.</span>
				</span>
				<br />
				<span
					><span class="text-indigo-300"> Lorem.</span>
					Lorem, ipsum.</span
				>
			</span>

			<span class="text-xl mt-8"
				>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, provident</span
			>
		</div>
		<div class="flex flex-col lg:justify-center text-center gap-8">
			<span>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis nam accusantium
				fugit delectus omnis in similique consequatur, laudantium iste, vel non earum magni, itaque
				culpa ex totam consequuntur tempora?
				<span>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium itaque officia
					fugiat sit, vel nisi doloribus debitis suscipit sed nesciunt, nulla mollitia quia magni
					voluptatibus dolore labore minus, consectetur obcaecati!
				</span>
			</span>
		</div>
	</section>

	<Projects />
</main>
