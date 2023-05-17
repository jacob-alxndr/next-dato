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
  // const mask = useRef();
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
  };

  const handleMouseMove = (e) => {
    const buttonType = data.buttonStyle === "primary" ? "primary" : "default";

    moveTarget(e, el.current, label.current, buttonType);
  };

  const handleMouseLeave = (e) => {
    if (onMouseLeave) {
      onMouseLeave(e);
    }
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

export default Button;

/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function (s) {
//   const numerals = [
//     { r: "M", n: 1000 },
//     { r: "D", n: 500 },
//     { r: "C", n: 100 },
//     { r: "L", n: 50 },
//     { r: "X", n: 10 },
//     { r: "V", n: 5 },
//     { r: "I", n: 1 },
//   ];

//   const romanToIntArray = s.split("").map((rN) => {
//     let num;
//     numerals.filter((numeral) => {
//       if (numeral.r === rN) {
//         num = numeral.n;
//       }
//     });
//     return num;
//   });

//   const calculateRomanNumerals = romanToIntArray.reduce(
//     (accumulator, currentValue, index, array) =>
//       array[index] < array[index + 1]
//         ? accumulator - currentValue
//         : accumulator + currentValue,
//     0
//   );

//   return calculateRomanNumerals;
// };

// const romanToInt = (s) => {
//   const numerals = {
//     M: 1000,
//     D: 500,
//     C: 100,
//     L: 50,
//     X: 10,
//     V: 5,
//     I: 1,
//   };

//   const romanToIntArray = s.split("").map((rN) => {
//     let num;
//     // numerals.filter((numeral) => numeral.r === rN ? num = numeral.n : null)
//     num = numerals.get(rN);
//     return num;
//   });

//   const calculateRomanNumerals = romanToIntArray.reduce(
//     (accumulator, currentValue, index, array) =>
//       array[index] < array[index + 1]
//         ? accumulator - currentValue
//         : accumulator + currentValue,
//     0
//   );

//   return calculateRomanNumerals;
// };

// const romanToInt = (s) => {
//   const numerals = {
//     M: 1000,
//     D: 500,
//     C: 100,
//     L: 50,
//     X: 10,
//     V: 5,
//     I: 1,
//   };

//   const romanToIntArray = s.split("").map((rN) => numerals[rN]);

//   const calculateRomanNumerals = romanToIntArray.reduce(
//     (accumulator, currentValue, index, array) =>
//       array[index] < array[index + 1]
//         ? accumulator - currentValue
//         : accumulator + currentValue,
//     0
//   );

//   return calculateRomanNumerals;
// };

// const romanToInt = (s) => {
//   const numerals = {
//     M: 1000,
//     D: 500,
//     C: 100,
//     L: 50,
//     X: 10,
//     V: 5,
//     I: 1,
//   };

//   const calculateRomanNumerals = [...s]
//     .map((rN) => numerals[rN])
//     .reduce(
//       (accumulator, currentValue, index, array) =>
//         array[index] < array[index + 1]
//           ? accumulator - currentValue
//           : accumulator + currentValue,
//       0
//     );

//   return calculateRomanNumerals;
// };

// const romanToInt = (s) => {
//   const numerals = {
//     M: 1000,
//     D: 500,
//     C: 100,
//     L: 50,
//     X: 10,
//     V: 5,
//     I: 1,
//   };
//   const calculateRomanNumerals = [];
//   [...s].forEach((rN) => calculateRomanNumerals.push(numerals[rN]));

//   const reduceFuntion = calculateRomanNumerals.reduce(
//     (accumulator, currentValue, index, array) =>
//       array[index] < array[index + 1]
//         ? accumulator - currentValue
//         : accumulator + currentValue,
//     0
//   );

//   return reduceFuntion;
// };

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//   const sortedStrings = strs
//     .sort((a, b) => (a.length >= b.length ? -1 : 1))
//     .map((str) => str.split(""));
//   let prefix = "";

//   sortedStrings.forEach((str, i) => {
//     for (let step = 0; step < sortedStrings[0].length; step++) {
//       for (let i = 0; i < sortedStrings.length; i++) {
//         if (sortedStrings[step][step]) {
//           console.log(sortedStrings[step][step]);
//         }
//       }
//     }
//   });

//   console.log("prefix", prefix);
//   return prefix;
// };

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const characterArrays = strs.map((str) => [...str]);

  let prefix = "";

  let isCommon = true;
  for (let step = 0; step < characterArrays[0].length; step++) {
    let letter = characterArrays[0][step];
    for (let idx = 0; idx < characterArrays.length; idx++) {
      if (isCommon) {
        letter === characterArrays[idx]?.[step]
          ? (isCommon = true)
          : (isCommon = false);
      } else {
        isCommon = false;
      }
    }
    isCommon ? (prefix += letter) : null;
  }

  return prefix;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs === undefined || strs.length == 0) {
    return "";
  }
  // const characterArrays = strs?.map((str) => [...str]);
  // const state = {
  //  prefix:``,
  //  maxPrefix : strs.sort((a,b)=> a.length > b.length ? 1 :-1)[0].length,
  //  letter: ``,
  //  flag: true && characterArrays
  // }

  const prefix = ``;
  const maxPrefix = strs.sort((a, b) => (a.length > b.length ? 1 : -1))[0]
    .length;

  for (let i = 0; i < state.maxPrefix; i++) {
    const c = strs[0][i];
    console.log("c", c);
    if (strs.every((str) => str[i] === c)) {
      state.prefix += c;
    } else {
      break;
    }
  }

  // for (let step = 0; step < characterArrays[0].length; step++) {
  //  state.letter = characterArrays[0][step];
  //   for (let i = 0; i < characterArrays.length; i++) {
  //     if (state.flag) {
  //          state.letter === characterArrays[i]?.[step]
  //         ? (state.flag = true)
  //         : (state.flag = false);
  //     } else {
  //       state.flag = false;
  //     }
  //   }
  //   state.flag && (state.prefix += state.letter) ;
  // }
  return state.prefix;
  // return strs.reduce((p, n)=>{
  //   let i = 0;
  //   while(p[i] && n[i] && p[i] === n[i]) i++;
  //   return p.slice(0, i);
  // })
};

