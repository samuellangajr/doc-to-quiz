import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

async function handleFile(file: File) {
    const buffer = Buffer.from(await file.arrayBuffer());
    return {
        inlineData: {
            data: buffer.toString("base64"),
            mimeType: file.type,
        },
    };
}

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        const fileBase64 = await handleFile(file);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt =
            "Make a quiz with one question, 4 options, and the answer in JSON format. Just write the JSON. dont put the json title.";
        const generatedContent = await model.generateContent([
            prompt,
            fileBase64,
        ]);

        let quizData;
        try {
            quizData = JSON.parse(generatedContent.response.text());
        } catch {
            return NextResponse.json(
                { error: "Failed to parse JSON response" },
                { status: 500 }
            );
        }

        return NextResponse.json({quizData});
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Failed to generate content" },
            { status: 500 }
        );
    }
}
