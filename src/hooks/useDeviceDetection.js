import { useState, useEffect } from 'react';
import { 
  isMobile, 
  isTablet, 
  isAndroid, 
  isIOS, 
  isWindows, 
  isMacOS,
  isLinux,
  isChrome,
  isSafari
} from 'react-device-detect';

const useDeviceDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    // Device Type
    isMobile: false,
    isTablet: false,
    
    // Operating System
    isAndroid: false,
    isIOS: false,
    isWindows: false,
    isMacOS: false,
    isLinux: false,
    
    // Browser
    isChrome: false,
    isSafari: false
  });

  useEffect(() => {
    const detectedInfo = {
      // Device Type
      isMobile,
      isTablet,
      
      // Operating System
      isAndroid,
      isIOS,
      isWindows,
      isMacOS,
      isLinux,
      
      // Browser
      isChrome,
      isSafari
    };
    
    console.log('Detected device info:', detectedInfo);
    setDeviceInfo(detectedInfo);
  }, []);

  return deviceInfo;
};

export default useDeviceDetection;
