
import { GoogleGenAI } from "@google/genai";

export class AIService {
  async summarizePost(content: string, language: 'ar' | 'en' = 'en') {
    const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || "";
    
    if (!apiKey) {
      return language === 'ar' 
        ? "خدمة التحليل الذكي تتطلب إعداد مفتاح API." 
        : "AI deal analysis requires API key configuration.";
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = language === 'ar' 
        ? `بصفتك خبير تسوق، حلل هذا المنتج واذكر 3 أسباب قوية تجعل شراءه الآن فرصة لا تفوت، مع التركيز على القيمة مقابل السعر: ${content}`
        : `As a shopping expert, analyze this product and give 3 compelling reasons why buying it now is a great deal, focusing on value for money: ${content}`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      return response.text || (language === 'ar' ? "لم يتمكن الذكاء الاصطناعي من تحليل العرض." : "AI could not analyze the deal.");
    } catch (error) {
      console.error("AI Analysis failed:", error);
      return language === 'ar' 
        ? "حدث خطأ أثناء محاولة تحليل العرض." 
        : "An error occurred while analyzing the deal.";
    }
  }
}

export const aiService = new AIService();
