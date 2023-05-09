import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/ProjectCardPreview/index.module.scss";
export default function ProjectCardPreview({ data }) {
  console.log("ProjectCardPreview", data);
  return (
    <div>
      <Link href={`/project/${data?.slug}`}>
        <div className={styles.card}>
          <div className={styles.media}>
            {data?.image?.map((i) => (
              <Image
                key={i?.image?.id}
                src={i?.image?.url}
                width={i?.image?.responsiveImage?.width}
                height={320}
                alt={data?.title}
              />
            ))}
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>{data?.eyebrow}</span>
            <h3 className={styles.title}>{data?.title}</h3>
            <h5 className={styles.subtitle}>{data?.subtitle}</h5>
            <div className={styles.description}>
              {data?.description}
              {/* <Markdown>{content}</Markdown> */}
            </div>

            {/* {renderButtons(buttons, styles["card-actions"])} */}
          </div>
        </div>
      </Link>
    </div>
  );
}
