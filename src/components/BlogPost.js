import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { POST_QUERY } from '../sanity/queries.js';
import './BlogPost.scss';
import client from '../sanity/client.js';
import urlBuilder from '@sanity/image-url';

const builder = urlBuilder(client);

const getImageUrl = (source) => {
  return builder.image(source);
};

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <img
          className="blog-post-inline-image"
          src={getImageUrl(value)}
          alt={value.alt || ''}
        />
      );
    },
  },
};
const formatDate = (date) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));

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
        console.log('BLOG POST:', data);
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
        <p className="blog-post-status">Loading post...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main id="blog-post">
        <p className="blog-post-status">
          Unable to load this blog post.
        </p>
        <Link className="blog-post-back-link" to="/blog">
          Return to blog
        </Link>
      </main>
    );
  }

  if (!post) {
    return (
      <main id="blog-post">
        <p className="blog-post-status">Blog post not found.</p>
        <Link className="blog-post-back-link" to="/blog">
          Return to blog
        </Link>
      </main>
    );
  }

  return (
    <main id="blog-post">
      <div className="blog-post-container">
        <Link className="blog-post-back-link" to="/blog">
          <span aria-hidden="true">←</span> Back to blog
        </Link>

        <article>
          {post.imageUrl && (
            <div className="blog-post-hero">
              <img
                src={post.imageUrl}
                alt={post.imageAlt || post.title}
              />
            </div>
          )}

          <header className="blog-post-heading">
            <p className="blog-post-eyebrow">
              Forever Body Fitness
            </p>

            <h1>{post.title}</h1>

            {post.publishedAt && (
              <time
                className="blog-post-date"
                dateTime={post.publishedAt}
              >
                {formatDate(post.publishedAt)}
              </time>
            )}
          </header>

          <div className="blog-post-body">
            {/* <pre>
              {JSON.stringify(post.body, null, 2)}
            </pre> */}
            {post.body && (
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            )}
          </div>
        </article>
      </div>
    </main>
  );
};

export default BlogPost;