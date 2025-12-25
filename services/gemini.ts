
import { GoogleGenAI } from "@google/genai";

export class AIService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async summarizePost(content: string, language: 'ar' | 'en' = 'en') {
    try {
      const prompt = language === 'ar' 
        ? `لخص هذا المقال في 3 نقاط رئيسية وبسيطة: ${content}`
        : `Summarize the following blog post content into 3 concise bullet points: ${content}`;
      
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      return response.text;
    } catch (error) {
      console.error("AI Summarization failed:", error);
      return "Unable to generate summary at this time.";
    }
  }

  async getInsights(topic: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Provide 3 interesting facts about ${topic} for a professional blog sidebar. Keep it very short.`,
      });
      return response.text;
    } catch (error) {
      return null;
    }
  }
}

export const aiService = new AIService();
