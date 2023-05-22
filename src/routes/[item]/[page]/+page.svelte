<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { beforeNavigate } from "$app/navigation";
	import {
		Button,
		Form,
		Loading,
		TextArea,
		ToastNotification,
	} from "carbon-components-svelte";
	import { pageTitle } from "../../../stores";
	import { page as htmlPage } from "$app/stores";
	export let data;
	import Image from "./image.svelte";
	import { onMount } from "svelte";
	let isLoaded = false;
	$: ({ prev, page, next, item } = data);

	$: src = `https://digital.newberry.org/transcribe/omeka/files/original/${page.omekafn}`;
	$: resolution = [page.resx, page.resy];
	let value;
	// $: if (page.transcription && value.length === 0) {
	// 	value = page.transcription;
	// }
	// I have a text input field that gets its initial value from the database; the user can edit the value and submit it
	let toast = [false, "", 0];
	async function submitTransc() {
		console.log("page", page);
		const transcData = {
			transc: page.transcription,
			itemid: item.id,
			pageid: page.id,
		};
		console.log(transcData);
		await fetch("/api/submit", {
			method: "POST",
			body: JSON.stringify(transcData),
		})
			.then((r) => r.json())
			.then((r) => {
				toast = [true, r.message, r.status];
				console.log(r);
			});
	}

	beforeNavigate(() => {
		isLoaded = false;
	});
	$: $pageTitle = "Transcribing " + item.title;
</script>

{#if !isLoaded}
	<Loading />
{/if}
<div class="trapper">
	<div class="imgpper">
		<Image {src} {resolution} bind:isLoaded />
		<p class="helper">hold Alt + Shift and Drag to Rotate</p>
		<div class="buttons">
			<a
				href={prev ? prev.id : ""}
				class="buttonifier bx--btn bx--btn-primary {prev
					? 'active-button'
					: 'disabled-button'}"
				title={prev
					? "Previous page"
					: "You're on the first page.  No previous page available!"}
				>Previous</a
			>
			<a
				href={next ? next.id : ""}
				class="buttonifier bx--btn bx--btn-primary next {next
					? 'active-button'
					: 'disabled-button'}"
				title={next
					? "Next page"
					: "You're on the last page.  No next page available!"}
			>
				Next</a
			>
		</div>
	</div>
	<div class="transbox">
		<TextArea
			labelText={$pageTitle}
			placeholder="Type what you see!"
			bind:value={page.transcription}
		/>
		<Button type="submit" on:click={submitTransc}>Submit</Button>

		{#if toast[0]}
			<div class="toaster">
				<ToastNotification
					kind={toast[2] === 200 ? "success" : "error"}
					title={toast[2] === 200 ? "Success" : "Error"}
					subtitle={toast[1]}
					caption={new Date().toLocaleString()}
				/>
			</div>
		{/if}
	</div>
</div>

<style>
	.prevnext-preload {
		width: 1px;
		height: 1px;
		opacity: 0.01;
	}
	.toaster {
		position: absolute;
		bottom: 32px;
		right: 32px;
	}
	.buttons {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.buttonifier {
		margin: 8px;
		max-width: none;
		width: 200px;
		/* flex: 1; */
	}
	.buttonifier.next {
		text-align: right;
	}
	/* active button + hover are in app.css */
	.disabled-button {
		background: var(--cds-disabled-02);
		border-color: var(--cds-disabled-02);
		cursor: not-allowed;
		color: var(--cds-disabled-03);
	}
	.trapper {
		display: flex;
		height: 85vh;
		justify-content: center;
		align-items: stretch;
	}
	.imgpper,
	.transbox {
		margin: 32px;
		flex: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
		/* position: relative; */
	}
	.transbox {
		justify-content: center;
		align-items: stretch;
	}
	:global(.transform button) {
		float: right;
	}
	.transform {
		height: 100%;
	}
	:global(.transform > *) {
		margin: 16px;
	}
	:global(.bx--form-item, .bx--text-area__wrapper) {
		flex: 1;
		height: 80%;
	}

	.imgpper {
		width: 100%;
	}
	.helper {
		color: var(--cds-text-02);
		font-size: var(--cds-label-01-font-size);
		text-align: center;
	}
</style>
