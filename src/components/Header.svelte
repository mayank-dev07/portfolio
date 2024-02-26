<script>
	export let y;

	let tabs = [
		{ name: 'Projects', link: '#project' },
		{ name: 'About', link: '#about' }
	];
</script>

<div
	class={'fixed z-10 w-full h-16 text-white flex justify-between items-center px-4 md:px-16 ' +
		(y > 0 ? 'bg-transparent backdrop-blur-md border-b-[1px] border-slate-700' : 'bg-transparent')}
>
	<div>
		<p class="text-lg font-sans uppercase font-bold">user name;!</p>
	</div>
	<div class="flex">
		{#each tabs as tab, index}
			<a
				href={tab.link}
				class="hover:text-indigo-300 group transition-all duration-300 ease-in-out"
			>
				<p
					class="mx-3 bg-left-bottom bg-gradient-to-r from-indigo-300 to-indigo-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-600 ease-out"
				>
					{tab.name}
				</p>
			</a>
		{/each}
	</div>
</div>
