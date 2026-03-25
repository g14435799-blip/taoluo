import { GoogleGenAI } from "@google/genai";
import { TarotCard } from "./constants";

export async function getTarotReading(question: string, card: TarotCard, isReversed: boolean) {
  // ✅ 改成 Vite 的环境变量读取方式
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY; 

  if (!apiKey || apiKey === "") {
    console.error("未检测到 API Key，请确保在环境变量中配置了 VITE_GEMINI_API_KEY。");
    return "系统配置错误：缺少 API Key，请联系管理员配置环境变量。";
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const model = ai.models.generateContent({
      model: "gemini-flash-preview",
      contents: [
        `你是一位专业的塔罗占卜师。
用户问了一个问题："${question}"
抽到的牌是：${card.name}(${card.nameEn})
牌位：${isReversed ? "逆位" : "正位"}

请根据这张牌的含义(${isReversed ? card.meaningReversed : card.meaningUpright})和描述(${card.description})
为用户提供一段深刻、富有启发性且语气温和的占卜建议。

要求：
1. 语言优美，富有神秘感。
2. 针对用户的问题进行分析。
3. 给出具体的行动建议。
4. 字数在200字左右。`
      ]
    });

    const response = await model;
    // 补充后续处理逻辑（比如返回结果）
    return response.response.text();
  } catch (error) {
    console.error("占卜请求失败：", error);
    return "占卜过程中出现错误，请稍后再试。";
  }
}
