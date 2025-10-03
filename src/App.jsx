import React from 'react';
import useDeviceDetection from './hooks/useDeviceDetection';
import './App.css';

function App() {
  const deviceInfo = useDeviceDetection();

  // Show appropriate download cards based on device
  const getDownloadCards = () => {
    // Linux - show both cards
    if (deviceInfo.isLinux) {
      return [
        {
          url: 'https://www.netbet.it/external_cms/app/NETBET/app-netbet.apk',
          text: 'android dw',
          icon: '📱'
        },
        {
          url: 'https://apps.apple.com/it/app/netbet-scommesse-sportive/id6443489319',
          text: 'apple dw',
          icon: '🍎'
        }
      ];
    }
    
    // Android/Windows phones and tablets
    if (deviceInfo.isAndroid || deviceInfo.isWindows || (deviceInfo.isMobile && deviceInfo.isChrome)) {
      return [{
        url: 'https://www.netbet.it/external_cms/app/NETBET/app-netbet.apk',
        text: 'android dw',
        icon: '📱'
      }];
    }
    
    // iOS/macOS phones and tablets
    if (deviceInfo.isIOS || deviceInfo.isMacOS || (deviceInfo.isMobile && deviceInfo.isSafari)) {
      return [{
        url: 'https://apps.apple.com/it/app/netbet-scommesse-sportive/id6443489319',
        text: 'apple dw',
        icon: '🍎'
      }];
    }
    
    return [];
  };

  const downloadCards = getDownloadCards();

  if (downloadCards.length === 0) {
    return null; // Don't show anything if device is not detected
  }

  return (
    <div className="app">
      <main className="app-main">
        <div className="download-cards-container">
          {downloadCards.map((card, index) => (
            <div key={index} className="download-card">
              <div className="card-icon">{card.icon}</div>
              <a href={card.url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="download-link">
                {card.text}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;