<script>
	import '../app.css';
	import { pageTitle } from '../stores';
</script>

<nav>
	<h2>{$pageTitle}</h2>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/posts">Posts</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	h2 {
		margin: 0;
	}
	nav {
		position: sticky;
		top: 0;
		padding: 8px;
		background-color: var(--card-background-color);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
