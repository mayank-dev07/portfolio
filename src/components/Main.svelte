<script>
	import { onMount } from 'svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import { inview } from 'svelte-inview';
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Intro from './Intro.svelte';

	export let sections = [];
	export let activeSection;

	const handleEnter = (id) => {
		activeSection = id;
	};

	let type = 'Frontend';

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

<main class="flex flex-1 flex-col justify-center items-center tracking-wider w-full">
	{#each sections as { id }}
		<section {id} use:inview on:enter={() => handleEnter(id)}>
			{#if id == 'home'}
				<Intro />
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
