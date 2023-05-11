export function getAllSlugs(data) {
  let slugs = data.map((p) => `/project/${p?.slug}`);
  console.log("slugs", slugs);
  return slugs;
}
