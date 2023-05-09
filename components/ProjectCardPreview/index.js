import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/ProjectCardPreview/index.module.scss";
export default function ProjectCardPreview({ data }) {
  return (
    <div>
      <Link href={`/project/${data?.slug}`}>
        <div className={styles.card}>
          <div className={styles.media}>
            <Image
              src={data?.image?.src}
              width={800}
              height={400}
              alt={data?.image?.alt}
              // fill={true}
              // imageOptions={{
              //   layout: "fill",
              //   objectFit: "cover",
              //   objectPosition: "50% 50%",
              // }}
            />
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
