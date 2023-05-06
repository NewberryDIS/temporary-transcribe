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
	} from "carbon-components-svelte";
</script>

<header>
	<nav>
		<h2>{$pageTitle}</h2>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/else">Something Else</a>
			</li>
		</ul>
		<div class="selecter">
			<Theme
				render="toggle"
				persist
				persistKey="__carbon-theme"
				toggle={{
					themes: ["g10", "g80"],
					labelA: "Enable dark mode",
					labelB: "Disable dark mode",
					hideLabel: true,
				}}
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
	}
	header {
		position: sticky;
		top: 0;
		background-color: var(--cds-ui-background);
		z-index: 9000;
	}
	nav {
		padding: 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.selecter {
		width: 200px;
	}
</style>
