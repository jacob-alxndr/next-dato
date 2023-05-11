import { getAllSlugs, getProjectData } from "@lib/data";
import Link from "next/link";
import Layout from "core/Layout";
import Hero from "@components/Hero";
import GET_ALL_LANDING_PAGES from "operations/queries/getAllLandingPages";
import GET_LANDING_PAGE from "operations/queries/getLandingPages";
import { useRouter } from "next/router";
import { request } from "@lib/datocms";
import dynamic from "next/dynamic";

const components = {
  masthead: {
    comp: dynamic(() => import("@components/Hero")),
    mapping: require(`@components/Hero/mapping`),
  },
  card_list: {
    comp: dynamic(() => import("@components/CardList")),
    mapping: require(`@components/CardList/mapping`),
  },
};
export default function ProjectPage({ data }) {
  const router = useRouter();
  const {
    page: {
      0: { masthead, components: bodyComponents },
    },
    // _site,
    // globalNavigation,
    // globalFooter,
  } = data;

  console.log("masthead", masthead);

  return (
    <div>
      <Layout components={components} data={[masthead, ...bodyComponents]}>
        <main>
          <h3>Dato Next App</h3> <p>Post: {router.query.slug}</p>
          <Link href="/">🔙 back to Home</Link>
        </main>
      </Layout>

      {/* {renderCard(cards)} */}
    </div>
  );
}

export async function getStaticPaths() {
  const data = await request({
    query: GET_ALL_LANDING_PAGES,
    variables: { limit: 10 },
  });
  console.log("getStaticPaths LANDING data", data);
  const paths = getAllSlugs(data?.pages);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("STATIC PROPS", params.slug);
  const data = await request({
    query: GET_LANDING_PAGE,
    variables: { limit: 10, slug: params.slug },
  });
  return {
    props: { data },
  };
}

// export async function getStaticProps({ params }) {
//   const data = await request({
//     query: GET_ALL_CARDS,
//     variables: { limit: 10 },
//   });
//   return {
//     props: { data },
//   };
// }
// export const getStaticProps = ({ params }) => {
//   //   const data = getProjectData(params?.slug);
//   console.log("params", params);
//   return { props: { params } };
// };
