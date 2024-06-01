import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-[#081c2f] border-t-[#63696b] text-white p-4">
      <section className="flex flex-col justify-around gap-4 text-center md:text-start base md:flex-row">
        <div>
          <h1 className="text-4xl">
            <img
              className="w-[170px] mx-auto h-[70px]"
              src="images/Logo.png"
              alt="Logo"
            />
          </h1>
          <ul className="flex justify-center gap-3 md:justify-start px-[5px]">
            <li>
              <Link to={"#"}>
                <img src="./images/facebook.svg" alt="facebook" />
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <img src="./images/twitter.svg" alt="twitter" />
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <img src="./images/instagram.svg" alt="instagram" />
              </Link>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"#"}>About</Link>
          </li>
          <li>
            <Link to={"#"}>Subscribe</Link>
          </li>
        </ul>

        <div>
          <ul>
            <li>
              <Link to={"#"}>Blog 1</Link>
            </li>
            <li>
              <Link to={"#"}>Blog 2</Link>
            </li>
            <li>
              <Link to={"#"}>Blog 3</Link>
            </li>
            <li>
              <Link to={"#"}>Blog 4</Link>
            </li>
          </ul>
        </div>
        <div></div>
      </section>
    </footer>
  );
};

export default Footer;
