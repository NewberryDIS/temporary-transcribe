<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { beforeNavigate } from "$app/navigation";
	import {
		Button,
		Form,
		Loading,
		TextArea,
		ToastNotification,
		Tabs,
		Tab,
		TabContent,
	} from "carbon-components-svelte";
	import { pageTitle } from "../../../stores";
	import { page as htmlPage } from "$app/stores";
	export let data;
	import Image from "./image.svelte";
	import { onMount } from "svelte";
	let isLoaded = false;
	$: ({ prev, page, next, item, transtore } = data);

	$: src = `https://digital.newberry.org/transcribe/omeka/files/original/${page.omekafn}`;
	$: resolution = [page.resx, page.resy];
	// $: console.log(data);
	let value;
	// console.log(item);
	let toast = [false, "", 0];
	async function submitTransc() {
		console.log("page", page);
		const transcData = {
			transc: page.transcription,
			transl: page.translation,
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
	$: $pageTitle = [
		"/" + item.id,
		"Transcribing " + item.title,
		item.catalogLink,
	];
	var isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
</script>

{#if !isLoaded}
	<Loading />
{/if}
<div class="trapper">
	<div class="imgpper">
		<Image {src} {resolution} bind:isLoaded />
		<p class="helper">
			To rotate image: hold
			{#if isMac}
				Opt
			{:else}
				Alt
			{/if}
			+ Shift and drag
		</p>
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
		<Tabs>
			<Tab label="Transcription" />
			<Tab label="Translation" />
			<svelte:fragment slot="content">
				<TabContent>
					<TextArea
						placeholder="Type what you see!"
						bind:value={page.transcription}
					/>
				</TabContent>
				<TabContent>
					<TextArea
						placeholder="Translate!"
						bind:value={page.translation}
					/>
				</TabContent>
			</svelte:fragment>
		</Tabs>
		<Button
			type="submit"
			disabled={page.transcription === transtore[0] &&
				page.translation === transtore[1]}
			on:click={submitTransc}
		>
			Submit
			{#if page.transcription !== transtore[0]}
				Transcription
			{/if}
			{#if page.transcription !== transtore[0] && page.translation !== transtore[1]}
				&
			{/if}
			{#if page.translation !== transtore[1]}
				Translation
			{/if}
		</Button>

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
		/* height: 85vh; */
		justify-content: center;
		align-items: stretch;
	}
	.imgpper,
	.transbox {
		margin: 32px;
		display: flex;
		flex-direction: column;
		height: 100%;
		/* position: relative; */
	}
	.imgpper {
		flex: 2;
	}
	.transbox {
		flex: 1;
	}
	.transbox {
		justify-content: flex-start;
		/* align-items: flex-start; */
		align-items: stretch;
		height: 75vh;
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
	:global(.transbox .bx--form-item, .transbox .bx--text-area__wrapper) {
		height: 100%;
		margin: 0;
	}
	/* border: 1px solid var(--cds-ui-04); */

	.imgpper {
		width: 100%;
	}
	.helper {
		color: var(--cds-text-02);
		font-size: var(--cds-label-01-font-size);
		text-align: center;
	}
	:global(.transbox .bx--form-item) {
		display: block;
		height: 100%;
		/* margin-bottom: 8px; */
	}

	:global(.bx--tab-content) {
		margin-bottom: 24px;
		padding: 0 !important;
		height: 100%;
	}
</style>
