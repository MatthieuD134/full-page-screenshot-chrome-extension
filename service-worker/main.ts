chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("[Service Worker] Message received: ", message, sender);
  sendResponse("Hello from the service worker!");
});
