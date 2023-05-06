import { d as db } from './database-1435d6b2.js';
import { j as json } from './index-36410280.js';
import '@prisma/client';

const GET = async (event) => {
  let itemid = event.url.searchParams.get("itemid");
  console.log(itemid);
  let pages = await db.page.findMany({
    where: { itemid: parseInt(itemid) }
  });
  let item = await db.item.findUnique({
    where: { id: parseInt(itemid) }
  });
  event.setHeaders({
    "Cache-Control": "public, max-age=0, s-maxage=60"
  });
  const retVal = {
    pages,
    item
  };
  return json(retVal);
};

export { GET };
//# sourceMappingURL=_server.ts-2e3ac167.js.map
