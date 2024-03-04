<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let sections = [];
	export let activeSectionId;
	export let activeSection;
	export let y;

	let drawerVisible = false;

	onMount(() => {
		console.log(activeSection);
	});
</script>

<div
	class={'fixed z-10 w-full h-16 md:h-20 text-white flex justify-between items-center px-4 md:px-16 ' +
		(y > 0 ? 'bg-transparent backdrop-blur-md border-b-[1px] border-border-bottom' : 'bg-primary')}
>
	<span class="text-3xl text-secondary">&lt;&nbsp;</span>
	<div class="md:gap-10 hidden md:flex">
		{#each sections as { name, id }}
			<li type="none">
				<a href={`#${id}`} class:active={activeSectionId === id}>
					<span
						class="hover:text-secondary group transition-all duration-300 ease-in-out cursor-pointer text-secondary text-lg"
					>
						<p
							class={`mx-3 bg-left-bottom bg-gradient-to-r from-border to-border bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-600 ease-out`}
						>
							{name}
						</p>
					</span></a
				>
			</li>
		{/each}
	</div>

	<span class="text-3xl text-secondary hidden md:flex">&nbsp;/&gt;</span>

	<button on:click={() => (drawerVisible = !drawerVisible)} class="md:hidden flex">
		<Icon icon="mdi:hamburger-menu" class="md:hidden flex text-secondary text-2xl" />
	</button>

	{#if drawerVisible}
		<div class="drawer flex flex-col">
			<div
				class="h-14 w-full border-b-[1px] border-border-bottom px-4 flex justify-between items-center"
			>
				<button on:click={() => (drawerVisible = !drawerVisible)}>
					<Icon icon="mdi:close" class="md:hidden flex text-secondary text-2xl" />
				</button>
			</div>
			<div class="flex flex-col gap-4 ps-4 pt-4 w-min">
				{#each sections as { name, id }}
					<li type="none">
						<a href={`#${id}`} class:active={activeSectionId === id}
							><span
								class="hover:text-secondary group transition-all duration-300 ease-in-out cursor-pointer text-secondary text-lg"
							>
								<button on:click={() => (drawerVisible = !drawerVisible)}>
									<p
										class="w-min mx-3 bg-left-bottom bg-gradient-to-r from-border to-border bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-600 ease-out"
									>
										{name}
									</p>
								</button>
							</span></a
						>
					</li>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.drawer {
		background: #000;
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		height: 100vh;
		width: 80%;
		opacity: 1;
		overflow: hidden;
		border-left: 1px solid green;
	}
</style>
