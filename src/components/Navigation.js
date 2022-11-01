import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
			<div className="container-fluid">
				<NavLink className="navbar-brand" href="#">
					<img src="./logo.png" alt="Logo" width="24" height="24" className="d-inline-block align-text-top" />
				</NavLink>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="/" className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}>
								Bières
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/about" className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}>
								A propos
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;