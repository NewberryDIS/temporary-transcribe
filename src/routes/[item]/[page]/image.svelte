<script lang="ts">
	import { onMount } from "svelte";
	import { Loading } from "carbon-components-svelte";
	import ImageLayer from "ol/layer/Image.js";
	import Map from "ol/Map.js";
	import Projection from "ol/proj/Projection.js";
	import Static from "ol/source/ImageStatic.js";
	import View from "ol/View.js";
	import { getCenter } from "ol/extent.js";
	import {
		DragRotateAndZoom,
		defaults as defaultInteractions,
	} from "ol/interaction.js";
	export let src = "",
		resolution = [1000, 1000],
		isLoaded: boolean;
	// let src = 'https://digital.newberry.org/transcribe/omeka/files/original/b5e06514262c595774ed8412b9b8e43e.jpg';
	// $: console.log(src);
	$: extent = [100, 100, resolution[0], resolution[1]];
	$: projection = new Projection({
		code: "Newberry Transcribe Page Image",
		units: "pixels",
		extent: extent,
	});
	let mapContainer, url;
	let map = null;

	$: isLoaded && map.getView().animate({ zoom: zoomLvl, duration: 600 });
	let zoomLvl = 2;

	function mapMaker(src) {
		map = map ? map.setTarget(null) : null;
		url = src;
		isLoaded = true;
		return new Map({
			interactions: defaultInteractions().extend([
				new DragRotateAndZoom(),
			]),
			target: mapContainer,
			layers: [
				new ImageLayer({
					source: new Static({
						url: url,
						projection: projection,
						imageExtent: extent,
					}),
				}),
			],

			view: new View({
				projection: projection,
				center: getCenter(extent),
				// resolution: 1,
				// maxResolution: 8
				zoom: 1,
				zoomFactor: 1.75,
				maxZoom: 8,
			}),
			isLoaded: true,
		});
	}
	onMount(() => {
		map = mapMaker(src);
		isLoaded = true;
	});
	$: if (map && url !== src) {
		map = mapMaker(src);
	}
</script>

<div id="map" bind:this={mapContainer}>
	<div class="looder">
		<p>
			<Loading withOverlay={false} />
		</p>
	</div>
</div>

<style>
	:global(.bx--loading__stroke) {
		stroke: var(--colorTwo);
	}
	.looder {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}
	#map {
		/* width: 100vw; */
		border: 1px solid var(--cds-ui-04);
		height: 80vh;
		position: relative;
	}
	:global(.ol-overlaycontainer-stopevent) {
		width: auto !important;
	}
</style>
