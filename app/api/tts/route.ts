import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { text } = await req.json()

    const response = await fetch(
      "https://texttospeech.googleapis.com/v1/text:synthesize?key=" + process.env.NEXT_PUBLIC_GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: "en-IN", name: "en-IN-Wavenet-D" },
          audioConfig: { audioEncoding: "MP3" },
        }),
      }
    )

    const data = await response.json()
    return NextResponse.json({ audioContent: data.audioContent })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "TTS Error" }, { status: 500 })
  }
}
