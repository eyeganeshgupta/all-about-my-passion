import { em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconHexagonLetterG } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";

const links = ["About", "Projects", "Skills", "Contact"];

const navLinks = (col: Boolean, clicked: any) => {
  const handleClick = () => {
    if (clicked) clicked();
  };
  return links.map((link, index) => {
    return (
      <a
        key={index}
        onClick={handleClick}
        className={`${col ? "flex flex-col items-center" : ""} font-mono text-lg text-textColor hover:text-primaryColor`}
        href={`#${link}`}
      >
        <span className="text-primaryColor">0{index + 1}. </span>
        {link}
      </a>
    );
  });
};

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  });

  return (
    <nav
      className={`flex ${show ? "translate-y-0" : "-translate-y-28"} ${shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""} xs-mx:px-4 xs-mx:h-20 fixed z-10 h-28 w-full items-center justify-between bg-bgColor px-10 transition-transform duration-500 ease-in-out`}
    >
      <IconHexagonLetterG
        className="z-10"
        size={isMobile ? 45 : 60}
        color="#64FFDA"
        stroke={1.25}
      />
      <div className="bs:flex hidden gap-8">{navLinks(false, null)}</div>
      <SideBar />
    </nav>
  );
};
export default Header;
export { navLinks };
