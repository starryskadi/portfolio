import React from "react";
import MainContext from "context/app";
import classNames from "classnames";

const Banner = () => {
  const context = React.useContext(MainContext);

  return (
    <div
      className={classNames(
        "text-white container mx-auto min-h-screen flex items-center duration-500",
        {
          "translate-x-[-100%]": context.state.menu,
          "translate-x-[0%]": !context.state.menu,
        }
      )}
    >
      <div>
        <h1 className="text-8xl font-bold leading-slug">
          Hi, I'm <br /> Starry<span className="text-primary">.</span>
        </h1>
        <h3 className="mt-8 italic text-gray-200">
          Also known as Kyaw Zayar Win.
        </h3>
        <h3 className="font-bold text-gray-200">
          I love &amp; explore technologies.
          {/* <span className="text-primary text-2xl leading-[0] ">.</span> */}
        </h3>
        <button className="px-8 py-4 bg-primary rounded-full mt-8 font-bold">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Banner;
