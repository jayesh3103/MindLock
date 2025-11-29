import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export class AIService {
  constructor() {
    this.model = genAI.getGenerativeModel({ model: "gemini-pro" });
  }

  /**
   * Generates a response from the AI model based on the chat history.
   * @param history - Array of previous messages
   * @param message - Current user message
   */
  async generateResponse(history, message) {
    try {
      const chat = this.model.startChat({
        history: history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.parts }],
        })),
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error generating AI response:", error);
      return "I'm having trouble connecting to my cognitive core. Please try again.";
    }
  }

  /**
   * Analyzes the sentiment of a given text.
   * Returns a sentiment score (-1 to 1) and a label.
   */
  async analyzeSentiment(text) {
    // In a real app, we might use a specific sentiment model or prompt engineering.
    // For this hackathon, we'll use a prompt.
    const prompt = `Analyze the sentiment of the following text. Return a JSON object with "score" (number between -1.0 and 1.0) and "label" (one of: "Positive", "Negative", "Neutral", "Anxious", "Hopeful"). Text: "${text}"`;
    
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const textResponse = response.text();
      
      // Basic cleaning to handle potential markdown code blocks
      const jsonString = textResponse.replace(/```json/g, "").replace(/```/g, "").trim();
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
      return { score: 0, label: "Neutral" };
    }
  }
}
