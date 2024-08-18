chrome.runtime.onInstalled.addListener(() => {
    console.log("Navi gesture installed and ready to use.");
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
  
