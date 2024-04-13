import { createWorker } from "tesseract.js";

(async () => {
  const worker = await createWorker("eng");
  var ret = await worker.recognize("./e.jpg");
  console.log(ret.data.text);
  await worker.terminate();
})();
