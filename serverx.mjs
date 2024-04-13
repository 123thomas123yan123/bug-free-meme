// // // // // // // // // // // // // // let a = {
// // // // // // // // // // // // // //   // // // const { Configuration, OpenAIApi } = require("openai");
// // // // // // // // // // // // // //   // // // const readlineSync = require("readline-sync");
// // // // // // // // // // // // // //   // // // require("dotenv").config();
// // // // // // // // // // // // // //   // // // let APIcall = async () => {
// // // // // // // // // // // // // //   // // // const newConfig = new Configuration({
// // // // // // // // // // // // // //   // // // 	apiKey: process.env.OPENAI_SECRET_KEY
// // // // // // // // // // // // // //   // // // });
// // // // // // // // // // // // // //   // // // const openai = new OpenAIApi(newConfig);
// // // // // // // // // // // // // //   // // // const chatHistory = [];
// // // // // // // // // // // // // //   // // // do {
// // // // // // // // // // // // // //   // // // 	const user_input = readlineSync.question("Enter your input: ");
// // // // // // // // // // // // // //   // // // 	const messageList = chatHistory.map(([input_text, completion_text]) => ({
// // // // // // // // // // // // // //   // // // 	role: "user" === input_text ? "ChatGPT" : "user",
// // // // // // // // // // // // // //   // // // 	content: input_text
// // // // // // // // // // // // // //   // // // 	}));
// // // // // // // // // // // // // //   // // // 	messageList.push({ role: "user", content: user_input });
// // // // // // // // // // // // // //   // // // 	try {
// // // // // // // // // // // // // //   // // // 	const GPTOutput = await openai.createChatCompletion({
// // // // // // // // // // // // // //   // // // 		model: "gpt-3.5-turbo",
// // // // // // // // // // // // // //   // // // 		messages: messageList,
// // // // // // // // // // // // // //   // // // 	});
// // // // // // // // // // // // // //   // // // 	const output_text = GPTOutput.data.choices[0].message.content;
// // // // // // // // // // // // // //   // // // 	console.log(output_text);
// // // // // // // // // // // // // //   // // // 	chatHistory.push([user_input, output_text]);
// // // // // // // // // // // // // //   // // // 	} catch (err) {
// // // // // // // // // // // // // //   // // // 	if (err.response) {
// // // // // // // // // // // // // //   // // // 		console.log(err.response.status);
// // // // // // // // // // // // // //   // // // 		console.log(err.response.data);
// // // // // // // // // // // // // //   // // // 	} else {
// // // // // // // // // // // // // //   // // // 		console.log(err.message);
// // // // // // // // // // // // // //   // // // 	}
// // // // // // // // // // // // // //   // // // 	}
// // // // // // // // // // // // // //   // // // } while (readlineSync.question("\nYou Want more Results? (Y/N)").toUpperCase() === "Y");
// // // // // // // // // // // // // //   // // // };
// // // // // // // // // // // // // //   // // // APIcall();
// // // // // // // // // // // // // //   // // // const axios = require("axios");
// // // // // // // // // // // // // //   // // // require("dotenv").config(); // Load environment variables if you use a .env file
// // // // // // // // // // // // // //   // // // const OPENAI_API_KEY = process.env.OPENAI_SECRET_KEY;
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // async function askGPT(question, temperature = 0.5) {
// // // // // // // // // // // // // //   // // //   try {
// // // // // // // // // // // // // //   // // // const response = await axios.post(
// // // // // // // // // // // // // //   // // //   "https://api.openai.com/v1/engines/davinci/completions",
// // // // // // // // // // // // // //   // // //   {
// // // // // // // // // // // // // //   // // // prompt: question,
// // // // // // // // // // // // // //   // // // max_tokens: 150,
// // // // // // // // // // // // // //   // // // temperature: temperature,
// // // // // // // // // // // // // //   // // //   },
// // // // // // // // // // // // // //   // // //   {
// // // // // // // // // // // // // //   // // // headers: {
// // // // // // // // // // // // // //   // // //   Authorization: `Bearer ${OPENAI_API_KEY}`,
// // // // // // // // // // // // // //   // // //   "Content-Type": "application/json",
// // // // // // // // // // // // // //   // // // },
// // // // // // // // // // // // // //   // // //   }
// // // // // // // // // // // // // //   // // // );
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // return response.data.choices[0].text;
// // // // // // // // // // // // // //   // // //   } catch (error) {
// // // // // // // // // // // // // //   // // // console.error("Error making API request:", error);
// // // // // // // // // // // // // //   // // // throw error;
// // // // // // // // // // // // // //   // // //   }
// // // // // // // // // // // // // //   // // // }
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // Example usage:
// // // // // // // // // // // // // //   // // // async function main() {
// // // // // // // // // // // // // //   // // //   try {
// // // // // // // // // // // // // //   // // // const question = "how to ski better";
// // // // // // // // // // // // // //   // // // const response = await askGPT(question);
// // // // // // // // // // // // // //   // // // console.log("GPT-3 Response:", response);
// // // // // // // // // // // // // //   // // //   } catch (error) {
// // // // // // // // // // // // // //   // // // console.error("Error:", error);
// // // // // // // // // // // // // //   // // //   }
// // // // // // // // // // // // // //   // // // }
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // main();
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // import OpenAI from "openai";
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // const openai = new OpenAI({
// // // // // // // // // // // // // //   // // //   apiKey: process.env.OPENAI_API_KEY,
// // // // // // // // // // // // // //   // // // });
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // const chatCompletion = await openai.chat.completions.create({
// // // // // // // // // // // // // //   // // //   messages: [{ role: "user", content: "Say this is a test" }],
// // // // // // // // // // // // // //   // // //   model: "gpt-3.5-turbo",
// // // // // // // // // // // // // //   // // // });
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // console.log(response.choices[0].message.content);
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // import OpenAI from "openai";
// // // // // // // // // // // // // //   // // // import OpenAI from "./node_modules/openai";
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // const openai = new OpenAI({
// // // // // // // // // // // // // //   // // // apiKey: process.env.OPENAI_API_KEY,
// // // // // // // // // // // // // //   // // // });
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // (async () => {
// // // // // // // // // // // // // //   // // // try {
// // // // // // // // // // // // // //   // // // const chatCompletion = await openai.chat.completions.create({
// // // // // // // // // // // // // //   // // // messages: [{ role: "user", content: "what is 8 + 9?" }],
// // // // // // // // // // // // // //   // // // model: "gpt-3.5-turbo",
// // // // // // // // // // // // // //   // // // });
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // Extract the response message from chatCompletion
// // // // // // // // // // // // // //   // // // const responseMessage = chatCompletion.data.choices[0].message.content;
// // // // // // // // // // // // // //   // // // const responseMessage = chatCompletion.choices[0].message.content;
// // // // // // // // // // // // // //   // // // console.log("GPT-3 Response:", responseMessage);
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // console.log("GPT-3 Response:", responseMessage);
// // // // // // // // // // // // // //   // // // } catch (error) {
// // // // // // // // // // // // // //   // // // console.error("Error:", error);
// // // // // // // // // // // // // //   // // // }
// // // // // // // // // // // // // //   // // // })();
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // console.log("a");
// // // // // // // // // // // // // //   // // // console.log(c);
// // // // // // // // // // // // // //   // // // server.js
// // // // // // // // // // // // // //   // // // import pkg from "express";
// // // // // // // // // // // // // //   // // // const { express } = pkg;
// // // // // // // // // // // // // //   // // // import { express } from "express";
// // // // // // // // // // // // // //   // // // import pkg from "express";
// // // // // // // // // // // // // //   // // // const { express } = pkg;
// // // // // // // // // // // // // //   // // // const express = require("express");
// // // // // // // // // // // // // //   // // // const app = express();
// // // // // // // // // // // // // //   // // // const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // const { Configuration, OpenAIApi } = require("openai");
// // // // // // // // // // // // // //   // // // require("dotenv").config();
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // Configure OpenAI
// // // // // // // // // // // // // //   // // // const newConfig = new Configuration({
// // // // // // // // // // // // // //   // // // apiKey: process.env.OPENAI_SECRET_KEY,
// // // // // // // // // // // // // //   // // // });
// // // // // // // // // // // // // //   // // // const openai = new OpenAIApi(newConfig);
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // app.use(express.json());
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // Define an API endpoint for GPT-3 completions
// // // // // // // // // // // // // //   // // // app.post("/api/gpt3", async (req, res) => {
// // // // // // // // // // // // // //   // // // try {
// // // // // // // // // // // // // //   // // // const { question, temperature } = req.body;
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // Your GPT-3 code here (same code as before)
// // // // // // // // // // // // // //   // // // const GPTOutput = await openai.createChatCompletion({
// // // // // // // // // // // // // //   // // // model: "gpt-3.5-turbo",
// // // // // // // // // // // // // //   // // // messages: [
// // // // // // // // // // // // // //   // // // { role: "system", content: "You are a helpful assistant." },
// // // // // // // // // // // // // //   // // // { role: "user", content: question },
// // // // // // // // // // // // // //   // // // ],
// // // // // // // // // // // // // //   // // // temperature: temperature || 0.5,
// // // // // // // // // // // // // //   // // // });
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // const responseMessage = GPTOutput.data.choices[0].message.content;
// // // // // // // // // // // // // //   // // // res.json({ responseMessage });
// // // // // // // // // // // // // //   // // // } catch (error) {
// // // // // // // // // // // // // //   // // // console.error("Error:", error);
// // // // // // // // // // // // // //   // // // res.status(500).json({ error: "An error occurred" });
// // // // // // // // // // // // // //   // // // }
// // // // // // // // // // // // // //   // // // });
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // Start the Express.js server
// // // // // // // // // // // // // //   // // // app.listen(port, () => {
// // // // // // // // // // // // // //   // // // console.log(`Server is running on port ${port}`);
// // // // // // // // // // // // // //   // // // });
// // // // // // // // // // // // // //   // // //
// // // // // // // // // // // // // //   // // // import express from "express";
// // // // // // // // // // // // // //   // // // import dotenv from "dotenv";
// // // // // // // // // // // // // //   // // const express = require("express");
// // // // // // // // // // // // // //   // // const dotenv = require("dotenv");
// // // // // // // // // // // // // //   // // const app = express();
// // // // // // // // // // // // // //   // // const port = process.env.PORT || 3000;
// // // // // // // // // // // // // //   // // dotenv.config();
// // // // // // // // // // // // // //   // // app.use(express.json());
// // // // // // // // // // // // // //   // // app.post("/api/gpt3", (req, res) => {
// // // // // // // // // // // // // //   // //   try {
// // // // // // // // // // // // // //   // //     // Generate a random string
// // // // // // // // // // // // // //   // //     const characters =
// // // // // // // // // // // // // //   // //       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// // // // // // // // // // // // // //   // //     const length = 10;
// // // // // // // // // // // // // //   // //     let answer = "";
// // // // // // // // // // // // // //   // //     for (let i = 0; i < length; i++) {
// // // // // // // // // // // // // //   // //       answer += characters.charAt(
// // // // // // // // // // // // // //   // //         Math.floor(Math.random() * characters.length)
// // // // // // // // // // // // // //   // //       );
// // // // // // // // // // // // // //   // //     }
// // // // // // // // // // // // // //   // //     res.json({ answer });
// // // // // // // // // // // // // //   // //   } catch (error) {
// // // // // // // // // // // // // //   // //     console.error("Error:", error);
// // // // // // // // // // // // // //   // //     res.status(500).json({ error: "An error occurred" });
// // // // // // // // // // // // // //   // //   }
// // // // // // // // // // // // // //   // // });
// // // // // // // // // // // // // //   // // app.listen(port, () => {
// // // // // // // // // // // // // //   // //   console.log(`Server is running on port ${port}`);
// // // // // // // // // // // // // //   // // });
// // // // // // // // // // // // // //   // const express = require("express");
// // // // // // // // // // // // // //   // const app = express();
// // // // // // // // // // // // // //   // const port = 3000;
// // // // // // // // // // // // // //   // // Define an API endpoint that returns data
// // // // // // // // // // // // // //   // app.get("/api/data", (req, res) => {
// // // // // // // // // // // // // //   //   const dataToSend = { message: "Hello from Node.js!" };
// // // // // // // // // // // // // //   //   res.json(dataToSend);
// // // // // // // // // // // // // //   // });
// // // // // // // // // // // // // //   // app.listen(port, () => {
// // // // // // // // // // // // // //   //   console.log(`Server is running on port ${port}`);
// // // // // // // // // // // // // //   // });
// // // // // // // // // // // // // // };
// // // // // // // // // // // // // // const express = require("express");
// // // // // // // // // // // // // // const OpenAI = require("openai");
// // // // // // // // // // // // // // const app = express();
// // // // // // // // // // // // // // const cors = require("cors");
// // // // // // // // // // // // // // const port = 3000;
// // // // // // // // // // // // // // app.use(cors());
// // // // // // // // // // // // // // app.use(express.json());
// // // // // // // // // // // // // // app.listen(port, () => {
// // // // // // // // // // // // // //   console.log(`Server is running on port ${port}`);
// // // // // // // // // // // // // // });

