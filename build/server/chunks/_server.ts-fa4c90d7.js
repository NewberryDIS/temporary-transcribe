import { d as db } from './database-1435d6b2.js';
import { j as json } from './index-36410280.js';
import '@prisma/client';

const GET = async (event) => {
  console.log("asdf");
  const pages = await db.item.findMany();
  event.setHeaders({
    "Cache-Control": "public, max-age=0, s-maxage=60"
  });
  return json(pages);
};

export { GET };
//# sourceMappingURL=_server.ts-fa4c90d7.js.map
