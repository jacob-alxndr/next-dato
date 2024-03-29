import React from "react";
import styles from "@styles/GlobalFooter/index.module.scss";
import clsx from "clsx";
import { renderButtons } from "@components/UtilityComponents/Button/utils";
import Button from "@components/UtilityComponents/Button";
import { useStore } from "@lib/store";
import { useTheme } from "@lib/ctx";

const GlobalFooter = (props) => {
  const { primaryColumns } = props;
  const footerData = useStore(({ footerData }) => footerData);

  const { pagesTitle } = footerData || props;
  const { dark, toggleTheme } = useTheme();

  const renderColumns = () => {
    if (!primaryColumns) return "";
    return primaryColumns?.map((column, index) => {
      const columnTitle = column?.title;
      const links = renderButtons(column?.links, styles.columnLinks);
      return (
        <div key={`${columnTitle}${index}`} className={clsx(styles.column)}>
          {column?.description && (
            <div className={styles.description}>
              <p>{column?.description}</p>
            </div>
          )}
          {links}
        </div>
      );
    });
  };

  return (
    <footer
      data-theme={dark ? "dark" : "light"}
      id={pagesTitle}
      className={clsx(styles.container, "padding-x-lg")}
    >
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Button
            data={{
              buttonUrl: "/",
              buttonType: "internal",
            }}
            classes={styles.logo}
          ></Button>
          <div className={styles.rule}></div>
        </div>
        <div className={styles.grid}>{renderColumns()}</div>
        <div className={styles.legal}>
          <span>
            {" "}
            &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME}
            <br />
            <button onClick={toggleTheme}>🎨 Theme</button>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