// // // // // // // // // // // // // // var receivedDatax;
// // // // // // // // // // // // // // setInterval(function () {
// // // // // // // // // // // // // //   app.post("/api/sendData", (req, res) => {
// // // // // // // // // // // // // //     var receivedData = req.body;
// // // // // // // // // // // // // //     console.log("Received data from the browser:", receivedData);

// // // // // // // // // // // // // //     if (receivedDatax != receivedData) {
// // // // // // // // // // // // // //       receivedDatax = receivedData;

// // // // // // // // // // // // // //       // import { OpenAIApi } from 'openai';

// // // // // // // // // // // // // //       const openai = new OpenAI({
// // // // // // // // // // // // // //         apiKey: process.env.OPENAI_API_KEY,
// // // // // // // // // // // // // //       });

// // // // // // // // // // // // // //       (async () => {
// // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // //           var chatCompletion = await openai.chat.completions.create({
// // // // // // // // // // // // // //             messages: [{ role: "user", content: receivedDatax }],
// // // // // // // // // // // // // //             model: "gpt-3.5-turbo",
// // // // // // // // // // // // // //           });

// // // // // // // // // // // // // //           // Extract the response message from chatCompletion
// // // // // // // // // // // // // //           // const responseMessage = chatCompletion.data.choices[0].message.content;
// // // // // // // // // // // // // //           var responseMessage = chatCompletion.choices[0].message.content;
// // // // // // // // // // // // // //           console.log("GPT-3 Response:", responseMessage);

