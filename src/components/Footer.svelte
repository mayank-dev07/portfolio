<script>
	import Icon from '@iconify/svelte';
</script>

<section class="w-full h-16 border-t-[1px] border-border-bottom flex justify-center items-center">
	<div class="w-10/12 flex flex-col md:flex-row justify-center md:justify-between items-center">
		<div class="capitalize text-sm text-secondary-text">
			@ made with love by <span class="text-border">&nbsp;&lt;&nbsp;mayank dev&nbsp;/&gt;</span>
		</div>
		<div class="flex gap-5 items-center">
			<Icon icon="mdi:linkedin" class="cursor-pointer text-2xl text-secondary" />
			<Icon icon="mdi:twitter" class="cursor-pointer text-2xl text-secondary" />
			<Icon icon="lets-icons:insta" class="cursor-pointer text-2xl text-secondary" />
			<Icon icon="mdi:github" class="cursor-pointer text-2xl text-secondary" />
		</div>
	</div>
</section>
