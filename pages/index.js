import { request } from "../lib/datocms";
import GET_HOME from "operations/queries/getHome";
import Layout from "core/Layout";
import dynamic from "next/dynamic";
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
  demosection: {
    comp: dynamic(() => import("../components/DemoSection")),
    mapping: require(`../components/DemoSection/mapping`),
  },
  global_footer: {
    comp: dynamic(() => import("../components/Global/GlobalFooter")),
    mapping: require("../components/Global/GlobalFooter/mapping"),
  },
};

export default function Home({ data }) {
  const {
    // home: { hero, components: bodyComponents },
    home: { components: bodyComponents },
    // _site,
    // globalNavigation,
    // globalDrawer,
    globalFooter,
  } = data;

  return (
    // <PageTransition>
    <Layout
      components={components}
      // navigationData={globalNavigation}
      // drawerData={globalDrawer}
      footerData={globalFooter}
      // data={[hero, ...bodyComponents]}
      data={[...bodyComponents]}
    />
    // </PageTransition>
  );
}
export async function getStaticProps(context) {
  const data = await request({
    query: GET_HOME,
    variables: { limit: 10 },
    includeDrafts: context.preview,
    preview: context.preview,
  });
  return {
    props: { data },
  };
}
