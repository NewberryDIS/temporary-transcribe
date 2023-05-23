<script>
	import "../app.css";
	import "../css/ol.css";
	import { pageTitle } from "../stores";
	import "carbon-components-svelte/css/all.css";
	import {
		Theme,
		Content,
		Grid,
		Row,
		Column,
		Button,
	} from "carbon-components-svelte";
	import Moon from "carbon-icons-svelte/lib/Moon.svelte";
	import Sun from "carbon-icons-svelte/lib/Sun.svelte";
	let theme = "g10";
	function themeToggle() {
		console.log(theme);
		if (theme === "g10") theme = "g90";
		else theme = "g10";
	}
</script>

<Theme bind:theme persist persistKey="__carbon-theme" />
<header>
	<nav>
		<div class="left">
			<a href="/" class="nolines"><img src="/newberryn.png" alt="" /></a>
			<h2>
				<a href={$pageTitle[0]} class="lines">{$pageTitle[1]}</a>
			</h2>
		</div>
		<div class="right">
			<Button href={$pageTitle[2]} target="_blank" kind="secondary">
				More Information
			</Button>
			<Button
				kind="ghost"
				iconDescription="Toggle {theme === 'g10'
					? 'dark'
					: 'light'} mode"
				icon={theme === "g10" ? Moon : Sun}
				on:click={themeToggle}
			/>
		</div>
	</nav>
</header>
<Content>
	<Grid>
		<Row>
			<Column>
				<slot />
			</Column>
		</Row>
	</Grid>
</Content>

<style>
	h2 {
		margin: 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	header {
		position: sticky;
		top: 0;
		background-color: var(--cds-ui-background);
		z-index: 9000;
		background: linear-gradient(
			150deg,
			var(--cds-ui-background) 0vw,
			var(--distance),
			var(--cds-ui-03) var(--distance) 100vw
		);
		background-attachment: fixed !important;
	}
	nav {
		padding: 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.left {
		flex: 1;
		justify-content: flex-start;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.left,
	.right {
		align-items: center;
		display: flex;
	}
	.right {
		flex-basis: 300px;
		width: 300px;
		justify-content: space-between;
	}
	.nolines,
	.nolines img {
		height: 48px;
		padding-inline: 8px;
	}
	.left h2,
	.left h2 a {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
