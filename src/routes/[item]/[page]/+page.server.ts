import type { Page } from '@prisma/client'
import type { PageLoad } from "./$types";
// export const router = false

export const load: PageLoad = async ({ fetch, params }) => {
    let response = await fetch(`/api/page?pageid=${params.page}&itemid=${params.item}`)
    let pageData: Page[] = await response.json()
    pageData.transtore = [pageData.page.transcription, pageData.page.translation]
    if (pageData.page && pageData.page.transcription && pageData.page.transcription.indexOf('\\n') > -1) {
        pageData.page.transcription = pageData.page.transcription.replaceAll(/\\\\n/g, '\n')
    }
    return pageData
}