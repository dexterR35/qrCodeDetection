import { useState, useEffect } from 'react';

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
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();
    
    // Manual detection
    const detectedInfo = {
      // Device Type
      isMobile: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent),
      isTablet: /ipad|android(?!.*mobile)/i.test(userAgent),
      
      // Operating System
      isAndroid: /android/i.test(userAgent),
      isIOS: /iphone|ipad|ipod/i.test(userAgent),
      isWindows: /windows|win32|win64/i.test(userAgent) || /windows/i.test(platform),
      isMacOS: /macintosh|mac os x/i.test(userAgent) || /mac/i.test(platform),
      isLinux: /linux/i.test(userAgent) || /linux/i.test(platform) || /x11/i.test(platform),
      
      // Browser
      isChrome: /chrome/i.test(userAgent) && !/edge|edg/i.test(userAgent),
      isSafari: /safari/i.test(userAgent) && !/chrome/i.test(userAgent)
    };
    
    console.log('User Agent:', userAgent);
    console.log('Platform:', platform);
    console.log('Detected device info:', detectedInfo);
    setDeviceInfo(detectedInfo);
  }, []);

  return deviceInfo;
};

export default useDeviceDetection;
