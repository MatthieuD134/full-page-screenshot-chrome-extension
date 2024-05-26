import reactLogo from "@src/assets/react.svg";
import viteLogo from "@src/assets/vite.svg";
import { Button } from "@src/component/ui/button";
import { useState } from "react";

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPNG = async () => {
    setIsDownloading(true);

    try {
      const windowId = chrome.windows.WINDOW_ID_CURRENT;

      chrome.tabs.captureVisibleTab(
        windowId,
        {
          format: "png",
        },
        (dataURL) => {
          const link = document.createElement("a");
          link.href = dataURL;
          link.download = "screenshot.png";
          link.click();
          link.remove();
          setIsDownloading(false);
        },
      );
    } catch (error) {
      console.error(error);
      setIsDownloading(false);
    }
  };

  return (
    <main className="m-4 flex min-w-80 flex-col items-center gap-4">
      <div className="flex justify-center gap-10">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="mx-auto flex flex-col items-center gap-4">
        <Button disabled={isDownloading} onClick={downloadPNG}>
          Download PNG
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </main>
  );
}

export default App;
