<script>
	export let y;

	let tabs = [
		{ name: 'Home', link: '#project' },
		{ name: 'Skills', link: '#about' },
		{ name: 'Projects', link: '#project' },
		{ name: 'About', link: '#about' }
	];
</script>

<div
	class={'fixed z-10 w-full h-20 text-white flex justify-between items-center px-4 md:px-16 ' +
		(y > 0 ? 'bg-transparent backdrop-blur-md border-b-[1px] border-border-bottom' : 'bg-primary')}
>
	<!-- <div>
		<p class="text-lg font-sans uppercase font-bold tracking-wider">Mayank dev</p>
	</div> -->
	<span class="text-3xl text-secondary">&lt;&nbsp;</span>
	<div class="md:gap-10 hidden md:flex">
		{#each tabs as tab, index}
			<span
				class="hover:text-secondary group transition-all duration-300 ease-in-out cursor-pointer text-secondary text-lg"
			>
				<p
					class="mx-3 bg-left-bottom bg-gradient-to-r from-border to-border bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-600 ease-out"
				>
					{tab.name}
				</p>
			</span>
		{/each}
	</div>

	<span class="text-3xl text-secondary">&nbsp;/&gt;</span>
</div>
