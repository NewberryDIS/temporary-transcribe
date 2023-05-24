// import { PrismaClient } from '@prisma/client';
import db from '$lib/database';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	// const { data } = request.body;
	// console.log('request', request);
	// console.log('request.json', request.json());
	const { transc, itemid, pageid } = await request.json();
	try {
		await db.page.update({
			data: {
				transcription: transc
			},
			where: {
				id: pageid
			}
		});
		const retval = { message: 'Transcription successfully submitted' };
		return json(retval, { status: 200 });
	} catch (error) {
		// console.error(error);
		const retval = {
			status: 500,
			body: { message: 'Error submitting value' }
		};
		return json(retval);
	}
}
