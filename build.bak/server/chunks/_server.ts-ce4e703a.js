import { d as db } from './database-1435d6b2.js';
import { j as json } from './index-36410280.js';
import '@prisma/client';

async function POST({ request }) {
  let { transc, itemid, pageid } = await request.json();
  try {
    await db.page.update({
      data: {
        transcription: transc
      },
      where: {
        id: pageid
      }
    });
    let retval = { message: "Transcription successfully submitted" };
    return json(retval, { status: 200 });
  } catch (error) {
    console.error(error);
    let retval = {
      status: 500,
      body: { message: "Error submitting value" }
    };
    return json(retval);
  }
}

export { POST };
//# sourceMappingURL=_server.ts-ce4e703a.js.map
