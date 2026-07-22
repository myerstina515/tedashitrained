import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { PortableText } from '@portabletext/react';
import { POST_QUERY } from '../sanity/queries.js';
import './BlogPost.scss';
import client from '../sanity/client.js';

// const POST_QUERY = `*[
//   _type == "post" &&
//   slug.current == $slug
// ][0] {
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
//   },
//   body
// }`;

const BlogPost = () => {
  const { slug } = useParams();

  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);

    client
      .fetch(POST_QUERY, { slug })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((fetchError) => {
        console.error(fetchError);
        setError(fetchError);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <main id="blog-post">
        <p>Loading post...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main id="blog-post">
        <p>Unable to load this blog post.</p>
        <Link to="/blog">Return to blog</Link>
      </main>
    );
  }

  if (!post) {
    return (
      <main id="blog-post">
        <p>Blog post not found.</p>
        <Link to="/blog">Return to blog</Link>
      </main>
    );
  }

  return (
    <main id="blog-post">
      <Link to="/blog">Back to blog</Link>

      <article>
        <h1>{post.title}</h1>

        {post.publishedAt && (
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        )}

        {post.mainImage?.asset?.url && (
          <img
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || post.title}
          />
        )}
        <pre>
          {JSON.stringify(post.body, null, 2)}
        </pre>
        {/* {post.body && <PortableText value={post.body} />} */}
      </article>
    </main>
  );
};

export default BlogPost;