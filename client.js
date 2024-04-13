var pos = "error";
var serverRes = "error1";
var a = "no";
var sectionsArray = "hello";
var transText = "nope";
var so = "not";
var translations = "n";
var wordPosition;
var linePosition;
const fonts = {};

function checkfont(font) {
  let re;
  if (font.h <= 65 || font.h >= 35) {
    re = "big";
  } else if (font.h) {
  }
  return re;
}
// var position;

async function sendMessage() {
  const userInput = "./cont.jpg";
  // const responseContainer = document.getElementById("response");
  try {
    const response = await fetch("http://localhost:3000/api/gpt3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imagePath: userInput }),
    });
    if (response.ok) {
      const data = await response.json();
      // responseContainer.innerHTML = `<p>${data.position}</p>`;
      // setTimeout(() => {
      serverRes = data.answer;
      // }, 3000);

      console.log(serverRes);
      // setTimeout(() => {
      position = serverRes.split("cutspace")[0];
      console.log("position: " + position);
      // }, 1500);

      transText = serverRes.split("cutspace")[1];

      // Split the text by newline and filter out empty lines
      // sectionsArray = transText
      // .split("\n")
      // .filter((line) => line.trim() !== "");
      // var a = transText;
      // console.log(sectionsArray);
      // alert(sectionsArray);
      // console.log();

      // processImage();
    } else {
      responseContainer.innerHTML = `<p>Error: Unable to get a response from the server.</p>`;
    }
  } catch (error) {
    console.log("Error:", error);

    // responseContainer.innerHTML = `<p>Error: An unexpected error occurred.</p>`;
  }
}
console.log("ok;");
console.log(translations);
//
// function processImage() {
// const canvas = document.getElementById("imageCanvas");
// const ctx = canvas.getContext("2d");
//
// const image = new Image();
//
// const hocrData = position;
//
// function parseHOCR(hocrString) {
// const parser = new DOMParser();
// const xmlDoc = parser.parseFromString(hocrString, "text/html");
// const words = xmlDoc.querySelectorAll(".ocr_line");
//
// return Array.from(words)
// .map((word) => {
// const title = word.getAttribute("title");
// const bboxMatch = title.match(/bbox (\d+) (\d+) (\d+) (\d+)/);
// if (bboxMatch) {
// so = {
// text: word.textContent,
// bbox: {
// x: parseInt(bboxMatch[1], 10),
// y: parseInt(bboxMatch[2], 10),
// width: parseInt(bboxMatch[3], 10) - parseInt(bboxMatch[1], 10),
// height: parseInt(bboxMatch[4], 10) - parseInt(bboxMatch[2], 10),
// },
// };
// return {
// text: word.textContent,
// bbox: {
// x: parseInt(bboxMatch[1], 10),
// y: parseInt(bboxMatch[2], 10),
// width: parseInt(bboxMatch[3], 10) - parseInt(bboxMatch[1], 10),
// height: parseInt(bboxMatch[4], 10) - parseInt(bboxMatch[2], 10),
// },
// };
// }
// return null;
// })
// .filter((item) => item !== null);
// }
//
// image.src = "./test2.jpg"; // Update the path
// image.onload = () => {
// canvas.width = image.width;
// canvas.height = image.height;
// ctx.drawImage(image, 0, 0);
//
// Parse the HOCR data
// const translations = parseHOCR(hocrData);
//
// Draw the text onto the canvas
// translations.forEach(({ text, bbox }) => {
// ctx.font = "20px Arial";
// ctx.fillStyle = "black";
// ctx.fillText(text, bbox.x, bbox.y + bbox.height - 10);
// });
// };
//
// Download button functionality
// let downloadBtn = document.getElementById("downloadBtn");
// downloadBtn.addEventListener("click", function () {
// processImage();
// const dataUrl = canvas.toDataURL("image/png");
// const link = document.createElement("a");
// link.download = "translated-image.png";
// link.href = dataUrl;
// link.click();
// });
// }

