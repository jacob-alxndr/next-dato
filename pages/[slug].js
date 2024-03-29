// import { getAllSlugs } from "@lib/data";
// import Link from "next/link";
// import Layout from "core/Layout";
// import GET_ALL_LANDING_PAGES from "operations/queries/getAllLandingPages";
// import GET_LANDING_PAGE from "operations/queries/getLandingPages";
// import { useRouter } from "next/router";
// import { request } from "@lib/datocms";
// import dynamic from "next/dynamic";

// const components = {
//   global_navigation: {
//     comp: dynamic(() => import("@components/Global/GlobalNavigation")),
//     mapping: require("@components/Global/GlobalNavigation/mapping"),
//   },
//   hero: {
//     comp: dynamic(() => import("@components/Hero")),
//     mapping: require(`@components/Hero/mapping`),
//   },
//   card_list: {
//     comp: dynamic(() => import("@components/CardList")),
//     mapping: require(`@components/CardList/mapping`),
//   },
//   demosection: {
//     comp: dynamic(() => import("@components/DemoSection")),
//     mapping: require(`@components/DemoSection/mapping`),
//   },
// };

// export default function ProjectPage({ data }) {
//   const router = useRouter();

//   const {
//     page: {
//       0: { hero, components: bodyComponents },
//     },
//     // _site,
//     globalNavigation,
//     globalFooter,
//   } = data;

//   return (
//     <div>
//       <Layout
//         components={components}
//         data={[hero, ...bodyComponents]}
//         navigationData={globalNavigation}
//         footerData={globalFooter}
//       >
//         {/* <main>
//           <Link href="/">🔙 back to Home</Link>
//         </main> */}
//       </Layout>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const data = await request({
//     query: GET_ALL_LANDING_PAGES,
//     variables: { limit: 10 },
//   });
//   // console.log("getStaticPaths LANDING data", data);
//   const paths = getAllSlugs(data?.pages, "landing_page");

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   // console.log("STATIC PROPS", params.slug);
//   const data = await request({
//     query: GET_LANDING_PAGE,
//     variables: { limit: 10, slug: params.slug },
//   });
//   return {
//     props: { data },
//   };
// }
