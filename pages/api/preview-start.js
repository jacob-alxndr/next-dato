import url from "url";

export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS

  if (req.query.secret !== process.env.PREVIEW_MODE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  //   const post = await getPostBySlug(req.query.slug);

  // If the slug doesn't exist prevent preview mode from being enabled
  //   if (!post) {
  //     return res.status(401).json({ message: "Invalid slug" });
  //   }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  const uri = url.parse(req.query.page || req.query.redirect || "/", true);
  // res.statusCode = 307;
  // res.setHeader("Location", `${req.query.redirect}`);
  // res.end("Preview Start");
  res.redirect(`${uri.pathname}`);
  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
};
