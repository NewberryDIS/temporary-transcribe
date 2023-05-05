<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { Button, Form, TextArea, ToastNotification } from 'carbon-components-svelte';
	import { pageTitle } from '../../../stores';
	import { page as htmlPage } from '$app/stores';
	export let data;
	import Image from './image.svelte';
	import { preventDefault } from 'ol/events/Event';
	const { prev, page, next, item } = data;
	console.log('prev', prev);
	let value = page.transcription.length ? page.transcription : '';
	$: samesies = $htmlPage.params.page == page.id;
	let toast = [false, '', 0];
	async function submitTransc(event: Event) {
		event.preventDefault();

		const transcData = { transc: value, itemid: item.id, pageid: page.id };
		console.log(transcData);
		await fetch('/api/submit', {
			method: 'POST',
			body: JSON.stringify(transcData)
		})
			.then((r) => r.json())
			.then((r) => {
				toast = [true, r.message, r.status];
				console.log(r);
			});
	}

	$pageTitle = 'Transcribing ' + item.title;
</script>

<div class="trapper">
	<div class="imgpper">
		<Image
			src="https://digital.newberry.org/transcribe/omeka/files/original/{page.omekafn}"
			resolution={[page.resx, page.resy]}
		/>
		<p class="helper">hold Alt + Shift and Drag to Rotate</p>
		<div class="buttons">
			<a
				href={prev ? prev.id : ''}
				class="buttonifier bx--btn bx--btn-primary {prev ? 'active-button' : 'disabled-button'}"
				title={prev ? 'Previous page' : "You're on the first page.  No previous page available!"}
				>Previous</a
			>
			<a
				href={next ? next.id : ''}
				class="buttonifier bx--btn bx--btn-primary next {next
					? 'active-button'
					: 'disabled-button'}"
				title={next ? 'Next page' : "You're on the last page.  No next page available!"}
			>
				Next</a
			>
		</div>
	</div>
	<div class="transbox">
		<Form on:submit={(e) => submitTransc(e)} class="transform">
			<TextArea
				labelText={$pageTitle}
				placeholder="Type what you see!"
				bind:value
				helperText="more descriptive text down here maybe"
			/>
			<Button type="submit">Submit</Button>
		</Form>

		{#if toast[0]}
			<div class="toaster">
				<ToastNotification
					kind={toast[2] === 200 ? 'success' : 'error'}
					title={toast[2] === 200 ? 'Success' : 'Error'}
					subtitle={toast[1]}
					caption={new Date().toLocaleString()}
				/>
			</div>
		{/if}
	</div>
</div>

<style>
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
	.active-button:hover {
		color: var(--cds-text-04);
		background-color: var(--cds-hover-primary);
	}
	.active-button {
		color: var(--cds-text-04);
		background-color: var(--cds-interactive-01);
	}
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
