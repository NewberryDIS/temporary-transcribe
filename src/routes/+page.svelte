<script lang="ts">
	import { pageTitle } from '../stores';
	import Progressbar from './progressbar.svelte';

	export let data;
	const items = data.data;
	// console.log(data);
	$pageTitle = 'Newberry Transcribe';
</script>

<h1>items</h1>

<div class="grid">
	{#each items as item}
		<a href="/{item.id}">
			<article>
				<header>
					<img src={item.image} alt="" />
				</header>
				<ul>
					<li>id: {item.id}</li>
					<li>pagecount: {item.pagecount}</li>
					<li>percentComplete: {item.percentComplete}</li>
					<li>public: {item.public}</li>
					<li>featured: {item.featured}</li>
				</ul>
				<footer>
					<Progressbar val={item.percentComplete} />
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
