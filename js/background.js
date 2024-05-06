console.log("BACKGROUND PAGE LAUNCHED");

chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {
  if (message.event === 'request-permission') {
    chrome.permissions.request({permissions: [message.permission]},(granted) => {
      if(granted) {
        console.log("GRANTED");
      }
      else {
        console.log("DENIED");
      }
    });
  }
});