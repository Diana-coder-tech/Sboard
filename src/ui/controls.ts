export const initializeControls = (renderCallback: () => void) => {
    document.getElementById("generate-figure")?.addEventListener("click", () => {
      renderCallback();
    });
  
    document.getElementById("export-pdf")?.addEventListener("click", () => {
      console.log("Exporting to PDF...");
      // Реализовать экспорт в PDF
    });
  };
  