<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import { loadSlim } from '@tsparticles/slim';
	import Main from '../components/Main.svelte';

	let sections = [
		{ name: 'Home', link: '#project', id: 'home' },
		{ name: 'Skills', link: '#about', id: 'skills' },
		{ name: 'Projects', link: '#project', id: 'projects' },
		{ name: 'About', link: '#about', id: 'about' }
	];

	let activeSectionId = sections[0].id;

	let ParticlesComponent;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});

	let particlesConfig = {
		particles: {
			color: {
				value: '#06591e'
			},
			links: {
				enable: true,
				color: '#06591e'
			},
			move: {
				enable: true
			},
			number: {
				value: 100
			}
		}
	};

	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});

	let y;
	let innerHeight = 0;
</script>

<svelte:component this={ParticlesComponent} id="tsparticles" options={particlesConfig} />

<div class="w-full flex flex-col bg-primary">
	<div class="z-50">
		<Header {y} {sections} bind:activeSection={activeSectionId} />
	</div>
	<div class="h-full z-20">
		<Main {sections} {activeSectionId} />
	</div>
	<Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight />
