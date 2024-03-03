<script>
</script>

<section
	class="h-max mt-[64px] md:mt-[80px] flex flex-col w-full items-center px-4 md:px-12 lg:container"
>
	<div
		class="bg-gradient-to-r from-secondary-left to-indigo-700 text-transparent bg-clip-text text-4xl md:text-5xl uppercase"
	>
		<span>&lt;&nbsp;&nbsp;Contact Me&nbsp;&nbsp;/&gt;</span>
	</div>
	<div class="flex flex-col md:flex-row justify-center items-center gap-20 w-full py-16 md:py-20">
		<form class="flex flex-col w-full justify-evenly items-center gap-5">
			<div class="w-full lg:w-9/12 text-lg text-primary-button flex flex-col md:flex-row gap-5">
				<div class="md:w-1/2">
					<label class="px-2" for="firstname">Firstname</label>
					<input
						required
						type="text"
						id="firstname"
						class="px-4 rounded-lg py-1.5 text-white bg-slate-600 w-full focus:!outline-0"
					/>
				</div>
				<div class="md:w-1/2">
					<label class="px-2" for="lastname">Lastname</label>
					<input
						required
						type="text"
						id="lastname"
						class="px-4 rounded-lg py-1.5 text-white bg-slate-600 w-full focus:!outline-0"
					/>
				</div>
			</div>
			<div class="w-full lg:w-9/12 text-lg text-primary-button flex gap-10">
				<div class="w-full flex flex-col">
					<label class="px-2" for="email">Email</label>
					<input
						required
						type="email"
						id="email"
						class="px-4 rounded-lg py-1.5 text-white bg-slate-600 w-full focus:!outline-0"
					/>
				</div>
			</div>
			<div class="w-full lg:w-9/12 text-lg text-primary-button flex gap-10">
				<div class="w-full flex flex-col">
					<label class="px-2" for="phone">Phone No.</label>
					<input
						required
						type="tel"
						pattern="[6-9]{1}[0-9]{9}"
						id="phone"
						class="px-4 rounded-lg py-1.5 text-white bg-slate-600 w-full focus:!outline-0"
					/>
				</div>
			</div>
			<div class="w-full lg:w-9/12 text-lg text-primary-button flex gap-10">
				<div class="w-full flex flex-col">
					<label class="px-2" for="description">Description</label>
					<textarea
						required
						type="text"
						rows="3"
						id="description"
						class="px-4 rounded-lg py-1.5 text-white bg-slate-600 w-full focus:!outline-0"
					/>
				</div>
			</div>

			<button
				class="w-4/12 border-[1px] rounded-lg border-border py-1.5 mt-4 text-xl text-green-400 hover:shadow-lg hover:shadow-shadow hover:scale-105"
				>Hire</button
			>
		</form>
	</div>
</section>
