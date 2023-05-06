import type { RequestHandler } from "./$types";
import db from '$lib/database'
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async (event: Event) => {
    const pageid = parseInt(event.url.searchParams.get('pageid'))
    const itemid = parseInt(event.url.searchParams.get('itemid'))
    console.log(itemid)
    let page = await db.page.findUnique({
        where: {
            id: pageid
        }
    })
    let next = await db.page.findMany({
        take: 1,
        skip: 1,
        cursor: {
            id: pageid
        },
        where: {
            itemid: itemid
        }
    })
    let prev = await db.page.findMany({
        take: -1,
        skip: 1,
        cursor: {
            id: pageid
        },
        where: {
            itemid: itemid
        }
    })
    // console.log([prev, page, next])
    let item = await db.item.findUnique({
        where: { id: itemid }
    })
    // console.log(pages)
    event.setHeaders({
        'Cache-Control': 'public, max-age=0, s-maxage=60'
    })
    const retVal = {
        prev: prev ? prev.pop() : {},
        page: page,
        next: next ? next.pop() : {},
        item: item
    }
    return json(retVal)
};