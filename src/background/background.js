chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const existing = document.getElementById('deski-widget-frame');
      if (existing) {
        existing.remove(); 
      } else {
        const iframe = document.createElement('iframe');
        iframe.id = 'deski-widget-frame';
        iframe.src = chrome.runtime.getURL('index.html');
        iframe.style.position = 'fixed';
        iframe.style.bottom = '16px';
        iframe.style.right = '16px';
        iframe.style.width = '400px';
        iframe.style.height = '600px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '12px';
        iframe.style.zIndex = '999999';
        iframe.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        iframe.style.resize = 'both';
        iframe.style.overflow = 'auto';
        document.body.appendChild(iframe);
      }
    },
  });
});
