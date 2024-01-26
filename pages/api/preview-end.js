import url from "url";
export default function handler(req, res) {
  res.clearPreviewData({});
  res.statusCode = 307;
  const uri = url.parse(req.query.page || req.query.redirect || "/", true);
  res.redirect(`${uri.pathname}`);
  // res.setHeader("Location", `${req.query.redirect}`);
  res.end();
}
