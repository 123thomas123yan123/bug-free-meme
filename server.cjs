// const { Configuration, OpenAIApi } = require("openai");
// const readlineSync = require("readline-sync");
// require("dotenv").config();

// let APIcall = async () => {
// const newConfig = new Configuration({
// 	apiKey: process.env.OPENAI_SECRET_KEY
// });
// const openai = new OpenAIApi(newConfig);

// const chatHistory = [];

// do {
// 	const user_input = readlineSync.question("Enter your input: ");
// 	const messageList = chatHistory.map(([input_text, completion_text]) => ({
// 	role: "user" === input_text ? "ChatGPT" : "user",
// 	content: input_text
// 	}));
// 	messageList.push({ role: "user", content: user_input });

// 	try {
// 	const GPTOutput = await openai.createChatCompletion({
// 		model: "gpt-3.5-turbo",
// 		messages: messageList,
// 	});

// 	const output_text = GPTOutput.data.choices[0].message.content;
// 	console.log(output_text);

// 	chatHistory.push([user_input, output_text]);
// 	} catch (err) {
// 	if (err.response) {
// 		console.log(err.response.status);
// 		console.log(err.response.data);
// 	} else {
// 		console.log(err.message);
// 	}
// 	}
// } while (readlineSync.question("\nYou Want more Results? (Y/N)").toUpperCase() === "Y");
// };
// APIcall();

// const axios = require("axios");
// require("dotenv").config(); // Load environment variables if you use a .env file

// const OPENAI_API_KEY = process.env.OPENAI_SECRET_KEY;
//
// async function askGPT(question, temperature = 0.5) {
//   try {
// const response = await axios.post(
//   "https://api.openai.com/v1/engines/davinci/completions",
//   {
// prompt: question,
// max_tokens: 150,
// temperature: temperature,
//   },
//   {
// headers: {
//   Authorization: `Bearer ${OPENAI_API_KEY}`,
//   "Content-Type": "application/json",
// },
//   }
// );
//
// return response.data.choices[0].text;
//   } catch (error) {
// console.error("Error making API request:", error);
// throw error;
//   }
// }
//
// Example usage:
// async function main() {
//   try {
// const question = "how to ski better";
// const response = await askGPT(question);
// console.log("GPT-3 Response:", response);
//   } catch (error) {
// console.error("Error:", error);
//   }
// }
//
// main();
//

// import OpenAI from "openai";
//
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
//
// const chatCompletion = await openai.chat.completions.create({
//   messages: [{ role: "user", content: "Say this is a test" }],
//   model: "gpt-3.5-turbo",
// });
//
// console.log(response.choices[0].message.content);
//

// import OpenAI from "openai";
// import OpenAI from "./node_modules/openai";
//
// const openai = new OpenAI({
// apiKey: process.env.OPENAI_API_KEY,
// });
//
// (async () => {
// try {
// const chatCompletion = await openai.chat.completions.create({
// messages: [{ role: "user", content: "what is 8 + 9?" }],
// model: "gpt-3.5-turbo",
// });
//
// Extract the response message from chatCompletion
// const responseMessage = chatCompletion.data.choices[0].message.content;
// const responseMessage = chatCompletion.choices[0].message.content;
// console.log("GPT-3 Response:", responseMessage);
//
// console.log("GPT-3 Response:", responseMessage);
// } catch (error) {
// console.error("Error:", error);
// }
// })();
//
// console.log("a");
// console.log(c);

// server.js
// import { express } from "express";
import pkg from "express";
const { Express } = pkg;

const app = Express();
const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

// Configure OpenAI
const newConfig = new Configuration({
  apiKey: process.env.OPENAI_SECRET_KEY,
});
const openai = new OpenAIApi(newConfig);

app.use(Express.json());

// Define an API endpoint for GPT-3 completions
app.post("/api/gpt3", async (req, res) => {
  try {
    const { question, temperature } = req.body;

    // Your GPT-3 code here (same code as before)
    const GPTOutput = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: question },
      ],
      temperature: temperature || 0.5,
    });

    const responseMessage = GPTOutput.data.choices[0].message.content;
    res.json({ responseMessage });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
