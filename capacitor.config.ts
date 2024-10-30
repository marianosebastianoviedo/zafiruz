import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'mso.zafiruz.chllg',
  appName: 'zafiruzapp',
  webDir: 'www',
  server: {
  androidScheme: "https",
  cleartext:true
  },
  plugins: {
    CapacitorHttp:{
      enabled: true
    }
  },
  android: {
    allowMixedContent:true
  }
};

export default config;
