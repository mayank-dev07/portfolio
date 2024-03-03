<script>
	import Icon from '@iconify/svelte';
</script>

<section
	class="w-full h-16 border-t-[1px] border-border-bottom flex justify-center items-center z-40"
>
	<div class="w-10/12 flex flex-col md:flex-row justify-center md:justify-between items-center">
		<div class="capitalize text-sm text-secondary-text">
			@ made with love by <span class="text-border">&nbsp;&lt;&nbsp;mayank dev&nbsp;/&gt;</span>
		</div>
		<div class="flex gap-5 items-center">
			<a href="https://www.linkedin.com/in/mayank-dev-457162260/" target="_blank">
				<Icon icon="mdi:linkedin" class="cursor-pointer text-2xl text-secondary" />
			</a>
			<a href="https://twitter.com/dev_mayank10" target="_blank">
				<Icon icon="mdi:twitter" class="cursor-pointer text-2xl text-secondary" />
			</a>
			<a
				href="https://www.instagram.com/_dev_mayank_/?next=%2Faccounts%2Fpassword%2Freset%2Fconfirm%2F"
				target="_blank"
			>
				<Icon icon="lets-icons:insta" class="cursor-pointer text-2xl text-secondary" />
			</a>
			<a href="https://github.com/mayank-dev07" target="_blank">
				<Icon icon="mdi:github" class="cursor-pointer text-2xl text-secondary" />
			</a>
		</div>
	</div>
</section>
