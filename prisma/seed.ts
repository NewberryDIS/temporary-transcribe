import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function getPages() {
    const response = await fetch('https://digital.newberry.org/transcribe/data/itemTranscriptions.json')
    // const response = await fetch('https://digital.newberry.org/transcribe/omeka/api/files/')
    const pages = await response.json()
    return pages
}
async function getItems() {
    const response = await fetch('https://digital.newberry.org/transcribe/omeka/api/items/')
    const items = await response.json()
    return items
}

async function main() {
    const pages = await getPages()
    for (const item of pages.transcriptions) {
        const itemid = parseInt(item.id)
        for (let page in item.pages) {
            let p = item.pages[page]
            // console.log(p)
            let pageid = p.pageid
            let omekafn = p.pagefilename
            let transc = p.transcription
            await db.page.create({
                data: {
                    // const dootoo = {
                    id: pageid,
                    itemid: itemid,
                    omekafn: omekafn,
                    transcription: transc
                }
            })

        }
    }
    const items = await getItems()
    for (const item of items) {
        console.log(item.id)
        let title, description, image, catalogLink, percentComplete
        for (const etext in item.element_texts) {
            const et = item.element_texts[etext]
            // console.log(et)
            if (et.element.name === 'Title') {
                title = et.text
            }
            else if (et.element.name === 'Description') {
                description = et.text
            }
            else if (et.element.name === 'Subject' && !description) {
                description = et.text
            }
            else if (et.element.name === 'Source') {
                image = et.text
            }
            else if (et.element.name === 'Relation') {
                catalogLink = et.text
            }
            else if (et.element.name === 'Percent Completed') {
                percentComplete = et.text
            }
        }
        await db.item.create({
            data: {
                // const daatoo = {
                id: item.id,
                pagecount: item.files.count,
                title: title,
                description: description,
                image: image,
                catalogLink: catalogLink,
                percentComplete: percentComplete,
                public: item.public,
                featured: item.featured
            }
        })
    }
}

main()