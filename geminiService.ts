import { GoogleGenAI } from "@google/genai";
import { TarotCard } from "../constants";

export async function getTarotReading(question: string, card: TarotCard, isReversed: boolean) {
  // 尝试从多个可能的来源获取 Key
  const apiKey = (process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || "").trim();
  
  if (!apiKey || apiKey === "" || apiKey === "undefined" || apiKey === "null") {
    console.error("未检测到有效的 API Key。当前获取到的值为:", apiKey);
    return "系统配置错误：API Key 未生效。请确保在 Vercel 中配置了 VITE_GEMINI_API_KEY 并重新部署。";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const prompt = question.trim() 
      ? `用户问了一个问题： "${question}"`
      : "用户没有提出具体问题，请进行一次综合性的塔罗解读。";

    const model = ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        你是一位专业的塔罗牌占卜师。
        ${prompt}
        抽到的牌是： "${card.name} (${card.nameEn})"
        牌位： ${isReversed ? "逆位" : "正位"}
        
        请根据这张牌的含义（${isReversed ? card.meaningReversed : card.meaningUpright}）和描述（${card.description}），
        为用户提供一段深刻、富有启发性且语气温和的占卜建议。
        
        要求：
        1. 语言优美，富有神秘感。
        2. 针对当前情况进行分析。
        3. 给出具体的行动建议。
        4. 字数在200字左右。
      `,
    });

    const response = await model;
    return response.text;
  } catch (error) {
    console.error("Gemini API 调用失败:", error);
    return "占卜过程中出现了点小问题，可能是网络波动或 API 限制，请稍后再试。";
  }
}
