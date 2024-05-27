import { Button } from "@src/component/ui/button";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

import { MESSAGE_ACTIONS } from "../shared/constants/chrome-message";

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPNG = async () => {
    setIsDownloading(true);

    try {
      const windowId = chrome.windows.WINDOW_ID_CURRENT;

      // send message to content script
      const response = await new Promise<{ data: string }>((resolve) => {
        chrome.tabs.query({ active: true, windowId }, (tabs) => {
          chrome.tabs.sendMessage(
            tabs[0].id!,
            { action: MESSAGE_ACTIONS.DOWNLOAD_PDF },
            (response: { data: string }) => {
              resolve(response);
            },
          );
        });
      });

      // download the image
      const link = document.createElement("a");
      link.href = response.data;
      link.download = "screenshot.png";
      link.click();

      setIsDownloading(false);
    } catch (error) {
      console.error(error);
      setIsDownloading(false);
    }
  };

  return (
    <main className="m-4 flex min-w-80 flex-col items-center gap-4">
      <div className="flex justify-center gap-10">
        <img src="/images/512x512.png" alt="Save as PNG logo" className="h-20 w-20" />
      </div>
      <div className="mx-auto flex flex-col items-center gap-4">
        <Button disabled={isDownloading} onClick={downloadPNG}>
          Download PNG
          {isDownloading && <LoaderCircle className="ml-2 animate-spin" />}
        </Button>
      </div>
    </main>
  );
}

export default App;
