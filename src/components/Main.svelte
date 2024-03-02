<script>
	import { onMount } from 'svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';

	let type =
		'My favourite tech includes Javascript (ReactJS, NextJs, SvelteJs and AngularJs),TailwindCSS , Bootstrap, Firebase/Firestore';

	let typedChar = '';
	let index = 0;
	let typewriter;

	const typeChar = () => {
		if (index < type.length) {
			typedChar = typedChar + type[index];
			index++;
		} else {
			clearInterval(typewriter);
		}
	};

	const typing = () => {
		typewriter = setInterval(typeChar, 40);
	};

	onMount(() => {
		typing();
	});
</script>

<main class="flex flex-1 flex-col justify-center items-center tracking-wider gap-10">
	<section class="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-[calc(100vh-80px)] px-6 mt-[80px]">
		<div class="flex flex-col justify-center text-center gap-4 font-semi-bold">
			<div class="text-3xl md:text-5xl gap-3 flex flex-col">
				<div>
					<span>
						Hi! I am <span class="text-secondary">Mayank</span>
						<span>Dev</span>
					</span>
				</div>
				<div>
					<!-- <br /> -->
					<span
						><span class="text-secondary">Frontend</span>
						Developer</span
					>
				</div>
			</div>

			<span class="text-base md:text-lg md:mt-8 md:px-10 text-border">{typedChar}</span>
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

	<Skills />

	<Projects />
</main>

<!-- <style>
	h1 {
		font-size: 2.3rem;
	}
	.cursor {
		display: inline-block;
		width: 8px;
		height: 1.8rem;
		background: red;
		animation: blink 0.8s infinite;
	}

	@keyframes blink {
		0% {
			background: transparent;
		}

		to {
			background: transparent;
		}
	}
</style> -->
