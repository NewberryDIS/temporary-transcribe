<script lang="ts">
	import type { Page } from '@prisma/client';
	import { ClickableTile } from 'carbon-components-svelte';
	import { page as htmlpage } from '$app/stores';
	import Progressbar from '../progressbar.svelte';
	import { pageTitle } from '../../stores';
	export let data;
	const pages = data.pages;
	// console.log(data);
	$pageTitle = data.item.title;
</script>

<div class="grid">
	{#each pages as page, idx}
		<ClickableTile href="/{page.itemid}/{page.id}">
			<header>
				<img
					src={'https://digital.newberry.org/transcribe/omeka/files/square_thumbnails/' +
						page.omekafn}
					alt=""
				/>
			</header>
			<section>
				page {idx + 1}
			</section>
			<footer>
				<Progressbar val={!!page.transcription.length} />
			</footer>
		</ClickableTile>
	{/each}
</div>

<style>
	:global(.bx--tile) {
		padding: 0;
	}

	.grid {
		display: grid;
		/* grid-auto-rows: 300px; */
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 16px;
	}
	header {
		height: 200px;
		overflow: hidden;
	}
	section {
		padding: 8px;
	}
	img {
		position: relative;
		top: -5%;
		left: -5%;
		width: 120%;
	}
	.grid-item {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid transparent;
		transition: 0.2s;
		cursor: pointer;
	}
</style>
