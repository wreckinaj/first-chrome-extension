document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("changeColor");
    if (button) {
      button.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: () => document.body.style.backgroundColor = "lightblue"
          });
        });
      });
    }
  });
  