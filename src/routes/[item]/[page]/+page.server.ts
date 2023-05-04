import type { Page } from '@prisma/client'
import type { PageLoad } from "./$types";
// export const router = false

export const load: PageLoad = async ({ fetch, params }) => {
    let response = await fetch(`/api/page?pageid=${params.page}&itemid=${params.item}`)
    let page: Page[] = await response.json()
    console.log(page)
    return page
}