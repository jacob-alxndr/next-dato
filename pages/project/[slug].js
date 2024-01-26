import { getAllSlugs } from "@lib/data";
import Link from "next/link";
import Layout from "core/Layout";
import GET_ALL_LANDING_PAGES from "operations/queries/getAllLandingPages";
import GET_LANDING_PAGE from "operations/queries/getLandingPages";
import { useRouter } from "next/router";
import { request } from "@lib/datocms";
import dynamic from "next/dynamic";
import { Content } from "next/font/google";

const components = {
  global_navigation: {
    comp: dynamic(() => import("@components/Global/GlobalNavigation")),
    mapping: require("@components/Global/GlobalNavigation/mapping"),
  },
  hero: {
    comp: dynamic(() => import("@components/Hero")),
    mapping: require(`@components/Hero/mapping`),
  },
  card_list: {
    comp: dynamic(() => import("@components/CardList")),
    mapping: require(`@components/CardList/mapping`),
  },
  demosection: {
    comp: dynamic(() => import("@components/DemoSection")),
    mapping: require(`@components/DemoSection/mapping`),
  },
};

export default function ProjectPage({ data, preview }) {
  const router = useRouter();

  const {
    page: {
      0: { hero, components: bodyComponents },
    },
    // _site,
    globalNavigation,
    globalFooter,
  } = data;
  console.log("preview", preview);
  return (
    <div>
      <Layout
        components={components}
        data={[hero, ...bodyComponents]}
        navigationData={globalNavigation}
        footerData={globalFooter}
        preview={preview}
      />
    </div>
  );
}

export async function getStaticPaths({ preview }) {
  const data = await request({
    query: GET_ALL_LANDING_PAGES,
    variables: { limit: 10 },
    preview,
    includeDrafts: preview,
  });
  const paths = getAllSlugs(data?.pages, "project_page");

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview }) {
  const data = await request({
    query: GET_LANDING_PAGE,
    variables: { limit: 10, slug: params.slug },
    preview,
    includeDrafts: preview,
  });
  return {
    props: { data, preview: !!preview },
  };
}
