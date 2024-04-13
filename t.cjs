const https = require("https");

// Replace 'YOUR_PROMPT_HERE' with the prompt you want to send to ChatGPT
const data = JSON.stringify({
  prompt: "what is 8 + 9?",
  max_tokens: 100,
});

const options = {
  hostname: "api.openai.com",
  port: 443,
  path: "/v1/engines/davinci-codex/completions",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
    Authorization: `Bearer ${process.env.SECRET}`,
  },
};

const req = https.request(options, (res) => {
  res.setEncoding("utf8");
  let responseBody = "";

  res.on("data", (chunk) => {
    responseBody += chunk;
  });

  res.on("end", () => {
    const response = JSON.parse(responseBody);
    console.log("Response from GPT:", response.choices[0].text);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.write(data);
req.end();