// // // // // // // // // // // // // //           // console.log("GPT-3 Response:", responseMessage);
// // // // // // // // // // // // // //           var responseText = responseMessage;
// // // // // // // // // // // // // //           res.send(responseText);
// // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // //           console.error("Error:", error);
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       })();
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   });
// // // // // // // // // // // // // //   receivedDatax = receivedData;
// // // // // // // // // // // // // //   app.listen(port, () => {
// // // // // // // // // // // // // //     console.log(`Server is running on port ${port}`);
// // // // // // // // // // // // // //   });
// // // // // // // // // // // // // // }, 10000);

// // // // // // // // // // // // // // // app.get("/api/data", (req, res) => {
// // // // // // // // // // // // // // // const dataToSend = "Hello from Node.js!";
// // // // // // // // // // // // // // // res.send(dataToSend);
// // // // // // // // // // // // // // // });
// // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // app.listen(port, () => {
// // // // // // // // // // // // // // // console.log(`Server is running on port ${port}`);
// // // // // // // // // // // // // // // });
// // // // // // // // // // // // // const express = require("express");
// // // // // // // // // // // // // const { Configuration, OpenAIApi } = require("openai");
// // // // // // // // // // // // // require("dotenv").config();

// // // // // // // // // // // // // const app = express();
// // // // // // // // // // // // // const port = process.env.PORT || 3000;

// // // // // // // // // // // // // // Configure OpenAI
// // // // // // // // // // // // // const newConfig = new Configuration({
// // // // // // // // // // // // //   apiKey: process.env.OPENAI_SECRET_KEY,
// // // // // // // // // // // // // });
// // // // // // // // // // // // // const openai = new OpenAIApi(newConfig);

// // // // // // // // // // // // // app.use(express.json());

// // // // // // // // // // // // // // Define an API endpoint for GPT-3 completions
// // // // // // // // // // // // // app.post("/api/gpt3", async (req, res) => {
// // // // // // // // // // // // //   try {
// // // // // // // // // // // // //     const { message } = req.body;

// // // // // // // // // // // // //     // Your GPT-3 code here (same code as before)
// // // // // // // // // // // // //     const GPTOutput = await openai.createChatCompletion({
// // // // // // // // // // // // //       model: "gpt-3.5-turbo",
// // // // // // // // // // // // //       messages: [
// // // // // // // // // // // // //         { role: "system", content: "You are a helpful assistant." },
// // // // // // // // // // // // //         { role: "user", content: message },
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //     });

// // // // // // // // // // // // //     const responseMessage = GPTOutput.data.choices[0].message.content;
// // // // // // // // // // // // //     res.json({ responseMessage });
// // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // //     console.error("Error:", error);
// // // // // // // // // // // // //     res.status(500).json({ error: "An error occurred" });
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // });

// // // // // // // // // // // // // // Start the Express.js server
// // // // // // // // // // // // // app.listen(port, () => {
// // // // // // // // // // // // //   console.log(`Server is running on port ${port}`);
// // // // // // // // // // // // // });

// // // // // // // // // // // // const express = require("express");
// // // // // // // // // // // // const { Configuration, OpenAIApi } = require("openai");
// // // // // // // // // // // // require("dotenv").config();

// // // // // // // // // // // // const app = express();
// // // // // // // // // // // // const port = process.env.PORT || 3000;

// // // // // // // // // // // // // Configure OpenAI
// // // // // // // // // // // // const openai = new openai(process.env.OPENAI_SECRET_KEY);

// // // // // // // // // // // // app.use(express.json());

// // // // // // // // // // // // // Define an API endpoint for GPT-3 completions
// // // // // // // // // // // // app.post("/api/gpt3", async (req, res) => {
// // // // // // // // // // // //   try {
// // // // // // // // // // // //     const { message } = req.body;

// // // // // // // // // // // //     // Your GPT-3 code here (same code as before)
// // // // // // // // // // // //     const GPTOutput = await openai.createChatCompletion({
// // // // // // // // // // // //       model: "gpt-3.5-turbo",
// // // // // // // // // // // //       messages: [
// // // // // // // // // // // //         { role: "system", content: "You are a helpful assistant." },
// // // // // // // // // // // //         { role: "user", content: message },
// // // // // // // // // // // //       ],
// // // // // // // // // // // //     });

// // // // // // // // // // // //     const responseMessage = GPTOutput.data.choices[0].message.content;
// // // // // // // // // // // //     res.json({ responseMessage });
// // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // //     console.error("Error:", error);
// // // // // // // // // // // //     res.status(500).json({ error: "An error occurred" });
// // // // // // // // // // // //   }
// // // // // // // // // // // // });

