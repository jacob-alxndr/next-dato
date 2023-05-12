import React, { useRef } from "react";
import classNames from "classnames";
import ButtonExternalLink from "./button-external-link";
import ButtonInternalLink from "./button-internal-link";
// import PropTypes from 'prop-types';
// import gsap from 'gsap';
// eslint-disable-next-line import/no-cycle
// import ButtonDrawer from './button-drawer';
// eslint-disable-next-line import/no-cycle
// import Media from '../Media';

const Button = ({
  data,
  children,
  classes,
  id,
  attr,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onSubmit,
  clean,
  tabIndex,
  role,
}) => {
  const state = useRef({
    pos: {
      x: 0,
      y: 0,
    },
    force: {
      default: 5,
      primary: 10,
    },
  });
  const el = useRef();
  const mask = useRef();
  const label = useRef();

  const setClasses = () => {
    let buttonStyleClass = null;

    switch (data.buttonStyle) {
      case "primary":
        buttonStyleClass = "c-button--primary";
        break;
      case "primary-subscription":
        buttonStyleClass = "c-button--primary-subscription";
        break;
      case "secondary":
        buttonStyleClass = "c-button--secondary";
        break;
      case "tertiary":
        buttonStyleClass = "c-button--tertiary";
        break;
      case "contained-white":
        buttonStyleClass = "c-button--contained-white";
        break;
      case "default":
      default:
        // Default is intentional supposed to be blank as it should be the same as no selection
        buttonStyleClass = "c-button--default";
        break;
    }
    return clean
      ? classes
      : classNames(
          "c-button",
          classes,
          `c-button--${data.buttonType}`,
          buttonStyleClass
        );
  };

  const getBtnContent = () => {
    const buttonContent = data.buttonText && (
      <span
        className="c-button__label"
        data-inner-text={data.buttonText}
        role="presentation"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: `${data.buttonText}` }}
        ref={label}
      >
        {/* {data.buttonText} */}
      </span>
    );

    // const buttonMedia = data?.buttonMedia ? (
    //   <Media data={data?.buttonMedia} />
    // ) : null;
    return (
      <React.Fragment>
        {/* {buttonMedia} */}
        {data.buttonText ? buttonContent : null}
        {children}
        <div
          className="c-button__mask"
          // ref={mask}
        />
      </React.Fragment>
    );
  };

  // const moveTarget = (e, link, text, buttonType) => {
  //   const force =
  //     buttonType === 'primary'
  //       ? state.current.force.primary
  //       : state.current.force.default;
  //   const boundingRect = link.getBoundingClientRect();
  //   const relX = e.clientX - boundingRect.left;
  //   const relY = e.clientY - boundingRect.top;

  //   gsap.to(link, {
  //     x: ((relX - boundingRect.width / 2) / boundingRect.width) * force,
  //     y: ((relY - boundingRect.height / 2) / boundingRect.height) * force,
  //     ease: 'power3.out',
  //     duration: 0.3,
  //   });

  //   gsap.to(text, {
  //     x: ((relX - boundingRect.width / 2) / boundingRect.width) * (force / 2),
  //     y: ((relY - boundingRect.height / 2) / boundingRect.height) * (force / 2),
  //     ease: 'power3.out',
  //     duration: 0.6,
  //   });
  // };

  const handleOnSubmit = (e) => {
    if (onSubmit) {
      onSubmit(e);
    }
  };
  const handleOnClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const handleMouseEnter = (e) => {
    if (onMouseEnter) {
      onMouseEnter(e);
    }

    // gsap.killTweensOf(mask.current);
    // gsap.to(mask.current, {
    //   ease: 'power3.easeOut',
    //   startAt: { y: '75%' },
    //   y: '0%',
    //   duration: 0.5,
    // });
  };

  const handleMouseMove = (e) => {
    const buttonType = data.buttonStyle === "primary" ? "primary" : "default";

    moveTarget(e, el.current, label.current, buttonType);
  };

  const handleMouseLeave = (e) => {
    if (onMouseLeave) {
      onMouseLeave(e);
    }

    // gsap.killTweensOf(mask.current);
    // gsap.to(el.current, {
    //   x: 0,
    //   y: 0,
    //   duration: 0.3,
    // });
    // gsap.to(label.current, {
    //   x: 0,
    //   y: 0,
    //   duration: 0.6,
    // });
    // gsap.to(mask.current, {
    //   ease: 'power3.easeOut',
    //   y: '-75%',
    //   duration: 0.4,
    // });
  };

  if (!data) {
    return null;
  }
  switch (data?.buttonType) {
    case "external":
      return (
        <ButtonExternalLink
          ref={el}
          data={data}
          getBtnContent={getBtnContent}
          handleOnClick={handleOnClick}
          setClasses={setClasses}
          attr={attr}
          clean={clean}
          {...(onMouseEnter && {
            handleMouseEnter: handleMouseEnter,
          })}
          {...(onMouseLeave && {
            handleMouseLeave: handleMouseLeave,
          })}
          {...(onMouseMove && { handleMouseMove: handleMouseMove })}
        />
      );
    case "internal":
      return (
        <ButtonInternalLink
          ref={el}
          data={data}
          getBtnContent={getBtnContent}
          handleOnClick={handleOnClick}
          setClasses={setClasses}
          attr={attr}
          clean={clean}
          {...(onMouseEnter && {
            handleMouseEnter: handleMouseEnter,
          })}
          {...(onMouseLeave && {
            handleMouseLeave: handleMouseLeave,
          })}
          {...(onMouseMove && { handleMouseMove: handleMouseMove })}
        />
      );
    case "no-action":
      return (
        <button
          {...(id && { id: id })}
          ref={el}
          className={setClasses()}
          onClick={handleOnClick}
          {...(!clean && { "data-animation": "button" })}
          {...attr}
          {...(onMouseEnter && {
            onMouseEnter: handleMouseEnter,
          })}
          {...(onMouseMove && { onMouseMove: handleMouseMove })}
          {...(onMouseLeave && { onMouseLeave: handleMouseLeave })}
          tabIndex={tabIndex || 0}
          aria-label={data?.aria?.label || data.buttonText}
          role={role || "button"} // Needed for screen readers
          {...(data?.aria?.selected && {
            "aria-selected": data?.aria?.selected,
          })}
          {...(data?.aria?.controls && {
            "aria-controls": data?.aria?.controls,
          })}
        >
          {getBtnContent()}
        </button>
      );
    default:
      return "Missing Button Type";
  }
};

