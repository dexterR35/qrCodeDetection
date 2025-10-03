import React from 'react';
import useDeviceDetection from './hooks/useDeviceDetection';
import './App.css';

function App() {
  const deviceInfo = useDeviceDetection();
  
  // Debug: Log device info to console
  console.log('Device Info:', deviceInfo);

  // Show appropriate download cards based on device
  const getDownloadCards = () => {
    // Linux - show both cards
    if (deviceInfo.isLinux) {
      return {
        title: 'This is Linux',
        cards: [
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
        ]
      };
    }
    
    // Android/Windows phones and tablets
    if (deviceInfo.isAndroid || deviceInfo.isWindows || (deviceInfo.isMobile && deviceInfo.isChrome)) {
      return {
        title: 'This is Windows',
        cards: [{
          url: 'https://www.netbet.it/external_cms/app/NETBET/app-netbet.apk',
          text: 'android dw',
          icon: '📱'
        }]
      };
    }
    
    // iOS/macOS phones and tablets
    if (deviceInfo.isIOS || deviceInfo.isMacOS || (deviceInfo.isMobile && deviceInfo.isSafari)) {
      return {
        title: 'This is Mac',
        cards: [{
          url: 'https://apps.apple.com/it/app/netbet-scommesse-sportive/id6443489319',
          text: 'apple dw',
          icon: '🍎'
        }]
      };
    }
    
    return null;
  };

  const downloadData = getDownloadCards();

  // Debug: Log what we're trying to show
  console.log('Download Data:', downloadData);

  if (!downloadData) {
    // Show fallback for unknown devices
    return (
      <div className="app">
        <main className="app-main">
          <div className="device-info">
            <h1 className="device-title">Unknown Device</h1>
          </div>
          <div className="download-cards-container">
            <div className="download-card">
              <div className="card-icon">📱</div>
              <a href="https://www.netbet.it/external_cms/app/NETBET/app-netbet.apk" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="download-link">
                android dw
              </a>
            </div>
            <div className="download-card">
              <div className="card-icon">🍎</div>
              <a href="https://apps.apple.com/it/app/netbet-scommesse-sportive/id6443489319" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="download-link">
                apple dw
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <main className="app-main">
        <div className="device-info">
          <h1 className="device-title">{downloadData.title}</h1>
        </div>
        <div className="download-cards-container">
          {downloadData.cards.map((card, index) => (
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