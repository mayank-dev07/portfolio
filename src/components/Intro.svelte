<script>
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import Icon from '@iconify/svelte';
</script>

<section
	class="grid grid-cols-1 lg:grid-cols-2 px-6 gap-12 min-h-[calc(100vh-80px)] mt-[64px] lg:mt-[80px]"
>
	<div class="flex flex-col justify-center items-center text-center gap-4 font-semi-bold">
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

		<span class="text-base md:text-lg md:mt-8 md:px-10 text-border"
			>My favourite tech includes Javascript (ReactJS, NextJs, SvelteJs and AngularJs),TailwindCSS ,
			Bootstrap, Firebase/Firestore</span
		>
		<a href={`#contact`}>
			<button
				class="uppercase border-[1px] border-border px-4 py-2 rounded-full text-secondary mt-8 hover:scale-110 hover:shadow-lg hover:shadow-shadow"
				><div class="flex justify-center items-center gap-4">
					<p>connect with me</p>
					<Icon icon="mage:message-dots-round" class="text-2xl hover:scale-150" />
				</div></button
			>
		</a>
	</div>
	<div class="!w-full !h-full hidden lg:flex items-center z-[-1]">
		<div class="flex flex-col lg:justify-center text-center gap-8 !w-full !h-3/5 items-center">
			<Canvas>
				<Scene />
			</Canvas>
		</div>
	</div>
</section>
