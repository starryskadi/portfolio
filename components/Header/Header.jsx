import React, { useContext } from "react";
import Image from "next/image";
import classNames from "classnames";
import AppContext from "context/app";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import MenuButton from "components/MenuButton";

const Header = () => {
  const context = useContext(AppContext);

  const navLinks = [
    { title: "Home", link: "#" },
    { title: "About", link: "#" },
    { title: "Work", link: "#" },
    { title: "Contact", link: "#" },
  ];
  const navSecondaryLinks = [
    { icon: <BsLinkedin className="w-6 h-6" />, link: "#" },
    { icon: <BsGithub className="w-6 h-6" />, link: "#" },
    { icon: <MdMail className="w-6 h-6" />, link: "#" },
  ];

  const onMenuClick = () => {
    context.setState((prev) => ({
      ...prev,
      menu: !prev.menu,
    }));
  };

  return (
    <div>
      <div className="container mx-auto absolute left-0 right-0 top-0 text-white my-4 flex items-center justify-between z-10 ">
        <div>
          <svg
            viewBox="0 0 283 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="min-h-[40px]"
          >
            <path
              d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="flex">
          <div className="ml-4 bg-primary"></div>
          <MenuButton active={context.state.menu} onClick={onMenuClick} />
        </div>
      </div>
      <div
        className={classNames(
          "absolute top-0 bottom-0 right-0 max-w-[50%] min-w-[30vw] bg-white flex flex-col justify-center duration-300",
          {
            "translate-x-[100%]": !context.state.menu,
            "translate-x-[0%]": context.state.menu,
          }
        )}
        aria-label="menu"
      >
        <ul className="px-12">
          {navLinks.map((each, index) => {
            return (
              <li className="text-3xl font-bold py-4 flex items-center">
                {context.state.activeNav === index && (
                  <span className="w-[16px] h-[16px] bg-primary block rounded-full mr-4"></span>
                )}
                {each.title}
              </li>
            );
          })}
        </ul>
        <div className="flex px-12 absolute bottom-16">
          {navSecondaryLinks.map((each) => {
            return (
              <a href={each.link} className="block mr-3">
                {each.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
