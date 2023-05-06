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
    let retval = { message: "Transcription successfully submitted", status: 200 };
    return json(retval);
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
//# sourceMappingURL=_server-f804d82c.js.map
