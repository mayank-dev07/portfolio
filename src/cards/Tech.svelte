<script>
	let techs = [
		{
			name: 'Frontend',
			about:
				'I enjoy creating visually appealing and user-friendly interfaces, bringing ideas to life in the browser',
			tech: ['Angular JS', 'React JS', 'Next JS', 'Svelte JS', 'Tailwind CSS']
		}
	];
</script>

<section class="flex flex-col w-full gap-10 justify-center items-center">
	{#each techs as tech}
		<div
			class="w-full md:w-8/12 lg:w-1/2 xl:w-1/3 h-full bg-slate-800 rounded-xl px-2 md:px-8 py-10 shadow-md shadow-gray-900"
		>
			<div class="w-full text-center pb-10">
				<p class="text-4xl font-semibold text-secondary">{tech.name}</p>
			</div>
			<p class="text-center text-secondary-text">
				{tech.about}
			</p>
			<div class="w-full text-center py-10">
				<p class="text-3xl font-semibold text-secondary">Technologies</p>
			</div>
			<div class="w-full flex flex-wrap justify-center items-center gap-2 md:gap-4">
				{#each tech.tech as t}
					<button
						class="border-[1px] border-border px-4 py-2 rounded-xl min-w-[130px] shadow-lg shadow-shadow text-primary-button"
						>{t}</button
					>
				{/each}
			</div>
		</div>
	{/each}
</section>