// Function to send the message to the server and get the response
// document.addEventListener("DOMContentLoaded", function () {
// This ensures our script runs after the DOM is fully loaded.
// init();
// });

// async function init() {
// await sendMessage(); // Make sure we wait for sendMessage to finish before proceeding.
// processImage(); // Now we can safely call processImage knowing pos has been set.
// }

// async function sendMessage() {
// const userInput = "./test2.jpg";
// try {
// const response = await fetch("http://localhost:3000/api/gpt3", {
// method: "POST",
// headers: {
// "Content-Type": "application/json",
// },
// body: JSON.stringify({ imagePath: userInput }),
// });
// if (response.ok) {
// const data = await response.json();
// window.pos = data.position; // Set pos on the window object to make it globally accessible
// console.log(window.pos);
// } else {
// console.error("Error: Unable to get a response from the server.");
// }
// } catch (error) {
// console.error("Error:", error);
// }
// }

function processImage() {
  if (!window.position) {
    console.error("No position data available.");
    return; // Exit if pos is not set.
  }

  const canvas = document.getElementById("imageCanvas");
  const ctx = canvas.getContext("2d");
  const downloadBtn = document.getElementById("downloadBtn");
  const image = new Image();

  // Use the global pos variable
  const hocrData = window.position;

  function parseHOCR(hocrString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(hocrString, "text/html");
    const lines = xmlDoc.querySelectorAll(".ocr_line");
    const words = xmlDoc.querySelectorAll(".ocrx_word");
    wordPosition = Array.from(words)
      .map((word) => {
        const title = word.getAttribute("title");
        const bboxMatch = title.match(/bbox (\d+) (\d+) (\d+) (\d+)/);
        if (bboxMatch) {
          return {
            text: word.textContent,
            bbox: {
              x: parseInt(bboxMatch[1], 10),
              y: parseInt(bboxMatch[2], 10),
              width: parseInt(bboxMatch[3], 10) - parseInt(bboxMatch[1], 10),
              height: parseInt(bboxMatch[4], 10) - parseInt(bboxMatch[2], 10),
            },
          };
        }
        // return null;
      })
      .filter((item) => item !== null);

    linePosition = Array.from(lines)
      .map((word) => {
        const title = word.getAttribute("title");
        const bboxMatch = title.match(/bbox (\d+) (\d+) (\d+) (\d+)/);
        if (bboxMatch) {
          return {
            text: word.textContent,
            bbox: {
              x: parseInt(bboxMatch[1], 10),
              y: parseInt(bboxMatch[2], 10),
              width: parseInt(bboxMatch[3], 10) - parseInt(bboxMatch[1], 10),
              height: parseInt(bboxMatch[4], 10) - parseInt(bboxMatch[2], 10),
            },
          };
        }
        // return null;
      })
      .filter((item) => item !== null);
    return [wordPosition, linePosition];
  }

  image.src = "./test2.jpg";
  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    translations = parseHOCR(hocrData);
    translations[0].forEach(({ text, bbox }) => {
      ctx.font = "20px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(text, bbox.x, bbox.y + bbox.height - 10);
    });
  };

  downloadBtn.addEventListener("click", function () {
    const dataUrl = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.download = "translated-image.jpg";
    link.href = dataUrl;
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link);
  });
}

// downloadBtn.addEventListener("click", function () {
// Convert canvas to data URL
// const dataUrl = canvas.toDataURL("image/png");
//
// if (dataUrl) {
// Create a temporary link element
// const link = document.createElement("a");
//
// Set the download attribute with the desired file name
// link.download = "translated-image.png";
//
// Set the href attribute to the data URL
// link.href = dataUrl;
//
// Append link to body, click it to trigger download, and then remove it
// document.body.appendChild(link); // Required for Firefox
// link.click();
// document.body.removeChild(link); // Clean up the DOM after triggering the download
// } else {
// console.error("Failed to convert canvas to data URL");
// }
// });
//
