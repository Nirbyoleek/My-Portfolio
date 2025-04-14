import { useState } from "react";
import "./portfolio.css";
import Modal from "../Modal/Modal";

const Portfolio = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const projects = [
		{
			name: "Twitter Clone",
			image: require("../../assets/Twitter.png"),
			fadeDuration: "1000",
			description:
				"A Twitter clone built with React, Node.js, and MongoDB. It allows users to sign up, log in, and post tweets. It also includes features like liking and retweeting tweets.",
			toolsUsed: ["React", "Node.js", "MongoDB", "TailwindCSS"],
			link:"https://twitter-n5yl.onrender.com/"
		},
		{
			name: "ChatApp",

			image: require("../../assets/ChatApp.png"),
			fadeDuration: "1000",
			description:
				"Your own personalised chat-app. Invite your friends and start a session.",
			toolsUsed: ["React", "Socket.io", "JavaScript", "Node.js", "Express"],
			link:"https://chat-app-backend-blond-mu.vercel.app"
		},

		{
			name: "Memories FullStack",

			image: require("../../assets/Memories.jpg"),
			fadeDuration: "1200",
			description:
				"A functional full-stack site where you can create posts and update them real time in the database.",
			toolsUsed: ["React", "MongoDB", "NodeJs", "Express", "TailwindCSS"],
			link:"https://memories-app-frontend-one.vercel.app/"
		},
		{
			name: "Weather App",
			image: require("../../assets/Weather.png"),
			fadeDuration: "1300",
			description:
				"A very useful weather app to show you the weather of any location you want to find. Made using Node js and Express.",
			toolsUsed: ["NodeJS", "JavaScript", "HTML/CSS", "Express"],
			link:"https://github.com/Nirbyoleek/Weather-app"
		},
		{
			name: "Todo App",

			image: require("../../assets/Todo.png"),
			fadeDuration: "1400",
			description: "Create your Todos in my all new Todo-App",
			toolsUsed: ["React", "JavaScript"],
			link:"https://todo-app-nirbyoleek.netlify.app"
		},
	];

	const handleClick = (project) => {
		setSelectedProject(project);
		setIsModalOpen(!isModalOpen);
	};

	return (
		<section id="portfolio">
			<h5
				data-aos="fade-up"
				data-aos-anchor=".portfolio__container"
				data-aos-duration="700"
			>
				My most recent projects
			</h5>
			<h2
				data-aos="fade-up"
				data-aos-anchor=".portfolio__container"
				data-aos-duration="900"
			>
				My Portfolio
			</h2>

			<div className="container portfolio__container">
				{projects.map(
					({
						name,
						image,
						link,
						description,
						toolsUsed,
						fadeDuration,
					}) => (
						<article
							className="portfolio__item"
							key={name}
							data-aos="fade-up"
							data-aos-anchor=".portfolio__container"
							data-aos-duration={fadeDuration}
						>
							<div className="portfolio__item-image">
								<img src={image} alt={`${name} app Screenshot`} />
							</div>
							<h3
								className="portfolio__item-name"
								onClick={() =>
									handleClick({
										name,
										image,
										toolsUsed,
										description,
									})
								}
							>
								{name}
							</h3>

							<div className="portfolio__item-cta">
								<a
									className="btn"
									href={link}
									target="_blank"
									rel="noreferrer"
								>
									Link
								</a>
							</div>
						</article>
					)
				)}
			</div>

			{isModalOpen && (
				<Modal closeModal={handleClick} project={selectedProject} />
			)}
		</section>
	);
};

export default Portfolio;
