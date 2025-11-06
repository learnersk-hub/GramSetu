import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.NEXT_PUBLIC_GEMINI_API_KEY!,
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
      }),
    })

    const data = await response.json()
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sorry, I didn’t understand that."

    return NextResponse.json({ reply })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ reply: "Error processing your request." }, { status: 500 })
  }
}
