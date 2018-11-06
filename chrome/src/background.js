chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.query({}, (tabs) => {
    tabs.map((tab) =>{
      if(tab.title.includes('TweetDeck')){
        chrome.tabs.insertCSS(tab.id, {file: "src/style.css"});
        chrome.tabs.executeScript(tab.id, {file: "src/clear.js"});
      }
    });
  });
});