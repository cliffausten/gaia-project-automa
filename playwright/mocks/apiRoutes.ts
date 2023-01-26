export const mockQuotesAPI = async (page) => {
  await page.route('http://quotes.rest/qod.json', async (route) => {
    const json = {
      contents: {
        quotes: [
          {
            quote: 'Stop complaining. Start creating.',
            author: 'Dale Patridge',
          },
        ],
      },
    };
    await route.fulfill({ json });
  });
};
