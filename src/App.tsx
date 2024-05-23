import reactLogo from '@src/assets/react.svg'
import viteLogo from '@src/assets/vite.svg'
import { Button } from '@src/component/ui/button'
import { MESSAGE_ACTIONS } from '../shared/constants/chrome-message';

function App() {
  const triggerAlert = async () => {
    const [ currentTab ] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!currentTab?.id) return;

    // send message to service worker
    const response = await chrome.runtime.sendMessage({ action: MESSAGE_ACTIONS.TRIGGER_ALERT });
    console.log(response);

    await chrome.scripting.executeScript({
      target: { tabId: currentTab.id },
      func: () => {
        alert('Hello from the extension!');
      },
    });
  };

  return (
    <main className='flex flex-col items-center gap-4 m-4 min-w-80'>
      <div className='flex justify-center gap-10'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="mx-auto flex flex-col items-center gap-4">
        <Button onClick={triggerAlert}>
          Trigger Alert
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
