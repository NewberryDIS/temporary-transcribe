import type { RequestHandler } from "./$types";

//api transcription GET
export const GET: RequestHandler = async (event) => {
    const options: ResponseInit = {
        status: 418,
        headers: {
            x: 'gon giv datta'
        }
    }
    return new Response('eekamoo', options)
}

//api transcription POST

export const POST: RequestHandler = async (event) => {
    const data = await event.request.formData()
    const transcr = data.get('transc')
    // save transcription

    console.log(transcr)
    return new Response(
        JSON.stringify({ success: true }),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}