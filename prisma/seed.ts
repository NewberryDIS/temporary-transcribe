import { PrismaClient } from '@prisma/client'
import items from './items.json'
import pages from './pages.json'

const db = new PrismaClient()

type Item = {
    id: number
    pagecount: number
    title: string
    description: string
    image: string
    catalogLink: string
    percentComplete: number
    public: boolean
    featured: boolean
}
type Page = {
    id: number
    itemid: number
    omekafn: string
    resx: number
    resy: number
    transcription: string
}

function getItems() {
    const itemdata = items.map(i => {
        let retObj = {}
        retObj['id'] = i.id
        retObj['pagecount'] = i.files.count
        retObj['title'] = ''
        retObj['description'] = ''
        retObj['image'] = ''
        retObj['catalogLink'] = ''
        retObj['percentComplete'] = 0
        retObj['public'] = true
        retObj['featured'] = false
        for (const et in i['element_texts']) {
            if (et.element?.id === 50) {
                retObj['title'] = et.text
            } else if (et.element?.id === 41) {
                retObj['decription'] = et.text
            } else if (et.element?.id === 46) {
                retObj['catalogLink'] = et.text
            } else if (et.element?.id === 48) {
                retObj['image'] = et.text
            }
        }
        return retObj
    })
    return itemdata as Item[]
}

function getPages() {
    const pagedata = pages.map(f => ({
        id: f.id,
        itemid: f.item.id,
        omekafn: f.filename,
        resx: f.metadata.video.resolution_x,
        resy: f.metadata.video.resolution_y,
        transcription: ''
    }))
    return pagedata as Page[]
}

async function main() {
    const items = getItems()
    const pages = getPages()
    // const posts = await getPosts()

    for (const item of items) {
        await db.item.create({
            data: {
                id: item.id,
                pagecount: item.pagecount,
                title: item.title,
                description: item.description,
                image: item.image,
                catalogLink: item.catalogLink,
                percentComplete: item.percentComplete,
                public: item['public'],
                featured: item.featured
            }
        })
    }
    for (const page of pages) {
        await db.page.create({
            data: {
                id: page.id,
                itemid: page.itemid,
                omekafn: page.omekafn,
                resx: page.resx,
                resy: page.resy,
                transcription: page.transcription

            }
        })
    }
}

main()
