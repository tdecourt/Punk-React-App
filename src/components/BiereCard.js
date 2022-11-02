import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Styles/BiereCard.css";

const BiereCard = (biere) => {
	biere = biere.biere;
	const showedField = [
		biere.volume.value + ' ' + biere.volume.unit,
		biere.abv + '%',
		biere.tagline
	];

	return (
		<NavLink to={'/biere/' + biere.id} className="card mb-3 overflow-hidden biere-card text-decoration-none text-reset">
			<div className="row g-0">
				<div className="col-4 text-center p-1">
					<img src={biere.image_url} className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="col-8 position-relative">
					<div className="card-body overflow-auto">
						<h5 className="card-title">{biere.name}</h5>
						<ul className="list-group list-group-flush">
							{
								showedField
									.map((field, index) => <li key={index} className="list-group-item">{field}</li>)
							}
						</ul>
					</div>
				</div>
			</div>
		</NavLink>
	);
};

export default BiereCard;