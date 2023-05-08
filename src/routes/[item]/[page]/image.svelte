<script>
	import { onMount } from "svelte";
	import ImageLayer from "ol/layer/Image.js";
	import Map from "ol/Map.js";
	import Projection from "ol/proj/Projection.js";
	import Static from "ol/source/ImageStatic.js";
	import View from "ol/View.js";
	import { getCenter } from "ol/extent.js";
	export let src = "",
		resolution = [1000, 1000];
	// let src = 'https://digital.newberry.org/transcribe/omeka/files/original/b5e06514262c595774ed8412b9b8e43e.jpg';
	import {
		DragRotateAndZoom,
		defaults as defaultInteractions,
	} from "ol/interaction.js";
	$: console.log(src);
	let extent = [100, 100, resolution[0], resolution[1]];
	let projection = new Projection({
		code: "Newberry Transcribe Page Image",
		units: "pixels",
		extent: extent,
	});
	let mapContainer, url;
	let isLoaded = false;
	$: isLoaded && map.getView().animate({ zoom: zoomLvl, duration: 600 });
	let zoomLvl = 2;

	let map = null;

	function mapMaker(src, resolution) {
		map = map ? map.setTarget(null) : null;
		url = src;
		extent = [100, 100, resolution[0], resolution[1]];
		projection = new Projection({
			code: "Newberry Transcribe Page Image",
			units: "pixels",
			extent: extent,
		});
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
		});
	}
	onMount(() => {
		map = mapMaker(src, resolution);
		isLoaded = true;
	});
	$: if (map && url !== src) map = mapMaker(src, resolution);
</script>

<div id="map" bind:this={mapContainer} />

<style>
	#map {
		/* width: 100vw; */
		border: 1px solid var(--cds-ui-04);
		height: 80vh;
	}
	:global(.ol-overlaycontainer-stopevent) {
		width: auto !important;
	}
</style>