var threeSum = function (nums) {
  const outputArray = [];
  const arrayCopy = [...nums];

  arrayCopy.map((num, i) => {
    const arrayWithoutNum = arrayCopy.filter((n, idx) => i !== idx);
    for (let step = 0; step > arrayWithoutNum.length; step++) {
      console.log(
        "num",
        num + arrayWithoutNum[step] + arrayWithoutNum[step + 1]
      );

      if (num + arrayWithoutNum[step] + arrayWithoutNum[step + 1] === 0) {
        console.log("num", num);
        outputArray.push([
          num,
          arrayWithoutNum[step],
          arrayWithoutNum[step + 1],
        ]);
      } else if (!arrayWithoutNum[step + 1]) {
        // break
      }
    }
  });
  // console.log("outputArray", outputArray)
};

// const filter = (sets, item) => {
//   if (!sets.length) return false;
//   sets.forEach((set) => {
//     for (let i = 0; i > set.length; i++) {
//       console.log("set:", set[i], "item", item[i]);

//     }
//   });
// };

const filter = (sets, item) => {
  let isFalse = false;
  if (!sets.length) return isFalse;

  sets.forEach((set, idx) => {
    for (let i = 0; i < item.length; i++) {
      let isTrue;
      for (let step = 0; step < item.length; step++) {
        console.log(
          "FOR LOOP",
          item[i],
          sets[idx][step],
          item[i] === sets[idx][step]
        );
        if (item[i] === sets[idx][step]) {
          isTrue = item[i] === sets[idx][step];
          break;
        }
      }
    }

    console.log("END");
  });

  return isFalse;
};

arrayCopy.map((num, index) => {
  const arrayWithoutNum = arrayCopy.filter((n, idx) => index !== idx);
  for (let i = 0; i < arrayWithoutNum.length; i++) {
    if (num + arrayWithoutNum[i] + arrayWithoutNum[i + 1] === 0) {
      const item = [num, arrayWithoutNum[i], arrayWithoutNum[i + 1]];

      filter(outputArray, item);
      // if(!){}
      // outputArray.push([
      //   num,
      //   arrayWithoutNum[i],
      //   arrayWithoutNum[i + 1],
      // ]);
    } else if (!arrayWithoutNum[i + 1]) {
      // break
    }
  }
});

