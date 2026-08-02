export const APP_CONFIG = {
  appName: "旅行記帳",
  appSubtitle: "兩人旅行公基金與代墊結算",

  // Firebase Console → 專案設定 → 你的應用程式 → SDK 設定與配置
  firebaseConfig: {
    apiKey: "AIzaSyB0ovJeHTHXKhPPbVc2-PPJ7wOBENPIW9g",
    authDomain: "travel-expense-app-9075d.firebaseapp.com",
    projectId: "travel-expense-app-9075d",
    storageBucket: "travel-expense-app-9075d.firebasestorage.app",
    messagingSenderId: "540505145802",
    appId: "1:540505145802:web:9346e8f18ff1fdae904f33"
  },

  // 每天第一次開啟 App 時更新一次；只用於參考台幣總花費，不參與結算。
  exchangeRateApiUrl: "https://open.er-api.com/v6/latest/TWD",

  supportedCurrencies: {
    TWD: { name: "新台幣", symbol: "NT$", decimals: 0 },
    JPY: { name: "日圓", symbol: "¥", decimals: 0 },
    KRW: { name: "韓元", symbol: "₩", decimals: 0 },
    VND: { name: "越南盾", symbol: "₫", decimals: 0 },
    USD: { name: "美元", symbol: "US$", decimals: 2 },
    EUR: { name: "歐元", symbol: "€", decimals: 2 }
  },

  defaultTrip: {
    name: "新的旅程",
    members: ["Eric", "Terry"],
    enabledCurrencies: ["TWD"],
    primaryCurrency: "TWD",
    categories: [
      "餐飲",
      "交通",
      "住宿",
      "景點門票",
      "購物",
      "娛樂",
      "網路／SIM 卡",
      "保險",
      "簽證",
      "小費",
      "手續費",
      "其他"
    ]
  }
};
