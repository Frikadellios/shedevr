import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss(), vanillaExtractPlugin()]
	},
	integrations: [react()]
})
