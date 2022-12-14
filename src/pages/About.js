import React from 'react';

const About = () => {
	return (
		<div className="px-4 py-5 my-5 text-center">
			<img className="d-block mx-auto mb-4" src="./logo.png" alt="Logo" width="72" height="72" />
			<h1 className="display-5 fw-bold">A propos de Punk App</h1>
			<div className="mx-auto">
				<p className="lead mb-4">
					Ce site à été créé par <a href="https://github.com/tdecourt">Thomas DEDCOURTY</a>, dans le cadre d'un projet file rouge pour l'<a href="https://iutnantes.univ-nantes.fr/">IUT de Nantes</a>
				</p>
			</div>
		</div>
	);
};

export default About;