// // // // // // // // // // // // // Start the Express.js server
// // // // // // // // // // // // app.listen(port, () => {
// // // // // // // // // // // //   console.log(`Server is running on port ${port}`);
// // // // // // // // // // // // });
// // // // // // // // // // // const express = require("express");
// // // // // // // // // // // const bodyParser = require("body-parser");
// // // // // // // // // // // const OpenAI = require("openai"); // Import the OpenAI library
// // // // // // // // // // // const cors = require("cors");
// // // // // // // // // // // require("dotenv").config();

// // // // // // // // // // // const app = express();
// // // // // // // // // // // const port = process.env.PORT || 3000;
// // // // // // // // // // // app.use(cors());
// // // // // // // // // // // // Configure OpenAI
// // // // // // // // // // // const openai = new OpenAI({
// // // // // // // // // // //   apiKey: process.env.OPENAI_API_KEY,
// // // // // // // // // // // });

// // // // // // // // // // // app.use(bodyParser.json());

// // // // // // // // // // // // Define an API endpoint for GPT-3 completions
// // // // // // // // // // // app.post("/api/gpt3", async (req, res) => {
// // // // // // // // // // //   try {
// // // // // // // // // // //     const { message } = req.body;

// // // // // // // // // // //     // Use OpenAI to generate a response
// // // // // // // // // // //     const chatCompletion = await openai.chat.completions.create({
// // // // // // // // // // //       messages: [{ role: "user", content: message }],
// // // // // // // // // // //       model: "gpt-3.5-turbo",
// // // // // // // // // // //     });

// // // // // // // // // // //     // Extract the response message from chatCompletion
// // // // // // // // // // //     const responseMessage = chatCompletion.choices[0].message.content;

// // // // // // // // // // //     // Send the response back to the client
// // // // // // // // // // //     res.json({ responseMessage });
// // // // // // // // // // //   } catch (error) {
// // // // // // // // // // //     console.error("Error:", error);
// // // // // // // // // // //     res.status(500).json({ error: "An error occurred" });
// // // // // // // // // // //   }
// // // // // // // // // // // });

// // // // // // // // // // // // Start the Express.js server
// // // // // // // // // // // app.listen(port, () => {
// // // // // // // // // // //   console.log(`Server is running on port ${port}`);
// // // // // // // // // // // });

// // // // // // // // // // // const express = require("express");
// // // // // // // // // // // const bodyParser = require("body-parser");
// // // // // // // // // // // const axios = require("axios"); // Using Axios for HTTP requests
// // // // // // // // // // // const cors = require("cors");
// // // // // // // // // // // require("dotenv").config();
// // // // // // // // // // //
// // // // // // // // // // // const app = express();
// // // // // // // // // // // const port = process.env.PORT || 3000;
// // // // // // // // // // //
// // // // // // // // // // // app.use(cors());
// // // // // // // // // // // app.use(bodyParser.json());
// // // // // // // // // // //
// // // // // // // // // // // Define the URL of your custom GPT model
// // // // // // // // // // // const CUSTOM_GPT_API_ENDPOINT =
// // // // // // // // // // // "https://chat.openai.com/g/g-QO7j0c4PX-technical";
// // // // // // // // // // //
// // // // // // // // // // // Define the API key or access token for authentication if required
// // // // // // // // // // // const CUSTOM_GPT_API_KEY = process.env.OPENAI_SECRET_KEY; // Replace with your actual API key
// // // // // // // // // // //
// // // // // // // // // // // app.post("/api/custom-gpt", async (req, res) => {
// // // // // // // // // // // try {
// // // // // // // // // // // const { message } = req.body;
// // // // // // // // // // //
// // // // // // // // // // // Make an API request to your custom GPT model
// // // // // // // // // // // const response = await axios.post(CUSTOM_GPT_API_ENDPOINT, {
// // // // // // // // // // // Include any required headers or authentication tokens
// // // // // // // // // // // headers: {
// // // // // // // // // // // Authorization: `Bearer ${CUSTOM_GPT_API_KEY}`,
// // // // // // // // // // // Include other headers if necessary
// // // // // // // // // // // },
// // // // // // // // // // // Include the input message
// // // // // // // // // // // input: message,
// // // // // // // // // // // Include other necessary parameters based on the API documentation
// // // // // // // // // // // });
// // // // // // // // // // //
// // // // // // // // // // // Extract the response message based on the structure of the custom GPT's response
// // // // // // // // // // // const responseMessage = response.choices[0].message.content;
// // // // // // // // // // //
// // // // // // // // // // // Send the response back to the client
// // // // // // // // // // // res.json({ responseMessage });
// // // // // // // // // // // } catch (error) {
// // // // // // // // // // // console.error("Error:", error);
// // // // // // // // // // // res.status(500).json({ error: "An error occurred" });
// // // // // // // // // // // }
// // // // // // // // // // // });
// // // // // // // // // // //
// // // // // // // // // // // app.listen(port, () => {
// // // // // // // // // // // console.log(`Server is running on port ${port}`);
// // // // // // // // // // // });
// // // // // // // // // // //

