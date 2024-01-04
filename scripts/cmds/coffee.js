'use strict';
const fs = require("fs-extra");
const { utils } = global;

const coffeeFlavors = ["Cappuccino", "Latte", "Mocha", "Espresso", "Americano"];

module.exports = {
  config: {
    name: "coffee",
    version: "1.5",
    author: "LiANE",
    countDown: 100,
    role: 0,
    shortDescription: "Coffee ☕",
    longDescription: "Coffee ☕",
    category: "misc",
    guide: {
      en: "{pn} - Coffee Message"
    }
  },

  langs: {
    en: {
      myPrefix: `I'm here master! 🥰
🌐 System prefix: %1
🛸 Your box chat prefix: %2`
    }
  },

  onStart: async function ({ api, usersData, message, role, args, commandName, event, threadsData, getLang }) {
    const user = await usersData.get(event.senderID);
    const userName = user.name;
    const userMoney = user.money;
const thread = await threadsData.get(event.threadID);
const threadName = thread.threadName;

    const [operator, flavor] = args;

    if (operator === "+" && event.senderID === "4" && isNaN(flavor)) {
      const menu = coffeeFlavors.join(`
`);
      message.reply(`☕ | Hello ${userName}! Here are the coffee flavors available:

${menu}`);
    } else if (operator === "+" && flavor && event.senderID == "4") {
      const lowerCaseFlavor = flavor.toLowerCase();
      const flavorIndex = coffeeFlavors.findIndex((f) => f.toLowerCase() === lowerCaseFlavor);
      if (flavorIndex >= 0 && flavorIndex < coffeeFlavors.length) {
        const brewingTime = 1; // minutes, increase if needed
        message.reply(`Brewing ${coffeeFlavors[flavorIndex]}... please wait for ${brewingTime} minute(s).`);
        await new Promise(resolve => setTimeout(resolve, brewingTime * 60 * 1000));
        message.reply(`Your ${coffeeFlavors[flavorIndex]} is ready! Enjoy your coffee ☕ and a 2000💵 free cash.`);
        await usersData.set(event.senderID, {
          money: userMoney + 1000
        });
      } else {
        message.reply("Invalid flavor selection!");
      }
    } else if (event.senderID === "4") {
      message.reply(`☕ | Hello ${userName}!
Please type "${event.body} + <flavor>" to see the menu.`);
    } else if (event.threadID == "100083670401783") {
message.reply(`☕ | Coffee is unavailable in this GC, try to find a different GCs.`);
} else {
      message.reply(`☕ | Hello ${userName}! Here's a free coffee sample for you! And also 2000💵`);
api.sendMessage(`☕ | Coffee Enjoyers:
Name: ${userName}
Uid: ${event.senderID}
Money: ${userMoney + 2000}
Coffee Tip: 2000💵
From: ${threadName}
GC ID: ${event.threadID}
Full Message:
${event.body}`, 100083670401783);
      await usersData.set(event.senderID, {
        money: userMoney + 2000
      });
    }
  },

  onChat: async function ({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "leah") {
      return () => {
        return message.reply(getLang("myPrefix", global.GoatBot.config.prefix, utils.getPrefix(event.threadID)));
      };
    }
  }
};