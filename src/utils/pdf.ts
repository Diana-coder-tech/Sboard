import * as fs from "fs";
import  SkiaWrapper from "../SkiaWrapper";

export const exportToPDF = (skiaWrapper: SkiaWrapper, fileName: string) => {
  const pdfData = skiaWrapper.generatePDF();
  fs.writeFileSync(fileName, pdfData);
  console.log(`PDF exported as ${fileName}`);
};
