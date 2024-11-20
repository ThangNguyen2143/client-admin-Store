import "./assets/pspdfkit.js";

const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;

(async () => {
  const instance = await PSPDFKit.load({
    baseUrl,
    document: "/document.pdf", // Path to the PDF document.
    container: "#pspdfkit",
  });
})();