// // // // // // // // // // // const express = require("express");
// // // // // // // // // // // const bodyParser = require("body-parser");
// // // // // // // // // // // const axios = require("axios");
// // // // // // // // // // // const cors = require("cors");
// // // // // // // // // // // require("dotenv").config();
// // // // // // // // // // //
// // // // // // // // // // // const app = express();
// // // // // // // // // // // const port = process.env.PORT || 3000;
// // // // // // // // // // //
// // // // // // // // // // // app.use(cors());
// // // // // // // // // // // app.use(bodyParser.json());
// // // // // // // // // // //
// // // // // // // // // // // const CUSTOM_GPT_API_ENDPOINT =
// // // // // // // // // // // "https://chat.openai.com/g/g-QO7j0c4PX-technical"; // Update this with the correct API endpoint
// // // // // // // // // // // const CUSTOM_GPT_API_KEY = process.env.OPENAI_SECRET_KEY;
// // // // // // // // // // //
// // // // // // // // // // // app.post("/api/custom-gpt", async (req, res) => {
// // // // // // // // // // // try {
// // // // // // // // // // // const { message } = req.body;
// // // // // // // // // // //
// // // // // // // // // // // const response = await axios.post(
// // // // // // // // // // // CUSTOM_GPT_API_ENDPOINT,
// // // // // // // // // // // {
// // // // // // // // // // // prompt: message, // Or any other necessary parameters
// // // // // // // // // // // },
// // // // // // // // // // // {
// // // // // // // // // // // headers: {
// // // // // // // // // // // Authorization: `Bearer ${CUSTOM_GPT_API_KEY}`,
// // // // // // // // // // // "Content-Type": "application/json",
// // // // // // // // // // // },
// // // // // // // // // // // }
// // // // // // // // // // // );
// // // // // // // // // // //
// // // // // // // // // // // Assuming response structure is { choices: [{ text: "response text" }] }
// // // // // // // // // // // const responseMessage = response.data.choices[0].text;
// // // // // // // // // // //
// // // // // // // // // // // res.json({ responseMessage });
// // // // // // // // // // // } catch (error) {
// // // // // // // // // // // console.error("Error:", error);
// // // // // // // // // // // res.status(500).json({ error: "An error occurred: " + error.message });
// // // // // // // // // // // }
// // // // // // // // // // // });
// // // // // // // // // // //
// // // // // // // // // // // app.listen(port, () => {
// // // // // // // // // // // console.log(`Server is running on port ${port}`);
// // // // // // // // // // // });

// // // // // // // // // // const express = require("express");
// // // // // // // // // // const bodyParser = require("body-parser");
// // // // // // // // // // const axios = require("axios");
// // // // // // // // // // const cors = require("cors");
// // // // // // // // // // require("dotenv").config();

// // // // // // // // // // const app = express();
// // // // // // // // // // const port = process.env.PORT || 3000;

// // // // // // // // // // app.use(cors());
// // // // // // // // // // app.use(bodyParser.json());

// // // // // // // // // // // Update this with your custom GPT model's API endpoint
// // // // // // // // // // const CUSTOM_GPT_API_ENDPOINT =
// // // // // // // // // //   "https://chat.openai.com/g/g-QO7j0c4PX-technical";

// // // // // // // // // // // Assuming you're using an API key for authentication
// // // // // // // // // // const CUSTOM_GPT_API_KEY = process.env.OPENAI_SECRET_KEY;

// // // // // // // // // // app.post("/api/custom-gpt", async (req, res) => {
// // // // // // // // // //   try {
// // // // // // // // // //     const { message } = "what is ballast";

// // // // // // // // // //     const response = await axios.post(
// // // // // // // // // //       CUSTOM_GPT_API_ENDPOINT,
// // // // // // // // // //       {
// // // // // // // // // //         prompt: message, // Make sure this aligns with your custom API's expected parameters
// // // // // // // // // //       },
// // // // // // // // // //       {
// // // // // // // // // //         headers: {
// // // // // // // // // //           Authorization: `Bearer ${CUSTOM_GPT_API_KEY}`,
// // // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // // //         },
// // // // // // // // // //       }
// // // // // // // // // //     );

// // // // // // // // // //     // Assuming response structure is similar to OpenAI's GPT models
// // // // // // // // // //     // Update the path according to your custom model's response structure
// // // // // // // // // //     const responseMessage = response.choices[0];

// // // // // // // // // //     res.json({ responseMessage });
// // // // // // // // // //   } catch (error) {
// // // // // // // // // //     console.error("Error:", error);
// // // // // // // // // //     res.status(500).json({ error: "An error occurred: " + error.message });
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // app.listen(port, () => {
// // // // // // // // // //   console.log(`Server is running on port ${port}`);
// // // // // // // // // // });
// // // // // // // // // const express = require("express");
// // // // // // // // // const bodyParser = require("body-parser");
// // // // // // // // // const axios = require("axios");
// // // // // // // // // const cors = require("cors");
// // // // // // // // // require("dotenv").config();

// // // // // // // // // const app = express();
// // // // // // // // // const port = process.env.PORT || 3000;

// // // // // // // // // app.use(cors());
// // // // // // // // // app.use(bodyParser.json());

// // // // // // // // // const CUSTOM_GPT_API_ENDPOINT =
// // // // // // // // //   "https://chat.openai.com/g/g-QO7j0c4PX-technical";
// // // // // // // // // const CUSTOM_GPT_API_KEY = process.env.OPENAI_SECRET_KEY;

// // // // // // // // // app.post("/api/custom-gpt", async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const { message } = "hello";

// // // // // // // // //     const apiResponse = await axios.post(
// // // // // // // // //       CUSTOM_GPT_API_ENDPOINT,

// // // // // // // // //       {
// // // // // // // // //         headers: {
// // // // // // // // //           Authorization: `Bearer ${CUSTOM_GPT_API_KEY}`,
// // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // //           messages: [{ role: "user", content: message }],
// // // // // // // // //         },
// // // // // // // // //       }
// // // // // // // // //     );

// // // // // // // // //     // Log the entire response data for debugging
// // // // // // // // //     console.log("API Response Data:", apiResponse.message);

// // // // // // // // //     // Check if the response data has the expected structure
// // // // // // // // //     if (apiResponse.data.choices && apiResponse.data.choices.length > 0) {
// // // // // // // // //       const responseMessage = apiResponse.data.choices[0].text;
// // // // // // // // //       res.json({ responseMessage });
// // // // // // // // //     } else {
// // // // // // // // //       // Log an error if the expected data is not found
// // // // // // // // //       console.error("Unexpected API response structure:", apiResponse.data);
// // // // // // // // //       res.status(500).json({ error: "Unexpected API response structure" });
// // // // // // // // //     }
// // // // // // // // //   } catch (error) {
// // // // // // // // //     // Log the error
// // // // // // // // //     console.error("Error in API request:", error);
// // // // // // // // //     res.status(500).json({ error: "An error occurred: " + error.message });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // app.listen(port, () => {
// // // // // // // // //   console.log(`Server is running on port ${port}`);
// // // // // // // // // });
// // // // // // // // const axios = require("axios");

// // // // // // // // async function fetchChatGPTResponse(prompt) {
// // // // // // // //   const apiKey = "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"; // Replace with your API key
// // // // // // // //   const url = "https://api.openai.com/v1/engines/gpt-3.5-turbo/completions";

