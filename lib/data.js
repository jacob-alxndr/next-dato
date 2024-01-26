export function getAllSlugs(data, type) {
  switch (type) {
    case "project_page":
      return data.map((p) => `/project/${p?.slug}`);
    case "landing_page":
      return data.map((p) => `/${p?.slug}`);
    default:
      return data.map((p) => `/${p?.slug}`);
  }
}
