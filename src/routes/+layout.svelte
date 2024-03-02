<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import { loadSlim } from '@tsparticles/slim';

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
		<Header {y} />
	</div>
	<div class="h-full z-20">
		<slot />
	</div>
	<Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight />
