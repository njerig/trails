'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

// This will fire when a URL is visited.
chrome.history.onVisited.addListener(function(result) {
  // add tiny iframe with result.url webpage as source
});

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("Extension button clicked");
    chrome.tabs.sendMessage(tab.id, "toggle");
});
