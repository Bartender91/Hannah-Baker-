const fs = require('fs');

module.exports = {
  config: {
    name: "noprefix",
    version: "1.0",
    author: "you",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
    usage: {
      en: "no Prefix text"
    }
  },
 
  onStart: async function() {},
  
  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "women":
          message.reply({
            body: "「 Women ☕ 」",
            attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/277344350_525308569024192_5646793957041914637_n.mp3/100086395896173.mp3?_nc_cat=106&ccb=1-7&_nc_sid=7272a8&_nc_ohc=GLyIhd7tp68AX_V4_Z0&_nc_ht=cdn.fbsbx.com&oh=03_AdRW0yunfRkpdlmRYScktpMrECSsplBfTA3jiZfvKNqORw&oe=64EBFB9B&dl=1"),
          });
          await api.setMessageReaction("☕", event.messageID, event.threadID, api);
          break;
        case "yamete":
          message.reply({
            body: "「 Yamete Kudasai 🥺 」",
            attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/317946830_1032613734125252_7064702781424749358_n.mp3/100086395896173.mp3?_nc_cat=105&ccb=1-7&_nc_sid=7272a8&_nc_ohc=1DmPEhlolCAAX_bYxsc&_nc_ht=cdn.fbsbx.com&oh=03_AdRKvF0vJY3lKWaXJqqrl9TemWwB-icGFJT8JTqRTUgCWA&oe=64EBD5FB&dl=1"),
          });
          await api.setMessageReaction("🥺", event.messageID, event.threadID, api); 
          break;
        case "ara":
          message.reply({
            body: "「 ara ara 🥵 」",
            attachment: fs.createReadStream("scripts/cmds/noprefix/ara.mp3"),
          });
          await api.setMessageReaction("🥵", event.messageID, event.threadID, api);
          break;
        case "good night":
          message.reply({
            body: "「 Good Night 🌉 」",
            attachment: await global.utils.getStreamFromURL("https://tinyurl.com/2c7c3ogg"),
          });
          await api.setMessageReaction("🌉", event.messageID, event.threadID, api);
          break;
        case "sus":
          message.reply({
            body: "「 ඞ 」",
            attachment: fs.createReadStream("scripts/cmds/noprefix/sus.mp3"),
          });
          await api.setMessageReaction("😱", event.messageID, event.threadID, api);
          break;
        case "good morning":
          message.reply({
            body: "「 Good Morning 🌄 」",
            attachment: await global.utils.getStreamFromURL("https://tinyurl.com/2cyrdqfs"),
          });
          await api.setMessageReaction("🌄", event.messageID, event.threadID, api);
          break;
        case "yourmom":
          message.reply({
            body: "「 Bujis ki nai? 」",
            attachment: fs.createReadStream("scripts/cmds/noprefix/yourmom.mp3"),
          });
          await api.setMessageReaction("😹", event.messageID, event.threadID, api);
          break;
        case "machikney":
          message.reply({
            body: "「 Machikney 」",
            attachment: fs.createReadStream("scripts/cmds/noprefix/machikney.mp3"),
          });
          await api.setMessageReaction("😡", event.messageID, event.threadID, api);
          break;
        case "randi":
          message.reply({
            body: "「 Randi ko Chora 」",
            attachment: fs.createReadStream("scripts/cmds/noprefix/randi.mp3"),
          });
          await api.setMessageReaction("😾", event.messageID, event.threadID, api);
          break;
        case "omg":
          message.reply({
            body: "「 OMG WoW 😳 」",
            attachment:
              fs.createReadStream("scripts/cmds/noprefix/omg.mp3"),
          });
          await api.setMessageReaction("😲", event.messageID, event.threadID, api);
          break;
        case "bsdk":
          message.reply({
            body: "「 Chala ja Bsdk 」",
            attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.2708-21/365532397_601385598808717_7242344896442123136_n.gif?_nc_cat=109&ccb=1-7&_nc_sid=041f46&_nc_ohc=V1v_dLBMtBMAX8EyORF&_nc_ht=cdn.fbsbx.com&oh=03_AdTo3DOvXguDBbof4RazU27tNdvrdpgKDzWXWPYD0J56dw&oe=64EBA6E4"),
          });
          await api.setMessageReaction("😏", event.messageID, event.threadID, api);
          break;
        case "abey sale":
          message.reply({
            body: "「 Abey sale 」",
            attachment: fs.createReadStream("scripts/cmds/noprefix/sale.mp3"),
          });
          await api.setMessageReaction("😑", event.messageID, event.threadID, api);
          break;
        case "pikachu":
          message.reply({
            body: "「 Pikachu ϞϞ(๑⚈ ․̫ ⚈๑)∩ 」",
            attachment: fs.createReadStream("scripts/cmds/noprefix/pikachu.mp3"),
          });
          await api.setMessageReaction("🐾", event.messageID, event.threadID, api);
          break;
        case "?":
          message.reply({
            body: "「 kya dekh raha hai? 」",
            attachment: fs.createReadStream("scripts/cmds/noprefix/kya.mp3"),
          });
          await api.setMessageReaction("🤔", event.messageID, event.threadID, api);
          break;
        default:
          return; 
      }
    }
  }
};
