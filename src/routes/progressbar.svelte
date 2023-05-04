<script lang="ts">
	export let val;
	let percentage = 0;
	if (typeof val === 'boolean') {
		percentage = val ? 100 : 0;
	} else if (typeof val === 'object') {
		percentage = Math.round((val[0] / val[1]) * 10000) / 100;
	} else {
		percentage = val;
	}
	const completionText = percentage === 100 ? 'Complete!' : percentage + '%';
</script>

<p
	style="background: linear-gradient(90deg, var(--colorFour) 0%, var(--colorFour) {percentage}%, rgba(5,90,175,0) {percentage}%, rgba(0,212,255,0) 100%);"
>
	{completionText}
</p>

<style>
	p {
		border: 1px solid var(--colorFour);
		text-align: center;
	}
</style>