// // // // // // // //   try {
// // // // // // // //     const response = await axios.post(
// // // // // // // //       url,
// // // // // // // //       {
// // // // // // // //         prompt: prompt,
// // // // // // // //         max_tokens: 150,
// // // // // // // //       },
// // // // // // // //       {
// // // // // // // //         headers: {
// // // // // // // //           Authorization: `Bearer ${apiKey}`,
// // // // // // // //           "Content-Type": "application/json",
// // // // // // // //         },
// // // // // // // //       }
// // // // // // // //     );

// // // // // // // //     return response.data;
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error("Error fetching response:", error);
// // // // // // // //     return null;
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // // Example usage
// // // // // // // // fetchChatGPTResponse("Translate 'Hello, world!' into Spanish.")
// // // // // // // //   .then((response) => console.log(response.choices[0].text))
// // // // // // // //   .catch((error) => console.error(error));
// // // // // // // const https = require("https");

// // // // // // // function fetchChatGPTResponse(prompt) {
// // // // // // //   const apiKey = "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"; // Replace with your API key
// // // // // // //   const dataString = JSON.stringify({
// // // // // // //     prompt: prompt,
// // // // // // //     max_tokens: 150,
// // // // // // //   });

// // // // // // //   const options = {
// // // // // // //     hostname: "chat.openai.com",
// // // // // // //     port: 443,
// // // // // // //     path: "/g/g-QO7j0c4PX-technical",
// // // // // // //     method: "POST",
// // // // // // //     headers: {
// // // // // // //       "Content-Type": "application/json",
// // // // // // //       Authorization: `Bearer ${apiKey}`,
// // // // // // //       "Content-Length": dataString.length,
// // // // // // //     },
// // // // // // //   };

// // // // // // //   const req = https.request(options, (res) => {
// // // // // // //     let data = "";

// // // // // // //     res.on("data", (chunk) => {
// // // // // // //       data += chunk;
// // // // // // //     });

// // // // // // //     res.on("end", () => {
// // // // // // //       const response = JSON.parse(data);
// // // // // // //       console.log(response);
// // // // // // //     });
// // // // // // //   });

// // // // // // //   req.on("error", (e) => {
// // // // // // //     console.error(e);
// // // // // // //   });

// // // // // // //   req.write(dataString);
// // // // // // //   req.end();
// // // // // // // }

// // // // // // // // Example usage
// // // // // // // fetchChatGPTResponse("Translate 'Hello, world!' into Spanish.");
// // // // // // // import pkg from "express";
// // // // // // // const { express } = pkg;
// // // // // // // import { express } from "express";
// // // // // // // import pkg from "express";
// // // // // // // const { express } = pkg;
// // // // // // // const express = require("express");
// // // // // // // const app = express();
// // // // // // // const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000
// // // // // // //
// // // // // // // const { Configuration, OpenAIApi } = require("openai");
// // // // // // // require("dotenv").config();
// // // // // // //
// // // // // // // Configure OpenAI
// // // // // // // const newConfig = new Configuration({
// // // // // // // apiKey: process.env.OPENAI_SECRET_KEY,
// // // // // // // });
// // // // // // // const openai = new OpenAIApi(newConfig);
// // // // // // //
// // // // // // // app.use(express.json());
// // // // // // //
// // // // // // // Define an API endpoint for GPT-3 completions
// // // // // // // app.post("/api/gpt3", async (req, res) => {
// // // // // // // try {
// // // // // // // const { question, temperature } = req.body;
// // // // // // //
// // // // // // // Your GPT-3 code here (same code as before)
// // // // // // // const GPTOutput = await openai.createChatCompletion({
// // // // // // // model: "gpt-3.5-turbo",
// // // // // // // messages: [
// // // // // // // { role: "system", content: "You are a helpful assistant." },
// // // // // // // { role: "user", content: question },
// // // // // // // ],
// // // // // // // temperature: temperature || 0.5,
// // // // // // // });
// // // // // // //
// // // // // // // const responseMessage = GPTOutput.data.choices[0].message.content;
// // // // // // // res.json({ responseMessage });
// // // // // // // } catch (error) {
// // // // // // // console.error("Error:", error);
// // // // // // // res.status(500).json({ error: "An error occurred" });
// // // // // // // }
// // // // // // // });
// // // // // // //
// // // // // // // Start the Express.js server
// // // // // // // app.listen(port, () => {
// // // // // // // console.log(`Server is running on port ${port}`);
// // // // // // // });
// // // // // // //
// // // // // // // import express from "express";
// // // // // // // import dotenv from "dotenv";
// // // // // // const express = require("express");
// // // // // // const dotenv = require("dotenv");
// // // // // // const app = express();
// // // // // // const port = process.env.PORT || 3000;
// // // // // // dotenv.config();
// // // // // // app.use(express.json());
// // // // // // app.post("/api/gpt3", (req, res) => {
// // // // // //   try {
// // // // // //     // Generate a random string

// // // // // //     res.json({ answer });
// // // // // //   } catch (error) {
// // // // // //     console.error("Error:", error);
// // // // // //     res.status(500).json({ error: "An error occurred" });
// // // // // //   }
// // // // // // });
// // // // // // app.listen(port, () => {
// // // // // //   console.log(`Server is running on port ${port}`);
// // // // // // });

// // // // // const axios = require("axios");
// // // // // const express = require("express");
// // // // // const app = express();
// // // // // const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000
// // // // // const openai = require("openai");
// // // // // require("openai");
// // // // // require("dotenv").config();
// // // // // const cors = require("cors");

// // // // // // const axios = require("axios");
// // // // // // Configure OpenAI
// // // // // app.use(express.json());
// // // // // app.use(cors());
// // // // // let responseMessage;
// // // // // const endpoint = "https://api.openai.com/v1/chat/completions";
// // // // // var key = "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";
// // // // // // Define an API endpoint for GPT-3 completions
// // // // // app.post("/api/gpt3", async (req, res) => {
// // // // //   try {
// // // // //     var { question, temperature } = req.body;
// // // // //     // Your GPT-3 code here (same code as before)

// // // // //     async function fetchGPTResponse(prompt) {
// // // // //       // const requestData = {
// // // // //       // model: "gpt-3.5-turbo",

// // // // //       // messages: [{ role: "user", content: prompt }],
// // // // //       // };

// // // // //       // const config = {
// // // // //       // headers: {
// // // // //       // Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`, // use environment variable
// // // // //       // "Content-Type": "application/json",
// // // // //       // },
// // // // //       // };

