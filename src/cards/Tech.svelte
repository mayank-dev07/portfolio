<script>
	import Saos from 'saos';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	let techs = [
		{
			name: 'Frontend',
			image:"/assests/frontend.webp",
			about:
				'I enjoy creating visually appealing and user-friendly interfaces, bringing ideas to life in the browser',
			tech: ['ANGULAR JS', 'REACT JS', 'NEXT JS', 'SVELTE JS', 'TAILWIND CSS']
		},
		{
			name: 'Backend',
			image:"/assests/backend.webp",
			about:
				'I enjoy solving complex problems through robust and scalable server-side solutions ensuring efficiency and accuracy.',
			tech: ['NODE JS', 'EXPRESS JS', 'MONGO DB']
		},
		{
			name: 'DevOps',
			image:"/assests/devops.webp",
			about:
				'I prioritize quick product development and streamlined maintenance for existing deployments.',
			tech: ['GIT', 'APACHE']
		}
	];
</script>

<section class="flex flex-col md:flex-row w-full gap-8 justify-evenly items-center">
	{#each techs as tech}
		<div
			class="w-full w-10/12 md:w-8/12 lg:w-1/2 xl:w-1/3 h-full bg-slate-800 rounded-xl px-2 md:px-8 py-10 shadow-md shadow-gray-900"
		>
			<div class="w-full flex flex-col justify-center items-center pb-3">
				<img src={tech.image} alt="tech_image" >
				<p class="text-3xl font-semibold text-secondary underline mt-5">{tech.name}</p>
			</div>

			<p class="text-center text-secondary-text md:min-h-[170px] lg:min-h-[120px] xl:min-h-[75px] md:px-0 px-8">
				{tech.about}
			</p>
			<div class="w-full text-center py-4">
				<p class="text-2xl font-semibold text-secondary">Technologies</p>
			</div>

			<div class="w-full flex flex-wrap justify-center items-center gap-2 md:gap-4">
				{#each tech.tech as t}
					<button
						class="border-[1px] border-border px-4 py-2 rounded-xl min-w-[130px] shadow-lg shadow-shadow text-primary-button text-base capitalize"
						>{t}</button
					>
				{/each}
			</div>
		</div>
	{/each}
</section>

<style>
	
</style>
