/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "@components/UtilityComponents/Button";
import styles from "@styles/GlobalNavigation/index.module.scss";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useStore } from "@lib/store";
import { useTheme } from "@lib/ctx";
// import debounce from "lodash.debounce";
import { BREAKPOINT_TABLET } from "@utils/breakpoints";
// import gsap from 'gsap';

const GlobalNavigation = (props) => {
  const { classes } = props;
  // const lenis = useStore(({ lenis }) => lenis);
  // const drawerIsOpen = useStore(({ drawerIsOpen }) => drawerIsOpen);
  const navigationData = useStore(({ navigationData }) => navigationData);
  const { dark } = useTheme();
  const router = useRouter();
  const primary = navigationData?.primary || props.primary;
  const [mobileActive, setMobileActive] = useState(false);
  // console.log("navigationData", navigationData);
  const setUpTimeline = () => {};
  const setUp = (resize) => {};
  const handleClick = () => {};
  const checkScroll = ({ scroll, direction }) => {};
  useEffect(() => {}, []);

  return (
    <header
      className={clsx(styles.header, classes, "padding-x-lg")}
      data-theme={dark ? "dark" : "light"}
    >
      <nav
        className={clsx(
          styles.nav
          // { [styles["is-mobile"]]: isMobile },
          // { [styles["is-active"]]: mobileActive },
        )}
      >
        <div className={clsx(styles.navContent)}>
          {primary &&
            primary?.map((button) => {
              return (
                <div
                  key={button?.buttonId}
                  className={clsx(
                    // {
                    // [styles["hide"]]:
                    // (!isMobile && button?.buttonText === "Home") ||
                    // (!isMobile && button?.buttonText === "Contact"),
                    // },
                    "js-menu-item"
                  )}
                >
                  <Button
                    data={button}
                    attr={{ ["data-text"]: button?.buttonText }}
                    classes={clsx(styles.link, {
                      [styles.active]: router.asPath === button?.buttonUrl,
                    })}
                    // All default style links should not have animation or special styling
                    {...(button?.buttonStyle === "default" && {
                      clean: true,
                    })}
                  />
                </div>
              );
            })}
        </div>
      </nav>
    </header>
  );
};

export default GlobalNavigation;
