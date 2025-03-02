document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("changeColor");
    const button2 = document.getElementById("alertMessage")
    const button3 = document.getElementById("changeTitle")
    if (button1) {
      button1.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: () => document.body.style.backgroundColor = "lightblue"
          });
        });
      });
    }
    if (button2) {
        button2.addEventListener("click", () => {
            alert("Hello from your extension!")
        })
    }
    if (button3) {
        button3.addEventListener("click", () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                  target: { tabId: tabs[0].id },
                  function: () => document.title = "Hello, World!"
                });
              });
        })
    }
  });