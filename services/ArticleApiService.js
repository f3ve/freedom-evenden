import Sanity from '../sanity';

function getPosts() {
  const query = `*[_type == "post" ] | order(publishedAt desc){
    title,
    slug,
    publishedAt,
    summary,
    'categories': categories[]->title
  }`;

  return Sanity.fetch(query);
}

function getPostsByCategory(category) {
  const query = `*[_type == "post" && $category in categories[]->_id] | order(publishedAt desc){
    title, slug, publishedAt, summary, categories
  }`;

  return Sanity.fetch(query, { category });
}

function getCategories() {
  const categoryQuery = `*[_type == "category" ]{
    _id,
    title,
    description
  }`;
  return Sanity.fetch(categoryQuery);
}

function getArticle(slug) {
  const query = `*[_type == "post" && slug.current == $slug ]{
    title,
    body
  }[0]`;

  return Sanity.fetch(query, { slug });
}

function getPostSlugs() {
  const query = `*[_type == "post" ]{
    slug
  }`;

  return Sanity.fetch(query);
}

function getProjects() {
  const query = `*[_type == 'project'] | order(dateCompleted desc) {
    title,
    description,
    clientRepo,
    live,
    'img': image.asset->url
  }`;
  return Sanity.fetch(query);
}

export {
  getPosts,
  getPostsByCategory,
  getCategories,
  getArticle,
  getPostSlugs,
  getProjects,
};
