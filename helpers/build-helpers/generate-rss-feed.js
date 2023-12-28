import { Feed } from 'feed';
const generateRSSFeed = (articles) => {
  const baseUrl = 'nextjs-markdown-blog-ihyg2x2j4-mikeirlbeck.vercel.app';
  const author = {
    name: 'Mike Irlbeck',
    email: 'software.mikeirlbeck@gmail.com',
    link: 'mikeirlbeck.com',
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: 'Articles by Mike Irlbeck',
    description:
      'Here are articles written by Mike Irlbeck who has a passion for software engineering, philosophy, theology, and writing.',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
  });

  // Add each article to the feed
  articles.forEach((post) => {
    const { content, slug, date, excerpt, title } = post;
    const url = `${baseUrl}/${slug}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      excerpt,
      content,
      author: [author],
      date: new Date(date),
    });
  });

  return feed;
};
export default generateRSSFeed;
