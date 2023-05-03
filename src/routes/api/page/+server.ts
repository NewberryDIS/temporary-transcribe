import type { RequestHandler } from "./$types";
import db from '$lib/database'
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async (event) => {
    const pageid = event.url.searchParams.get('pageid')
    console.log(pageid)
    let page = await db.page.findUnique({
        where: { id: parseInt(pageid) }
    })
    console.log(page)
    const itemid = event.url.searchParams.get('itemid')
    let item = await db.item.findUnique({
        where: { id: parseInt(itemid) }
    })
    // console.log(pages)
    event.setHeaders({
        'Cache-Control': 'public, max-age=0, s-maxage=60'
    })
    const retVal = {
        page: page,
        item: item
    }
    return json(retVal)
};