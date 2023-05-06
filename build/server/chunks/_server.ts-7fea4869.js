import { d as db } from './database-1435d6b2.js';
import { j as json } from './index-36410280.js';
import '@prisma/client';

const GET = async (event) => {
  const pageid = parseInt(event.url.searchParams.get("pageid"));
  const itemid = parseInt(event.url.searchParams.get("itemid"));
  console.log(itemid);
  let page = await db.page.findUnique({
    where: {
      id: pageid
    }
  });
  let next = await db.page.findMany({
    take: 1,
    skip: 1,
    cursor: {
      id: pageid
    },
    where: {
      itemid
    }
  });
  let prev = await db.page.findMany({
    take: -1,
    skip: 1,
    cursor: {
      id: pageid
    },
    where: {
      itemid
    }
  });
  let item = await db.item.findUnique({
    where: { id: itemid }
  });
  event.setHeaders({
    "Cache-Control": "public, max-age=0, s-maxage=60"
  });
  const retVal = {
    prev: prev ? prev.pop() : {},
    page,
    next: next ? next.pop() : {},
    item
  };
  return json(retVal);
};

export { GET };
//# sourceMappingURL=_server.ts-7fea4869.js.map
