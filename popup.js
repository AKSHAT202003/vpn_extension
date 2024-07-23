document.getElementById('connect').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'connect' });
  });
  
  document.getElementById('disconnect').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'disconnect' });
  });
  