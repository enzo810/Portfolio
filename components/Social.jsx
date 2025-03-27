import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/enzo810",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/enzo-sousa-a165b72b7/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className={iconStyles}
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
