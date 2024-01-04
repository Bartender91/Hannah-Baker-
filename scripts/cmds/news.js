const axios = require('axios');

module.exports = {
  config: {
    name: 'news',
    version: '2.0',
    author: 'Subash',
    countDown: 5,
    role: 0,
    longDescription: 'Get the latest news headlines',
    category: 'media',
    guide: {
      en: '{pn}',
    },
  },

  onStart: async function ({ api, event }) {
    try {
      const apiKey = '7604d5d5d7a9411d8b6dd6f1e9c777ca';

      const response = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us&pageSize=10`);

      const articles = response.data.articles;

      if (articles.length > 0) {
        let messageToSend = '📰 Latest News Headlines:\n\n\n';

        articles.forEach((article, index) => {
          messageToSend += `${index + 1}. ${article.title}\n`;
          messageToSend += `   - Source: ${article.source.name}\n`;
          messageToSend += `   - Published: ${new Date(article.publishedAt).toDateString()}\n`;
          messageToSend += `   - Description: ${article.description}\n`;
          messageToSend += `   🔗 URL - ${article.url}\n\n\n`;
        });

        api.sendMessage(messageToSend, event.threadID);
      } else {
        api.sendMessage('No news articles found.', event.threadID);
      }
    } catch (error) {
      console.error(error);
      api.sendMessage('An error occurred while fetching news headlines.', event.threadID);
    }
  },
};