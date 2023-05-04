<script lang="ts">
	import { pageTitle } from '../stores';
	import Progressbar from './progressbar.svelte';
	import { ClickableTile } from 'carbon-components-svelte';

	export let data;
	const items = data.data.sort((a, b) => {
		return a.featured === b.featured
			? parseInt(a.percentComplete) - parseInt(b.percentComplete)
			: a.featured
			? -1
			: 1;
	});
	// console.log(data);
	$pageTitle = 'Newberry Transcribe';
</script>

<div class="grid">
	{#each items as item}
		<ClickableTile href="/{item.id}">
			<div class="tile-liner">
				<header>
					<img src={item.image.replace('/original/', '/square_thumbnails/')} alt="" />
				</header>
				<section>
					<h3 class="title">{item.title}</h3>
					<p class="pagecount">{item.pagecount} pages.</p>
					<p class="desc">{item.description}</p>
				</section>
				<footer>
					<Progressbar val={item.percentComplete} />
				</footer>
			</div>
		</ClickableTile>
	{/each}
</div>

<style>
	:global(.bx--tile) {
		padding: 0;
	}
	.tile-liner {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
	}
	.tile-liner section {
		flex: 1;
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
	.title {
		font-size: 1.1rem;
		font-weight: bold;
	}
	.pagecount {
		font-size: 0.8rem;
	}
	.desc {
		font-size: 0.9rem;
	}

	.title,
	.pagecount,
	.desc {
		margin: 8px;
	}
</style>
