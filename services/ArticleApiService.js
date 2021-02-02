import Sanity from '../sanity';

function getPosts() {
  const query = `*[_type == "post" ]{
    title,
    slug,
    publishedAt,
    summary,
    'categories': categories[]->title
  }`;

  return Sanity.fetch(query);
}

function getPostsByCategory(cat) {
  const query = `*[_type == "post" && $category in categories[]->_id]{
    title, slug, publishedAt, summary, categories
  }`;

  return Sanity.fetch(query, { category: cat._id });
}

function getCategories() {
  const categoryQuery = `*[_type == "category" ]{
    _id,
    title,
    description
  }`;
  return Sanity.fetch(categoryQuery);
}

function getArticle() {
  const query = `*[_type == "post" && slug.current == $slug ]{
    title,
    body
  }[0]`;

  return Sanity.fetch(query);
}

function getPostSlugs() {
  const query = `*[_type == "post" ]{
    slug
  }`;

  return Sanity.fetch(query);
}

export {
  getPosts,
  getPostsByCategory,
  getCategories,
  getArticle,
  getPostSlugs,
};
