import { useState } from "react";
import { Link } from "react-router-dom";
let open: string = "images/hamburger-menu.svg";
let close: string = "images/close.svg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative p-4 text-white bg-header">
      <section className="flex items-center justify-between base">
        <Link to={"/"}>
          <img className="w-[170px] h-[59px]" src="images/Logo.png" alt="Logo" />
        </Link>
        <div
          className={
            isOpen
              ? "translate-y-[79%] md:translate-y-0"
              : "-translate-y-full md:translate-y-0"
          }
        >
          <ul className="block md:flex gap-4 capitalize md:*:cursor-pointer *:my-4">
            <li>home</li>
            <li>subscribe</li>
            <li>About</li>
          </ul>
        </div>
        <div className="block md:hidden">
          <img
            className="w-[35px] h-[35px] brightness-0 invert"
            src={isOpen ? close : open}
            alt={isOpen ? "X-mark" : "burger"}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
