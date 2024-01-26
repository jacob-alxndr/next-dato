/**
 * Link Resolver
 * This function determines the URL for a given Dato model.
 */
const linkResolver = (model) => {
  let link = "/";
  switch (model?._modelApiKey) {
    case "landing_page":
      return link + `project/${model?.slug}`;
    case "home":
    default:
      return link;
  }
};

export default linkResolver;
