import clsx from "clsx";
import styles from "@styles/Hero/index.module.scss";
import { StructuredText } from "react-datocms";
import { useTheme } from "@lib/ctx";
const Hero = (props) => {
  const { eyebrow, title, description, titleSize, backgroundColor, backgroundImage, backgroundMedia } =
    props;
  const { dark } = useTheme();
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.header, "padding-x-lg")}>
        <div className={styles.content}>
          <div className={clsx(styles.eyebrow)}>
            <span>{eyebrow}</span>
          </div>
          <div className={clsx(styles.title, `u-heading--${titleSize}`)}>
            {" "}
            <h1>{title}</h1>
          </div>
          <div className={styles.description}>
            <p>
              {" "}
              <StructuredText data={description} />
            </p>
          </div>
        </div>
      </div>

      <div
        className={styles.background}
        style={{
          backgroundColor: `${backgroundColor?.hex}`,
          backgroundImage: dark ? `url(${backgroundImage})` : "none",
          backgroundPosition: `${backgroundMedia[0]?.horizontalAlignment} ${backgroundMedia[0]?.verticalAlignment}`,
        }}
      ></div>
    </div>
  );
};

export default Hero;
