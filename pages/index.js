import fs from 'fs';
import PostList from '../components/posts/post-list';
import generateRSSFeed from '../helpers/build-helpers/generate-rss-feed';
import { getAllPosts, getLatestPosts } from '../helpers/posts-utils';

export default function Home({ posts }) {
  return (
    <>
      <div className='w-full font-Rubik text-gray-800 '>
        <PostList posts={posts} heading='Latest Articles' />
      </div>
    </>
  );
}

export const getStaticProps = () => {
  const data = getLatestPosts();
  const allPost = getAllPosts();
  const feed = generateRSSFeed(allPost);
  // Write the RSS output to a public file, making it
  // accessible at https://markdown-blog-ten-beta.vercel.app/rss.xml
  fs.writeFileSync('public/rss.xml', feed.rss2());

  return {
    props: {
      posts: data,
    },
  };
};
