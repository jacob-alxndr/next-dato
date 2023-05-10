import { getAllSlugs, getProjectData } from "@lib/data";
import ProjectCardPreview from "@components/ProjectCardPreview";
import GET_ALL_CARDS from "operations/queries/getAllCards";

import { request } from "@lib/datocms";
export default function projectPage(props) {
  const { data, slug } = props;

  const renderCard = (cards) => {
    const [cardData] = cards.filter((c) => c?.slug === slug);
    console.log("slug", cardData);
    return <ProjectCardPreview data={cardData} />;
  };
  return (
    <div>
      {/* <h1>{JSON.stringify(data)}</h1> */}
      {renderCard(data?.allCardLists[0]?.cards)}
      {/* <ProjectCardPreview data={data} /> */}
    </div>
  );
}

export async function getStaticPaths() {
  const data = await request({
    query: `query MyQuery {
        allCardLists {
          cards {
            slug
          }
        }
      }`,
    variables: { limit: 10 },
  });
  const paths = getAllSlugs(data?.allCardLists[0]?.cards);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await request({
    query: GET_ALL_CARDS,
    variables: { limit: 10 },
  });
  return {
    props: { slug, data },
  };
}
// export const getStaticProps = ({ params }) => {
//   //   const data = getProjectData(params?.slug);
//   console.log("params", params);
//   return { props: { params } };
// };
