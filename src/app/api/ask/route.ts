import openai from "@/lib/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let { query } = await req.json();
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Act as though medical assistant and provide answer the users question in markdown format.",
        },
        { role: "user", content: query },
      ],
      temperature: 0,
      model: "ft:gpt-3.5-turbo-0125:personal::9HBhvWQf",
    });
    return NextResponse.json(completion.choices[0])
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
