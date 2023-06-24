import { useState } from "react";
import "./portfolio.css";
import Modal from "../Modal/Modal";

const Portfolio = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const projects = [
		{
			name: "Chat-App",

			image: require("../../assets/ChatApp.png"),
			fadeDuration: "1000",
			description:
				"Your own personalised chat-app. Invite your friends and start a session.",
			toolsUsed: ["React", "Socket.io", "JavaScript", "Node.js", "Express"],
		},

		{
			name: "Memories-FullStack",

			image: require("../../assets/Memories.jpg"),
			fadeDuration: "1200",
			description:
				"A functional full-stack site where you can create posts and update them real time in the database.",
			toolsUsed: ["React", "MongoDB", "NodeJs", "Express", "TailwindCSS", ,],
		},
		{
			name: "Weather-app",
			image: require("../../assets/Weather.png"),
			fadeDuration: "1300",
			description:
				"A very useful weather app to show you the weather of any location you want to find. Made using Node js and Express.",
			toolsUsed: ["NodeJS", "JavaScript", "HTML/CSS", "Express"],
		},
		{
			name: "Todo-App",

			image: require("../../assets/Todo.png"),
			fadeDuration: "1400",
			description: "Create your Todos in my all new Todo-App",
			toolsUsed: ["React", "JavaScript"],
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
						deployedLink,
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
									href={`https://github.com/Nirbyoleek/${name}`}
									target="_blank"
									rel="noreferrer"
								>
									GitHub
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
