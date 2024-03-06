<script>
	import { initializeApp } from 'firebase/app';
	import { getDatabase, ref, set } from 'firebase/database';
	import { firebaseConfig } from '../firebase/firebase';
	import { onMount } from 'svelte';

	const app = initializeApp(firebaseConfig);
	const database = getDatabase(app);

	onMount(() => {
		console.log(database);
	});

	let data = {
		firstname: '',
		lastname: '',
		email: '',
		description: '',
		phone: ''
	};

	let connect = [];
	let email = true;
	let phone = true;

	function writeUserData(data) {
		const db = getDatabase();
		set(ref(db, 'users/' + data.firstname), {
			...data
		});
		console.log(data);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		connect.push(set);
		let validNumber = /^[6-9][0-9]{9}$/;
		let validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

		if (!validEmail.test(data.email)) {
			email = false;
		} else if (!validNumber.test(data.phone)) {
			phone = false;
		} else {
			if (validNumber.test(data.phone) && validEmail.test(data.email)) {
				phone = true;
				email = true;
				writeUserData(data);
				data = {
					firstname: '',
					lastname: '',
					email: '',
					description: ''
				};
			}
		}
	};

	const handleInput = (e) => {
		data = { ...data, [e.target.id]: e.target.value };
		console.log(data);
	};
</script>

<section
	class="h-max mt-[64px] md:mt-[80px] flex flex-col w-full items-center px-4 md:px-12 lg:container"
>
	<div
		class="bg-gradient-to-r from-secondary-left to-indigo-700 text-transparent bg-clip-text text-4xl md:text-5xl uppercase"
	>
		<span>&lt;&nbsp;&nbsp;Contact Me&nbsp;&nbsp;/&gt;</span>
	</div>
	<div class="flex flex-col md:flex-row justify-center items-center gap-20 w-full py-5 md:py-20">
		<form class="flex flex-col w-full justify-evenly items-center gap-5" on:submit={handleSubmit}>
			<div class="w-full lg:w-9/12 text-lg text-primary-button flex flex-col md:flex-row gap-5">
				<div class="md:w-1/2">
					<label class="px-2" for="firstname">Firstname</label>
					<input
						required
						type="text"
						id="firstname"
						class="px-4 rounded-lg py-1.5 text-white bg-slate-600 w-full focus:!outline-0"
						on:input={handleInput}
						bind:value={data.firstname}
					/>
				</div>
				<div class="md:w-1/2">
					<label class="px-2" for="lastname">Lastname</label>
					<input
						required
						type="text"
						id="lastname"
						class="px-4 rounded-lg py-1.5 text-white bg-slate-600 w-full focus:!outline-0"
						on:input={handleInput}
						bind:value={data.lastname}
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
						on:input={handleInput}
						bind:value={data.email}
					/>
					{#if !email}
						<span class="text-red-700 px-2">Enter valid email!</span>
					{/if}
				</div>
			</div>
			<div class="w-full lg:w-9/12 text-lg text-primary-button flex gap-10">
				<div class="w-full flex flex-col">
					<label class="px-2" for="phone">Phone No.</label>
					<input
						required
						type="tel"
						id="phone"
						class="px-4 rounded-lg py-1.5 text-white bg-slate-600 w-full focus:!outline-0"
						on:input={handleInput}
						bind:value={data.phone}
					/>
					{#if !phone}
						<span class="text-red-700 px-2">Enter valid phone no!</span>
					{/if}
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
						on:input={handleInput}
						bind:value={data.description}
					/>
				</div>
			</div>

			<button
				type="submit"
				class="w-4/12 border-[1px] rounded-lg border-border py-1.5 mt-0 md:mt-4 text-xl text-green-400 hover:shadow-lg hover:shadow-shadow hover:scale-105"
				>Connect</button
			>
		</form>
	</div>
</section>
