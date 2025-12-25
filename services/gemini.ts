
import { GoogleGenAI } from "@google/genai";

export class AIService {
  async summarizePost(content: string, language: 'ar' | 'en' = 'en') {
    // محاولة الحصول على المفتاح من البيئة
    const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || "";
    
    if (!apiKey) {
      return language === 'ar' 
        ? "خدمة الملخص الذكي تتطلب إعداد مفتاح API." 
        : "AI summary requires API key configuration.";
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = language === 'ar' 
        ? `لخص هذا المقال في 3 نقاط رئيسية وبسيطة: ${content}`
        : `Summarize the following blog post content into 3 concise bullet points: ${content}`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      return response.text || (language === 'ar' ? "لم يتمكن الذكاء الاصطناعي من توليد ملخص." : "AI could not generate a summary.");
    } catch (error) {
      console.error("AI Summarization failed:", error);
      return language === 'ar' 
        ? "حدث خطأ أثناء محاولة تلخيص المقال." 
        : "An error occurred while summarizing the post.";
    }
  }
}

export const aiService = new AIService();
