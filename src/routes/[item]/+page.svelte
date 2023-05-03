<script lang="ts">
	import type { Page } from '@prisma/client';
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
		<a href="/{page.itemid}/{page.pageid}">
			<article>
				<header>
					<img
						src={'https://digital.newberry.org/transcribe/omeka/files/thumbnails/' + page.omekafn}
						alt=""
					/>
				</header>
				{idx + 1}
				<footer>
					<Progressbar val={page.transcription.length > 1} />
				</footer>
			</article>
		</a>
	{/each}
</div>

<style>
	.card {
		border: 1px solid var(--colorTwo);
		width: 200px;
	}
	.card > * {
		width: 200px;
	}
	.title,
	.desc,
	li {
		font-size: 0.75rem;
		margin: 8px;
	}
	.title {
		font-weight: bold;
	}
	ul {
		margin: 0;
		padding: 0 8px;
	}
	li {
		padding: 0;
		list-style-type: none;
	}
	.grid {
		display: grid;
		/* grid-auto-rows: 300px; */
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 5px;
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
