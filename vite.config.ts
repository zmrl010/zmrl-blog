import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import type { LegacyStringOptions } from 'sass';
import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			sass: {
				includePaths: [resolve(__dirname, 'src/theme'), resolve(__dirname, 'node_modules')]
			} satisfies Partial<LegacyStringOptions<'async'>>
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
