export const POSTS_QUERY = `*[
  _type == "post" &&
  defined(slug.current)
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}`;

export const POST_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  body
}`;
