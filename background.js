chrome.runtime.onInstalled.addListener(() => {
    console.log('VPN Extension Installed');
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'connect') {
      connectToVPN();
    } else if (request.action === 'disconnect') {
      disconnectVPN();
    }
  });
  
  function connectToVPN() {
    const vpnConfig = {
      mode: "fixed_servers",
      rules: {
        singleProxy: {
          scheme: "http",
          host: "your-vpn-server-ip",
          port: parseInt("your-vpn-server-port")
        },
        bypassList: ["<local>"]
      }
    };
  
    chrome.proxy.settings.set(
      { value: vpnConfig, scope: "regular" },
      () => {
        console.log("VPN connected.");
      }
    );
  }
  
  function disconnectVPN() {
    const vpnConfig = {
      mode: "direct"
    };
  
    chrome.proxy.settings.set(
      { value: vpnConfig, scope: "regular" },
      () => {
        console.log("VPN disconnected.");
      }
    );
  }
  