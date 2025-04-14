import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
	return (
		<section id="experience">
			<h5
				data-aos="fade-up"
				data-aos-anchor="#experience"
				data-aos-duration="900"
			>
				What are my skills?
			</h5>
			<h2
				data-aos="fade-up"
				data-aos-anchor="#experience"
				data-aos-duration="700"
			>
				My Experience
			</h2>

			<div className="container experience__container">
				<div
					className="experience__frontend"
					data-aos="fade-right"
					data-aos-anchor=".experience__container"
					data-aos-duration="900"
				>
					<h3>Frontend Development</h3>
					<div className="experience__content">
						
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Material UI</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>NextJS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>API Integration</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

					
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Redux</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
					</div>
				</div>

				{/* BACKEND SKILLS */}

				<div
					className="experence__backend"
					data-aos="fade-left"
					data-aos-anchor=".experience__container"
					data-aos-duration="1200"
				>
					<h3>Backend Development</h3>
					<div className="experience__content">
						
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>NodeJS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>ExpressJS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>MySQL</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						{/* REST  */}
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>REST APIs</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>AWS</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
