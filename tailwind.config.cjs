/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				rubik: ["Rubik", "sans-serif"]
			},
			colors: {
				// ### Primary
				blue: "hsl(246, 80%, 60%)",

				light_red_work: "hsl(15, 100%, 70%)",
				soft_blue_play: "hsl(195, 74%, 62%)",
				light_red_study: "hsl(348, 100%, 68%)",
				lime_green_exercise: "hsl(145, 58%, 55%)",
				violet_social: "hsl(264, 64%, 52%)",
				soft_orange_self_care: "hsl(43, 84%, 65%)",

				// ### Neutral
				very_dark_blue: "hsl(226, 43%, 10%)",
				dark_blue: "hsl(235, 46%, 20%)",
				desaturated_blue: "hsl(235, 45%, 61%)",
				pale_blue: "hsl(236, 100%, 87%)"
			}
		}
	},
	plugins: []
};
