const fs = require('fs');
const moment = require('moment-timezone');
const NepaliDate = require('nepali-date');

module.exports = {
 config: {
 name: "info",
 version: "1.4",
 author: "Ar Bin",
 countDown: 5,
 role: 0,
 shortDescription: {
 vi: "",
 en: "Sends information about the bot and admin along with an image."
 },
 longDescription: {
 vi: "",
 en: "Sends information about the bot and admin along with an image."
 },
 category: "utility",
 guide: {
 en: "{pn}"
 },
 envConfig: {}
 },

 onStart: async function ({ message }) {
 const botName = "jmmy";
 const botPrefix = "+";
 const authorName ="lanceq";
 const authorfb = "Fb.me/100083670401783";
 const status = "single";

 const urls = JSON.parse(fs.readFileSync('zoro.json'));
 const link = urls[Math.floor(Math.random() * urls.length)];

 // Get current date and time in Asia/Kathmandu timezone
 const now = moment().tz('Africa/lusaka');
 const date = now.format('MMMM Do YYYY');
 const time = now.format('h:mm:ss A');

 // Get Nepali date
 const nepaliDate = new NepaliDate(now.toDate());
 const bsDateStr = nepaliDate.format("dddd, DD MMMM");

 // Calculate bot uptime
 const uptime = process.uptime();
 const seconds = Math.floor(uptime % 60);
 const minutes = Math.floor((uptime / 60) % 60);
 const hours = Math.floor((uptime / (60 * 60)) % 24);
 const days = Math.floor(uptime / (60 * 60 * 24));
 const uptimeString = `${hours}hrs: ${minutes}min: ${seconds}sec`;

 message.reply({
 body: `===「 Bot & owner Info 」===
 ❏Bot Name: ${botName}
❏Bot Prefix: ${botPrefix}
❏AuthorName: ${authorName}
❏fb: ${authorfb}
❏Status: ${status}
❏Date: ${date}
❏BsDate: ${bsDateStr}
❏Time: ${time}
❏Bot Running: ${uptimeString}
=====================`,
 attachment: await global.utils.getStreamFromURL(link)
 });
 },

 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "info") {
 this.onStart({ message });
 }
 }
};