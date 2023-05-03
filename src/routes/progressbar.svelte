<script lang="ts">
	export let val;
	let percentage = 0;
	if (typeof val === 'boolean') {
		percentage = 100;
	} else if (typeof val === 'object') {
		percentage = Math.round((val[0] / val[1]) * 10000) / 100;
	} else {
		percentage = val;
	}
</script>

<p>{percentage}%</p>