// Button.displayName = 'Global Button';

// Button.propTypes = {
//   /**
//    * Button contents
//    */
//   data: PropTypes.shape({
//     buttonType: PropTypes.oneOf([
//       'external',
//       'internal',
//       'no-action',
//       // 'content-drawer',
//     ]).isRequired,
//     /**
//      * Main text for button
//      */
//     buttonText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//     buttonUrl: PropTypes.string,
//     buttonMedia: PropTypes.object,
//     buttonVideo: PropTypes.object,
//     /**
//      * Open in new tab or repalce existing
//      */
//     buttonTarget: PropTypes.string,
//     buttonRole: PropTypes.string,
//     buttonStyle: PropTypes.oneOf([
//       'primary',
//       'primary-subscription',
//       'secondary',
//       'tertiary',
//       'contained-purple',
//       'contained-white',
//       'default',
//       'none',
//     ]),
//     trackingValue: PropTypes.string,
//     trackingCategoryValue: PropTypes.string,
//     trackingLocation: PropTypes.string,
//     aria: PropTypes.shape({
//       label: PropTypes.string,
//       selected: PropTypes.bool,
//       controls: PropTypes.string,
//     }),
//     drawer: PropTypes.shape({
//       title: PropTypes.string,
//       subtitle: PropTypes.string,
//       content: PropTypes.object,
//       media: PropTypes.shape({
//         url: PropTypes.string,
//         description: PropTypes.string,
//         videoControls: PropTypes.bool,
//       }),
//     }),
//   }).isRequired,
//   /**
//    * Nested DOM elements that are passed along
//    */
//   children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   /**
//    * Classes that should be applied in addition to default button classes
//    */
//   classes: PropTypes.string,
//   /**
//    * ID should be applied
//    */
//   id: PropTypes.string,
//   /**
//    * HTML attributes that should be applied to button
//    */
//   attr: PropTypes.object,
//   /**
//    * Sepcific tab index that should be applied
//    */
//   tabIndex: PropTypes.number,
//   /**
//    * Valid a11y role
//    */
//   role: PropTypes.string,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
//   /**
//    * Optional mouse enter handler
//    */
//   onMouseEnter: PropTypes.func,
//   /**
//    * Optional mouse leave handler
//    */
//   onMouseLeave: PropTypes.func,
//   /**
//    * Optional mouse move handler
//    */
//   onMouseMove: PropTypes.func,
//   /**
//    * Should no default styles be applied?
//    */
//   clean: PropTypes.bool,
// };

// Button.defaultProps = {
//   data: { buttonStyle: 'default' },
//   onClick: undefined,
//   onMouseEnter: (e) => {},
//   onMouseMove: (e) => {},
//   onMouseLeave: (e) => {},
// };

export default Button;
