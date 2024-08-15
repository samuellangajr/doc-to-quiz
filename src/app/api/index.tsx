const fs = require('fs');
const dotenv = require('dotenv');
const { GoogleGenerativeAI} = require('@google/generative-ai');

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

function fileToGenerativePart(path: string, mimeType: string) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

const filePart1 = fileToGenerativePart("doc.pdf", "application/pdf")

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Make quiz with questions and answers";

  const imageParts = [
    filePart1,
  ];

  const generatedContent = await model.generateContent([prompt, ...imageParts]);
  
  console.log(generatedContent.response.text());
}

run();