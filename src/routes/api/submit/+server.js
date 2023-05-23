// import { PrismaClient } from '@prisma/client';
import db from '$lib/database'
import { json } from "@sveltejs/kit";

export async function POST({request}) {
//   const { data } = request.body;
let {transc, transl, itemid, pageid} = await request.json()
  try {
    await db.page.update({
      data: {
        transcription: transc,
        translation: transl,
      },
      where: {
            id: pageid
        }
    });
    let retval = { message: 'Transcription successfully submitted', status: 200 }
    return json(retval)
  } catch (error) {

      console.error(error);
    let retval = {
        status: 500,
        body: { message: 'Error submitting value' },
      }
    return json(retval)
    
  }

}