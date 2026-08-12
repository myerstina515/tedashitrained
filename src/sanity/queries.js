export const POSTS_QUERY = `*[
  _type == "post" &&
  defined(slug.current)
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  category[]->{
    _id,
    name,
    slug
  },
  "imageUrl": image.asset->url,
  "imageAlt": image.alt
}`;

export const POST_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  category[]->{
    _id,
    name,
    slug
  },
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  body
}`;

export const CATEGORY_QUERY = `*[
  _type == "category" &&
  defined(slug.current) &&
  count(*[
    _type == "post" &&
    references(^._id)
  ]) > 0
] | order(name asc) {
  _id,
  name,
  slug,
  pinnedPost->{
    _id,
    title,
    slug,
    publishedAt,
    category[]->{
      _id,
      name,
      slug
    },
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }
}`;

export const BLOG_SETTINGS_QUERY = `*[_type == "blogSettings"][0]{
  pinnedPost->{
    _id,
    title,
    slug,
    publishedAt,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }
}`;