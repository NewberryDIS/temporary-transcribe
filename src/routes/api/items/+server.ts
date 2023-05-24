import type { RequestHandler } from './$types';
import db from '$lib/database';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	console.log(event);
	const pages = await db.item.findMany();
	event.setHeaders({
		'Cache-Control': 'public, max-age=0, s-maxage=60'
	});
	return json(pages);
};
