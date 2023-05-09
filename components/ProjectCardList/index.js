import styles from "../../styles/components/ProjectCardList/index.module.scss";
import ProjectCardPreview from "@components/ProjectCardPreview";
export default function ProjectCardList({ data }) {
  const { cards } = data;
  return (
    <div>
      {data && (
        <div className={styles.container}>
          {cards?.map((c) => (
            <ProjectCardPreview data={c} key={c?.id} />
          ))}
        </div>
      )}
    </div>
  );
}