// // // // //       const response = await axios.post(
// // // // //         "https://api.openai.com/v1/chat/completions",
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${key}`, // use environment variable
// // // // //             "Content-Type": "application/json",
// // // // //           },

// // // // //           model: "text-davinci-003",
// // // // //           prompt: "What is the capital of India?",
// // // // //           temperature: 0,
// // // // //           max_tokens: 100,
// // // // //         }
// // // // //       );

// // // // //       return response;
// // // // //       // .choices[0].message.content
// // // // //       // return response.data.choices[0].text;
// // // // //     }

// // // // //     // Example usage
// // // // //     fetchGPTResponse(req.body).then((response) => {
// // // // //       console.log("ChatGPT says:", response);
// // // // //       responseMessage = response;
// // // // //     });

// // // // //     res.json({ responseMessage });
// // // // //   } catch (error) {
// // // // //     console.error("Error:", error);
// // // // //     res.status(500).json({ error: "An error occurred" });
// // // // //   }
// // // // // });
// // // // // // Start the Express.js server
// // // // // app.listen(port, () => {
// // // // //   console.log(`Server is running on port ${port}`);
// // // // // });

// // // // // // const axios = require("axios");
// // // // // // const express = require("express");
// // // // // // const app = express();
// // // // // // const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000
// // // // // // const openai = require("openai");
// // // // // // require("openai");
// // // // // // require("dotenv").config();
// // // // // // const cors = require("cors");
// // // // // //
// // // // // // const axios = require("axios");
// // // // // // Configure OpenAI
// // // // // // app.use(express.json());
// // // // // // app.use(cors());
// // // // // // let responseMessage;
// // // // // // const endpoint = "https://api.openai.com/v1/chat/completions";
// // // // // // const key = "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";
// // // // // // Define an API endpoint for GPT-3 completions
// // // // // // app.post("/api/gpt3", async (req, res) => {
// // // // // // try {
// // // // // // var { question, temperature } = req.body;
// // // // // // Your GPT-3 code here (same code as before)
// // // // // //
// // // // // // async function fetchGPTResponse(prompt) {
// // // // // // const requestData = {
// // // // // // model: "gpt-3.5-turbo",
// // // // // //
// // // // // // messages: [{ role: "user", content: prompt }],
// // // // // // };
// // // // // //
// // // // // // const config = {
// // // // // // headers: {
// // // // // // Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`, // use environment variable
// // // // // // "Content-Type": "application/json",
// // // // // // },
// // // // // // };
// // // // // //
// // // // // // const response = await axios.post(
// // // // // // "https://api.openai.com/v1/chat/completions",
// // // // // // requestData,
// // // // // // config
// // // // // // );
// // // // // // return response;
// // // // // // .choices[0].message.content
// // // // // // return response.data.choices[0].text;
// // // // // // }
// // // // // //
// // // // // // Example usage
// // // // // // fetchGPTResponse(req.body).then((response) => {
// // // // // // console.log("ChatGPT says:", response);
// // // // // // responseMessage = response;
// // // // // // });
// // // // // //
// // // // // // res.json({ responseMessage });
// // // // // // } catch (error) {
// // // // // // console.error("Error:", error);
// // // // // // res.status(500).json({ error: "An error occurred" });
// // // // // // }
// // // // // // });
// // // // // // Start the Express.js server
// // // // // // app.listen(port, () => {
// // // // // // console.log(`Server is running on port ${port}`);
// // // // // // });

// // // // // // Importing required modules
// // // // // // Logging the response data

// // // // // // Function to validate the access key
// // // // // // Making the request

// // // // // // const express = require("express");
// // // // // // const app = express();
// // // // // // const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000
// // // // // // const openai = require("openai");
// // // // // // require("openai");
// // // // // // require("dotenv").config();
// // // // // // const cors = require("cors");
// // // // // //
// // // // // // const axios = require("axios");
// // // // // // Configure OpenAI
// // // // // // app.use(express.json());
// // // // // // app.use(cors());
// // // // // // let responseMessage;
// // // // // // const key = process.env.OPENAI_SECRET_KEY;
// // // // // // Define an API endpoint for GPT-3 completions
// // // // // // app.post("/api/gpt3", async (req, res) => {
// // // // // // try {
// // // // // // var { question, temperature } = req.body;
// // // // // // Your GPT-3 code here (same code as before)
// // // // // //
// // // // // // async function askChatGPT() {
// // // // // // const data = {
// // // // // // model: "gpt-3.5-turbo",
// // // // // // messages: [
// // // // // // {
// // // // // // role: "user",
// // // // // // content: question,
// // // // // // },
// // // // // // ],
// // // // // // };
// // // // // //
// // // // // // try {
// // // // // // const response = await axios.post(
// // // // // // "https://api.openai.com/v1/chat/completions",
// // // // // // data,
// // // // // // {
// // // // // // headers: {
// // // // // // Authorization: `Bearer ${key}`,
// // // // // // "Content-Type": "application/json",
// // // // // // },
// // // // // // }
// // // // // // );
// // // // // //
// // // // // // return response.data.choices[0].message.content;
// // // // // // } catch (error) {
// // // // // // console.error("Error in asking ChatGPT:", error);
// // // // // // return null;
// // // // // // }
// // // // // // }
// // // // // //
// // // // // // Example usage
// // // // // // askChatGPT().then((response) => {
// // // // // // console.log("ChatGPT says:", response);
// // // // // // responseMessage = response;
// // // // // // });
// // // // // //
// // // // // // res.json({ responseMessage });
// // // // // // } catch (error) {
// // // // // // console.error("Error:", error);
// // // // // // res.status(500).json({ error: "An error occurred" });
// // // // // // }
// // // // // // });
// // // // // // Start the Express.js server
// // // // // // app.listen(port, () => {
// // // // // // console.log(`Server is running on port ${port}`);
// // // // // // });
// // // // // //
// // // s
// // import { createRequire } from "module";
// // const require = createRequire(import.meta.url);
// // const axios = require("axios");
// // const express = require("express");
// // const app = express();

// // const port = process.env.PORT || 3000;
// // require("dotenv").config();
// // import { createWorker } from "tesseract.js";
// // const cors = require("cors");

// // app.use(express.json());
// // app.use(cors());
// // var responsex = "public";
// // // Configure OpenAI
// // const endpoint = "https://api.openai.com/v1/chat/completions";

