import { GoogleGenAI } from "@google/genai";
import { TarotCard } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getTarotReading(question: string, card: TarotCard, isReversed: boolean) {
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `
      你是一位专业的塔罗牌占卜师。
      用户问了一个问题： "${question}"
      抽到的牌是： "${card.name} (${card.nameEn})"
      牌位： ${isReversed ? "逆位" : "正位"}
      
      请根据这张牌的含义（${isReversed ? card.meaningReversed : card.meaningUpright}）和描述（${card.description}），
      为用户提供一段深刻、富有启发性且语气温和的占卜建议。
      
      要求：
      1. 语言优美，富有神秘感。
      2. 针对用户的问题进行分析。
      3. 给出具体的行动建议。
      4. 字数在200字左右。
    `,
  });

  const response = await model;
  return response.text;
}
