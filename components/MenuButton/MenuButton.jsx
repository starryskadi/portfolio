import React from "react";
import classNames from "classnames";

const MenuButton = (props) => {
  const { active, onClick } = props;
  return (
    <button
      className="ml-4 bg-primary rounded-full p-3 cursor-pointer w-12 h-12"
      onClick={onClick}
    >
      <div
        className={classNames(
          "w-5 h-[4px] bg-white mb-1 transition-transform mx-auto",
          {
            "rotate-45 translate-y-2": active,
          }
        )}
      ></div>
      <div
        className={classNames(
          "w-5 h-[4px] bg-white mb-1 transition-transform mx-auto",
          {
            "rotate-45": active,
          }
        )}
      ></div>
      <div
        className={classNames(
          "w-5 h-[4px] bg-white mb-1 transition-transform mx-auto",
          {
            "-rotate-45 -translate-y-2": active,
          }
        )}
      ></div>
    </button>
  );
};

export default MenuButton;
