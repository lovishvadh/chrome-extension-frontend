chrome.tabs.onUpdated.addListener(function(id, info, tab) {
  if (tab.url.toLowerCase().indexOf("flipkart.com") > -1) {
    chrome.pageAction.show(tab.id);
  }
    if (tab.url.toLowerCase().indexOf("amazon.in") > -1) {
    chrome.pageAction.show(tab.id);
  }
});
