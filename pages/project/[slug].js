import { getAllSlugs, getProjectData } from "@lib/data";
import ProjectCardPreview from "@components/ProjectCardPreview";
export default function projectPage(props) {
  const { data } = props;
  console.log("data", data);
  return (
    <div>
      <h1>project page {JSON.stringify(data?.title)}</h1>
      <ProjectCardPreview data={data} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps = ({ params }) => {
  const data = getProjectData(params?.slug);
  return { props: { data } };
};
