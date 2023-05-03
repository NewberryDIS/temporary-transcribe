import type { RequestHandler } from "./$types";
import db from '$lib/database'
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async (event) => {
    let itemid = event.url.searchParams.get('itemid')
    console.log(itemid)
    let pages = await db.page.findMany({
        where: { itemid: parseInt(itemid) }
    })
    let item = await db.item.findUnique({
        where: { id: parseInt(itemid) }
    })
    // console.log(pages)
    event.setHeaders({
        'Cache-Control': 'public, max-age=0, s-maxage=60'
    })
    const retVal = {
        pages: pages,
        item: item
    }
    return json(retVal)
};