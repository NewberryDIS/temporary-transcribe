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
		<h2>
			<a href="/" class="nolines"><img src="/newberryn.png" alt="" /></a>
			{$pageTitle}
		</h2>
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
	.selecter {
		width: 200px;
	}
	.nolines,
	.nolines img {
		height: 48px;
		padding-inline: 8px;
	}
</style>
