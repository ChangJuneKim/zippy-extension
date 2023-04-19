const injectScript = () => {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("src/pages/inject/index.js");

  (document.head || document.documentElement).appendChild(script);
};

export default injectScript;