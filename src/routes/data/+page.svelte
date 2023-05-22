<script>
    import items from "./items.json";
    import pages from "./files.json";
    const itemdata = items.map((i) => {
        let retObj = {};
        retObj["id"] = i.id;
        retObj["pagecount"] = i.files.count;

        retObj["percentComplete"] = 0;
        retObj["public"] = true;
        retObj["featured"] = false;
        for (const elte in i["element_texts"]) {
            let et = i.element_texts[elte];
            console.log(et);
            if (et.element?.id == 50) {
                retObj["title"] = et.text;
            } else if (et.element?.id == 41) {
                retObj["description"] = et.text;
            } else if (et.element?.id == 46) {
                retObj["catalogLink"] = et.text;
            } else if (et.element?.id == 48) {
                retObj["image"] = et.text;
            }
        }
        return retObj;
    });
    const pagedata = pages.map((f) => ({
        id: f.id,
        itemid: f.item.id,
        omekafn: f.filename,
        resx: f.metadata.video.resolution_x,
        resy: f.metadata.video.resolution_y,
        transcription: "",
    }));
    let itemcsv = itemdata.map((id) =>
        JSON.stringify([
            id.id,
            id.pagecount,
            id.title,
            id.description,
            id.image,
            id.catalogLink,
            id.percentComplete,
            id.public,
            id.featured,
        ])
    );
    let pagecsv = pagedata.map((pd) =>
        JSON.stringify([
            pd.id,
            pd.itemid,
            pd.omekafn,
            pd.resx,
            pd.resy,
            pd.transcription,
        ])
    );
</script>

<ul>
    {#each itemcsv as item}
        <li>{item}</li>
    {/each}
    {#each pagecsv as page}
        <li>{page}</li>
    {/each}
</ul>
