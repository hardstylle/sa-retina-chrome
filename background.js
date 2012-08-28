


// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  if (change.status == "complete" && tab.url.indexOf('forums.somethingawful.com') > -1) {
  	//console.log(1);
    // ... show the page action.
    //chrome.pageAction.show(tabId);
    //chrome.tabs.executeScript(tabId, {code: 'swapEmoticons();'});
}
);