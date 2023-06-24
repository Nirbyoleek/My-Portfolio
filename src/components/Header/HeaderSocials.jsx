import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

import "aos/dist/aos.css";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				data-aos="fade-down"
				data-aos-duration="1500"
				href="https://www.linkedin.com/in/nirbyoleek/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
			<a
				data-aos="fade-down"
				data-aos-duration="1200"
				href="https://github.com/Nirbyoleek"
				target="_blank"
				rel="noreferrer"
			>
				<FaGithub />
			</a>
		</div>
	);
};

export default HeaderSocials;
