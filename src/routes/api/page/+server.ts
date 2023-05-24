import type { RequestHandler } from './$types';
import db from '$lib/database';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async (event: Event) => {
	const pageid = parseInt(event.url.searchParams.get('pageid'));
	const itemid = parseInt(event.url.searchParams.get('itemid'));
	console.log('itemid', itemid);
	console.log('pageid', pageid);
	console.log('event', event);
	const page = await db.page.findUnique({
		where: {
			id: pageid
		}
	});
	const next = await db.page.findMany({
		take: 1,
		skip: 1,
		cursor: {
			id: pageid
		},
		where: {
			itemid: itemid
		}
	});
	const prev = await db.page.findMany({
		take: -1,
		skip: 1,
		cursor: {
			id: pageid
		},
		where: {
			itemid: itemid
		}
	});
	const item = await db.item.findUnique({
		where: { id: itemid }
	});

	event.setHeaders({
		'Cache-Control': 'public, max-age=0, s-maxage=60'
	});

	const retVal = {
		prev: prev ? prev.pop() : {},
		page: page,
		next: next ? next.pop() : {},
		item: item
	};
	return json(retVal);
};
