<script>
	import { onMount } from 'svelte';
	import ImageLayer from 'ol/layer/Image.js';
	import Map from 'ol/Map.js';
	import Projection from 'ol/proj/Projection.js';
	import Static from 'ol/source/ImageStatic.js';
	import View from 'ol/View.js';
	import { getCenter } from 'ol/extent.js';
	let src =
		'https://digital.newberry.org/transcribe/omeka/files/original/b5e06514262c595774ed8412b9b8e43e.jpg';
	import { DragRotateAndZoom, defaults as defaultInteractions } from 'ol/interaction.js';

	const extent = [0, 0, 1024, 968];
	const projection = new Projection({
		code: 'xkcd-image',
		units: 'pixels',
		extent: extent
	});

	let map;
	let mapContainer;
	let isLoaded = false;
	$: isLoaded && map.getView().animate({ zoom: zoomLvl, duration: 600 });
	let zoomLvl = 2;
	onMount(() => {
		map = new Map({
			interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
			target: mapContainer, // 'map' works as well
			layers: [
				new ImageLayer({
					source: new Static({
						url: src,
						projection: projection,
						imageExtent: extent
					})
				})
			],

			view: new View({
				projection: projection,
				center: getCenter(extent),
				zoom: 2,
				maxZoom: 8
			})
		});
		isLoaded = true;
	});
</script>

<div id="map" bind:this={mapContainer} />

<style>
	#map {
		/* width: 100vw; */
		height: 80vh;
	}
	:global(.ol-overlaycontainer-stopevent) {
		width: auto !important;
	}
	:global(button) {
		width: 64px !important;
	}
</style>
