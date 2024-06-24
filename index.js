import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const app = express();

app.get("/output", async (req, res) => {
  const prompt = req.query.prompt;
  const result = await model.generateContent(prompt);
  console.log(prompt);
  let output =  result.response.text();

  res.send(output);
});

app.listen(3000, () => {
  console.log("http://localhost:" + 3000);
});
