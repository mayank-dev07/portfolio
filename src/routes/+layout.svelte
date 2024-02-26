<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	let y;
	let innerHeight = 0;
</script>

<div class="w-full min-h-screen flex flex-col">
	<div class="h-16">
		<Header {y} />
	</div>
	<slot />
	<Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight />
