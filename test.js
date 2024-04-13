import { createWorker } from "tesseract.js";

(async () => {
  const worker = await createWorker("eng");
  var ret = await worker.recognize("./t1.jpg");
  console.log(ret.data.text);
  console.log(ret.data.hocr);
  await worker.terminate();
})();

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