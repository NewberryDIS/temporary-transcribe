// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel'
// import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/kit/vite';
import {mdsvex} from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
}
/** @type {import('@sveltejs/adapter-vercel').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	runtime: 'nodejs18.x',
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
	}
};

export default config;
