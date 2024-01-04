const axios = require('axios');

const Prefixes = [
  'termux',
  'ai',
];

module.exports = {
  config: {
    name: "ai",
    Aliases: ["Elohime"],
    version: 1.0,
    author: "OtinXSandip", // edited by Elohime hatake
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      const a = "repl";
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("╭────────────⦿\n│𝐇𝐞𝐥𝐥𝐨! 𝐈'𝐦 𝐄𝐥𝐨𝐡𝐢𝐦𝐞'𝐬 𝐁𝐨𝐭, │𝐘𝐨𝐮𝐫 𝐇𝐞𝐥𝐩𝐟𝐮𝐥 𝐀𝐢 𝐀𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭! │😄 𝐇𝐨𝐰 𝐂𝐚𝐧 𝐈 𝐀𝐬𝐬𝐢𝐬𝐭 𝐘𝐨𝐮 │𝐓𝐨𝐝𝐚𝐲?😊\n╰────────────⦿");
        return;
      }


      await message.reply("╭────────────⦿\n│𝐘𝐨𝐮𝐫 𝐑𝐞𝐩𝐥𝐲 𝐋𝐨𝐚𝐝𝐢𝐧𝐠, 𝐏𝐥𝐞𝐚𝐬𝐞 │𝐖𝐚𝐢𝐭\n╰────────────⦿");
     
      api.setMessageReaction("🛀🏾", event.messageID, () => {}, true);
      const response = await axios.get(`https://sdxl.otinxsandeep.${a}.co/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 api.setMessageReaction("💁🏾‍♂", event.messageID, () => {}, true);
    await message.reply(answer);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};