import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const copywriteIcon = [
    {
      img: "/Twitter.svg",
      link: "https://twitter.com/miss_nice",
    },
    {
        img: "/github.svg",
        link: "https://github.com/mufidat3250",
    },
    {
        img: "/Linkedin.svg",
        link: "https://www.linkedin.com/in/wahab-mufidat-32a22b215/",
    },
  ];

  return (
    <div className="footer" >
      <div className="contact" id="contact">
        <p id="contact-info" className="">
          Got a question, proposal or project or want to work together on
          something? Feel free to reach out.
        </p>
       <Link href='mailto:wahabmufidat1919@gmail.com'>
       <h1 id="mail" >WAHABMUFIDAT1919@GMAIL.COM</h1>
       </Link>
      </div>
      <div className="copy-write">
        <div className="icon-wrapper">
          {copywriteIcon.map(({ img, link }, index) => (
            <Link href={link} key={`copywriteIcon-${index}`}>
              <Image src={img} alt={""} key={index} width='21' height={17} className='icon'/>
            </Link>
          ))}
        </div>
        <span>
        Copyright © 2021 | wahab mufidat
        </span>
      </div>
    </div>
  );
};

export default Footer;
