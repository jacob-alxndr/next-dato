import styles from "../../styles/components/ProjectCardList/index.module.scss";
import ProjectCardPreview from "@components/ProjectCardPreview";
export default function ProjectCardList({ data }) {
  console.log("props", data);
  return (
    <div>
      {data && (
        <div className={styles.container}>
          {data?.map((p) => (
            <ProjectCardPreview data={p} key={p?.id} />
          ))}
        </div>
      )}
    </div>
  );
}
