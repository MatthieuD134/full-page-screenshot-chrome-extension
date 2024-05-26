import html2canvas from "html2canvas";

import { MESSAGE_ACTIONS } from "../shared/constants/chrome-message";

// listen to message
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.action === MESSAGE_ACTIONS.DOWNLOAD_PDF) {
    html2canvas(document.body).then((canvas) => {
      const dataUrl = canvas.toDataURL();
      sendResponse({ data: dataUrl });
    });
  }
  return true;
});
