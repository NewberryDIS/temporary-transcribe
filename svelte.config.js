// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-vercel'
import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/kit/vite';
import {mdsvex} from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
}
/** @type {import('@sveltejs/adapter-vercel').Config} */
const config = {
	// runtime: 'nodejs 19.9.0',
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
};

export default config;