// // // Define an API endpoint for GPT-3 completions
// // app.post("/api/gpt3", async (req, res) => {
// //   const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
// //   const API_KEY = "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"; // Replace with your actual API key
// //   try {
// //     async function askChatGPT() {
// //       try {
// //         const worker = await createWorker("jpn");
// //         var ret = await worker.recognize(req.body.message);
// //         console.log(ret.data.text);
// //         await worker.terminate();
// //         const response = await axios.post(
// //           OPENAI_API_URL,
// //           {
// //             model: "gpt-3.5-turbo", // Adjust the model as necessary
// //             messages: [
// //               {
// //                 role: "system",
// //                 content:
// //                   "You are a helpful assistant that translates whatever the user inputs into engilish",
// //               },
// //               { role: "user", content: ret.data.text },
// //             ],
// //           },
// //           {
// //             headers: {
// //               Authorization: `Bearer ${API_KEY}`,
// //               "Content-Type": "application/json",
// //             },
// //           }
// //         );
// //         responsex = response.data.choices[0].message.content;

// //         return response.data.choices[0].message.content;
// //       } catch (error) {
// //         console.error(
// //           "Error:",
// //           error.response ? error.response.data : error.message
// //         );
// //       }
// //     }

// //     const question = req.body;
// //     askChatGPT()
// //       .then((answer) => {
// //         console.log(answer);
// //         res.json({ response: answer }); // Send response here
// //       })
// //       .catch((error) => {
// //         console.error("Error:", error);
// //         res.status(500).json({ error: "An error occurred" });
// //       });
// //   } catch (error) {
// //     console.error("Error:", error);
// //     res.status(500).json({ error: "An error occurred" });
// //   }
// // });

// // // Start the Express.js server
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });
// // // // server.js
// // // require("dotenv").config();
// // // const express = require("express");
// // // const axios = require("axios");
// // // const cors = require("cors");

// // // const app = express();
// // // const port = 3000; // or any port you prefer

// // // app.use(cors());
// // // app.use(express.json());

// // // const OPENAI_API_KEY = process.env.OPENAI_SECRET_KEY;

// // // app.post("/api/gpt3", async (req, res) => {
// // //   const { message } = req.body;
// // //   try {
// // //     const response = await axios.post(
// // //       "https://api.openai.com/v1/completions",
// // //       {
// // //         model: "text-davinci-003", // or "gpt-3.5-turbo" depending on your use case
// // //         prompt: message,
// // //         temperature: 0.7,
// // //         max_tokens: 150,
// // //       },
// // //       {
// // //         headers: {
// // //           Authorization: `Bearer ${OPENAI_API_KEY}`,
// // //           "Content-Type": "application/json",
// // //         },
// // //       }
// // //     );
// // //     res.json({ response: response.data.choices[0].text });
// // //   } catch (error) {
// // //     console.error("Error calling OpenAI:", error);
// // //     res.status(500).send("Failed to fetch response from OpenAI");
// // //   }
// // // });

// // // app.listen(port, () => console.log(`Server listening on port ${port}`));
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const express = require("express");
// const app = express();
// const cors = require("cors");
// import { createWorker } from "tesseract.js";

// const port = process.env.PORT || 3000;
// require("dotenv").config();

// app.use(express.json());
// app.use(cors());

// // Initialize Tesseract.js worker

// // async function initWorker() {
// // try {
// // await worker.load();
// // console.log("Tesseract.js worker initialized successfully.");
// // } catch (error) {
// // console.error("Failed to initialize Tesseract.js worker:", error);
// // }
// // }
// //
// // await initWorker();

// app.post("/api/gpt3", async (req, res) => {
//   try {
//     // await worker.loadLanguage("jpn");
//     // await worker.initialize("jpn");
//     await (async () => {
//       const worker = await createWorker("jpn");
//       var ret = await worker.recognize(req.body.imagePath);
//       console.log(ret.data.text);
//       await worker.terminate();
//       var outputText = "";
//       data.words.forEach((word) => {
//         const bbox = `(${word.bbox.x0},${word.bbox.y0},${word.bbox.x1},${word.bbox.y1})`;
//         outputText += `${bbox}${word.text}. `;
//       });
//     })().then(res.json({ response: outputText }));

//     // Assuming req.body.imagePath is the path to the image // Send the formatted text with bounding boxes
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const axios = require("axios");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
require("dotenv").config();
import { createWorker } from "tesseract.js";
const cors = require("cors");

app.use(express.json());
app.use(cors());
var responsex = "public";
var pos = "hello";
// Configure OpenAI
const endpoint = "https://api.openai.com/v1/chat/completions";

// Define an API endpoint for GPT-3 completions
app.post("/api/gpt3", async (req, res) => {
  const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = "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"; // Replace with your actual API
  try {
    async function askChatGPT() {
      try {
        const worker = await createWorker("jpn");
        var ret = await worker.recognize(req.body.imagePath);
        console.log(ret.data.text);
        console.log(ret.data.hocr);
        pos = ret.data.hocr;
        // ret.data.hocr.forEach((word) => {
        // const bbox = `(${word.bbox.x0},${word.bbox.y0},${word.bbox.x1},${word.bbox.y1})`;
        // outputText += `${bbox}${word.text}. `;
        // });
        await worker.terminate();

        const response = await axios.post(
          OPENAI_API_URL,
          {
            model: "gpt-3.5-turbo", // Adjust the model as necessary
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful assistant that translates whatever the user inputs into Engilsh expertly like somebody in the maritime field. please use the most expert words that you can think of to translate. if the user feeds you something that is similar to nonesence, try to guess the words and translate. you will be translating japanese into engilsh",
              },
              { role: "user", content: ret.data.text },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        responsex = response.data.choices[0].message.content;

        const secondResponse = await axios.post(
          OPENAI_API_URL,
          {
            model: "gpt-3.5-turbo", // Adjust the model as necessary
            messages: [
              {
                role: "system",
                content: `please correct the engilsh using the jpn, (js format for my code but plain text) please also make the text as expertly as possible like in the maritime field. however, do not make it "beautiful engilsh" just expertly in the field. so only advanced words that are in the maritime field.`,
              },
              {
                role: "user",
                content: `eng: ${responsex} jpn: ${ret.data.text}`,
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        let sresponse = secondResponse.data.choices[0].message.content;
        return [response.data.choices[0].message.content, pos, sresponse];
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      }
    }

    const question = req.body;
    askChatGPT()
      .then((answer) => {
        console.log(answer);
        // res.json({ response: answer }); // Send response here
        // res.json({ position: answer[1].data.hocr });
        res.json({ answer: `${answer[1]}cutspace${answer[2]}` });
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred" });
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
