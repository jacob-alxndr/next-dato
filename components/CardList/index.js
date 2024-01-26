import styles from "../../styles/components/CardList/index.module.scss";
import CardPreview from "@components/CardPreview";
import clsx from "clsx";
export default function CardList(props) {
  const { eyebrow, title, cards, titleSize, componentPadding, classes } = props;
  // console.log("CardList", props);
  return (
    <div
      id={title}
      className={clsx(
        styles.container,
        // styles[`${variant}`],
        // styles[`align--${alignment}`],
        // "padding-x-sm",
        "padding-x-lg",
        ...(componentPadding && componentPadding),
        classes
      )}
    >
      <div className={styles.heading}>
        {eyebrow && <span>{eyebrow}</span>}
        {title && <div className={clsx(styles.title, `u-heading--${titleSize}`)}>{title}</div>}
      </div>

      {cards && (
        <div className={styles.content}>
          {cards?.map((c, i) => (
            <CardPreview data={c} key={c?.id || i} />
          ))}
        </div>
      )}
    </div>
  );
}
