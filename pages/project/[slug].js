import { getAllSlugs, getProjectData } from "@lib/data";
import Link from "next/link";
import Hero from "@components/Hero";
import GET_ALL_CARDS from "operations/queries/getAllCards";
import { useRouter } from "next/router";
import { request } from "@lib/datocms";
export default function ProjectPage(props) {
  const router = useRouter();
  const {
    data: {
      allCardLists: {
        0: { cards },
      },
    },
  } = props;

  const slug = router.query.slug;
  const renderCard = (cards) => {
    const [data] = cards.filter((c) => c?.slug === slug);
    return <Hero data={data} />;
  };
  return (
    <div>
      {renderCard(cards)}
      <p>Post: {router.query.slug}</p>
      <Link href="/">🔙 back to Home</Link>
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
  const data = await request({
    query: GET_ALL_CARDS,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}
// export const getStaticProps = ({ params }) => {
//   //   const data = getProjectData(params?.slug);
//   console.log("params", params);
//   return { props: { params } };
// };
