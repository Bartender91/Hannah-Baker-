module.exports = {
  config: {
    name: "offbot",
    version: "1.0",
    author: "Samir",
    countDown: 45,
    role: 2,
    shortDescription: "Turn off bot",
    longDescription: "Turn off bot",
    category: "owner",
    guide: "{p}{n}"
  },
  onStart: async function ({event, api}) {
    api.sendMessage("𝕤𝕡𝕙𝕖𝕣™ 𝕓𝕠𝕥“\n´Successfully Turned Off Archives System",event.threadID, () =>process.exit(0))}
};