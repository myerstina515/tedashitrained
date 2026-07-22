import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';
import client from '../sanity/client.js';
import { POSTS_QUERY } from '../sanity/queries.js';

// const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
//   _id,
//   title,
//   slug,
//   publishedAt,
//   mainImage {
//     asset-> {
//       _id,
//       url
//     },
//     alt
//   }
// }`;

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    client
      .fetch(POSTS_QUERY)
      .then((data) => setPosts(data))
      .catch((fetchError) => {
        console.error(fetchError);
        setError(fetchError);
      });
  }, []);

  if (error) {
    return (
      <div id="blog">
        <p>Unable to load blog posts.</p>
      </div>
    );
  }

  return (
    <div id="blog">
      <h1>Blog</h1>

      {posts.length === 0 ? (
        <p>Coming Soon!</p>
      ) : (
        posts.map((post) => (
          <article key={post._id}>
            <Link to={`/blog/${post.slug.current}`}>
              <h2>{post.title}</h2>
            </Link>

            {post.publishedAt && (
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            )}
          </article>
        ))
      )}
    </div>
  );
};

export default Blog;