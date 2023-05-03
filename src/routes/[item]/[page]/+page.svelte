<script lang="ts">
	import { pageTitle } from '../../../stores';
	import { page as htmlPage } from '$app/stores';
	export let data;
	const { item, page } = data;
	console.log(page);

	async function submitTransc(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		await fetch('/api/transcribe', {
			method: 'POST',
			body: data
		});
	}
	$pageTitle = 'Transcribing ' + item.title;
</script>

<div class="trapper">
	<img src="https://digital.newberry.org/transcribe/omeka/files/original/{page.omekafn}" alt="" />
	<div class="transbox">
		<form on:submit|preventDefault={submitTransc}>
			<input type="text" name="transc" />
			<button>Submit</button>
		</form>
	</div>
</div>

<style>
	.trapper {
		display: flex;
		height: 80vh;
		justify-content: center;
		align-items: center;
	}
	img,
	.transbox {
		flex: 1;
	}
	img {
		width: 100%;
	}
</style>
