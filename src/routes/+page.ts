import type { Item } from '@prisma/client'
import type { PageLoad } from "./$types";

// export const prerender = true

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('/api/items')
    const items: Item[] = await response.json()
    return { data: items }
}