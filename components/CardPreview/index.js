import Image from "next/image";
import Link from "next/link";
import styles from "@styles/CardPreview/index.module.scss";
export default function CardPreview({ data }) {
  return (
    <div>
      <Link
        // URL Object
        href={{
          pathname: "/project/[slug]",
          query: { slug: data?.slug },
        }}
        // or
        // URL Path
        // href={`/project/${data?.slug}`}
      >
        <div className={styles.card}>
          <div className={styles.media}>
            {data?.image?.map((img, i) => (
              <Image
                key={img?.id}
                src={img?.image?.url}
                width={img?.image?.responsiveImage?.width}
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
