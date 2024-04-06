<script>
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import Icon from '@iconify/svelte';
</script>

<section
	class="grid grid-cols-1 lg:grid-cols-2 px-6 gap-12 min-h-[calc(100vh-80px)] mt-[64px] lg:mt-[80px]"
>
	<div class="flex flex-col justify-center items-center md:text-center gap-2 font-semi-bold">
		<div class="text-3xl md:text-5xl gap-2 flex flex-col">
			<div>
				<span class="break-keep	">
					Hi! I&nbsp;am&nbsp;<span class="text-secondary">Mayank&nbsp;</span><span>Dev&nbsp;and</span>
				</span>

			</div>
		</div>

		<span class="text-base md:text-lg md:mt-8 md:px-10 text-border">
			I have a deep-seated love for code design, relishing the intricate art of transforming substantial and multifaceted challenges into elegant, efficient code. I embrace the opportunity to create solutions that showcase the power of streamlined, well-structured code. Its my belief that the most impactful technology is born from the fusion of innovation and simplicity, and I strive to embody this philosophy in every line I write.
		</span>
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
