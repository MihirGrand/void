const CONFIG = new Config({
  crypto: {
    coin: "ETH",
    currency: "USD",
    refreshIn: 10,
  },
  overrideStorage: true,
  temperature: {
    location: "Mumbai",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ff7b95",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
    },
  },
  keybindings: {
    t: "todo-list",
    s: "search-bar",
  },
  disabled: ["crypto-rate", "crypto-popup", "crypto-diff"],
  openLastVisitedTab: false,
  tabs: [
    {
      name: "VOID",
      background_url: "src/img/banners/bg-1.gif",
      categories: [
        {
          name: "work",
          links: [
            {
              url: "https://mail.google.com",
              name: "mail",
              icon: "mail",
              icon_color: "#88d8d8",
            },
            {
              url: "https://docs.google.com",
              name: "docs",
              icon: "file",
              icon_color: "#88d8d8",
            },
          ],
        },
        {
          name: "acad",
          links: [
            {
              name: "gc",
              url: "https://classroom.google.com",
              icon: "school",
              icon_color: "#ff7b95",
            },
          ],
        },
        {
          name: "UTIL",
          links: [
            {
              name: "gpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: "#f0f0f0",
            },
            {
              name: "deepseek",
              url: "https://chat.deepseek.com",
              icon: "fish",
              icon_color: "#f0f0f0",
            },
            {
              name: "wormhole",
              url: "https://wormhole.app",
              icon: "whirl",
              icon_color: "#be196d",
            },
            {
              name: "toffee",
              url: "https://toffeeshare.com/",
              icon: "candy",
              icon_color: "#bf5823",
            },
            {
              name: "cobalt",
              url: "https://cobalt.tools/",
              icon: "cat",
              icon_color: "#f0f0f0",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/bg-3.gif",
      categories: [
        {
          name: "dev",
          links: [
            {
              name: "overflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#FDFD96",
            },
            {
              name: "github",
              url: "https://github.com/mihirgrand/",
              icon: "brand-github",
              icon_color: "#ffffff",
            },
            {
              name: "reg101",
              url: "https://regex101.com/",
              icon: "password",
              icon_color: "#ffffff",
            },
            {
              name: "it-tools",
              url: "https://it-tools.tech/",
              icon: "tool",
              icon_color: "#18a55a",
            },
            {
              name: "leetcode",
              url: "https://leetcode.com/",
              icon: "brand-leetcode",
              icon_color: "#FDFD96",
            },
            {
              name: "UIVerse",
              url: "https://uiverse.io/",
              icon: "square-letter-u",
              icon_color: "#7960f0",
            },
          ],
        },
        {
          name: "design",
          links: [
            {
              name: "coolors",
              url: "https://coolors.co",
              icon: "palette",
              icon_color: "#0066ff",
            },
            {
              name: "phosphor",
              url: "https://phosphoricons.com",
              icon: "parking-circle",
              icon_color: "#c4e456",
            },
            {
              name: "gfonts",
              url: "https://fonts.google.com",
              icon: "brand-google",
              icon_color: "#f0f0f0",
            },
            {
              name: "undraw",
              url: "https://undraw.co/illustrations",
              icon: "user-circle",
              icon_color: "#f0f0f0",
            },
            {
              name: "toools",
              url: "https://toools.design",
              icon: "circles-relation",
              icon_color: "#88d8d8",
            },
            {
              name: "unsplash",
              url: "https://unsplash.com",
              icon: "brand-unsplash",
              icon_color: "#f0f0f0",
            },
            {
              name: "svgrepo",
              url: "https://svgrepo.com",
              icon: "file-type-svg",
              icon_color: "#f0f0f0",
            },
            {
              name: "shades",
              url: "https://maketintsandshades.com/",
              icon: "wash-dry-shade",
              icon_color: "#cb248c",
            },
          ],
        },
      ],
    },
    {
      name: "RELAX",
      background_url: "src/img/banners/bg-2.gif",
      categories: [
        {
          name: "socials",
          links: [
            {
              url: "https://linkedin.com/",
              icon: "brand-linkedin",
              icon_color: "#0072b1",
            },
            {
              url: "https://medium.com/",
              icon: "brand-medium",
              icon_color: "#f0f0f0",
            },
            {
              url: "https://reddit.com/",
              icon: "brand-reddit",
              icon_color: "#FF4500",
            },
            {
              url: "https://dev.to/",
              icon: "square-letter-d",
              icon_color: "#f0f0f0",
            },
            {
              url: "https://deviantart.com/",
              icon: "brand-deviantart",
              icon_color: "#0fcc46",
            },
          ],
        },
        {
          name: "MEDIA",
          links: [
            {
              name: "youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: "#FF0000",
            },
            {
              name: "hive",
              url: "https://hivetoon.com",
              icon: "brand-denodo",
              icon_color: "#FF6961",
            },
            {
              name: "asura",
              url: "https://asuratoon.com",
              icon: "crystal-ball",
              icon_color: "#b19cd9",
            },
          ],
        },
        {
          name: "YOINK",
          links: [
            {
              name: "/fmhy/",
              url: "https://fmhy.net",
              icon: "player-play",
              icon_color: "#F0F0F0",
            },
            {
              name: "piracy",
              url: "https://www.reddit.com/r/Piracy/wiki/megathread/",
              icon: "skull",
              icon_color: "#F0F0F0",
            },
            {
              name: "sftwr",
              url: "https://rentry.co/SoftwarePirates-Megathread",
              icon: "skull",
              icon_color: "#F0F0F0",
            },
          ],
        },
      ],
    },
  ],
});