const filter = (sets, item) => {
  let isFalse = false;
  if (!sets.length) return isFalse;
  const isUnique = sets.forEach((set, idx) => {
    let trueSet = [];
    console.log("sets", sets);
    console.log("item", item);
    for (let i = 0; i < item.length; i++) {
      let isTrue;
      console.log("i", i);
      // for (let step = 0; step < item.length; step++) {
      console.log("FOR LOOP", item[i], sets[idx][i], item[i] === sets[idx][i]);

      if (item[i] === set[i]) {
        isTrue = item[i] === set[i];
        // break;
      }
      // }
      if (isTrue) {
        trueSet.push(true);
      }
    }

    const every = trueSet.every((itm) => itm === true);
    console.log("END", every && trueSet.length === 3);
    return every && trueSet.length === 3;
  });

  return isUnique;
};

const filter = (sets, item) => {
  let isFalse = false;
  if (!sets.length) return isFalse;
  const isUnique = sets.forEach((set, index) => {
    let trueSet = [];
    console.log("sets", sets);
    console.log("item", item);

    for (let i = 0; i < sets.length; i++) {
      set.forEach((num, idx) => {
        console.log(
          "FOR LOOP",
          item[idx],
          sets[index][idx],
          item[idx] === sets[index][idx]
        );
      });
    }

    const every = trueSet.every((itm) => itm === true);
    console.log("END", every && trueSet.length === 3);
    return every && trueSet.length === 3;
  });

  return isUnique;
};

