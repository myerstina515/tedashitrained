import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';
import client from '../sanity/client.js';
import { POSTS_QUERY, CATEGORY_QUERY, BLOG_SETTINGS_QUERY } from '../sanity/queries.js';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [pinnedPost, setPinnedPost] = React.useState(null);

  React.useEffect(() => {
    client
      .fetch(POSTS_QUERY)
      .then(async (posts) => {
        const categories = await client.fetch(CATEGORY_QUERY);
        const blogSettings = await client.fetch(BLOG_SETTINGS_QUERY);

        setPinnedPost(blogSettings?.pinnedPost || null);

        return {
          posts,
          categories,
        };
      })
      .then(({ posts, categories }) => {
        setPosts(posts);
        setCategories(categories);
        setLoading(false);
      })
      .catch((fetchError) => {
        console.error(fetchError);
        setError(fetchError);
        setLoading(false);
      });
  }, []);

  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.category.some((cat) => cat.name === selectedCategory)
      )
    : posts;

  const selectedCategoryData = selectedCategory
    ? categories.find((category) => category.name === selectedCategory)
    : null;

  const activePinnedPost = selectedCategory
    ? selectedCategoryData?.pinnedPost
    : pinnedPost;

  const remainingPosts = filteredPosts.filter(
    (post) => post._id !== activePinnedPost?._id
  );

const displayedPosts = activePinnedPost
  ? [activePinnedPost, ...remainingPosts]
  : filteredPosts;

  if (loading) {
    return (
      <main id="blog">
        <p className="blog-status">Loading posts...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main id="blog">
        <p className="blog-status">Unable to load blog posts.</p>
      </main>
    );
  }

  return (
    <main id="blog">
      <header className="blog-header">
        <p className="blog-eyebrow">Forever Body Fitness</p>
        <h1>Blog</h1>
        <p className="blog-introduction">
          Training guidance, practical fitness education, and strategies for
          building lasting strength.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="blog-status">Coming soon!</p>
      ) : (
        <div className="blog-content">
          <aside className="blog-sidebar">
            <h2>Categories</h2>

            <button type="button" onClick={() => setSelectedCategory(null)}>
              All
            </button>

            {categories.map((category) => (
              <button type="button" key={category._id} onClick={() => setSelectedCategory(category.name)}>
                {category.name}
              </button>
            ))}
          </aside>

        <section className="blog-list" aria-label="Blog posts">
          {displayedPosts.map((post) => (
            <article className="blog-card" key={post._id}>
              <Link className="blog-card-image-link" to={`/blog/${post.slug.current}`} aria-label={`Read ${post.title}`}>
                {post.imageUrl ? (
                  <img className="blog-card-image" src={post.imageUrl} alt={post.imageAlt || post.title}/>
                ) : (
                  <div className="blog-card-image-placeholder">
                    Forever Body Fitness
                  </div>
                )}
              </Link>

              <div className="blog-card-content">
                {post.publishedAt && (
                  <time
                    className="blog-card-date"
                    dateTime={post.publishedAt}
                  >
                    {formatDate(post.publishedAt)}
                  </time>
                )}

                <h2>
                  <Link to={`/blog/${post.slug.current}`}>
                    {post.title}
                  </Link>
                </h2>

                <Link
                  className="blog-card-link"
                  to={`/blog/${post.slug.current}`}
                >
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
        </div>
      )}
    </main>
  );
};

export default Blog;