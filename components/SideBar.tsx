import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const SideBar = () => {
  return (
    <div>
      <Image
        src="data:image/jpeg;base64,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"
        alt="Picture of the author"
        width={32}
        height={32}
        priority = {true}
        style={{ margin: "0px auto 0px auto", borderRadius: "50%" }}
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green-400">Raju </span>
        gopal
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        href="https://drive.google.com/file/d/18W4kRpubuGf6jAoj3iLmn12CCsYCF3uo/view?usp=sharing"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* {social icons} */}
      <div className="flex justify-around my-5 text-green-500 ">
        <a href="https://github.com/Rajugopal1">
          <AiFillGithub className="w-6 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/raju-gopal-singh-hari-425656212/">
          <AiFillLinkedin className="w-6 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillInstagram className="w-6 h-8 cursor-pointer" />
        </a>
      </div>

      {/* {address} */}
      <div
        className="py-4 my-5 bg-gray-200 rounded-lg"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Nellore, Andhra Pradesh, India</span>
        </div>
        <p className="my-2">rajugopalsinghh@gmail.com</p>
        <p className="my-2">7093134158</p>
      </div>
      <button
        className="w-8/12 px-2 py-2 my-2 text-white bg-green-400 rounded-full focus:outline-none"
        onClick={() => window.open("mailto:rajugopalsinghh@gmail.com")}
      >
        Email me
      </button>
      {/* <button className = 'w-8/12 px-2 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-green-300'>Toggle</button> */}
    </div>
  );
};

export default SideBar;