const filter = (sets, item) => {
  let isFalse = false;
  if (!sets.length) return isFalse;

  const isUnique = sets.forEach((set, index) => {
    let trueSet = [];

    set.forEach((setNum, idx) => {
      for (let i = 0; i < item.length; i++) {
        console.log(setNum, item[i], setNum === item[i]);
        if (setNum === item[i]) {
          trueSet.push(true);
        }
      }
    });
    console.log("END SET FOR EACH==========");
    console.log("trueSet", trueSet);

    return trueSet.every((itm) => itm === true && trueSet.length === 3);
    // console.log("END", every && trueSet.length === 3);
    // return every && trueSet.length === 3;
  });
  console.log("END======================", isUnique);
  return isUnique;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.every((num) => num === 0)) return [nums];
  const outputArray = [];

  const filter = (sets, item) => {
    if (!sets.length) return false;
    let isFalse = false;

    const allSets = [];
    sets.forEach((set) => {
      let trueSet = [];
      set.forEach((setNum) => {
        for (let i = 0; i < item.length; i++) {
          if (setNum === item[i]) {
            trueSet.push(true);
          }
        }
      });
      allSets.push(
        trueSet.every((itm) => itm === true && trueSet.length === 3)
      );
    });
    isFalse = allSets.some((itm) => itm === true);
    return isFalse;
  };

  nums.map((num, index) => {
    const arrayWithoutNum = nums.filter((n, idx) => index !== idx);
    for (let i = 0; i < arrayWithoutNum.length; i++) {
      if (num + arrayWithoutNum[i] + arrayWithoutNum[i + 1] === 0) {
        const item = [num, arrayWithoutNum[i], arrayWithoutNum[i + 1]];
        if (!filter(outputArray, item)) {
          outputArray.push(item);
        }
      } else if (!arrayWithoutNum[i + 1]) {
        break;
      }
    }
  });
  return outputArray;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.every((num) => num === 0)) return [nums];
  const outputArray = [];

  const filter = (sets, item) => {
    if (!sets.length) return false;
    let isFalse = false;

    const allSets = [];
    sets.forEach((set) => {
      let trueSet = [];
      set.forEach((setNum) => {
        for (let i = 0; i < item.length; i++) {
          if (setNum === item[i]) {
            trueSet.push(true);
          }
        }
      });
      allSets.push(
        trueSet.every((itm) => itm === true && trueSet.length === 3)
      );
    });
    console.log(allSets);
    console.log(outputArray);
    allSets.some((itm) => itm === true) ? null : outputArray.push(item);
  };

  nums.map((num, index) => {
    const arrayWithoutNum = nums.filter((n, idx) => index !== idx);
    for (let i = 0; i < arrayWithoutNum.length; i++) {
      if (num + arrayWithoutNum[i] + arrayWithoutNum[i + 1] === 0) {
        const item = [num, arrayWithoutNum[i], arrayWithoutNum[i + 1]];
        filter(outputArray, item);
      }
    }
  });
  return outputArray;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.every((num) => num === 0)) return [nums];
  const outputArray = [];

  const filter = (sets, item) => {
    if (!sets.length) return outputArray.push(item);

    const allSets = [];
    sets.forEach((set) => {
      let trueSet = [];
      set.forEach((setNum) => {
        for (let i = 0; i < item.length; i++) {
          if (setNum === item[i]) {
            trueSet.push(true);
          }
        }
      });
      allSets.push(
        trueSet.every((itm) => itm === true && trueSet.length === 3)
      );
    });
    !allSets.some((itm) => itm === true) && outputArray.push(item);
  };

  nums.map((num, index) => {
    const arrayWithoutNum = nums.filter((n, idx) => index !== idx);
    for (let i = 0; i < arrayWithoutNum.length; i++) {
      if (num + arrayWithoutNum[i] + arrayWithoutNum[i + 1] === 0) {
        const item = [num, arrayWithoutNum[i], arrayWithoutNum[i + 1]];
        filter(outputArray, item);
      }
    }
  });
  return outputArray;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.every((num) => num === 0)) return [nums];
  const outputArray = [];
  const filter = (sets, item) => {
    if (!sets.length) return outputArray.push(item);
    const hasSameArray = [];
    sets.forEach((set) => {
      let hasSameSet = [];
      set.forEach((setNum) => {
        for (let i = 0; i < item.length; i++) {
          if (setNum === item[i]) {
            hasSameSet.push(true);
          }
        }
      });
      hasSameArray.push(
        hasSameSet.every((itm) => itm === true && hasSameSet.length === 3)
      );
    });
    !hasSameArray.some((itm) => itm === true) && outputArray.push(item);
  };

  nums.map((num, index) => {
    const arrayWithoutNum = nums.filter((n, idx) => index !== idx);

    for (let i = 0; i < arrayWithoutNum.length; i++) {
      if (arrayWithoutNum.length < 3) {
        if (num + num[i] + num[i + 1] === 0) {
          const item = [num, nums[i], nums[i + 1]];
          filter(outputArray, item);
        }
      }
      if (num + arrayWithoutNum[i] + arrayWithoutNum[i + 1] === 0) {
        const item = [num, arrayWithoutNum[i], arrayWithoutNum[i + 1]];
        filter(outputArray, item);
      }
    }
  });
  return outputArray;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.every((num) => num === 0)) return [nums];
  const outputArray = [];
  const filter = (sets, item) => {
    if (!sets.length) return outputArray.push(item);
    const hasSameArray = [];
    sets.forEach((set) => {
      let hasSameSet = [];
      set.forEach((setNum) => {
        for (let i = 0; i < item.length; i++) {
          if (setNum === item[i]) {
            hasSameSet.push(true);
          }
        }
      });
      hasSameArray.push(
        hasSameSet.every((itm) => itm === true && hasSameSet.length === 3)
      );
    });
    !hasSameArray.some((itm) => itm === true) && outputArray.push(item);
  };
  if (arrayWithoutNum.length < 3) {
    console.log("IFFFFF");
    if (nums[0] + nums[1] + nums[2] === 0) {
      filter(outputArray, nums);
    }
  } else {
    nums.map((num, index) => {
      const arrayWithoutNum = nums.filter((n, idx) => index !== idx);

      for (let i = 0; i < arrayWithoutNum.length; i++) {
        if (num + arrayWithoutNum[i] + arrayWithoutNum[i + 1] === 0) {
          const item = [num, arrayWithoutNum[i], arrayWithoutNum[i + 1]];
          filter(outputArray, item);
        }
      }
    });
  }
  return outputArray;
};
