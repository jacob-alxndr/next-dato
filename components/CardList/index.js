import classNames from "classnames";
import styles from "../../styles/components/CardList/index.module.scss";
import CardPreview from "@components/CardPreview";
export default function CardList(props) {
  const {
    eyebrow,
    title,
    cards,
    verticalPaddingTop,
    verticalPaddingBottom,
    verticalPaddingTopMobile,
    verticalPaddingBottomMobile,
    classes,
  } = props;
  return (
    <div
      className={classNames(
        styles.container,
        // styles[`${variant}`],
        // styles[`align--${alignment}`],
        "padding-x-sm",
        `u-vertical-padding--top-${verticalPaddingTop}`,
        `u-vertical-padding--bottom-${verticalPaddingBottom}`,
        {
          [`u-vertical-padding--top-${verticalPaddingTopMobile}-mobile`]:
            verticalPaddingTopMobile,
        },
        {
          [`u-vertical-padding--bottom-${verticalPaddingBottomMobile}-mobile`]:
            verticalPaddingBottomMobile,
        },
        classes
      )}
    >
      <div className={styles.heading}>
        <span>{eyebrow}</span>
        <h1>{title}</h1>
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
