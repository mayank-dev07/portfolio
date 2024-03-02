/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors:{
				primary:{
					DEFAULT: "#000000",
					text:"rgb(134 239 172);",
					button:"rgb(134 239 172);"
				},
				secondary:{
					DEFAULT: "rgb(22 163 74);",
					left:"rgb(34 197 94);",
					text:"rgb(187 247 208);"
				},
				shadow:"rgb(20 83 45);",
				border:{
					DEFAULT:"rgb(34 197 94);",
					bottom:" rgb(5 46 22);",
				}
		
			
			}
		}
	},
	plugins: []
};
