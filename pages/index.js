import { getAllSlugs } from "@lib/data";
import { request } from "../lib/datocms";
import GET_ALL_LANDING_PAGES from "operations/queries/getAllLandingPages";
import GET_HOME from "operations/queries/getHome";
import Layout from "core/Layout";
import dynamic from "next/dynamic";
import { useEffect } from "react";
// import PageTransition from "core/PageTransition";
const components = {
  global_navigation: {
    comp: dynamic(() => import("@components/Global/GlobalNavigation")),
    mapping: require("@components/Global/GlobalNavigation/mapping"),
  },
  global_drawer: {
    comp: dynamic(() => import("@components/Global/GlobalDrawer")),
    mapping: require("@components/Global/GlobalDrawer/mapping"),
  },
  hero: {
    comp: dynamic(() => import("@components/Hero")),
    mapping: require(`@components/Hero/mapping`),
  },
  demosection: {
    comp: dynamic(() => import("../components/DemoSection")),
    mapping: require(`../components/DemoSection/mapping`),
  },
  global_footer: {
    comp: dynamic(() => import("../components/Global/GlobalFooter")),
    mapping: require("../components/Global/GlobalFooter/mapping"),
  },
};

export default function Home({ data, preview }) {
  const {
    home: { hero, components: bodyComponents },
    // home: { components: bodyComponents },
    // _site,
    globalNavigation,
    // globalDrawer,
    globalFooter,
  } = data;

  return (
    // <PageTransition>
    <Layout
      components={components}
      navigationData={globalNavigation}
      footerData={globalFooter}
      data={[hero, ...bodyComponents]}
      preview={preview}
      // drawerData={globalDrawer}
      // data={[...bodyComponents]}
    />
    // </PageTransition>
  );
}

export async function getStaticProps(context) {
  const { preview } = context;
  const data = await request({
    query: GET_HOME,
    includeDrafts: preview,
    preview: preview,
  });
  return {
    props: { data, preview: !!preview },
  };
}
