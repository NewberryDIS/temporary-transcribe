import type { Page } from '@prisma/client'
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
    const response = await fetch(`/api/page?pageid=${params.page}&itemid=${params.item}`)
    const page: Page[] = await response.json()
    return page
}