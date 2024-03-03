<script>
	import { onMount } from 'svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';

	import { inview } from 'svelte-inview';
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	export let sections = [];

	export let activeSection;
	const handleEnter = (id) => (activeSection = id);

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

<main class="flex flex-1 flex-col justify-center items-center tracking-wider gap-10 w-full">
	{#each sections as { id }}
		<section {id} use:inview on:enter={() => handleEnter(id)}>
			{#if id == 'home'}
				<section
					class="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[calc(100vh-80px)] px-6 mt-[80px] container"
				>
					<div class="flex flex-col justify-center text-center gap-4 font-semi-bold">
						<div class="text-3xl md:text-5xl gap-3 flex flex-col">
							<div>
								<span>
									Hi! I am <span class="text-secondary">Mayank</span>
									<span>Dev</span>
								</span>
							</div>
							<div>
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
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis nam
							accusantium fugit delectus omnis in similique consequatur, laudantium iste, vel non
							earum magni, itaque culpa ex totam consequuntur tempora? Lorem ipsum, dolor sit amet
							consectetur adipisicing elit. Accusantium itaque officia fugiat sit, vel nisi
							doloribus debitis suscipit sed nesciunt, nulla mollitia quia magni voluptatibus dolore
							labore minus, consectetur obcaecati!
						</span>
					</div>
				</section>
			{/if}
			{#if id == 'skills'}
				<Skills />
			{/if}
			{#if id == 'projects'}
				<Projects />
			{/if}
			{#if id == 'about'}
				<About />
			{/if}
			{#if id == 'contact'}
				<Contact />
			{/if}
		</section>
	{/each}
</main>
